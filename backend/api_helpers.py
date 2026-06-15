"""
Shared API Helpers and Orchestration State.
Extracts monolithic caches and functions from api.py to prevent circular dependencies.
"""
from __future__ import annotations

import copy
import hashlib
import re
import json
import os
import shutil
import tempfile
import threading
import traceback
import uuid
from collections import defaultdict
from pathlib import Path
from typing import Any, Optional

from fastapi import HTTPException

from .ai_usage import add_usage, empty_usage, usage_from_response
from .api_schemas import FeedbackReq
from .db import db_enabled, get_conn
from .comparison import diff_blocks, diff_stats
from .ingestion import (
    coverage_for_source,
    extract_blocks_from_source,
    normalize_to_pdf,
    save_upload_to_source,
    source_kind,
    supported_input_extensions,
)
from .extraction.runner import enrich_blocks, extraction_intelligence_summary
from .extraction.pdf_extractor import coverage_pct, extract_blocks, render_pages
from .job_store import get_job, now_iso, upsert_job
from .models import Block, BlockDiff, ChangeType
from .security import can_access_job, current_principal
from .schema_discovery import infer_family_supplier_and_name, load_prompt_profile_for_family
from .summarizer import summarize
from .services.table_tools import (
    _path_label,
    _table_matrix,
    _safe_payload,
    _row_values,
    _row_payload_index,
    _display_text,
)

# Global memory caches
_RUNS: dict[str, dict] = {}
_EXTRACTION_CACHE: dict[str, dict[str, Any]] = {}
_EXTRACTION_CACHE_LOCK = threading.RLock()
_EXTRACTION_CACHE_MAX = int(os.getenv("DOCULENS_EXTRACTION_CACHE_MAX", "24") or "24")

_USER_HIDDEN_PAYLOAD_KEYS = {
    "anchors",
    "__anchors__",
    "__pages__",
    "__row_index__",
    "__table_title__",
    "__table_context__",
    "page_width",
    "page_height",
    "spans_pages",
    "stitched_from",
    "ocr",
    "kind",
    "caption",
    "source_extraction",
    "source_format",
    "visual_match_score",
    "visual_match_source",
    "extraction_intelligence",
    "field_profiles",
    "table_fingerprint",
    "column_profiles",
    "extraction_confidence",
    "quality_warnings",
    "language",
    "header_rows",
    "header_row_count",
    "header_index",
    "header_strategy",
    "header_sources",
    "strategies",
    "bbox_by_page",
}

def _dump_model(obj):
    if hasattr(obj, "model_dump"):
        return obj.model_dump()
    if hasattr(obj, "dict"):
        return obj.dict()
    return obj

def _is_user_hidden_field(field: Any) -> bool:
    key = str(field or "").strip()
    if not key:
        return True
    if key.startswith("__"):
        return True
    if key in _USER_HIDDEN_PAYLOAD_KEYS:
        return True
    if key.startswith("extraction_") or key.endswith("_confidence"):
        return True
    return False

def _visible_field_diffs(field_diffs: list[Any]) -> list[dict[str, Any]]:
    out = []
    for fd in field_diffs or []:
        field = getattr(fd, "field", None) if not isinstance(fd, dict) else fd.get("field")
        if _is_user_hidden_field(field):
            continue
        before = getattr(fd, "before", None) if not isinstance(fd, dict) else fd.get("before")
        after = getattr(fd, "after", None) if not isinstance(fd, dict) else fd.get("after")
        out.append({"field": field, "before": before, "after": after})
    return out

def _max_block_page(blocks: list[Block]) -> int:
    pages = [int(getattr(block, "page_number", 1) or 1) for block in blocks or []]
    return max(pages, default=1)

def _set_run_status(run_id: str, message: str, progress: int, status: str = "running") -> None:
    if run_id not in _RUNS:
        _RUNS[run_id] = {}

    _RUNS[run_id].update(
        {
            "status": status,
            "status_message": message,
            "progress": progress,
            "updated_at": now_iso(),
        }
    )
    _sync_job_metadata(run_id)

def save_run_payload(run_id: str, run: dict) -> None:
    work = run.get("work")
    if not work or not Path(work).exists():
        return
    try:
        serializable = {}
        for k, v in run.items():
            if k in ("_EXTRACTION_CACHE_LOCK",):
                continue
            if isinstance(v, Path):
                serializable[k] = str(v)
            elif isinstance(v, list) and all(isinstance(x, Block) for x in v):
                serializable[k] = [x.model_dump() for x in v]
            elif isinstance(v, list) and all(isinstance(x, BlockDiff) for x in v):
                serializable[k] = [x.model_dump() for x in v]
            elif hasattr(v, "model_dump"):
                serializable[k] = v.model_dump()
            elif isinstance(v, dict):
                serialized_dict = {}
                for dk, dv in v.items():
                    if isinstance(dv, Path):
                        serialized_dict[dk] = str(dv)
                    elif hasattr(dv, "model_dump"):
                        serialized_dict[dk] = dv.model_dump()
                    else:
                        serialized_dict[dk] = dv
                serializable[k] = serialized_dict
            else:
                try:
                    json.dumps(v)
                    serializable[k] = v
                except Exception:
                    serializable[k] = str(v)
        
        payload_file = Path(work) / "run_payload.json"
        with payload_file.open("w", encoding="utf-8") as f:
            json.dump(serializable, f, ensure_ascii=False, indent=2, default=str)
    except Exception as exc:
        print(f"Error saving run payload: {exc}")

def load_run_payload(run_id: str, work: Path) -> Optional[dict]:
    payload_file = Path(work) / "run_payload.json"
    if not payload_file.exists():
        return None
    try:
        with payload_file.open("r", encoding="utf-8") as f:
            data = json.load(f)
        
        run = {}
        for k, v in data.items():
            if k in ("work", "base_pdf", "target_pdf", "pdf", "source"):
                run[k] = Path(v) if v else None
            elif k in ("sources", "pdfs"):
                run[k] = [Path(x) for x in v] if v else []
            elif k in ("base_blocks", "target_blocks", "blocks"):
                run[k] = [Block(**x) for x in v] if v else []
            elif k == "diffs":
                run[k] = [BlockDiff(**x) for x in v] if v else []
            else:
                run[k] = v
        return run
    except Exception as exc:
        print(f"Error loading run payload: {exc}")
        return None

