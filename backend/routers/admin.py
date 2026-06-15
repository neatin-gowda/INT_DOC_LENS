"""
Admin router for dataset/use-case onboarding.
"""
from __future__ import annotations

import json
import shutil
import tempfile
import uuid
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


class CreateDatasetReq(BaseModel):
    supplier: str
    family_name: str
    domain: str = "generic"
    description: str = ""
    allowed_roles: list[str] = Field(default_factory=list)


class UpdateDatasetReq(BaseModel):
    supplier: Optional[str] = None
    family_name: Optional[str] = None
    domain: Optional[str] = None
    description: Optional[str] = None
    allowed_roles: Optional[list[str]] = None
    prompt_guidelines: Optional[str] = None
    column_rules: Optional[list[dict[str, str]]] = None


def _check_admin(principal: Principal) -> None:
    if not (principal.is_platform_admin or principal.is_business_unit_admin):
        raise HTTPException(403, "Platform Admin or Business Unit Admin role required.")


def _db_required() -> None:
    if not db_enabled():
        raise HTTPException(503, "Database is not configured.")


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
    family["prompt_guidelines"] = (
        prompt_profile.get("guidelines")
        or prompt_profile.get("summarization_directives")
        or ""
    )
    family["allowed_roles"] = ui_profile.get("allowed_roles") or []
    return family


def _validate_roles(roles: list[str]) -> None:
    for role in roles:
        if role not in ALL_ROLES:
            raise HTTPException(400, f"Invalid role: {role}")


@router.get("/datasets")
def list_accessible_datasets():
    principal = current_principal()
    if not db_enabled():
        return {"datasets": []}

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
def list_admin_datasets():
    principal = current_principal()
    _check_admin(principal)
    if not db_enabled():
        return {"datasets": []}

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
def create_dataset(req: CreateDatasetReq):
    principal = current_principal()
    _check_admin(principal)
    _db_required()
    _validate_roles(req.allowed_roles)

    supplier = req.supplier.strip()
    family_name = req.family_name.strip()
    if not supplier or not family_name:
        raise HTTPException(400, "Supplier and family name are required.")

    prompt_profile = {
        "description": req.description.strip(),
        "guidelines": "",
        "summarization_directives": "",
        "extraction_directives": "",
    }
    ui_profile = {"allowed_roles": req.allowed_roles}
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
            VALUES (%s, %s, %s, %s, %s, %s::jsonb, %s::jsonb, '{}'::jsonb)
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
            ),
        ).fetchone()

    return {"status": "success", "id": str(row["id"])}


@router.get("/admin/datasets/{family_id}")
def get_dataset(family_id: str):
    principal = current_principal()
    _check_admin(principal)
    _db_required()
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
def update_dataset(family_id: str, req: UpdateDatasetReq):
    principal = current_principal()
    _check_admin(principal)
    _db_required()
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
        if req.prompt_guidelines is not None:
            prompt_profile["guidelines"] = req.prompt_guidelines.strip()
            prompt_profile["summarization_directives"] = req.prompt_guidelines.strip()
            prompt_profile["extraction_directives"] = req.prompt_guidelines.strip()
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
def delete_dataset(family_id: str):
    principal = current_principal()
    _check_admin(principal)
    _db_required()
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


@router.post("/admin/datasets/{family_id}/bootstrap")
async def bootstrap_dataset(
    family_id: str,
    file: UploadFile = File(...),
    use_llm: bool = Form(True),
):
    principal = current_principal()
    _check_admin(principal)
    _db_required()
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
        source_path = work_dir / (file.filename or "seed_document")
        with source_path.open("wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        converted_dir = work_dir / "converted"
        converted_dir.mkdir(parents=True, exist_ok=True)

        from ..ingestion import normalize_to_pdf
        from ..extraction.pdf_extractor import render_pages
        from ..persistence import _upsert_document
        from ..schema_discovery import discover

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
def list_dataset_documents(family_id: str):
    principal = current_principal()
    _check_admin(principal)
    _db_required()
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
