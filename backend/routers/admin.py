"""
Admin router for dataset/use-case onboarding.
"""
from __future__ import annotations

import json
import re
import shutil
import tempfile
import threading
import uuid
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Optional

from fastapi import APIRouter, File, Form, HTTPException, UploadFile
from pydantic import BaseModel, Field

from ..db import db_enabled, get_conn
from ..security import (
    ALL_ROLES,
    Principal,
    can_access_family,
    current_principal,
)

router = APIRouter()
_LOCAL_DATASETS_PATH = Path("/tmp/doculens_datasets.json")
_LOCAL_DOCUMENTS_PATH = Path("/tmp/doculens_dataset_documents.json")
_LOCAL_DATASETS_LOCK = threading.Lock()
_LOCAL_DOCUMENTS_LOCK = threading.Lock()


class CreateDatasetReq(BaseModel):
    supplier: str
    family_name: str
    domain: str = "generic"
    description: str = ""
    use_case_type: str = "comparison"
    expected_formats: list[str] = Field(default_factory=lambda: ["pdf", "docx"])
    sample_plan: str = ""
    onboarding_notes: str = ""
    learning_mode: str = "deterministic_first"
    allowed_roles: list[str] = Field(default_factory=list)


class UpdateDatasetReq(BaseModel):
    supplier: Optional[str] = None
    family_name: Optional[str] = None
    domain: Optional[str] = None
    description: Optional[str] = None
    use_case_type: Optional[str] = None
    expected_formats: Optional[list[str]] = None
    sample_plan: Optional[str] = None
    onboarding_notes: Optional[str] = None
    learning_mode: Optional[str] = None
    allowed_roles: Optional[list[str]] = None
    prompt_guidelines: Optional[str] = None
    column_rules: Optional[list[dict[str, str]]] = None


def _check_admin(principal: Principal) -> None:
    if not (principal.is_platform_admin or principal.is_business_unit_admin):
        raise HTTPException(403, "Platform Admin or Business Unit Admin role required.")


def _db_required() -> None:
    if not db_enabled():
        raise HTTPException(503, "Database is not configured.")


def _ensure_dataset_schema() -> None:
    if not db_enabled():
        return
    with get_conn() as conn:
        conn.execute('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS document_family (
                id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                tenant_id        TEXT NOT NULL DEFAULT 'default',
                business_unit_id TEXT NOT NULL DEFAULT 'default',
                supplier         TEXT NOT NULL,
                family_name      TEXT NOT NULL,
                domain           TEXT NOT NULL DEFAULT 'generic',
                prompt_profile   JSONB NOT NULL DEFAULT '{}'::jsonb,
                ui_profile       JSONB NOT NULL DEFAULT '{}'::jsonb,
                template_profile JSONB NOT NULL DEFAULT '{}'::jsonb,
                template_version INT NOT NULL DEFAULT 1,
                created_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
                updated_at       TIMESTAMPTZ NOT NULL DEFAULT now()
            )
            """
        )
        for statement in (
            "ALTER TABLE document_family ADD COLUMN IF NOT EXISTS tenant_id TEXT NOT NULL DEFAULT 'default'",
            "ALTER TABLE document_family ADD COLUMN IF NOT EXISTS business_unit_id TEXT NOT NULL DEFAULT 'default'",
            "ALTER TABLE document_family ADD COLUMN IF NOT EXISTS domain TEXT NOT NULL DEFAULT 'generic'",
            "ALTER TABLE document_family ADD COLUMN IF NOT EXISTS prompt_profile JSONB NOT NULL DEFAULT '{}'::jsonb",
            "ALTER TABLE document_family ADD COLUMN IF NOT EXISTS ui_profile JSONB NOT NULL DEFAULT '{}'::jsonb",
            "ALTER TABLE document_family ADD COLUMN IF NOT EXISTS template_profile JSONB NOT NULL DEFAULT '{}'::jsonb",
            "ALTER TABLE document_family ADD COLUMN IF NOT EXISTS template_version INT NOT NULL DEFAULT 1",
            "ALTER TABLE document_family ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ NOT NULL DEFAULT now()",
            "ALTER TABLE document_family ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ NOT NULL DEFAULT now()",
        ):
            conn.execute(statement)
        conn.execute(
            """
            CREATE UNIQUE INDEX IF NOT EXISTS ux_document_family_scope_name
            ON document_family (tenant_id, business_unit_id, supplier, family_name)
            """
        )
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS spec_document (
                id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                tenant_id           TEXT NOT NULL DEFAULT 'default',
                business_unit_id    TEXT NOT NULL DEFAULT 'default',
                family_id           UUID NOT NULL REFERENCES document_family(id),
                label               TEXT NOT NULL,
                version_tag         TEXT,
                raw_pdf_blob_uri    TEXT NOT NULL DEFAULT '',
                page_images_prefix  TEXT NOT NULL DEFAULT '',
                page_count          INT NOT NULL DEFAULT 0,
                sha256              CHAR(64) NOT NULL,
                extracted_at        TIMESTAMPTZ,
                coverage_pct        NUMERIC(5,2),
                uploaded_by         TEXT,
                uploaded_at         TIMESTAMPTZ NOT NULL DEFAULT now()
            )
            """
        )
        conn.execute("CREATE UNIQUE INDEX IF NOT EXISTS ux_spec_document_family_sha ON spec_document (family_id, sha256)")
        conn.execute("CREATE INDEX IF NOT EXISTS idx_spec_document_family ON spec_document (family_id)")


def _utc_now() -> str:
    return datetime.now(timezone.utc).isoformat()


def _clean_list(values: list[str] | None, allowed: set[str], fallback: list[str]) -> list[str]:
    cleaned = []
    for value in values or []:
        item = str(value or "").strip().lower()
        if item in allowed and item not in cleaned:
            cleaned.append(item)
    return cleaned or fallback


def _clean_use_case_type(value: str | None) -> str:
    item = str(value or "comparison").strip().lower()
    return item if item in {"comparison", "extraction"} else "comparison"


def _clean_learning_mode(value: str | None) -> str:
    item = str(value or "deterministic_first").strip().lower()
    allowed = {"deterministic_first", "ai_assisted_bootstrap", "manual_profile"}
    return item if item in allowed else "deterministic_first"


