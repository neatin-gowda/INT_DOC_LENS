"""
Schema discovery — runs ONCE per supplier document family on the first upload,
then the resulting TemplateProfile is reused for every subsequent upload.

It looks at:
  * heading patterns (regex of frequently-occurring uppercase phrases)
  * stable-key candidates (cells that look like product codes)
  * recurring table headers (signatures we'll see again)

Optionally, an LLM is invoked once to validate the auto-detected
patterns and add semantic labels (e.g., "this code column appears to be
'order code'"). The LLM step is optional — without it, we still get a
working profile; with it, we get nicer field names.
"""
from __future__ import annotations

import json
import os
import re
import uuid
from collections import Counter, defaultdict
from datetime import datetime
from typing import Any

from .extraction.pdf_extractor import _body_font_size, _collect_lines, _is_heading
from .extraction.table_extractor import extract_tables_robust
from .ai_usage import usage_from_response
from .models import TemplateProfile


CODE_PATTERNS = [
    {"name": "order_code_3char",   "regex": r"^[0-9]{3}$"},                 # 765, 153, 863
    {"name": "order_code_3alpha",  "regex": r"^[0-9]{2}[A-Z]$"},             # 99H, 44T, 91V, 43L
    {"name": "package_code",       "regex": r"^[0-9]{3}[A-Z]$"},             # 221A, 374A, 564A
    {"name": "paint_code",         "regex": r"^[A-Z][A-Z0-9]$"},             # EA, G4, DB
    {"name": "body_code",          "regex": r"^[A-Z][0-9][A-Z]$"},           # E7A, E0R, E4D
]


def discover(
    pdf_path: str,
    supplier: str,
    family_name: str,
    use_llm: bool = False,
    model_name: str | None = None,
) -> TemplateProfile:
    lines = _collect_lines(pdf_path)
    body = _body_font_size(lines)

    # Heading patterns
    headings = [ln.text for ln in lines if _is_heading(ln, body)]
    heading_counter = Counter(headings)
    common_headings = [h for h, c in heading_counter.most_common(50) if len(h) >= 3]
    section_patterns = list({_to_loose_regex(h) for h in common_headings[:25]})

    # Sample table headers — used to recognize this template later
    tables_by_page = extract_tables_robust(pdf_path)
    header_signatures: list[dict] = []
    seen = set()
    for tbls in tables_by_page.values():
        for tbl in tbls:
            sig = "|".join(h.lower() for h in tbl["header"] if h)
            if sig and sig not in seen:
                seen.add(sig)
                header_signatures.append({
                    "header": tbl["header"],
                    "n_columns": len(tbl["header"]),
                })

    # Test which code patterns occur
    cells: list[str] = []
    for tbls in tables_by_page.values():
        for tbl in tbls:
            for row in tbl["rows"]:
                cells.extend(c.strip() for c in row if c)

    active_patterns: list[dict] = []
    for pat in CODE_PATTERNS:
        rx = re.compile(pat["regex"])
        hits = sum(1 for c in cells if rx.fullmatch(c))
        if hits >= 3:
            active_patterns.append({**pat, "scope_path": "/", "evidence_count": str(hits)})

    profile = TemplateProfile(
        supplier=supplier,
        family_name=family_name,
        section_heading_patterns=section_patterns,
        stable_key_patterns=active_patterns,
        table_signatures=header_signatures[:30],
        notes=f"auto-discovered from {pdf_path}",
    )

    # Deterministic base complexity tagging fallback
    bilingual_indicators = ["descripción", "description", "código", "code", "precio", "price"]
    has_bilingual = any(any(ind in h.lower() for ind in bilingual_indicators) for h in headings)
    table_count = sum(len(tbls) for tbls in tables_by_page.values())

    complexity_rating = "low"
    confidence_score = 0.90
    complexity_reasons = []
    suggested_data_labels = ["supplier_code", "description", "effective_date"]
    enhancement_tips = []

    if has_bilingual:
        complexity_rating = "high"
        confidence_score = 0.65
        complexity_reasons.append("Bilingual text columns detected")
        enhancement_tips.append("Bilingual layout table detected. Ensure side-by-side cells are parsed independently.")

    if table_count > 5:
        complexity_rating = "medium" if complexity_rating == "low" else "high"
        confidence_score = min(confidence_score, 0.75)
        complexity_reasons.append("Multiple tabular structures found across pages")
        enhancement_tips.append("Configure table column mapping rules in Admin Studio to establish stable keys.")
        suggested_data_labels.extend(["pricing", "pcv_code"])

    profile.ai_reasoning_profile = {
        "complexity_rating": complexity_rating,
        "confidence_score": confidence_score,
        "complexity_reasons": complexity_reasons,
        "suggested_data_labels": sorted(list(set(suggested_data_labels))),
        "enhancement_tips": enhancement_tips,
        "learned_page_resolutions": {}
    }

    if use_llm:
        profile = _llm_refine(profile, lines, tables_by_page, model_name=model_name)

    return profile