def rehydrate_run(run_id: str) -> Optional[dict]:
    if run_id in _RUNS:
        return _RUNS[run_id]

    # Check job database metadata
    job = get_job(run_id)
    if not job:
        return None

    run = {
        "kind": job.get("kind"),
        "status": job.get("status"),
        "status_message": job.get("status_message"),
        "progress": job.get("progress"),
        "tenant_id": job.get("tenant_id"),
        "business_unit_id": job.get("business_unit_id"),
        "created_by": job.get("created_by"),
        "created_by_role": job.get("created_by_role"),
        "created_by_name": job.get("created_by_name"),
        "created_at": job.get("created_at"),
        "updated_at": job.get("updated_at"),
        "finished_at": job.get("finished_at"),
        "label": job.get("label"),
        "base_label": job.get("base_label"),
        "target_label": job.get("target_label"),
        "source_format": job.get("source_format"),
        "base_format": job.get("base_format"),
        "target_format": job.get("target_format"),
        "ai_usage": job.get("ai_usage") or empty_usage(),
        "error": job.get("error"),
    }

    result_ref = job.get("result_ref") or {}
    db_run_id = result_ref.get("db_run_id")
    work_str = result_ref.get("work")
    run["work"] = Path(work_str) if work_str else None
    
    base_pdf_str = result_ref.get("base_pdf")
    run["base_pdf"] = Path(base_pdf_str) if base_pdf_str else None
    
    target_pdf_str = result_ref.get("target_pdf")
    run["target_pdf"] = Path(target_pdf_str) if target_pdf_str else None

    # Load file cache payload
    if run["work"] and run["work"].exists():
        loaded = load_run_payload(run_id, run["work"])
        if loaded:
            run.update(loaded)
            _RUNS[run_id] = run
            return run

    # Fallback to database relational rehydration
    if db_enabled() and db_run_id:
        try:
            db_run_id_uuid = uuid.UUID(db_run_id) if isinstance(db_run_id, str) else db_run_id
            with get_conn() as conn:
                from .persistence import load_blocks, load_block_diffs
                
                run_row = conn.execute(
                    "SELECT base_doc_id, target_doc_id, summary_json, stats FROM comparison_run WHERE id = %s",
                    (db_run_id_uuid,),
                ).fetchone()
                
                if run_row:
                    run["summary"] = run_row["summary_json"] or []
                    run["stats"] = run_row["stats"] or {}
                    run["db_run_id"] = db_run_id
                    
                    base_doc_id = run_row["base_doc_id"]
                    target_doc_id = run_row["target_doc_id"]
                    
                    run["base_blocks"] = load_blocks(conn, base_doc_id)
                    run["target_blocks"] = load_blocks(conn, target_doc_id)
                    run["diffs"] = load_block_diffs(conn, db_run_id_uuid)
                    
                    base_doc = conn.execute("SELECT label FROM spec_document WHERE id = %s", (base_doc_id,)).fetchone()
                    if base_doc:
                        run["base_label"] = base_doc["label"]
                    
                    target_doc = conn.execute("SELECT label FROM spec_document WHERE id = %s", (target_doc_id,)).fetchone()
                    if target_doc:
                        run["target_label"] = target_doc["label"]
        except Exception as exc:
            print(f"Relational fallback rehydration error: {exc}")

    # Reconstruct preview page lists if folders exist
    if run["work"] and run["work"].exists():
        pages_base_dir = run["work"] / "pages_base"
        pages_target_dir = run["work"] / "pages_target"
        
        if pages_base_dir.exists():
            run["base_imgs"] = sorted([str(p) for p in pages_base_dir.glob("page_*.png")])
        else:
            run["base_imgs"] = []
            
        if pages_target_dir.exists():
            run["target_imgs"] = sorted([str(p) for p in pages_target_dir.glob("page_*.png")])
        else:
            run["target_imgs"] = []
            
        extract_imgs = []
        for pdir in sorted(run["work"].glob("pages_extract_*")):
            extract_imgs.extend(sorted([str(p) for p in pdir.glob("page_*.png")]))
        run["page_imgs"] = extract_imgs
    else:
        run.setdefault("base_imgs", [])
        run.setdefault("target_imgs", [])
        run.setdefault("page_imgs", [])

    _RUNS[run_id] = run
    return run

def _ensure_run(run_id: str) -> dict:
    r = rehydrate_run(run_id)
    if not r:
        raise HTTPException(404, "no such run")
    if not can_access_job(current_principal(), r):
        raise HTTPException(403, "You do not have access to this job")
    return r

def _job_patch_from_run(run_id: str, run: dict) -> dict[str, Any]:
    return {
        "run_id": run_id,
        "kind": run.get("kind", "comparison"),
        "status": run.get("status", "unknown"),
        "status_message": run.get("status_message"),
        "progress": run.get("progress", 0),
        "tenant_id": run.get("tenant_id", "default"),
        "business_unit_id": run.get("business_unit_id", "default"),
        "created_by": run.get("created_by", "anonymous"),
        "created_by_role": run.get("created_by_role"),
        "created_by_name": run.get("created_by_name"),
        "label": run.get("label"),
        "base_label": run.get("base_label"),
        "target_label": run.get("target_label"),
        "source_format": run.get("source_format"),
        "base_format": run.get("base_format"),
        "target_format": run.get("target_format"),
        "n_pages": len(run.get("page_imgs", [])),
        "n_pages_base": len(run.get("base_imgs", [])),
        "n_pages_target": len(run.get("target_imgs", [])),
        "ai_usage": run.get("ai_usage", empty_usage()),
        "created_at": run.get("created_at"),
        "updated_at": run.get("updated_at"),
        "finished_at": run.get("finished_at"),
        "result_ref": {
            "db_run_id": run.get("db_run_id"),
            "work": str(run.get("work")) if run.get("work") else None,
            "base_pdf": str(run.get("base_pdf")) if run.get("base_pdf") else None,
            "target_pdf": str(run.get("target_pdf")) if run.get("target_pdf") else None,
            "source_sha": run.get("source_sha"),
            "base_source_sha": run.get("base_source_sha"),
            "target_source_sha": run.get("target_source_sha"),
            "cache_hits": run.get("cache_hits") or {},
        },
        "error": run.get("error"),
    }

def _sync_job_metadata(run_id: str) -> None:
    run = _RUNS.get(run_id)
    if not run:
        return
    try:
        upsert_job(run_id, _job_patch_from_run(run_id, run))
    except Exception:
        pass