def _read_json_file(path: Path, lock: threading.Lock) -> list[dict[str, Any]]:
    with lock:
        if not path.exists():
            return []
        try:
            data = json.loads(path.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            return []
    return data if isinstance(data, list) else []


def _write_json_file(path: Path, lock: threading.Lock, data: list[dict[str, Any]]) -> None:
    with lock:
        path.parent.mkdir(parents=True, exist_ok=True)
        tmp = path.with_suffix(f"{path.suffix}.{uuid.uuid4().hex}.tmp")
        tmp.write_text(json.dumps(data, ensure_ascii=False, indent=2, default=str), encoding="utf-8")
        tmp.replace(path)


def _read_local_datasets() -> list[dict[str, Any]]:
    return _read_json_file(_LOCAL_DATASETS_PATH, _LOCAL_DATASETS_LOCK)


def _write_local_datasets(datasets: list[dict[str, Any]]) -> None:
    _write_json_file(_LOCAL_DATASETS_PATH, _LOCAL_DATASETS_LOCK, datasets)


def _read_local_documents() -> list[dict[str, Any]]:
    return _read_json_file(_LOCAL_DOCUMENTS_PATH, _LOCAL_DOCUMENTS_LOCK)


def _write_local_documents(documents: list[dict[str, Any]]) -> None:
    _write_json_file(_LOCAL_DOCUMENTS_PATH, _LOCAL_DOCUMENTS_LOCK, documents)


def _local_dataset_record(
    req: CreateDatasetReq,
    principal: Principal,
    *,
    dataset_id: Optional[str] = None,
) -> dict[str, Any]:
    now = _utc_now()
    prompt_profile = {
        "description": req.description.strip(),
        "onboarding_notes": req.onboarding_notes.strip(),
        "guidelines": "",
        "summarization_directives": "",
        "extraction_directives": "",
    }
    ui_profile = {
        "allowed_roles": req.allowed_roles,
        "use_case_type": _clean_use_case_type(req.use_case_type),
        "expected_formats": _clean_list(
            req.expected_formats,
            {"pdf", "docx", "xlsx", "xls", "xlsm", "xlsb", "csv", "tsv", "image"},
            ["pdf", "docx"],
        ),
        "sample_plan": req.sample_plan.strip(),
        "learning_mode": _clean_learning_mode(req.learning_mode),
    }
    return {
        "id": dataset_id or str(uuid.uuid4()),
        "tenant_id": principal.tenant_id,
        "business_unit_id": principal.business_unit_id if principal.is_business_unit_admin else "default",
        "supplier": req.supplier.strip(),
        "family_name": req.family_name.strip(),
        "domain": req.domain.strip() or "generic",
        "prompt_profile": prompt_profile,
        "ui_profile": ui_profile,
        "template_profile": {"sample_documents": [], "sample_profile": {}},
        "created_at": now,
        "updated_at": now,
        "storage": "local_json",
    }


def _find_local_dataset(family_id: str) -> Optional[dict[str, Any]]:
    for dataset in _read_local_datasets():
        if str(dataset.get("id")) == str(family_id):
            return dataset
    return None


def _local_duplicate(
    datasets: list[dict[str, Any]],
    *,
    tenant_id: str,
    business_unit_id: str,
    supplier: str,
    family_name: str,
    exclude_id: Optional[str] = None,
) -> bool:
    return any(
        str(item.get("id")) != str(exclude_id)
        and str(item.get("tenant_id") or "default") == tenant_id
        and str(item.get("business_unit_id") or "default") == business_unit_id
        and str(item.get("supplier") or "").strip().lower() == supplier.strip().lower()
        and str(item.get("family_name") or "").strip().lower() == family_name.strip().lower()
        for item in datasets
    )


def _json_dict(value: Any) -> dict[str, Any]:
    if isinstance(value, dict):
        return value
    if isinstance(value, str) and value.strip():
        try:
            parsed = json.loads(value)
            return parsed if isinstance(parsed, dict) else {}
        except json.JSONDecodeError:
            return {}
    return {}


def _dataset_record(row: dict[str, Any]) -> dict[str, Any]:
    family = dict(row)
    prompt_profile = _json_dict(family.get("prompt_profile"))
    ui_profile = _json_dict(family.get("ui_profile"))
    template_profile = _json_dict(family.get("template_profile"))
    family["prompt_profile"] = prompt_profile
    family["ui_profile"] = ui_profile
    family["template_profile"] = template_profile
    family["description"] = prompt_profile.get("description") or ""
    family["onboarding_notes"] = prompt_profile.get("onboarding_notes") or ""
    family["prompt_guidelines"] = (
        prompt_profile.get("guidelines")
        or prompt_profile.get("summarization_directives")
        or ""
    )
    family["allowed_roles"] = ui_profile.get("allowed_roles") or []
    family["use_case_type"] = ui_profile.get("use_case_type") or "comparison"
    family["expected_formats"] = ui_profile.get("expected_formats") or ["pdf", "docx"]
    family["sample_plan"] = ui_profile.get("sample_plan") or ""
    family["learning_mode"] = ui_profile.get("learning_mode") or "deterministic_first"
    return family


def _validate_roles(roles: list[str]) -> None:
    for role in roles:
        if role not in ALL_ROLES:
            raise HTTPException(400, f"Invalid role: {role}")


def _upload_has_file(upload: Optional[UploadFile]) -> bool:
    return bool(upload and upload.filename)


def _collect_sample_uploads(
    baseline: Optional[UploadFile],
    revised: Optional[UploadFile],
    variations: Optional[list[UploadFile]],
) -> list[tuple[str, UploadFile]]:
    uploads: list[tuple[str, UploadFile]] = []
    if _upload_has_file(baseline):
        uploads.append(("baseline", baseline))
    if _upload_has_file(revised):
        uploads.append(("revised", revised))
    for variation in variations or []:
        if _upload_has_file(variation):
            uploads.append(("variation", variation))
    return uploads


def _format_from_filename(filename: str | None) -> str:
    suffix = Path(filename or "").suffix.lower()
    if suffix == ".pdf":
        return "pdf"
    if suffix in {".doc", ".docx"}:
        return "docx"
    if suffix in {".xls", ".xlsx", ".xlsm", ".xlsb"}:
        return "xlsx"
    if suffix in {".csv", ".tsv"}:
        return "csv"
    if suffix in {".png", ".jpg", ".jpeg", ".tif", ".tiff", ".bmp", ".webp"}:
        return "image"
    return "pdf"


def _infer_supplier_family_from_uploads(uploads: list[tuple[str, UploadFile]], notes: str = "") -> tuple[str, str]:
    stems = [Path(upload.filename or "").stem for _role, upload in uploads if upload.filename]
    joined = " ".join([*stems, notes])
    clean = re.sub(r"[_\-]+", " ", joined)
    clean = re.sub(r"\b(?:baseline|revised|revision|rev|sample|variation|layout|document|doc|final|draft)\b", " ", clean, flags=re.I)
    clean = re.sub(r"\b(?:19|20)\d{2}\b", " ", clean)
    words = [word for word in re.split(r"\s+", clean.strip()) if word]

    supplier = words[0] if words else "New"
    supplier = supplier[:1].upper() + supplier[1:]
    family_words = words[1:5] or ["Document", "Model"]
    family_name = " ".join(word[:1].upper() + word[1:] for word in family_words)
    return supplier, family_name


def _infer_domain_from_context(text: str) -> str:
    value = text.lower()
    if any(token in value for token in ("vehicle", "ford", "bronco", "pcb", "pcv", "model year", "part number", "supplier")):
        return "automotive"
    if any(token in value for token in ("contract", "clause", "legal", "agreement", "policy")):
        return "legal"
    if any(token in value for token in ("invoice", "finance", "cost", "price", "rate", "amount")):
        return "financial"
    if any(token in value for token in ("employee", "hr", "benefit", "payroll")):
        return "hr"
    if any(token in value for token in ("drawing", "engineering", "specification", "tolerance")):
        return "engineering"
    return "generic"


def _suggest_description(
    *,
    supplier: str,
    family_name: str,
    merged_profile: dict[str, Any],
    uploads: list[tuple[str, UploadFile]],
) -> str:
    sample_profile = _json_dict(merged_profile.get("sample_profile"))
    ai_profile = _json_dict(merged_profile.get("ai_reasoning_profile"))
    formats = ", ".join(sorted({_format_from_filename(upload.filename) for _role, upload in uploads}))
    complexity = ai_profile.get("complexity_rating") or "standard"
    page_count = sample_profile.get("average_pages") or sample_profile.get("max_pages") or 0
    return (
        f"{supplier} {family_name} document model using {len(uploads)} representative sample(s)"
        f" across {formats or 'supported'} formats. Average sample length is {page_count} pages;"
        f" detected structure complexity is {complexity}."
    )


def _suggest_sample_plan(merged_profile: dict[str, Any], uploads: list[tuple[str, UploadFile]]) -> str:
    roles = sorted({role for role, _upload in uploads})
    sample_profile = _json_dict(merged_profile.get("sample_profile"))
    min_pages = sample_profile.get("min_pages") or 0
    max_pages = sample_profile.get("max_pages") or 0
    return (
        f"Seeded with {', '.join(roles)} sample roles. Keep 3-5 additional variations for each new layout, "
        f"language pair, nested table style, or scanned source. Observed page range: {min_pages}-{max_pages}."
    )


def _suggest_onboarding_notes(merged_profile: dict[str, Any], notes: str) -> str:
    ai_profile = _json_dict(merged_profile.get("ai_reasoning_profile"))
    tips = [str(tip) for tip in ai_profile.get("enhancement_tips") or [] if str(tip).strip()]
    reasons = [str(reason) for reason in ai_profile.get("complexity_reasons") or [] if str(reason).strip()]
    parts = []
    if notes.strip():
        parts.append(notes.strip())
    if reasons:
        parts.append("Detected structure: " + "; ".join(reasons[:4]))
    if tips:
        parts.append("Recommended extraction focus: " + "; ".join(tips[:4]))
    return "\n".join(parts)


def _aggregate_profile_usage(profiles: list[dict[str, Any]]) -> dict[str, Any]:
    usage = {
        "calls": 0,
        "prompt_tokens": 0,
        "completion_tokens": 0,
        "total_tokens": 0,
        "estimated_prompt_tokens": 0,
        "prompt_chars": 0,
        "operations": [],
    }
    for profile in profiles:
        ai_profile = _json_dict(profile.get("ai_reasoning_profile"))
        item = _json_dict(ai_profile.get("usage"))
        if not item:
            continue
        usage["calls"] += int(item.get("calls") or 0)
        usage["prompt_tokens"] += int(item.get("prompt_tokens") or 0)
        usage["completion_tokens"] += int(item.get("completion_tokens") or 0)
        usage["total_tokens"] += int(item.get("total_tokens") or 0)
        usage["estimated_prompt_tokens"] += int(item.get("estimated_prompt_tokens") or 0)
        usage["prompt_chars"] += int(item.get("prompt_chars") or 0)
        for operation in item.get("operations") or []:
            usage["operations"].append(operation)
    return usage


def _profile_dict(profile: Any) -> dict[str, Any]:
    if hasattr(profile, "model_dump"):
        return profile.model_dump()
    if hasattr(profile, "dict"):
        return profile.dict()
    return _json_dict(profile)


def _merge_unique_rules(existing: list[Any], learned: list[Any], key: str) -> list[Any]:
    out = []
    seen = set()
    for item in [*(existing or []), *(learned or [])]:
        if not isinstance(item, dict):
            continue
        identity = str(item.get(key) or item).strip().lower()
        if identity in seen:
            continue
        seen.add(identity)
        out.append(item)
    return out


def _merge_learned_profile(
    existing_profile: dict[str, Any],
    learned_profiles: list[dict[str, Any]],
    sample_documents: list[dict[str, Any]],
    *,
    notes: str = "",
    use_llm: bool = False,
) -> dict[str, Any]:
    merged = dict(existing_profile or {})
    existing_samples = list(merged.get("sample_documents") or [])
    merged["sample_documents"] = [*existing_samples, *sample_documents]

    # Initialize lists to aggregate AI reasoning profiles
    ai_reasons = []
    enhancements = []
    labels = set()
    complexity = "low"
    confidence = 1.0
    resolutions = {}
    usage = {
        "calls": 0,
        "prompt_tokens": 0,
        "completion_tokens": 0,
        "total_tokens": 0,
        "estimated_prompt_tokens": 0,
        "prompt_chars": 0,
        "operations": [],
    }

    for profile in learned_profiles:
        if not isinstance(profile, dict):
            continue
        for key, value in profile.items():
            if key in {"column_rules", "stable_key_patterns", "ai_reasoning_profile"}:
                continue
            if key not in merged or merged.get(key) in (None, "", [], {}):
                merged[key] = value

        merged["column_rules"] = _merge_unique_rules(
            list(merged.get("column_rules") or []),
            list(profile.get("column_rules") or []),
            "pattern",
        )
        merged["stable_key_patterns"] = _merge_unique_rules(
            list(merged.get("stable_key_patterns") or []),
            list(profile.get("stable_key_patterns") or []),
            "regex",
        )

        # Aggregate AI reasoning fields if present
        ai_res = profile.get("ai_reasoning_profile") or {}
        if ai_res:
            ai_reasons.extend(ai_res.get("complexity_reasons") or [])
            enhancements.extend(ai_res.get("enhancement_tips") or [])
            labels.update(ai_res.get("suggested_data_labels") or [])
            
            comp = str(ai_res.get("complexity_rating") or "low").lower()
            if comp == "high" or (comp == "medium" and complexity == "low"):
                complexity = comp
            
            try:
                conf = float(ai_res.get("confidence_score") or 1.0)
            except (ValueError, TypeError):
                conf = 1.0
            confidence = min(confidence, conf)
            
            res = ai_res.get("learned_page_resolutions") or {}
            if res:
                resolutions.update(res)
            item = _json_dict(ai_res.get("usage"))
            if item:
                usage["calls"] += int(item.get("calls") or 0)
                usage["prompt_tokens"] += int(item.get("prompt_tokens") or 0)
                usage["completion_tokens"] += int(item.get("completion_tokens") or 0)
                usage["total_tokens"] += int(item.get("total_tokens") or 0)
                usage["estimated_prompt_tokens"] += int(item.get("estimated_prompt_tokens") or 0)
                usage["prompt_chars"] += int(item.get("prompt_chars") or 0)
                usage["operations"].extend(item.get("operations") or [])

    # Clean duplicates
    ai_reasons = list(dict.fromkeys(ai_reasons))
    enhancements = list(dict.fromkeys(enhancements))
    labels = sorted(list(labels))

    merged["ai_reasoning_profile"] = {
        "complexity_rating": complexity,
        "confidence_score": round(confidence, 2),
        "complexity_reasons": ai_reasons,
        "suggested_data_labels": labels,
        "enhancement_tips": enhancements,
        "learned_page_resolutions": resolutions,
        "usage": usage,
    }

    pages = [int(doc.get("page_count") or 0) for doc in merged["sample_documents"] if int(doc.get("page_count") or 0) > 0]
    roles = sorted({str(doc.get("sample_role") or "variation") for doc in merged["sample_documents"]})
    merged["sample_profile"] = {
        "sample_count": len(merged["sample_documents"]),
        "roles_present": roles,
        "average_pages": round(sum(pages) / len(pages), 2) if pages else 0,
        "min_pages": min(pages) if pages else 0,
        "max_pages": max(pages) if pages else 0,
        "last_bootstrap_notes": notes.strip(),
        "last_bootstrap_used_ai": bool(use_llm),
        "last_bootstrap_at": _utc_now(),
    }
    return merged


async def _learn_uploaded_sample(
    *,
    upload: UploadFile,
    sample_role: str,
    family_id: str,
    family: dict[str, Any],
    principal: Principal,
    work_dir: Path,
    index: int,
    notes: str,
    use_llm: bool,
    model_name: str | None = None,
) -> tuple[dict[str, Any], dict[str, Any], Path, int]:
    from ..ingestion import normalize_to_pdf, save_upload_to_source
    from ..extraction.pdf_extractor import render_pages
    from ..schema_discovery import discover

    source_path = save_upload_to_source(upload, work_dir, f"{index}_{sample_role}")

    converted_dir = work_dir / "converted"
    converted_dir.mkdir(parents=True, exist_ok=True)
    pdf_path = normalize_to_pdf(source_path, converted_dir / f"{sample_role}_{index}")
    page_imgs = render_pages(str(pdf_path), str(work_dir / f"pages_{sample_role}_{index}"))
    profile = discover(str(pdf_path), family["supplier"], family["family_name"], use_llm=use_llm, model_name=model_name)
    profile_dict = _profile_dict(profile)

    document = {
        "id": str(uuid.uuid4()),
        "family_id": str(family_id),
        "sample_role": sample_role,
        "label": Path(upload.filename or f"sample_{index}").stem,
        "filename": upload.filename,
        "page_count": len(page_imgs),
        "notes": notes.strip(),
        "use_llm": bool(use_llm),
        "uploaded_by": principal.user_id,
        "uploaded_at": _utc_now(),
    }
    return profile_dict, document, pdf_path, len(page_imgs)


def resolve_dataset_for_principal(family_id: str, principal: Optional[Principal] = None) -> dict[str, Any]:
    principal = principal or current_principal()
    if not family_id:
        raise HTTPException(400, "A use case must be selected before document processing.")

    if not db_enabled():
        dataset = _find_local_dataset(family_id)
        if not dataset:
            raise HTTPException(404, "Selected use case was not found.")
        dataset = _dataset_record(dataset)
        if not can_access_family(principal, dataset):
            raise HTTPException(403, "You do not have access to the selected use case.")
        return dataset

    _ensure_dataset_schema()
    family_uuid = _family_uuid(family_id)
    with get_conn() as conn:
        row = conn.execute(
            """
            SELECT id, tenant_id, business_unit_id, supplier, family_name, domain,
                   prompt_profile, ui_profile, template_profile, created_at, updated_at
            FROM document_family
            WHERE id = %s
            """,
            (family_uuid,),
        ).fetchone()
    if not row:
        raise HTTPException(404, "Selected use case was not found.")
    dataset = _dataset_record(row)
    if not can_access_family(principal, dataset):
        raise HTTPException(403, "You do not have access to the selected use case.")
    return dataset


@router.get("/datasets")
@router.get("/api/datasets")
def list_accessible_datasets():
    principal = current_principal()
    if not db_enabled():
        datasets = []
        for item in _read_local_datasets():
            dataset = _dataset_record(item)
            if can_access_family(principal, dataset):
                datasets.append(dataset)
        datasets.sort(key=lambda item: (str(item.get("supplier") or ""), str(item.get("family_name") or "")))
        return {"datasets": datasets}

    _ensure_dataset_schema()
    with get_conn() as conn:
        rows = conn.execute(
            """
            SELECT id, tenant_id, business_unit_id, supplier, family_name, domain,
                   prompt_profile, ui_profile, template_profile, created_at, updated_at
            FROM document_family
            ORDER BY supplier ASC, family_name ASC
            """
        ).fetchall()

    datasets = []
    for row in rows:
        dataset = _dataset_record(row)
        if can_access_family(principal, dataset):
            datasets.append(dataset)
    return {"datasets": datasets}


@router.get("/admin/datasets")
@router.get("/api/admin/datasets")
def list_admin_datasets():
    principal = current_principal()
    _check_admin(principal)
    if not db_enabled():
        datasets = []
        for item in _read_local_datasets():
            dataset = _dataset_record(item)
            if principal.is_platform_admin or can_access_family(principal, dataset):
                datasets.append(dataset)
        datasets.sort(key=lambda item: str(item.get("updated_at") or ""), reverse=True)
        return {"datasets": datasets}

    _ensure_dataset_schema()
    with get_conn() as conn:
        if principal.is_platform_admin:
            rows = conn.execute(
                """
                SELECT id, tenant_id, business_unit_id, supplier, family_name, domain,
                       prompt_profile, ui_profile, template_profile, created_at, updated_at
                FROM document_family
                ORDER BY updated_at DESC
                """
            ).fetchall()
        else:
            rows = conn.execute(
                """
                SELECT id, tenant_id, business_unit_id, supplier, family_name, domain,
                       prompt_profile, ui_profile, template_profile, created_at, updated_at
                FROM document_family
                WHERE tenant_id = %s AND business_unit_id = %s
                ORDER BY updated_at DESC
                """,
                (principal.tenant_id, principal.business_unit_id),
            ).fetchall()

    return {"datasets": [_dataset_record(row) for row in rows]}


@router.post("/admin/datasets")
@router.post("/api/admin/datasets")
def create_dataset(req: CreateDatasetReq):
    principal = current_principal()
    _check_admin(principal)
    _validate_roles(req.allowed_roles)

    supplier = req.supplier.strip()
    family_name = req.family_name.strip()
    if not supplier or not family_name:
        raise HTTPException(400, "Supplier and family name are required.")

    if not db_enabled():
        tenant_id = principal.tenant_id
        business_unit_id = principal.business_unit_id if principal.is_business_unit_admin else "default"
        datasets = _read_local_datasets()
        if _local_duplicate(
            datasets,
            tenant_id=tenant_id,
            business_unit_id=business_unit_id,
            supplier=supplier,
            family_name=family_name,
        ):
            raise HTTPException(400, "A use case with this supplier and family already exists.")
        dataset = _local_dataset_record(req, principal)
        datasets.append(dataset)
        _write_local_datasets(datasets)
        return {"status": "success", "id": str(dataset["id"]), "storage": "local_json"}

    _ensure_dataset_schema()
    prompt_profile = {
        "description": req.description.strip(),
        "onboarding_notes": req.onboarding_notes.strip(),
        "guidelines": "",
        "summarization_directives": "",
        "extraction_directives": "",
    }
    ui_profile = {
        "allowed_roles": req.allowed_roles,
        "use_case_type": _clean_use_case_type(req.use_case_type),
        "expected_formats": _clean_list(
            req.expected_formats,
            {"pdf", "docx", "xlsx", "xls", "xlsm", "xlsb", "csv", "tsv", "image"},
            ["pdf", "docx"],
        ),
        "sample_plan": req.sample_plan.strip(),
        "learning_mode": _clean_learning_mode(req.learning_mode),
    }
    tenant_id = principal.tenant_id
    business_unit_id = principal.business_unit_id if principal.is_business_unit_admin else "default"

    with get_conn() as conn:
        existing = conn.execute(
            """
            SELECT id
            FROM document_family
            WHERE tenant_id = %s
              AND business_unit_id = %s
              AND lower(supplier) = lower(%s)
              AND lower(family_name) = lower(%s)
            """,
            (tenant_id, business_unit_id, supplier, family_name),
        ).fetchone()
        if existing:
            raise HTTPException(400, "A use case with this supplier and family already exists.")

        row = conn.execute(
            """
            INSERT INTO document_family (
                tenant_id, business_unit_id, supplier, family_name, domain,
                prompt_profile, ui_profile, template_profile
            )
            VALUES (%s, %s, %s, %s, %s, %s::jsonb, %s::jsonb, %s::jsonb)
            RETURNING id
            """,
            (
                tenant_id,
                business_unit_id,
                supplier,
                family_name,
                req.domain.strip() or "generic",
                json.dumps(prompt_profile, ensure_ascii=False),
                json.dumps(ui_profile, ensure_ascii=False),
                json.dumps({"sample_documents": [], "sample_profile": {}}, ensure_ascii=False),
            ),
        ).fetchone()

    return {"status": "success", "id": str(row["id"])}


@router.post("/admin/analyze-use-case-samples")
@router.post("/admin/datasets/analyze-samples")
@router.post("/api/admin/analyze-use-case-samples")
@router.post("/api/admin/datasets/analyze-samples")
async def analyze_use_case_samples(
    baseline: Optional[UploadFile] = File(None),
    revised: Optional[UploadFile] = File(None),
    variations: Optional[list[UploadFile]] = File(None),
    supplier: str = Form(""),
    family_name: str = Form(""),
    domain: str = Form("generic"),
    use_case_type: str = Form("comparison"),
    expected_formats: str = Form(""),
    notes: str = Form(""),
    use_llm: bool = Form(True),
    model_name: str = Form(""),
):
    principal = current_principal()
    _check_admin(principal)
    uploads = _collect_sample_uploads(baseline, revised, variations)
    if not uploads:
        raise HTTPException(400, "Attach at least one representative sample before running analysis.")

    inferred_supplier, inferred_family_name = _infer_supplier_family_from_uploads(uploads, notes)
    supplier = supplier.strip() or inferred_supplier
    family_name = family_name.strip() or inferred_family_name
    requested_formats = [
        item.strip().lower()
        for item in re.split(r"[,|]", expected_formats or "")
        if item.strip()
    ]
    family = {
        "id": "analysis",
        "supplier": supplier,
        "family_name": family_name,
    }
    work_dir = Path(tempfile.mkdtemp(prefix="dataset_sample_analysis_"))
    try:
        learned_profiles = []
        sample_documents = []
        for idx, (sample_role, upload) in enumerate(uploads, start=1):
            profile_dict, document, _pdf_path, _page_count = await _learn_uploaded_sample(
                upload=upload,
                sample_role=sample_role,
                family_id="analysis",
                family=family,
                principal=principal,
                work_dir=work_dir,
                index=idx,
                notes=notes,
                use_llm=use_llm,
                model_name=model_name,
            )
            learned_profiles.append(profile_dict)
            sample_documents.append(document)

        merged_profile = _merge_learned_profile(
            {},
            learned_profiles,
            sample_documents,
            notes=notes,
            use_llm=use_llm,
        )
        filenames = " ".join(str(upload.filename or "") for _role, upload in uploads)
        context = f"{supplier} {family_name} {filenames} {notes}"
        detected_formats = sorted({_format_from_filename(upload.filename) for _role, upload in uploads})
        final_formats = _clean_list(
            [*requested_formats, *detected_formats],
            {"pdf", "docx", "xlsx", "xls", "xlsm", "xlsb", "csv", "tsv", "image"},
            detected_formats or ["pdf", "docx"],
        )
        has_pair = any(role == "baseline" for role, _upload in uploads) and any(role == "revised" for role, _upload in uploads)
        suggested_dataset = {
            "supplier": supplier,
            "family_name": family_name,
            "domain": domain.strip() or _infer_domain_from_context(context),
            "description": _suggest_description(
                supplier=supplier,
                family_name=family_name,
                merged_profile=merged_profile,
                uploads=uploads,
            ),
            "use_case_type": _clean_use_case_type(use_case_type) if use_case_type else ("comparison" if has_pair else "extraction"),
            "expected_formats": final_formats,
            "sample_plan": _suggest_sample_plan(merged_profile, uploads),
            "onboarding_notes": _suggest_onboarding_notes(merged_profile, notes),
            "learning_mode": "ai_assisted_bootstrap" if use_llm else "deterministic_first",
            "allowed_roles": [],
        }
        usage = _aggregate_profile_usage(learned_profiles)
        return {
            "status": "success",
            "suggested_dataset": suggested_dataset,
            "template_profile": merged_profile,
            "documents": sample_documents,
            "analysis": {**_json_dict(merged_profile.get("ai_reasoning_profile")), "usage": usage},
            "used_ai": bool(use_llm),
            "selected_model": model_name.strip() if use_llm and model_name.strip() else "",
            "usage": usage,
        }
    finally:
        shutil.rmtree(work_dir, ignore_errors=True)


@router.get("/admin/datasets/{family_id}")
@router.get("/api/admin/datasets/{family_id}")
def get_dataset(family_id: str):
    principal = current_principal()
    _check_admin(principal)
    if not db_enabled():
        dataset = _find_local_dataset(family_id)
        if not dataset:
            raise HTTPException(404, "Dataset not found.")
        dataset = _dataset_record(dataset)
        if not can_access_family(principal, dataset):
            raise HTTPException(403, "Access denied to this dataset.")
        return dataset

    _ensure_dataset_schema()
    family_uuid = _family_uuid(family_id)

    with get_conn() as conn:
        row = conn.execute(
            """
            SELECT id, tenant_id, business_unit_id, supplier, family_name, domain,
                   prompt_profile, ui_profile, template_profile, created_at, updated_at
            FROM document_family
            WHERE id = %s
            """,
            (family_uuid,),
        ).fetchone()

    if not row:
        raise HTTPException(404, "Dataset not found.")
    dataset = _dataset_record(row)
    if not can_access_family(principal, dataset):
        raise HTTPException(403, "Access denied to this dataset.")
    return dataset


@router.put("/admin/datasets/{family_id}")
@router.put("/api/admin/datasets/{family_id}")
def update_dataset(family_id: str, req: UpdateDatasetReq):
    principal = current_principal()
    _check_admin(principal)
    if not db_enabled():
        datasets = _read_local_datasets()
        index = next((idx for idx, item in enumerate(datasets) if str(item.get("id")) == str(family_id)), None)
        if index is None:
            raise HTTPException(404, "Dataset not found.")

        dataset = _dataset_record(datasets[index])
        if not can_access_family(principal, dataset):
            raise HTTPException(403, "Access denied to this dataset.")

        prompt_profile = dataset["prompt_profile"]
        ui_profile = dataset["ui_profile"]
        template_profile = dataset["template_profile"]
        supplier = req.supplier.strip() if req.supplier is not None else dataset["supplier"]
        family_name = req.family_name.strip() if req.family_name is not None else dataset["family_name"]
        domain = req.domain.strip() if req.domain is not None else dataset["domain"]
        if not supplier or not family_name:
            raise HTTPException(400, "Supplier and family name are required.")
        if _local_duplicate(
            datasets,
            tenant_id=str(dataset.get("tenant_id") or "default"),
            business_unit_id=str(dataset.get("business_unit_id") or "default"),
            supplier=supplier,
            family_name=family_name,
            exclude_id=family_id,
        ):
            raise HTTPException(400, "A use case with this supplier and family already exists.")

        if req.description is not None:
            prompt_profile["description"] = req.description.strip()
        if req.onboarding_notes is not None:
            prompt_profile["onboarding_notes"] = req.onboarding_notes.strip()
        if req.prompt_guidelines is not None:
            prompt_profile["guidelines"] = req.prompt_guidelines.strip()
            prompt_profile["summarization_directives"] = req.prompt_guidelines.strip()
            prompt_profile["extraction_directives"] = req.prompt_guidelines.strip()
        if req.use_case_type is not None:
            ui_profile["use_case_type"] = _clean_use_case_type(req.use_case_type)
        if req.expected_formats is not None:
            ui_profile["expected_formats"] = _clean_list(
                req.expected_formats,
                {"pdf", "docx", "xlsx", "xls", "xlsm", "xlsb", "csv", "tsv", "image"},
                ["pdf", "docx"],
            )
        if req.sample_plan is not None:
            ui_profile["sample_plan"] = req.sample_plan.strip()
        if req.learning_mode is not None:
            ui_profile["learning_mode"] = _clean_learning_mode(req.learning_mode)
        if req.allowed_roles is not None:
            _validate_roles(req.allowed_roles)
            ui_profile["allowed_roles"] = req.allowed_roles
        if req.column_rules is not None:
            template_profile["column_rules"] = req.column_rules

        datasets[index].update(
            {
                "supplier": supplier,
                "family_name": family_name,
                "domain": domain or "generic",
                "prompt_profile": prompt_profile,
                "ui_profile": ui_profile,
                "template_profile": template_profile,
                "updated_at": _utc_now(),
            }
        )
        _write_local_datasets(datasets)
        return {"status": "success", "storage": "local_json"}

    _ensure_dataset_schema()
    family_uuid = _family_uuid(family_id)

    with get_conn() as conn:
        row = conn.execute(
            """
            SELECT id, tenant_id, business_unit_id, supplier, family_name, domain,
                   prompt_profile, ui_profile, template_profile
            FROM document_family
            WHERE id = %s
            """,
            (family_uuid,),
        ).fetchone()
        if not row:
            raise HTTPException(404, "Dataset not found.")

        dataset = _dataset_record(row)
        if not can_access_family(principal, dataset):
            raise HTTPException(403, "Access denied to this dataset.")

        prompt_profile = dataset["prompt_profile"]
        ui_profile = dataset["ui_profile"]
        template_profile = dataset["template_profile"]

        supplier = req.supplier.strip() if req.supplier is not None else dataset["supplier"]
        family_name = req.family_name.strip() if req.family_name is not None else dataset["family_name"]
        domain = req.domain.strip() if req.domain is not None else dataset["domain"]
        if not supplier or not family_name:
            raise HTTPException(400, "Supplier and family name are required.")

        duplicate = conn.execute(
            """
            SELECT id
            FROM document_family
            WHERE tenant_id = %s
              AND business_unit_id = %s
              AND lower(supplier) = lower(%s)
              AND lower(family_name) = lower(%s)
              AND id <> %s
            """,
            (
                dataset["tenant_id"],
                dataset["business_unit_id"],
                supplier,
                family_name,
                family_uuid,
            ),
        ).fetchone()
        if duplicate:
            raise HTTPException(400, "A use case with this supplier and family already exists.")

        if req.description is not None:
            prompt_profile["description"] = req.description.strip()
        if req.onboarding_notes is not None:
            prompt_profile["onboarding_notes"] = req.onboarding_notes.strip()
        if req.prompt_guidelines is not None:
            prompt_profile["guidelines"] = req.prompt_guidelines.strip()
            prompt_profile["summarization_directives"] = req.prompt_guidelines.strip()
            prompt_profile["extraction_directives"] = req.prompt_guidelines.strip()
        if req.use_case_type is not None:
            ui_profile["use_case_type"] = _clean_use_case_type(req.use_case_type)
        if req.expected_formats is not None:
            ui_profile["expected_formats"] = _clean_list(
                req.expected_formats,
                {"pdf", "docx", "xlsx", "xls", "xlsm", "xlsb", "csv", "tsv", "image"},
                ["pdf", "docx"],
            )
        if req.sample_plan is not None:
            ui_profile["sample_plan"] = req.sample_plan.strip()
        if req.learning_mode is not None:
            ui_profile["learning_mode"] = _clean_learning_mode(req.learning_mode)
        if req.allowed_roles is not None:
            _validate_roles(req.allowed_roles)
            ui_profile["allowed_roles"] = req.allowed_roles
        if req.column_rules is not None:
            template_profile["column_rules"] = req.column_rules

        conn.execute(
            """
            UPDATE document_family
            SET supplier = %s,
                family_name = %s,
                domain = %s,
                prompt_profile = %s::jsonb,
                ui_profile = %s::jsonb,
                template_profile = %s::jsonb,
                updated_at = now()
            WHERE id = %s
            """,
            (
                supplier,
                family_name,
                domain or "generic",
                json.dumps(prompt_profile, ensure_ascii=False),
                json.dumps(ui_profile, ensure_ascii=False),
                json.dumps(template_profile, ensure_ascii=False),
                family_uuid,
            ),
        )

    return {"status": "success"}


@router.delete("/admin/datasets/{family_id}")
@router.delete("/api/admin/datasets/{family_id}")
def delete_dataset(family_id: str):
    principal = current_principal()
    _check_admin(principal)
    if not db_enabled():
        datasets = _read_local_datasets()
        dataset = next((item for item in datasets if str(item.get("id")) == str(family_id)), None)
        if not dataset:
            raise HTTPException(404, "Dataset not found.")
        if not can_access_family(principal, _dataset_record(dataset)):
            raise HTTPException(403, "Access denied to this dataset.")
        _write_local_datasets([item for item in datasets if str(item.get("id")) != str(family_id)])
        _write_local_documents([doc for doc in _read_local_documents() if str(doc.get("family_id")) != str(family_id)])
        return {"status": "success", "storage": "local_json"}

    _ensure_dataset_schema()
    family_uuid = _family_uuid(family_id)

    with get_conn() as conn:
        row = conn.execute(
            "SELECT id, tenant_id, business_unit_id, ui_profile FROM document_family WHERE id = %s",
            (family_uuid,),
        ).fetchone()
        if not row:
            raise HTTPException(404, "Dataset not found.")
        if not can_access_family(principal, _dataset_record(row)):
            raise HTTPException(403, "Access denied to this dataset.")

        run_rows = conn.execute(
            "SELECT id FROM comparison_run WHERE family_id = %s",
            (family_uuid,),
        ).fetchall()
        run_ids = [run["id"] for run in run_rows]
        for run_id in run_ids:
            conn.execute("DELETE FROM nl_query_log WHERE run_id = %s", (run_id,))
            conn.execute("DELETE FROM table_comparison_result WHERE run_id = %s", (run_id,))
            conn.execute("DELETE FROM page_diff WHERE run_id = %s", (run_id,))
            conn.execute("DELETE FROM block_diff WHERE run_id = %s", (run_id,))
            conn.execute("DELETE FROM comparison_run WHERE id = %s", (run_id,))

        conn.execute("DELETE FROM comparison_run WHERE family_id = %s", (family_uuid,))
        conn.execute("DELETE FROM spec_document WHERE family_id = %s", (family_uuid,))
        conn.execute("DELETE FROM document_family WHERE id = %s", (family_uuid,))

    return {"status": "success"}


@router.post("/admin/datasets/{family_id}/samples")
@router.post("/api/admin/datasets/{family_id}/samples")
async def bootstrap_dataset_samples(
    family_id: str,
    baseline: Optional[UploadFile] = File(None),
    revised: Optional[UploadFile] = File(None),
    variations: Optional[list[UploadFile]] = File(None),
    notes: str = Form(""),
    use_llm: bool = Form(True),
):
    principal = current_principal()
    _check_admin(principal)

    uploads: list[tuple[str, UploadFile]] = []
    if _upload_has_file(baseline):
        uploads.append(("baseline", baseline))
    if _upload_has_file(revised):
        uploads.append(("revised", revised))
    for variation in variations or []:
        if _upload_has_file(variation):
            uploads.append(("variation", variation))
    if not uploads:
        raise HTTPException(400, "Upload at least one baseline, revised, or variation sample document.")

    if not db_enabled():
        datasets = _read_local_datasets()
        index = next((idx for idx, item in enumerate(datasets) if str(item.get("id")) == str(family_id)), None)
        if index is None:
            raise HTTPException(404, "Dataset not found.")
        family = _dataset_record(datasets[index])
        if not can_access_family(principal, family):
            raise HTTPException(403, "Access denied to this dataset.")

        work_dir = Path(tempfile.mkdtemp(prefix=f"dataset_samples_{family_id}_"))
        try:
            learned_profiles = []
            sample_documents = []
            for idx, (sample_role, upload) in enumerate(uploads, start=1):
                profile_dict, document, _pdf_path, _page_count = await _learn_uploaded_sample(
                    upload=upload,
                    sample_role=sample_role,
                    family_id=family_id,
                    family=family,
                    principal=principal,
                    work_dir=work_dir,
                    index=idx,
                    notes=notes,
                    use_llm=use_llm,
                )
                document["storage"] = "local_json"
                learned_profiles.append(profile_dict)
                sample_documents.append(document)

            existing_profile = _json_dict(family.get("template_profile"))
            datasets[index]["template_profile"] = _merge_learned_profile(
                existing_profile,
                learned_profiles,
                sample_documents,
                notes=notes,
                use_llm=use_llm,
            )
            datasets[index]["updated_at"] = _utc_now()
            _write_local_datasets(datasets)

            documents = _read_local_documents()
            documents = [*sample_documents, *documents]
            _write_local_documents(documents)

            return {
                "status": "success",
                "documents": sample_documents,
                "sample_profile": datasets[index]["template_profile"].get("sample_profile", {}),
                "storage": "local_json",
            }
        finally:
            shutil.rmtree(work_dir, ignore_errors=True)

    _ensure_dataset_schema()
    family_uuid = _family_uuid(family_id)
    with get_conn() as conn:
        family = conn.execute(
            """
            SELECT id, tenant_id, business_unit_id, supplier, family_name, template_profile, ui_profile
            FROM document_family
            WHERE id = %s
            """,
            (family_uuid,),
        ).fetchone()
    if not family:
        raise HTTPException(404, "Dataset not found.")
    dataset = _dataset_record(family)
    if not can_access_family(principal, dataset):
        raise HTTPException(403, "Access denied to this dataset.")

    work_dir = Path(tempfile.mkdtemp(prefix=f"dataset_samples_{family_id}_"))
    try:
        from ..persistence import _upsert_document

        learned_profiles = []
        sample_documents = []
        processed: list[tuple[dict[str, Any], Path, int]] = []
        for idx, (sample_role, upload) in enumerate(uploads, start=1):
            profile_dict, document, pdf_path, page_count = await _learn_uploaded_sample(
                upload=upload,
                sample_role=sample_role,
                family_id=family_id,
                family=dataset,
                principal=principal,
                work_dir=work_dir,
                index=idx,
                notes=notes,
                use_llm=use_llm,
            )
            learned_profiles.append(profile_dict)
            sample_documents.append(document)
            processed.append((document, pdf_path, page_count))

        existing_profile = _json_dict(dataset.get("template_profile"))
        merged_profile = _merge_learned_profile(
            existing_profile,
            learned_profiles,
            sample_documents,
            notes=notes,
            use_llm=use_llm,
        )

        with get_conn() as conn:
            conn.execute(
                """
                UPDATE document_family
                SET template_profile = %s::jsonb,
                    updated_at = now()
                WHERE id = %s
                """,
                (json.dumps(merged_profile, ensure_ascii=False, default=str), family_uuid),
            )
            for document, pdf_path, page_count in processed:
                doc_id = _upsert_document(
                    conn,
                    family_id=family_uuid,
                    tenant_id=family["tenant_id"],
                    business_unit_id=family["business_unit_id"],
                    uploaded_by=principal.user_id,
                    label=document["label"],
                    pdf_path=pdf_path,
                    page_count=page_count,
                    coverage=0.0,
                )
                conn.execute(
                    """
                    UPDATE spec_document
                    SET version_tag = %s
                    WHERE id = %s
                    """,
                    (document["sample_role"], doc_id),
                )
                document["id"] = str(doc_id)

        return {
            "status": "success",
            "documents": sample_documents,
            "sample_profile": merged_profile.get("sample_profile", {}),
        }
    finally:
        shutil.rmtree(work_dir, ignore_errors=True)


@router.post("/admin/datasets/{family_id}/bootstrap")
@router.post("/api/admin/datasets/{family_id}/bootstrap")
async def bootstrap_dataset(
    family_id: str,
    file: UploadFile = File(...),
    use_llm: bool = Form(True),
):
    principal = current_principal()
    _check_admin(principal)
    if not db_enabled():
        datasets = _read_local_datasets()
        index = next((idx for idx, item in enumerate(datasets) if str(item.get("id")) == str(family_id)), None)
        if index is None:
            raise HTTPException(404, "Dataset not found.")
        family = _dataset_record(datasets[index])
        if not can_access_family(principal, family):
            raise HTTPException(403, "Access denied to this dataset.")

        work_dir = Path(tempfile.mkdtemp(prefix=f"dataset_bootstrap_{family_id}_"))
        try:
            from ..ingestion import normalize_to_pdf, save_upload_to_source
            from ..extraction.pdf_extractor import render_pages
            from ..schema_discovery import discover
            source_path = save_upload_to_source(file, work_dir, "seed_document")

            converted_dir = work_dir / "converted"
            converted_dir.mkdir(parents=True, exist_ok=True)
            pdf_path = normalize_to_pdf(source_path, converted_dir / "bootstrap_doc")
            page_imgs = render_pages(str(pdf_path), str(work_dir / "pages"))
            profile = discover(str(pdf_path), family["supplier"], family["family_name"], use_llm=use_llm)
            profile_dict = profile.model_dump() if hasattr(profile, "model_dump") else profile.dict()

            existing_profile = _json_dict(family.get("template_profile"))
            if not profile_dict.get("column_rules") and existing_profile.get("column_rules"):
                profile_dict["column_rules"] = existing_profile["column_rules"]

            datasets[index]["template_profile"] = profile_dict
            datasets[index]["updated_at"] = _utc_now()
            _write_local_datasets(datasets)

            document = {
                "id": str(uuid.uuid4()),
                "family_id": str(family_id),
                "label": Path(file.filename or "seed_document").stem,
                "filename": file.filename,
                "page_count": len(page_imgs),
                "uploaded_by": principal.user_id,
                "uploaded_at": _utc_now(),
                "storage": "local_json",
            }
            documents = _read_local_documents()
            documents.insert(0, document)
            _write_local_documents(documents)

            return {
                "status": "success",
                "document_id": document["id"],
                "discovered_profile": profile_dict,
                "storage": "local_json",
            }
        finally:
            shutil.rmtree(work_dir, ignore_errors=True)

    _ensure_dataset_schema()
    family_uuid = _family_uuid(family_id)

    with get_conn() as conn:
        family = conn.execute(
            """
            SELECT id, tenant_id, business_unit_id, supplier, family_name, template_profile, ui_profile
            FROM document_family
            WHERE id = %s
            """,
            (family_uuid,),
        ).fetchone()
    if not family:
        raise HTTPException(404, "Dataset not found.")
    dataset = _dataset_record(family)
    if not can_access_family(principal, dataset):
        raise HTTPException(403, "Access denied to this dataset.")

    work_dir = Path(tempfile.mkdtemp(prefix=f"dataset_bootstrap_{family_id}_"))
    try:
        converted_dir = work_dir / "converted"
        converted_dir.mkdir(parents=True, exist_ok=True)

        from ..ingestion import normalize_to_pdf, save_upload_to_source
        from ..extraction.pdf_extractor import render_pages
        from ..persistence import _upsert_document
        from ..schema_discovery import discover
        source_path = save_upload_to_source(file, work_dir, "seed_document")

        pdf_path = normalize_to_pdf(source_path, converted_dir / "bootstrap_doc")
        page_imgs = render_pages(str(pdf_path), str(work_dir / "pages"))
        profile = discover(str(pdf_path), family["supplier"], family["family_name"], use_llm=use_llm)
        profile_dict = profile.model_dump() if hasattr(profile, "model_dump") else profile.dict()

        existing_profile = _json_dict(family.get("template_profile"))
        if not profile_dict.get("column_rules") and existing_profile.get("column_rules"):
            profile_dict["column_rules"] = existing_profile["column_rules"]

        with get_conn() as conn:
            conn.execute(
                """
                UPDATE document_family
                SET template_profile = %s::jsonb,
                    updated_at = now()
                WHERE id = %s
                """,
                (json.dumps(profile_dict, ensure_ascii=False, default=str), family_uuid),
            )
            doc_id = _upsert_document(
                conn,
                family_id=family_uuid,
                tenant_id=family["tenant_id"],
                business_unit_id=family["business_unit_id"],
                uploaded_by=principal.user_id,
                label=Path(file.filename or "seed_document").stem,
                pdf_path=pdf_path,
                page_count=len(page_imgs),
                coverage=0.0,
            )

        return {
            "status": "success",
            "document_id": str(doc_id),
            "discovered_profile": profile_dict,
        }
    finally:
        shutil.rmtree(work_dir, ignore_errors=True)


@router.get("/admin/datasets/{family_id}/documents")
@router.get("/api/admin/datasets/{family_id}/documents")
def list_dataset_documents(family_id: str):
    principal = current_principal()
    _check_admin(principal)
    if not db_enabled():
        dataset = _find_local_dataset(family_id)
        if not dataset:
            raise HTTPException(404, "Dataset not found.")
        if not can_access_family(principal, _dataset_record(dataset)):
            raise HTTPException(403, "Access denied.")
        docs = [doc for doc in _read_local_documents() if str(doc.get("family_id")) == str(family_id)]
        docs.sort(key=lambda doc: str(doc.get("uploaded_at") or ""), reverse=True)
        return {"documents": docs}

    _ensure_dataset_schema()
    family_uuid = _family_uuid(family_id)

    with get_conn() as conn:
        family = conn.execute(
            "SELECT id, tenant_id, business_unit_id, ui_profile FROM document_family WHERE id = %s",
            (family_uuid,),
        ).fetchone()
        if not family:
            raise HTTPException(404, "Dataset not found.")
        if not can_access_family(principal, _dataset_record(family)):
            raise HTTPException(403, "Access denied.")
        docs = conn.execute(
            """
            SELECT id, label, version_tag, raw_pdf_blob_uri, page_count,
                   extracted_at, coverage_pct, uploaded_by, uploaded_at
            FROM spec_document
            WHERE family_id = %s
            ORDER BY uploaded_at DESC
            """,
            (family_uuid,),
        ).fetchall()

    return {"documents": [dict(doc) for doc in docs]}


def _family_uuid(family_id: str) -> uuid.UUID:
    try:
        return uuid.UUID(family_id)
    except ValueError:
        raise HTTPException(400, "Invalid family UUID format.") from None