def _to_loose_regex(s: str) -> str:
    """Turn a literal heading into a regex that tolerates trademark / spacing variation."""
    s = re.escape(s)
    s = s.replace(r"\ ", r"\s+")
    s = s.replace(r"™", r"™?").replace(r"®", r"®?")
    return f"^{s}$"


def _llm_refine(
    profile: TemplateProfile,
    lines: list[Any],
    tables_by_page: dict[int, list[dict]],
    model_name: str | None = None,
) -> TemplateProfile:
    endpoint = os.getenv("AZURE_OPENAI_ENDPOINT")
    api_key  = os.getenv("AZURE_OPENAI_API_KEY")
    deploy = (
        (model_name or "").strip()
        or os.getenv("AZURE_OPENAI_DEPLOYMENT")
        or os.getenv("AZURE_OPENAI_CHAT_DEPLOYMENT")
        or os.getenv("AZURE_OPENAI_DEPLOYMENT_NAME")
        or os.getenv("AZURE_OPENAI_MODEL")
    )
    if not (endpoint and api_key and deploy):
        return profile
    try:
        from openai import AzureOpenAI
        client = AzureOpenAI(api_key=api_key, azure_endpoint=endpoint, api_version="2024-08-01-preview")

        # Collect sample text and tables for prompt reasoning
        sample_text = "\n".join([ln.text for ln in lines[:150] if getattr(ln, 'text', '')])[:4000]
        sample_tables = []
        for p, tbls in list(tables_by_page.items())[:3]:
            for tbl in tbls[:2]:
                sample_tables.append({
                    "page": p,
                    "header": tbl.get("header"),
                    "sample_rows": tbl.get("rows")[:2] if tbl.get("rows") else []
                })
        sample_tables_str = json.dumps(sample_tables, indent=2)[:3000]

        prompt = (
            "You are an expert document intelligence engineer analyzing a supplier publication.\n"
            "Based on the sample text, headings, and tables extracted below, analyze the document structure and provide:\n"
            "1. Complexity Rating ('low', 'medium', or 'high').\n"
            "2. Confidence Score (estimated extraction confidence from 0.0 to 1.0 using standard parsing).\n"
            "3. Complexity Reasons (list of structural challenges found, e.g. bilingual columns, layout tables, nested headers, scanned text).\n"
            "4. Suggested Data Labels (reusable extraction tags like 'pcv_code', 'base_price', 'effective_date').\n"
            "5. Enhancement Tips (specific configuration tips to improve deterministic parsing).\n"
            "6. Stable key patterns and section heading patterns.\n\n"
            "Output JSON only with keys:\n"
            "{\n"
            "  \"complexity_rating\": str,\n"
            "  \"confidence_score\": float,\n"
            "  \"complexity_reasons\": list[str],\n"
            "  \"suggested_data_labels\": list[str],\n"
            "  \"enhancement_tips\": list[str],\n"
            "  \"stable_key_patterns\": [{\"name\": str, \"regex\": str, \"scope_path\": str}],\n"
            "  \"section_heading_patterns\": list[str],\n"
            "  \"notes\": str\n"
            "}\n\n"
            f"--- SAMPLE TEXT ---\n{sample_text}\n\n"
            f"--- SAMPLE TABLES ---\n{sample_tables_str}\n\n"
            f"--- AUTO-DETECTED PATTERNS ---\n{profile.model_dump_json()}"
        )

        estimated_prompt_tokens = max(1, len(prompt) // 4)
        resp = client.chat.completions.create(
            model=deploy,
            messages=[{"role":"system","content":"Output JSON only."},{"role":"user","content":prompt}],
            temperature=0.0,
            response_format={"type": "json_object"},
        )
        data = json.loads(resp.choices[0].message.content or "{}")
        if "stable_key_patterns" in data:
            profile.stable_key_patterns = data["stable_key_patterns"]
        if "section_heading_patterns" in data:
            profile.section_heading_patterns = data["section_heading_patterns"]
        if "notes" in data:
            profile.notes = data["notes"]

        usage = usage_from_response(resp, operation="admin_schema_discovery", model=deploy)
        usage["estimated_prompt_tokens"] = estimated_prompt_tokens
        usage["prompt_chars"] = len(prompt)

        profile.ai_reasoning_profile = {
            "complexity_rating": data.get("complexity_rating", "low"),
            "confidence_score": float(data.get("confidence_score", 0.85)),
            "complexity_reasons": data.get("complexity_reasons", []),
            "suggested_data_labels": data.get("suggested_data_labels", []),
            "enhancement_tips": data.get("enhancement_tips", []),
            "learned_page_resolutions": {},
            "selected_model": deploy,
            "usage": usage,
        }
    except Exception as exc:
        profile.notes += f" (LLM refine failed: {exc})"
    return profile


def infer_family_supplier_and_name(base_label: str, target_label: str, blocks: list[Any]) -> tuple[str, str]:
    """
    Infer a recurring document family from file labels first, then headings.

    Examples:
      2024_Ford_Bronco_Order_Guide + 2025_Ford_Bronco_Order_Guide
      -> Ford / Bronco Order Guide
    """
    clean_base = _label_words(base_label)
    clean_target = _label_words(target_label)

    common_words: list[str] = []
    for left, right in zip(clean_base, clean_target):
        if left != right:
            break
        common_words.append(left)

    common_prefix = " ".join(common_words).strip().title()
    if common_prefix:
        parts = common_prefix.split(maxsplit=1)
        if len(parts) == 2:
            return parts[0], parts[1]
        return parts[0], "Document Family"

    heading_text = " ".join(_block_text(block) for block in blocks[:40] if _block_is_heading(block)).lower()
    for brand in ("ford", "toyota", "honda", "gm", "chevrolet", "nissan", "jeep", "bmw", "mercedes", "audi", "volvo"):
        if brand in heading_text:
            return brand.title(), _heading_family_name(heading_text)

    return "Generic", "Document Comparison"


def load_prompt_profile_for_family(
    supplier: str,
    family_name: str,
    *,
    tenant_id: str = "default",
    business_unit_id: str = "default",
) -> dict[str, Any]:
    try:
        from .db import db_enabled, get_conn
    except Exception:
        return {}

    if not db_enabled():
        return {}

    try:
        with get_conn() as conn:
            row = conn.execute(
                """
                SELECT prompt_profile
                FROM document_family
                WHERE tenant_id = %s
                  AND business_unit_id = %s
                  AND supplier = %s
                  AND family_name = %s
                LIMIT 1
                """,
                (tenant_id, business_unit_id, supplier, family_name),
            ).fetchone()
    except Exception:
        return {}

    profile = row["prompt_profile"] if row else {}
    if isinstance(profile, str):
        try:
            profile = json.loads(profile)
        except json.JSONDecodeError:
            return {}
    return profile if isinstance(profile, dict) else {}


def train_family_profile_from_feedback(run_id: str, record: dict[str, Any]) -> None:
    """
    Refine template and prompt profiles from reviewer feedback.

    This is deliberately best-effort. If DB, OpenAI, or family resolution is not
    available, the feedback is still stored and the normal workflow continues.
    """
    try:
        from .db import db_enabled, get_conn
        from .job_store import get_job
    except Exception:
        return

    if not db_enabled():
        return

    try:
        with get_conn() as conn:
            family_id = _resolve_family_id(conn, run_id, get_job)
            if not family_id:
                print(f"[Self-Learning] Could not resolve family_id for run_id={run_id}")
                return

            family_row = conn.execute(
                """
                SELECT supplier, family_name, template_profile, prompt_profile, template_version
                FROM document_family
                WHERE id = %s
                """,
                (family_id,),
            ).fetchone()
            if not family_row:
                return

            template_profile = _json_dict(family_row["template_profile"])
            prompt_profile = _json_dict(family_row["prompt_profile"])
            version = int(family_row["template_version"] or 1)

            columns = conn.execute(
                """
                SELECT DISTINCT c.header_text, c.normalized_header, c.semantic_role
                FROM doc_table_column c
                JOIN doc_table t ON t.id = c.table_id
                JOIN spec_document d ON d.id = t.document_id
                WHERE d.family_id = %s
                LIMIT 50
                """,
                (family_id,),
            ).fetchall()
            existing_columns = [
                {
                    "header": row["header_text"],
                    "normalized": row["normalized_header"],
                    "role": row["semantic_role"],
                }
                for row in columns
            ]

            endpoint = os.getenv("AZURE_OPENAI_ENDPOINT")
            api_key = os.getenv("AZURE_OPENAI_API_KEY")
            deployment = os.getenv("AZURE_OPENAI_DEPLOYMENT") or os.getenv("AZURE_OPENAI_CHAT_DEPLOYMENT")
            if not (endpoint and api_key and deployment):
                return

            from openai import AzureOpenAI

            client = AzureOpenAI(
                api_key=api_key,
                azure_endpoint=endpoint,
                api_version=os.getenv("AZURE_OPENAI_API_VERSION", "2024-08-01-preview"),
            )
            prompt = _feedback_training_prompt(
                supplier=str(family_row["supplier"]),
                family_name=str(family_row["family_name"]),
                version=version,
                record=record,
                existing_columns=existing_columns,
                template_profile=template_profile,
                prompt_profile=prompt_profile,
            )
            resp = client.chat.completions.create(
                model=deployment,
                messages=[
                    {
                        "role": "system",
                        "content": "Output strict JSON only with keys template_profile and prompt_profile.",
                    },
                    {"role": "user", "content": prompt},
                ],
                temperature=0.1,
                response_format={"type": "json_object"},
            )
            data = json.loads(resp.choices[0].message.content or "{}")
            new_template = data.get("template_profile")
            new_prompt = data.get("prompt_profile")
            if not isinstance(new_template, dict) or not isinstance(new_prompt, dict):
                print("[Self-Learning] LLM returned empty or malformed profiles.")
                return

            new_template.setdefault("supplier", family_row["supplier"])
            new_template.setdefault("family_name", family_row["family_name"])
            new_template["notes"] = (
                f"Self-trained at {datetime.utcnow().isoformat()} "
                f"from reviewer feedback (version {version + 1})"
            )

            conn.execute(
                """
                UPDATE document_family
                SET template_profile = %s::jsonb,
                    prompt_profile = %s::jsonb,
                    template_version = template_version + 1,
                    updated_at = now()
                WHERE id = %s
                """,
                (json.dumps(new_template, ensure_ascii=False), json.dumps(new_prompt, ensure_ascii=False), family_id),
            )
            print(f"[Self-Learning] Updated family profile {family_id} from feedback.")
    except Exception as exc:
        print(f"[Self-Learning] Error training family profile: {exc}")


def _label_words(label: str) -> list[str]:
    stem = re.sub(r"\.[A-Za-z0-9]+$", "", str(label or ""))
    stem = re.sub(r"\b(?:19|20)\d{2}\b", " ", stem)
    stem = re.sub(r"\b\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b", " ", stem)
    stem = re.sub(r"[_\-\s]+", " ", stem)
    return [word.lower() for word in stem.split() if len(word) > 1]


def _block_is_heading(block: Any) -> bool:
    block_type = getattr(block, "block_type", None) or (block.get("block_type") if isinstance(block, dict) else None)
    return str(block_type or "").lower() in {"heading", "blocktype.heading"}


def _block_text(block: Any) -> str:
    return str(getattr(block, "text", "") or (block.get("text", "") if isinstance(block, dict) else ""))


def _heading_family_name(text: str) -> str:
    for phrase in ("order guide", "model spec", "specification", "catalog", "policy", "contract"):
        if phrase in text:
            return phrase.title()
    return "Document Family"


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


def _resolve_family_id(conn, run_id: str, get_job) -> Any:
    run_uuid = None
    try:
        run_uuid = uuid.UUID(run_id)
    except ValueError:
        job = get_job(run_id)
        result_ref = (job or {}).get("result_ref") or {}
        db_run_id = result_ref.get("db_run_id")
        if db_run_id:
            try:
                run_uuid = uuid.UUID(str(db_run_id))
            except ValueError:
                run_uuid = None

    if run_uuid:
        row = conn.execute("SELECT family_id FROM comparison_run WHERE id = %s", (run_uuid,)).fetchone()
        if row:
            return row["family_id"]

    job = get_job(run_id)
    if job:
        for label in (job.get("label"), job.get("target_label"), job.get("base_label")):
            if not label:
                continue
            row = conn.execute(
                "SELECT family_id FROM spec_document WHERE label = %s ORDER BY uploaded_at DESC LIMIT 1",
                (label,),
            ).fetchone()
            if row:
                return row["family_id"]

    return None


def _feedback_training_prompt(
    *,
    supplier: str,
    family_name: str,
    version: int,
    record: dict[str, Any],
    existing_columns: list[dict[str, Any]],
    template_profile: dict[str, Any],
    prompt_profile: dict[str, Any],
) -> str:
    return (
        "You are the self-learning coordinator for a document-knowledge mining system.\n"
        f"Document family: {supplier} - {family_name}\n"
        f"Current version: {version}\n\n"
        "Reviewer feedback:\n"
        f"- User score: {record.get('user_score')}/100\n"
        f"- Missing areas: {record.get('missing_areas')}\n"
        f"- Reviewer comments: {record.get('comments')}\n\n"
        "Existing extracted columns:\n"
        f"{json.dumps(existing_columns[:30], ensure_ascii=False, indent=2)}\n\n"
        "Current profiles:\n"
        f"template_profile: {json.dumps(template_profile, ensure_ascii=False, indent=2)}\n"
        f"prompt_profile: {json.dumps(prompt_profile, ensure_ascii=False, indent=2)}\n\n"
        "Refine both profiles for future extraction and comparison.\n"
        "Update template_profile.column_rules as a list of objects with pattern and role. "
        "Allowed roles: pcv, amount, code, row_label, date, status, value.\n"
        "Update template_profile.stable_key_patterns with reusable identifier patterns.\n"
        "Update prompt_profile.extraction_directives and prompt_profile.summarization_directives "
        "with concise, reusable guidance.\n"
        "Rules: keep patterns family-level, never hardcode one date, one row value, or one single code. "
        "Output exactly one JSON object with template_profile and prompt_profile keys."
    )