def _file_sha256(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()

def _extraction_cache_key(source_path: Path) -> str:
    return f"{source_path.suffix.lower()}:{_file_sha256(source_path)}"

def _cached_extract_blocks(source_path: Path, pdf_path: Path) -> tuple[list[Block], str, bool]:
    cache_key = _extraction_cache_key(source_path)
    source_sha = cache_key.split(":", 1)[1]

    with _EXTRACTION_CACHE_LOCK:
        cached = _EXTRACTION_CACHE.get(cache_key)
        if cached:
            cached["hits"] = int(cached.get("hits") or 0) + 1
            return copy.deepcopy(cached["blocks"]), source_sha, True

    blocks = extract_blocks_from_source(source_path, pdf_path, extract_blocks)

    with _EXTRACTION_CACHE_LOCK:
        if len(_EXTRACTION_CACHE) >= max(1, _EXTRACTION_CACHE_MAX):
            oldest_key = next(iter(_EXTRACTION_CACHE))
            _EXTRACTION_CACHE.pop(oldest_key, None)
        _EXTRACTION_CACHE[cache_key] = {
            "blocks": copy.deepcopy(blocks),
            "source_format": source_kind(source_path),
            "hits": 0,
        }

    return blocks, source_sha, False

def _ensure_complete(run_id: str) -> dict:
    r = _ensure_run(run_id)

    if r.get("status") == "failed":
        raise HTTPException(500, r.get("error", "Comparison failed"))

    if r.get("status") != "complete":
        raise HTTPException(409, r.get("status_message", "Comparison is still running"))

    return r

def _summary_quality_profile(r: dict, threshold: float = 0.9) -> dict[str, Any]:
    rows = [_dump_model(s) for s in r.get("summary", [])]
    confidences = []
    low_rows = []

    for row in rows:
        try:
            conf = float(row.get("confidence"))
        except Exception:
            conf = None
        if conf is None:
            continue
        if conf > 1:
            conf = conf / 100
        conf = max(0.0, min(1.0, conf))
        confidences.append(conf)
        if conf < threshold or row.get("needs_review"):
            low_rows.append(
                {
                    "feature": row.get("feature") or row.get("item") or "Document change",
                    "change_type": row.get("change_type"),
                    "confidence": conf,
                    "page_base": row.get("page_base"),
                    "page_target": row.get("page_target"),
                    "citation": row.get("citation"),
                    "review_reason": row.get("review_reason") or row.get("seek_clarification"),
                }
            )

    avg = sum(confidences) / len(confidences) if confidences else None
    score = round(avg * 100, 2) if avg is not None else None
    return {
        "avg_confidence": avg,
        "system_score": score,
        "threshold": threshold,
        "ai_recommended": avg is not None and avg < threshold,
        "review_items": len(rows),
        "low_confidence_items": len(low_rows),
        "focus_items": low_rows[:30],
    }

def _validate_feedback(req: FeedbackReq) -> None:
    required = {
        "reviewer_name": req.reviewer_name,
        "document_type": req.document_type,
        "missing_areas": req.missing_areas,
        "comments": req.comments,
    }
    missing = [name for name, value in required.items() if not str(value or "").strip()]
    if missing:
        raise HTTPException(400, "Feedback requires " + ", ".join(missing))

def _feedback_record(run_id: str, r: dict, req: FeedbackReq, quality: dict[str, Any]) -> dict[str, Any]:
    _validate_feedback(req)
    focus = quality.get("focus_items") or []
    record = {
        "id": str(uuid.uuid4()),
        "run_id": run_id,
        "tenant_id": r.get("tenant_id", "default"),
        "business_unit_id": r.get("business_unit_id", "default"),
        "created_by": r.get("created_by", "anonymous"),
        "reviewer_name": req.reviewer_name.strip(),
        "document_type": req.document_type.strip(),
        "system_score": quality.get("system_score"),
        "user_score": req.user_score,
        "missing_areas": req.missing_areas.strip(),
        "page_numbers": str(req.page_numbers or "").strip(),
        "comments": req.comments.strip(),
        "selected_focus": req.selected_focus[:50],
        "wants_ai_enhancement": bool(req.wants_ai_enhancement),
        "quality_profile": quality,
        "ai_context": {
            "focus_items": focus,
            "instruction": "Use reviewer feedback to focus optional AI review on weak or missing areas only.",
        },
    }
    return record

def _store_feedback(record: dict[str, Any]) -> Optional[str]:
    try:
        from .persistence import persist_feedback
        return persist_feedback(record)
    except Exception:
        return None

def _ensure_extraction_complete(run_id: str) -> dict:
    r = _ensure_run(run_id)

    if r.get("kind") != "extraction":
        raise HTTPException(404, "no such extraction run")

    if r.get("status") == "failed":
        raise HTTPException(500, r.get("error", "Extraction failed"))

    if r.get("status") != "complete":
        raise HTTPException(409, r.get("status_message", "Extraction is still running"))

    return r

def _db_health_payload() -> dict:
    try:
        from .db import ping_db
    except Exception as exc:
        return {
            "enabled": False,
            "ok": False,
            "error": f"Database module could not be loaded: {exc}",
        }
    return ping_db()

def _persist_run_safely(
    *,
    run_id: str,
    base_label: str,
    target_label: str,
    base_pdf: Path,
    target_pdf: Path,
    base_blocks: list[Block],
    target_blocks: list[Block],
    diffs: list,
    summary: list,
    stats: dict,
    coverage: dict,
    base_page_count: int,
    target_page_count: int,
    family_supplier: str = "uploaded",
    family_name: str = "document_comparison",
    enable_embeddings: bool = True,
    usage_callback=None,
    family_id: Optional[str] = None,
) -> tuple[Optional[int], Optional[str]]:
    try:
        from .persistence import persist_run
    except Exception as exc:
        return None, f"Persistence module could not be loaded: {exc}"

    try:
        db_run_id = persist_run(
            run_id=run_id,
            family_supplier=family_supplier,
            family_name=family_name,
            tenant_id=str(_RUNS.get(run_id, {}).get("tenant_id") or "default"),
            business_unit_id=str(_RUNS.get(run_id, {}).get("business_unit_id") or "default"),
            uploaded_by=str(_RUNS.get(run_id, {}).get("created_by") or "anonymous"),
            base_label=base_label,
            target_label=target_label,
            base_pdf=base_pdf,
            target_pdf=target_pdf,
            base_blocks=base_blocks,
            target_blocks=target_blocks,
            diffs=diffs,
            summary=summary,
            stats=stats,
            coverage=coverage,
            base_page_count=base_page_count,
            target_page_count=target_page_count,
            enable_embeddings=enable_embeddings,
            usage_callback=usage_callback,
            family_id=family_id,
        )
        return db_run_id, None
    except Exception:
        return None, traceback.format_exc()

def _block_record(block: Block, *, include_payload: bool = True) -> dict[str, Any]:
    payload = block.payload if isinstance(block.payload, dict) else {}
    record = {
        "id": str(block.id),
        "parent_id": str(block.parent_id) if block.parent_id else None,
        "type": block.block_type.value,
        "path": block.path,
        "stable_key": block.stable_key,
        "page_number": block.page_number,
        "bbox": block.bbox,
        "text": block.text,
        "sequence": block.sequence,
    }
    if include_payload:
        record["payload"] = payload
    return record

def _extraction_summary(blocks: list[Block], coverage: float, page_count: int, source_format: str) -> dict[str, Any]:
    counts: dict[str, int] = defaultdict(int)
    table_count = 0
    row_count = 0
    figure_count = 0
    text_chars = 0

    for block in blocks:
        counts[block.block_type.value] += 1
        text_chars += len(block.text or "")
        if block.block_type.value == "table":
            table_count += 1
        elif block.block_type.value == "table_row":
            row_count += 1
        elif block.block_type.value == "figure":
            figure_count += 1

    quality = "high"
    if coverage < 65:
        quality = "low"
    elif coverage < 85:
        quality = "medium"

    intelligence = extraction_intelligence_summary(
        blocks,
        coverage=coverage,
        source_format=source_format,
    )

    return {
        "source_format": source_format,
        "page_count": page_count,
        "coverage": coverage,
        "quality": quality,
        "intelligence": intelligence,
        "block_counts": dict(counts),
        "table_count": table_count,
        "table_row_count": row_count,
        "figure_count": figure_count,
        "text_characters": text_chars,
        "message": (
            f"Extracted {len(blocks)} semantic block(s), {table_count} table(s), "
            f"{row_count} table row(s), and {figure_count} image/figure block(s)."
        ),
    }

def _adjust_extraction_blocks(
    blocks: list[Block],
    *,
    doc_index: int,
    label: str,
    page_offset: int,
) -> list[Block]:
    label_slug = re.sub(r"[^A-Za-z0-9]+", "_", str(label or f"document_{doc_index}")).strip("_").lower() or f"document_{doc_index}"

    for block in blocks:
        block.page_number = int(block.page_number or 1) + page_offset
        original_path = block.path or f"/block_{block.sequence}"
        if not original_path.startswith(f"/{label_slug}/"):
            block.path = f"/{label_slug}{original_path if original_path.startswith('/') else '/' + original_path}"

        payload = block.payload if isinstance(block.payload, dict) else {}
        payload["document_index"] = doc_index
        payload["document_label"] = label
        payload["original_page_number"] = int(block.page_number or 1) - page_offset

        for pages_key in ("spans_pages", "__pages__"):
            if isinstance(payload.get(pages_key), list):
                payload[pages_key] = [
                    int(page or 1) + page_offset
                    for page in payload.get(pages_key, [])
                    if str(page or "").strip()
                ]

        if isinstance(payload.get("bbox_by_page"), dict):
            payload["bbox_by_page"] = {
                str(int(page) + page_offset): bbox
                for page, bbox in payload.get("bbox_by_page", {}).items()
                if str(page).isdigit()
            }

        block.payload = payload

    return blocks

def _semantic_field_candidates(blocks: list[Block], limit: int = 220) -> list[dict[str, Any]]:
    fields = []
    seen = set()
    key_value_rx = re.compile(r"^\s*([^:：]{2,80})\s*[:：]\s*(.{1,300})$")
    attribute_patterns = [
        ("color", re.compile(r"\b(?:colou?r|shade)\s*(?:is|=|:)?\s*([A-Za-z][A-Za-z\s/-]{2,40})", re.I)),
        ("size", re.compile(r"\b(?:size|dimension)\s*(?:is|=|:)?\s*([A-Z0-9][A-Z0-9\s./x-]{0,40})", re.I)),
        ("quantity", re.compile(r"\b(?:qty|quantity|count|units?)\s*(?:is|=|:)?\s*(\d[\d,]*(?:\.\d+)?)", re.I)),
        ("price", re.compile(r"([$€£]\s?\d[\d,]*(?:\.\d+)?)")),
        ("percentage", re.compile(r"\b(\d+(?:\.\d+)?%)\b")),
        ("date", re.compile(r"\b(\d{1,2}[/-]\d{1,2}[/-]\d{2,4}|\d{4}-\d{1,2}-\d{1,2})\b")),
        ("code", re.compile(r"\b([A-Z]{1,8}[- ]?\d{2,12}[A-Z]?)\b", re.I)),
    ]

    for block in blocks:
        payload = block.payload if isinstance(block.payload, dict) else {}
        text = block.text or payload.get("text") or ""
        match = key_value_rx.match(str(text))
        if match:
            key = re.sub(r"\s+", " ", match.group(1)).strip()
            value = re.sub(r"\s+", " ", match.group(2)).strip()
            dedupe = (block.page_number, key.lower(), value.lower())
            if dedupe not in seen:
                seen.add(dedupe)
                fields.append(
                    {
                        "field": key,
                        "value": value,
                        "page": block.page_number,
                        "source": block.block_type.value,
                        "citation": f"p.{block.page_number} - {_path_label(block.path)}",
                    }
                )

        for field_name, pattern in attribute_patterns:
            for attr_match in pattern.finditer(str(text)):
                value = re.sub(r"\s+", " ", attr_match.group(1)).strip()
                if not value:
                    continue
                dedupe = (block.page_number, field_name, value.lower())
                if dedupe in seen:
                    continue
                seen.add(dedupe)
                fields.append(
                    {
                        "field": field_name,
                        "value": value,
                        "page": block.page_number,
                        "source": block.block_type.value,
                        "citation": f"p.{block.page_number} - {_path_label(block.path)}",
                    }
                )

        if block.block_type.value == "table_row":
            for key, value in payload.items():
                if str(key).startswith("__") or str(key) in {"source_format", "page_width", "page_height", "anchors"}:
                    continue
                clean_value = str(value or "").strip()
                if not clean_value:
                    continue
                dedupe = (block.page_number, str(key).lower(), clean_value.lower())
                if dedupe in seen:
                    continue
                seen.add(dedupe)
                fields.append(
                    {
                        "field": str(key),
                        "value": clean_value,
                        "page": block.page_number,
                        "source": "table_row",
                        "table": payload.get("__table_title__"),
                        "citation": f"p.{block.page_number} - {_path_label(block.path)}",
                    }
                )

        if len(fields) >= limit:
            break

    return fields

def _extract_text_fields(text: Any, page: int, path: str, source: str) -> list[dict[str, Any]]:
    raw = re.sub(r"\s+", " ", str(text or "")).strip()
    if not raw:
        return []

    fields = []
    seen = set()
    key_value_pairs = re.findall(
        r"([^\s:：|,;][^:：|,;]{1,70})\s*[:：]\s*([^|,;]{1,260})",
        raw,
        flags=re.UNICODE,
    )
    for key, value in key_value_pairs:
        clean_key = re.sub(r"\s+", " ", key).strip()
        clean_value = re.sub(r"\s+", " ", value).strip()
        if not clean_key or not clean_value:
            continue
        dedupe = (clean_key.lower(), clean_value.lower())
        if dedupe in seen:
            continue
        seen.add(dedupe)
        fields.append(
            {
                "field": clean_key,
                "value": clean_value,
                "page": page,
                "source": source,
                "citation": f"p.{page} - {_path_label(path)}",
            }
        )

    attribute_patterns = [
        ("color", re.compile(r"\b(?:colou?r|shade)\s*(?:is|=|:)?\s*([A-Za-z][A-Za-z\s/-]{2,40})", re.I)),
        ("size", re.compile(r"\b(?:size|dimension)\s*(?:is|=|:)?\s*([A-Z0-9][A-Z0-9\s./x-]{0,40})", re.I)),
        ("quantity", re.compile(r"\b(?:qty|quantity|count|units?)\s*(?:is|=|:)?\s*(\d[\d,]*(?:\.\d+)?)", re.I)),
        ("price", re.compile(r"([$€£]\s?\d[\d,]*(?:\.\d+)?)")),
        ("percentage", re.compile(r"\b(\d+(?:\.\d+)?%)\b")),
        ("date", re.compile(r"\b(\d{1,2}[/-]\d{1,2}[/-]\d{2,4}|\d{4}-\d{1,2}-\d{1,2})\b")),
        ("code", re.compile(r"\b([A-Z]{1,8}[- ]?\d{2,12}[A-Z]?)\b", re.I)),
    ]

    for field_name, pattern in attribute_patterns:
        for attr_match in pattern.finditer(raw):
            value = re.sub(r"\s+", " ", attr_match.group(1)).strip()
            if not value:
                continue
            dedupe = (field_name, value.lower())
            if dedupe in seen:
                continue
            seen.add(dedupe)
            fields.append(
                {
                    "field": field_name,
                    "value": value,
                    "page": page,
                    "source": source,
                    "citation": f"p.{page} - {_path_label(path)}",
                }
            )

    return fields

_INLINE_FIELD_ALIASES = {
    "qty": "quantity",
    "quantity": "quantity",
    "count": "quantity",
    "units": "quantity",
    "unit": "quantity",
    "size": "size",
    "dimension": "size",
    "dimensions": "size",
    "color": "color",
    "colour": "color",
    "colo": "color",
    "shade": "color",
    "item": "item",
    "product": "item",
    "material": "material",
    "description": "description",
    "desc": "description",
    "price": "price",
    "amount": "amount",
    "date": "date",
    "code": "code",
    "sku": "code",
}

def _clean_business_text(value: Any) -> str:
    return re.sub(r"\s+", " ", str(value or "")).strip()

def _semantic_record_from_text(text: Any, page: int, path: str, source: str) -> Optional[dict[str, Any]]:
    raw = _clean_business_text(text)
    if not raw:
        return None

    key_pattern = "|".join(sorted((re.escape(k) for k in _INLINE_FIELD_ALIASES), key=len, reverse=True))
    pattern = re.compile(
        rf"\b(?P<key>{key_pattern})\b\s*(?:[:：=]|is)?\s*(?P<value>.*?)(?=\s+\b(?:{key_pattern})\b\s*(?:[:：=]|is)?|$)",
        flags=re.I | re.UNICODE,
    )

    values: dict[str, str] = {}
    for match in pattern.finditer(raw):
        raw_key = _clean_business_text(match.group("key")).lower()
        key = _INLINE_FIELD_ALIASES.get(raw_key, raw_key)
        value = _clean_business_text(match.group("value")).strip(" ,;|")
        if not key or not value:
            continue
        if len(value) > 320:
            value = value[:317].rstrip() + "..."
        values[key] = value

    if len(values) < 2:
        return None

    return {
        "record_type": "inferred_key_value_record",
        "values": values,
        "source_text": raw,
        "page": page,
        "citation": f"p.{page} - {_path_label(path)}",
        "source": source,
    }

def _inline_record_from_text(text: Any) -> Optional[dict[str, Any]]:
    raw = re.sub(r"\s+", " ", str(text or "")).strip()
    if not raw:
        return None

    semantic_record = _semantic_record_from_text(raw, 0, "", "inline_text")
    if semantic_record:
        semantic_record.pop("page", None)
        semantic_record.pop("citation", None)
        semantic_record.pop("source", None)
        return semantic_record

    if "|" in raw:
        cells = [part.strip() for part in raw.split("|") if part.strip()]
    elif "\t" in raw:
        cells = [part.strip() for part in raw.split("\t") if part.strip()]
    else:
        cells = [part.strip() for part in re.split(r"\s{3,}", str(text or "")) if part.strip()]

    if len(cells) >= 2:
        return {
            "record_type": "inline_row",
            "columns": [f"Column {idx + 1}" for idx in range(len(cells))],
            "values": {f"Column {idx + 1}": value for idx, value in enumerate(cells)},
            "text": raw,
        }

    fields = _extract_text_fields(raw, 0, "", "inline_text")
    if len(fields) >= 2:
        return {
            "record_type": "inline_key_values",
            "values": {field["field"]: field["value"] for field in fields},
            "text": raw,
        }

    return None

def _business_structure(blocks: list[Block], tables: list[dict[str, Any]]) -> dict[str, Any]:
    table_by_path = {table.get("path"): table for table in tables}
    table_paths = set(table_by_path.keys())
    documents: dict[int, dict[str, Any]] = {}
    section_by_doc: dict[int, dict[str, Any]] = {}

    def _doc_for(block: Block) -> dict[str, Any]:
        payload = block.payload if isinstance(block.payload, dict) else {}
        doc_index = int(payload.get("document_index") or 1)
        doc_label = payload.get("document_label") or "document"
        if doc_index not in documents:
            documents[doc_index] = {
                "document_index": doc_index,
                "label": doc_label,
                "sections": [],
            }
        return documents[doc_index]

    def _ensure_page_section(block: Block) -> dict[str, Any]:
        doc = _doc_for(block)
        doc_index = int(doc["document_index"])
        current = section_by_doc.get(doc_index)
        if current and current.get("page") == block.page_number:
            return current

        section = {
            "title": f"Page {block.page_number}",
            "page": block.page_number,
            "path": f"/page_{block.page_number}",
            "content": [],
            "fields": [],
            "inline_records": [],
            "tables": [],
        }
        doc["sections"].append(section)
        section_by_doc[doc_index] = section
        return section

    for block in sorted(blocks, key=lambda b: (b.page_number, b.sequence)):
        payload = block.payload if isinstance(block.payload, dict) else {}
        doc = _doc_for(block)
        doc_index = int(doc["document_index"])

        if block.block_type.value in {"section", "heading"}:
            section = {
                "title": block.text or _path_label(block.path),
                "page": block.page_number,
                "path": block.path,
                "content": [],
                "fields": [],
                "inline_records": [],
                "tables": [],
            }
            doc["sections"].append(section)
            section_by_doc[doc_index] = section
            continue

        section = section_by_doc.get(doc_index) or _ensure_page_section(block)

        if block.block_type.value == "table":
            table = table_by_path.get(block.path)
            if table:
                section["tables"].append(
                    {
                        "title": table.get("display_name") or table.get("title") or "Detected table",
                        "page_label": table.get("page_label"),
                        "columns": table.get("columns", []),
                        "row_count": table.get("n_rows", 0),
                        "sample_rows": (table.get("rows") or table.get("row_preview") or [])[:8],
                    }
                )
            continue

        if block.block_type.value == "table_row" or block.path in table_paths:
            continue

        text = block.text or payload.get("text") or payload.get("layout_text") or ""
        if not str(text).strip():
            continue

        fields = _extract_text_fields(text, block.page_number, block.path, block.block_type.value)
        inline_record = _inline_record_from_text(text)

        content_item = {
            "type": block.block_type.value,
            "page": block.page_number,
            "path": block.path,
            "text": text,
        }
        if fields:
            content_item["fields"] = fields
            section["fields"].extend(fields)
        if inline_record:
            inline_record["page"] = block.page_number
            inline_record["citation"] = f"p.{block.page_number} - {_path_label(block.path)}"
            section["inline_records"].append(inline_record)

        section["content"].append(content_item)

    for doc in documents.values():
        if not doc["sections"]:
            doc["sections"].append(
                {
                    "title": "Document",
                    "page": 1,
                    "path": "/document",
                    "content": [],
                    "fields": [],
                    "inline_records": [],
                    "tables": [],
                }
            )

        for section in doc["sections"]:
            section["content"] = section["content"][:80]
            section["fields"] = section["fields"][:80]
            section["inline_records"] = section["inline_records"][:40]
            section["tables"] = section["tables"][:20]

    return {
        "documents": [documents[key] for key in sorted(documents)],
        "section_count": sum(len(doc["sections"]) for doc in documents.values()),
    }

def _structured_extraction_json(r: dict, run_id: str) -> dict[str, Any]:
    blocks = r.get("blocks", [])
    tables = [
        _table_matrix(block, blocks, include_rows=True)
        for block in blocks
        if block.block_type.value == "table"
    ]
    tables = [table for table in tables if table.get("is_real_table", True)]
    sections = [
        {
            "title": block.text or _path_label(block.path),
            "page": block.page_number,
            "path": block.path,
            "text": block.text,
        }
        for block in blocks
        if block.block_type.value in {"section", "heading"}
    ][:200]
    text_blocks = [
        {
            "page": block.page_number,
            "type": block.block_type.value,
            "path": block.path,
            "text": block.text,
        }
        for block in blocks
        if block.block_type.value in {"paragraph", "list_item", "kv_pair", "figure"}
    ][:500]

    return {
        "run_id": run_id,
        "intelligence": extraction_intelligence_summary(
            blocks,
            coverage=r.get("coverage"),
            source_format=r.get("source_format") or "",
        ),
        "documents": r.get("documents") or [
            {
                "label": r.get("label"),
                "source_format": r.get("source_format"),
                "page_start": 1,
                "page_count": len(r.get("page_imgs", [])),
            }
        ],
        "summary": r.get("summary", {}),
        "coverage": r.get("coverage"),
        "semantic_fields": _semantic_field_candidates(blocks),
        "business_structure": _business_structure(blocks, tables),
        "sections": sections,
        "tables": tables,
        "text_blocks": text_blocks,
        "ai_analysis": r.get("ai_analysis"),
    }

def _business_table_for_json(table: dict[str, Any]) -> dict[str, Any]:
    if not table.get("is_real_table", True):
        return {}

    columns = [str(col or "").strip() for col in table.get("columns", []) if str(col or "").strip()]
    rows = []
    for row in table.get("rows") or table.get("row_preview") or []:
        values = row.get("values") if isinstance(row, dict) else {}
        rows.append(
            {
                "row": row.get("row_key") or row.get("definition") or f"Row {len(rows) + 1}",
                "values": {
                    str(col): values.get(col)
                    for col in columns
                    if str(values.get(col, "")).strip()
                },
                "citation": row.get("citation") or table.get("page_label"),
            }
        )

    return {
        "title": table.get("title") or table.get("display_name") or "Detected table",
        "page": table.get("page_label") or f"Page {table.get('page_first') or '-'}",
        "area": table.get("area") or table.get("context") or "Document",
        "columns": columns,
        "row_count": table.get("n_rows") or len(rows),
        "rows": rows,
        "notes": [
            str(w)
            for w in (table.get("quality_warnings") or [])
            if str(w or "").strip()
        ][:5],
    }

def _ordered_text_item(block: Block) -> Optional[dict[str, Any]]:
    payload = block.payload if isinstance(block.payload, dict) else {}
    text = _clean_business_text(block.text or payload.get("text") or payload.get("layout_text") or "")
    if not text:
        return None

    page_no = int(block.page_number or 1)
    item: dict[str, Any] = {
        "page": page_no,
        "order": int(block.sequence or 0),
        "type": block.block_type.value,
        "path": block.path,
        "text": text,
        "citation": f"p.{page_no} - {_path_label(block.path)}",
    }

    fields = _extract_text_fields(text, page_no, block.path, block.block_type.value)
    if fields:
        item["key_values"] = [
            {
                "name": field.get("field"),
                "value": field.get("value"),
            }
            for field in fields
        ]

    record = _semantic_record_from_text(text, page_no, block.path, block.block_type.value)
    if record:
        item["inferred_record"] = record

    return item

def _document_order_content(blocks: list[Block]) -> list[dict[str, Any]]:
    content = []
    for block in sorted(blocks, key=lambda b: (int(b.page_number or 1), int(b.sequence or 0))):
        if block.block_type.value in {"table", "table_row"}:
            continue
        item = _ordered_text_item(block)
        if item:
            content.append(item)
    return content

def _business_extraction_json(r: dict, run_id: str) -> dict[str, Any]:
    raw = _structured_extraction_json(r, run_id)
    blocks = r.get("blocks", [])
    tables = [_business_table_for_json(table) for table in raw.get("tables", [])]
    ordered_content = _document_order_content(blocks)

    pages: dict[int, dict[str, Any]] = {}
    for item in ordered_content:
        page_no = int(item.get("page") or 1)
        page = pages.setdefault(
            page_no,
            {
                "page": page_no,
                "citation": f"p.{page_no}",
                "content": [],
                "tables": [],
            },
        )
        page["content"].append(item)

    for block in sorted(blocks, key=lambda b: (b.page_number or 1, b.sequence or 0)):
        page_no = int(block.page_number or 1)
        page = pages.setdefault(
            page_no,
            {
                "page": page_no,
                "citation": f"p.{page_no}",
                "content": [],
                "tables": [],
            },
        )

        if block.block_type.value == "table":
            matching = [
                table for table in tables
                if table.get("page") == (f"Page {page_no}") or table.get("page", "").startswith(f"Pages {page_no}-")
            ]
            page["tables"].extend(matching[:1])

    for page in pages.values():
        seen_tables = set()
        unique_tables = []
        for table in page.get("tables", []):
            key = (table.get("title"), table.get("page"), table.get("row_count"))
            if key in seen_tables:
                continue
            seen_tables.add(key)
            unique_tables.append(table)
        page["tables"] = unique_tables

    business_structure = raw.get("business_structure") or {"documents": [], "section_count": 0}
    quality = (raw.get("intelligence") or {}).get("quality") or {}
    template = (raw.get("intelligence") or {}).get("template") or {}
    summary = r.get("summary") or {}

    result = {
        "document_summary": {
            "label": r.get("label"),
            "source_type": r.get("source_format"),
            "page_count": len(r.get("page_imgs", [])) or r.get("native_pages"),
            "detected_template": template.get("template_type") or "generic_document",
            "detected_language": (template.get("language") or {}).get("script"),
            "extraction_quality": {
                "grade": quality.get("grade") or summary.get("quality"),
                "score": quality.get("score"),
                "coverage": r.get("coverage"),
                "warnings": [
                    warning.get("message") if isinstance(warning, dict) else str(warning)
                    for warning in (quality.get("warnings") or [])
                ][:8],
            },
            "counts": {
                "text_blocks": len(ordered_content),
                "tables": len(tables),
                "sections": len(raw.get("sections") or []),
                "pages": len(pages),
            },
        },
        "content": ordered_content,
        "pages": [pages[key] for key in sorted(pages)],
        "business_structure": business_structure,
        "tables": tables,
        "sections": [
            {
                "title": section.get("title"),
                "page": section.get("page"),
                "text": section.get("text"),
                "citation": f"p.{section.get('page')}",
            }
            for section in (raw.get("sections") or [])
        ],
    }

    if r.get("ai_analysis"):
        ai = r.get("ai_analysis") or {}
        result["ai_interpretation"] = ai.get("result") if isinstance(ai, dict) else ai

    result["semantic_fields"] = [
        {
            "field": kv.get("name"),
            "value": kv.get("value"),
            "page": item.get("page"),
            "citation": item.get("citation"),
        }
        for item in ordered_content
        for kv in item.get("key_values", [])
    ]
    return result

def _curated_extraction_context(blocks: list[Block], limit_chars: int = 42000) -> str:
    parts = []
    used = 0

    priority = {"section": 0, "heading": 1, "table": 2, "paragraph": 3, "kv_pair": 4, "list_item": 5, "figure": 6, "table_row": 7}
    for block in sorted(blocks, key=lambda b: (priority.get(b.block_type.value, 9), b.page_number, b.sequence)):
        payload = block.payload if isinstance(block.payload, dict) else {}
        if block.block_type.value == "table":
            header = payload.get("header") or []
            rows = payload.get("rows") or []
            text = f"Page {block.page_number} table {block.text or block.path}. Columns: {' | '.join(str(h) for h in header)}. Sample rows: {json.dumps(rows[:5], ensure_ascii=False, default=str)}"
        elif block.block_type.value == "table_row":
            continue
        else:
            text = f"Page {block.page_number} {block.block_type.value}: {block.text or payload.get('text') or ''}"

        text = re.sub(r"\s+", " ", text).strip()
        if not text:
            continue
        if used + len(text) > limit_chars:
            break
        parts.append(text)
        used += len(text)

    return "\n".join(parts)

def _ai_extraction_summary(blocks: list[Block], summary: dict[str, Any]) -> Optional[dict[str, Any]]:
    try:
        from openai import AzureOpenAI
    except Exception as exc:
        return {"available": False, "error": f"Azure OpenAI library is unavailable: {exc}"}

    endpoint = None
    api_key = None
    deployment = None
    for name in ("AZURE_OPENAI_ENDPOINT",):
        endpoint = endpoint or os.getenv(name)
    for name in ("AZURE_OPENAI_API_KEY",):
        api_key = api_key or os.getenv(name)
    for name in ("AZURE_OPENAI_DEPLOYMENT", "AZURE_OPENAI_CHAT_DEPLOYMENT", "AZURE_OPENAI_DEPLOYMENT_NAME", "AZURE_OPENAI_MODEL"):
        deployment = deployment or os.getenv(name)

    if not (endpoint and api_key and deployment):
        return {
            "available": False,
            "error": "Azure OpenAI is not configured. Set endpoint, API key, and chat deployment.",
        }

    context = _curated_extraction_context(blocks)
    if not context:
        return {"available": False, "error": "No extracted content was available for AI analysis."}

    prompt = {
        "document_stats": summary,
        "extracted_context": context,
    }

    try:
        client = AzureOpenAI(
            api_key=api_key,
            azure_endpoint=endpoint,
            api_version=os.getenv("AZURE_OPENAI_API_VERSION", "2024-08-01-preview"),
        )
        response = client.chat.completions.create(
            model=deployment,
            messages=[
                {
                    "role": "system",
                    "content": (
                        "You analyze extracted document content only. "
                        "Return concise JSON with keys: executive_summary, key_items, tables_found, "
                        "quality_notes, recommended_review. Do not invent facts not present in context."
                    ),
                },
                {"role": "user", "content": json.dumps(prompt, ensure_ascii=False, default=str)},
            ],
            temperature=0.1,
            max_tokens=1400,
            response_format={"type": "json_object"},
        )
        content = response.choices[0].message.content or "{}"
        return {
            "available": True,
            "result": json.loads(content),
            "usage": usage_from_response(response, operation="extraction_ai_summary", model=deployment),
        }
    except Exception as exc:
        return {"available": False, "error": f"Azure OpenAI extraction analysis failed: {type(exc).__name__}: {exc}"}

def _ai_pdf_cell(row: dict[str, Any], column: str) -> str:
    if not isinstance(row, dict):
        return ""
    if column in row:
        return "" if row[column] is None else str(row[column])
    wanted = column.strip().lower()
    for key, value in row.items():
        if str(key).strip().lower() == wanted:
            return "" if value is None else str(value)
    return ""

def _ai_pdf_confidence(value: Optional[float]) -> Optional[int]:
    if value is None:
        return None
    try:
        n = float(value)
    except (TypeError, ValueError):
        return None
    if n <= 1:
        n *= 100
    return max(0, min(100, round(n)))

def _native_change_maps(
    r: dict,
    side: str,
) -> tuple[dict[Any, ChangeType], dict[Any, list[dict[str, Any]]], dict[Any, list[dict[str, Any]]]]:
    change_by_id: dict[Any, ChangeType] = {}
    fields_by_id: dict[Any, list[dict[str, Any]]] = {}
    tokens_by_id: dict[Any, list[dict[str, Any]]] = {}

    for d in r["diffs"]:
        if d.change_type == ChangeType.UNCHANGED:
            continue

        if side == "base":
            if d.change_type == ChangeType.ADDED or not d.base_block_id:
                continue
            block_id = d.base_block_id
        else:
            if d.change_type == ChangeType.DELETED or not d.target_block_id:
                continue
            block_id = d.target_block_id

        change_by_id[block_id] = d.change_type
        fields_by_id[block_id] = _visible_field_diffs(d.field_diffs)
        tokens_by_id[block_id] = [_dump_model(td) for td in d.token_diff]

    return change_by_id, fields_by_id, tokens_by_id

def _native_color(change_type: Optional[ChangeType]) -> str:
    if change_type == ChangeType.ADDED:
        return "added"
    if change_type == ChangeType.DELETED:
        return "deleted"
    if change_type == ChangeType.MODIFIED:
        return "modified"
    return "unchanged"

def _native_block_payload(block: Block) -> dict[str, Any]:
    payload = _safe_payload(block)
    out = {}

    for key, value in payload.items():
        key = str(key)
        if _is_user_hidden_field(key):
            continue
        if key.startswith("__") and key not in {"__table_title__", "__table_context__", "__row_index__"}:
            continue
        out[key] = value

    return out

def _native_row_payload(row: Block, fields_by_id: dict[Any, list[dict[str, Any]]], change_by_id: dict[Any, ChangeType]) -> dict[str, Any]:
    values = _row_values(row)
    change_type = change_by_id.get(row.id)
    return {
        "id": str(row.id),
        "type": row.block_type.value,
        "change_type": change_type.value if change_type else "UNCHANGED",
        "highlight": _native_color(change_type),
        "stable_key": row.stable_key,
        "text": row.text,
        "values": values,
        "field_diffs": fields_by_id.get(row.id, []),
        "row_index": _row_payload_index(row),
    }

def _native_viewer_type(fmt: str | None) -> str:
    if fmt == "spreadsheet":
        return "spreadsheet"
    if fmt == "word":
        return "document"
    return "structured"

def _native_layout_table_text(table: Block, rows: list[Block], header: list[str]) -> str:
    parts = []
    for row in rows:
        values = _row_values(row)
        if values:
            parts.append(" / ".join(_display_text(value, 400) for value in values.values() if _display_text(value, 400)))
        elif row.text:
            parts.append(_display_text(row.text, 600))

    text = "\n".join(part for part in parts if part)
    if text:
        return text

    raw_header = " / ".join(_display_text(col, 200) for col in header if _display_text(col, 200))
    return raw_header or table.text or "Document text"

def _page_dimensions_for(blocks: list[Block], page_number: int) -> tuple[Optional[float], Optional[float]]:
    for block in blocks:
        if block.page_number != page_number:
            continue
        if not isinstance(block.payload, dict):
            continue

        page_width = block.payload.get("page_width")
        page_height = block.payload.get("page_height")

        if page_width and page_height:
            return page_width, page_height

    return None, None

def _process_extract(
    run_id: str,
    work: Path,
    sources: list[Path],
    label: str,
    use_ai: bool,
    family_id: Optional[str] = None,
) -> None:
    try:
        selected_family_id = str(family_id or _RUNS.get(run_id, {}).get("family_id") or "").strip()
        if selected_family_id:
            try:
                from .routers.admin import resolve_dataset_for_principal
                selected_dataset = resolve_dataset_for_principal(selected_family_id)
                _RUNS.setdefault(run_id, {}).update(
                    {
                        "family_id": selected_family_id,
                        "family_supplier": selected_dataset.get("supplier"),
                        "family_name": selected_dataset.get("family_name"),
                        "prompt_profile": selected_dataset.get("prompt_profile") or {},
                        "template_profile": selected_dataset.get("template_profile") or {},
                    }
                )
            except Exception as exc:
                raise RuntimeError(f"Could not resolve selected family {selected_family_id}: {exc}") from exc

        _set_run_status(run_id, "Preparing uploaded document", 12)

        converted_dir = work / "converted"
        converted_dir.mkdir(parents=True, exist_ok=True)
        all_blocks: list[Block] = []
        all_page_imgs: list[Path] = []
        pdf_paths: list[Path] = []
        coverages: list[float] = []
        documents_meta: list[dict[str, Any]] = []
        page_offset = 0

        total_sources = max(1, len(sources))
        for idx, source in enumerate(sources, start=1):
            source_label = Path(source).stem.replace("extract_", "", 1)
            fmt = source_kind(source)
            progress_base = 12 + int((idx - 1) * 52 / total_sources)

            _set_run_status(run_id, f"Converting {source_label}", progress_base)
            pdf_path = normalize_to_pdf(source, converted_dir / f"extract_{idx}")
            pdf_paths.append(pdf_path)

            _set_run_status(run_id, f"Rendering preview pages for {source_label}", min(62, progress_base + 10))
            page_imgs = render_pages(str(pdf_path), str(work / f"pages_extract_{idx}"))
            all_page_imgs.extend(page_imgs)
            
            # Keep in memory cache updated
            if run_id not in _RUNS:
                _RUNS[run_id] = {}
            _RUNS[run_id]["page_imgs"] = all_page_imgs

            _set_run_status(run_id, f"Extracting text, tables, and image content from {source_label}", min(70, progress_base + 24))
            blocks, source_sha, cache_hit = _cached_extract_blocks(source, pdf_path)
            _RUNS[run_id].setdefault("document_fingerprints", []).append(
                {
                    "label": source_label,
                    "source_format": fmt,
                    "sha256": source_sha,
                    "cache_hit": cache_hit,
                }
            )
            if cache_hit:
                _RUNS[run_id].setdefault("cache_hits", {})[source_label] = True
            blocks = _adjust_extraction_blocks(
                blocks,
                doc_index=idx,
                label=source_label,
                page_offset=page_offset,
            )
            all_blocks.extend(blocks)

            _set_run_status(run_id, f"Checking extraction coverage for {source_label}", min(76, progress_base + 38))
            coverage = coverage_for_source(source, pdf_path, blocks, coverage_pct)
            enrich_blocks(
                blocks,
                source_path=source,
                source_format=fmt,
                document_label=source_label,
                coverage=coverage,
            )
            coverages.append(coverage)
            documents_meta.append(
                {
                    "index": idx,
                    "label": source_label,
                    "filename": source.name,
                    "source_format": fmt,
                    "sha256": source_sha,
                    "cache_hit": cache_hit,
                    "pdf_path": str(pdf_path),
                    "page_start": page_offset + 1,
                    "page_count": len(page_imgs),
                    "native_pages": _max_block_page(blocks),
                    "coverage": coverage,
                }
            )
            page_offset += len(page_imgs)

        blocks = all_blocks
        page_imgs = all_page_imgs
        fmt = source_kind(sources[0]) if len(sources) == 1 else "mixed"
        coverage = round(sum(coverages) / len(coverages), 2) if coverages else 0.0
        summary = _extraction_summary(blocks, coverage, len(page_imgs), fmt)
        summary["document_count"] = len(sources)
        summary["documents"] = documents_meta

        ai_analysis = None
        if use_ai:
            _set_run_status(run_id, "Preparing AI-assisted document analysis", 78)
            ai_analysis = _ai_extraction_summary(blocks, summary)
            if isinstance(ai_analysis, dict):
                add_usage(_RUNS[run_id], ai_analysis.get("usage"))

        _set_run_status(run_id, "Finalizing extraction workspace", 92)

        _RUNS[run_id].update(
            {
                "status": "complete",
                "status_message": "Extraction complete",
                "progress": 100,
                "finished_at": now_iso(),
                "kind": "extraction",
                "work": work,
                "label": label,
                "source": sources[0] if sources else None,
                "sources": sources,
                "pdf": pdf_paths[0] if pdf_paths else None,
                "pdfs": pdf_paths,
                "source_format": fmt,
                "documents": documents_meta,
                "page_imgs": page_imgs,
                "native_pages": _max_block_page(blocks),
                "blocks": blocks,
                "coverage": coverage,
                "summary": summary,
                "ai_analysis": ai_analysis,
            }
        )
        save_run_payload(run_id, _RUNS[run_id])
        _sync_job_metadata(run_id)
    except Exception as exc:
        _RUNS.setdefault(run_id, {}).update(
            {
                "status": "failed",
                "status_message": "Extraction failed",
                "progress": _RUNS.get(run_id, {}).get("progress", 0),
                "finished_at": now_iso(),
                "error": str(exc),
                "traceback": traceback.format_exc(),
            }
        )
        _sync_job_metadata(run_id)

def _process_compare(
    run_id: str,
    work: Path,
    base_source: Path,
    target_source: Path,
    base_label: str,
    target_label: str,
    use_llm: bool,
    family_id: Optional[str] = None,
) -> None:
    try:
        _set_run_status(run_id, "Preparing uploaded documents", 10)

        converted_dir = work / "converted"
        converted_dir.mkdir(parents=True, exist_ok=True)
        base_pdf = normalize_to_pdf(base_source, converted_dir / "base")
        target_pdf = normalize_to_pdf(target_source, converted_dir / "target")

        _RUNS[run_id].update(
            {
                "base_source": base_source,
                "target_source": target_source,
                "base_pdf": base_pdf,
                "target_pdf": target_pdf,
                "base_format": source_kind(base_source),
                "target_format": source_kind(target_source),
            }
        )

        _set_run_status(run_id, "Rendering document pages", 18)

        base_imgs = render_pages(str(base_pdf), str(work / "pages_base"))
        target_imgs = render_pages(str(target_pdf), str(work / "pages_target"))

        _RUNS[run_id].update(
            {
                "base_imgs": base_imgs,
                "target_imgs": target_imgs,
            }
        )

        _set_run_status(run_id, "Extracting text, tables, and document structure", 36)

        base_blocks, base_sha, base_cache_hit = _cached_extract_blocks(base_source, base_pdf)
        target_blocks, target_sha, target_cache_hit = _cached_extract_blocks(target_source, target_pdf)
        _RUNS[run_id].update(
            {
                "base_source_sha": base_sha,
                "target_source_sha": target_sha,
                "same_source_file": base_sha == target_sha,
                "cache_hits": {
                    "base": base_cache_hit,
                    "target": target_cache_hit,
                },
            }
        )
        if base_cache_hit or target_cache_hit or base_sha == target_sha:
            reused = []
            if base_cache_hit:
                reused.append("baseline")
            if target_cache_hit:
                reused.append("revised")
            if base_sha == target_sha:
                reused.append("identical file fingerprint")
            _set_run_status(run_id, f"Reused deterministic extraction for {', '.join(reused)}", 44)

        _set_run_status(run_id, "Checking extraction coverage", 50)

        cov_b = coverage_for_source(base_source, base_pdf, base_blocks, coverage_pct)
        cov_t = coverage_for_source(target_source, target_pdf, target_blocks, coverage_pct)
        enrich_blocks(
            base_blocks,
            source_path=base_source,
            source_format=source_kind(base_source),
            document_label=base_label,
            coverage=cov_b,
        )
        enrich_blocks(
            target_blocks,
            source_path=target_source,
            source_format=source_kind(target_source),
            document_label=target_label,
            coverage=cov_t,
        )

        _set_run_status(run_id, "Comparing semantic changes", 64)

        diffs = diff_blocks(base_blocks, target_blocks)
        stats = diff_stats(diffs)

        _set_run_status(
            run_id,
            "Preparing AI review summary" if use_llm else "Preparing review summary",
            78,
        )
        selected_family_id = str(family_id or _RUNS.get(run_id, {}).get("family_id") or "").strip()
        selected_dataset = None
        if selected_family_id:
            try:
                from .routers.admin import resolve_dataset_for_principal
                selected_dataset = resolve_dataset_for_principal(selected_family_id)
            except Exception as exc:
                raise RuntimeError(f"Could not resolve selected family {selected_family_id}: {exc}") from exc

        if selected_dataset:
            family_supplier = str(selected_dataset.get("supplier") or "uploaded")
            family_name = str(selected_dataset.get("family_name") or "document_comparison")
            prompt_profile = selected_dataset.get("prompt_profile") or {}
            _RUNS[run_id].update(
                {
                    "family_id": selected_family_id,
                    "family_supplier": family_supplier,
                    "family_name": family_name,
                    "prompt_profile": prompt_profile,
                    "template_profile": selected_dataset.get("template_profile") or {},
                }
            )
        else:
            family_supplier, family_name = infer_family_supplier_and_name(base_label, target_label, base_blocks + target_blocks)
            prompt_profile = load_prompt_profile_for_family(
                family_supplier,
                family_name,
                tenant_id=str(_RUNS.get(run_id, {}).get("tenant_id") or "default"),
                business_unit_id=str(_RUNS.get(run_id, {}).get("business_unit_id") or "default"),
            )

        summary = summarize(
            diffs,
            base_blocks,
            target_blocks,
            use_llm=use_llm,
            usage_callback=lambda usage: add_usage(_RUNS[run_id], usage),
            prompt_profile=prompt_profile,
        )

        _set_run_status(run_id, "Storing extracted tables and comparison data", 88)

        coverage = {"base": cov_b, "target": cov_t}
        db_run_id, db_error = _persist_run_safely(
            run_id=run_id,
            base_label=base_label,
            target_label=target_label,
            base_pdf=base_pdf,
            target_pdf=target_pdf,
            base_blocks=base_blocks,
            target_blocks=target_blocks,
            diffs=diffs,
            summary=summary,
            stats=stats,
            coverage=coverage,
            base_page_count=len(base_imgs),
            target_page_count=len(target_imgs),
            family_supplier=family_supplier,
            family_name=family_name,
            enable_embeddings=use_llm,
            usage_callback=lambda usage: add_usage(_RUNS[run_id], usage),
            family_id=selected_family_id or None,
        )

        _RUNS[run_id].update(
            {
                "status": "complete",
                "status_message": "Comparison complete",
                "progress": 100,
                "finished_at": now_iso(),
                "work": work,
                "base_pdf": base_pdf,
                "target_pdf": target_pdf,
                "base_source": base_source,
                "target_source": target_source,
                "base_format": source_kind(base_source),
                "target_format": source_kind(target_source),
                "base_native_pages": _max_block_page(base_blocks),
                "target_native_pages": _max_block_page(target_blocks),
                "base_label": base_label,
                "target_label": target_label,
                "base_imgs": base_imgs,
                "target_imgs": target_imgs,
                "base_blocks": base_blocks,
                "target_blocks": target_blocks,
                "diffs": diffs,
                "stats": stats,
                "summary": summary,
                "coverage": coverage,
                "db_run_id": db_run_id,
                "db_error": db_error,
                "family_id": selected_family_id,
                "family_supplier": family_supplier,
                "family_name": family_name,
            }
        )
        save_run_payload(run_id, _RUNS[run_id])
        _sync_job_metadata(run_id)

    except Exception as exc:
        _RUNS.setdefault(run_id, {}).update(
            {
                "status": "failed",
                "status_message": "Comparison failed",
                "progress": _RUNS.get(run_id, {}).get("progress", 0),
                "finished_at": now_iso(),
                "error": str(exc),
                "traceback": traceback.format_exc(),
            }
        )
        _sync_job_metadata(run_id)
