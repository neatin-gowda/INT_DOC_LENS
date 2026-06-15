"""
Comparison router - handles POST /compare, runs retrieval, page rendering, and diffs.
"""
from __future__ import annotations

import tempfile
import uuid
import threading
import traceback
import json
from collections import defaultdict
from pathlib import Path
from typing import Optional

from fastapi import APIRouter, File, Form, HTTPException, UploadFile
from fastapi.responses import FileResponse

from ..api_schemas import CompareResponse
from ..api_helpers import (
    _RUNS,
    _ensure_run,
    _ensure_complete,
    _sync_job_metadata,
    _process_compare,
    _max_block_page,
    _visible_field_diffs,
    _dump_model,
    _summary_quality_profile,
    _native_change_maps,
    _native_color,
    _native_block_payload,
    _native_row_payload,
    _native_viewer_type,
    _native_layout_table_text,
    _page_dimensions_for,
)
from ..ingestion import save_upload_to_source, source_kind, supported_input_extensions
from ..job_store import empty_usage, now_iso
from ..security import job_ownership_fields
from ..models import Block, ChangeType
from ..schema_discovery import infer_family_supplier_and_name, load_prompt_profile_for_family
from ..services.table_tools import _column_names, _table_exposure, _table_rows
from .admin import resolve_dataset_for_principal

router = APIRouter()


def _prompt_profile_directives(prompt_profile: dict | None) -> str:
    if not isinstance(prompt_profile, dict):
        return ""
    values = []
    for key in ("summarization_directives", "extraction_directives"):
        raw = prompt_profile.get(key)
        if isinstance(raw, str) and raw.strip():
            values.append(raw.strip())
        elif isinstance(raw, list):
            values.extend(str(item).strip() for item in raw if str(item).strip())
    if not values:
        return ""
    body = " ".join(f"- {item}" for item in values[:12])
    return f" Family-specific guidance: {body} "

@router.post("/compare", response_model=CompareResponse)
async def compare(
    base: UploadFile = File(..., description="Older / previous version document"),
    target: UploadFile = File(..., description="Newer / current version document"),
    use_llm: bool = Form(False),
    family_id: Optional[str] = Form(None),
):
    if not base.filename or not target.filename:
        raise HTTPException(400, "Both files required")
    if not family_id:
        raise HTTPException(400, "A use case must be selected before document comparison.")

    selected_dataset = resolve_dataset_for_principal(family_id)

    run_id = str(uuid.uuid4())
    work = Path(tempfile.mkdtemp(prefix=f"specdiff_{run_id}_"))

    base_label = Path(base.filename).stem
    target_label = Path(target.filename).stem

    if run_id not in _RUNS:
        _RUNS[run_id] = {}

    _RUNS[run_id].update({
        "kind": "comparison",
        "status": "queued",
        "status_message": "Uploading documents",
        "progress": 5,
        "created_at": now_iso(),
        **job_ownership_fields(),
        "work": work,
        "base_label": base_label,
        "target_label": target_label,
        "base_imgs": [],
        "target_imgs": [],
        "stats": {},
        "coverage": {},
        "ai_usage": empty_usage(),
        "supported_upload_formats": supported_input_extensions(),
        "family_id": str(family_id or ""),
        "family_supplier": selected_dataset.get("supplier") if selected_dataset else None,
        "family_name": selected_dataset.get("family_name") if selected_dataset else None,
        "prompt_profile": selected_dataset.get("prompt_profile") if selected_dataset else {},
        "template_profile": selected_dataset.get("template_profile") if selected_dataset else {},
    })
    _sync_job_metadata(run_id)

    try:
        base_source = save_upload_to_source(base, work, "base")
        target_source = save_upload_to_source(target, work, "target")
        _RUNS[run_id].update(
            {
                "base_source": base_source,
                "target_source": target_source,
                "base_format": source_kind(base_source),
                "target_format": source_kind(target_source),
            }
        )
        _sync_job_metadata(run_id)
    except Exception as exc:
        _RUNS[run_id].update(
            {
                "status": "failed",
                "status_message": "Could not save uploaded documents",
                "progress": 0,
                "finished_at": now_iso(),
                "error": str(exc),
                "traceback": traceback.format_exc(),
            }
        )
        _sync_job_metadata(run_id)
        raise HTTPException(500, "Could not save uploaded documents")

    from ..jobs.queue import enqueue_job
    enqueue_job(
        run_id=run_id,
        kind="comparison",
        args={
            "work": str(work),
            "base_source": str(base_source),
            "target_source": str(target_source),
            "base_label": base_label,
            "target_label": target_label,
            "use_llm": use_llm,
            "family_id": str(family_id or ""),
        },
        run_dict=_RUNS[run_id],
    )

    return CompareResponse(
        run_id=run_id,
        status="queued",
        status_message="Documents uploaded. Comparison is starting.",
        progress=5,
    )

@router.get("/runs/{run_id}")
def run_meta(run_id: str):
    r = _ensure_run(run_id)

    return {
        "run_id": run_id,
        "status": r.get("status", "running"),
        "status_message": r.get("status_message", "Working"),
        "progress": r.get("progress", 0),
        "error": r.get("error"),
        "traceback": r.get("traceback"),
        "base_label": r.get("base_label"),
        "target_label": r.get("target_label"),
        "base_format": r.get("base_format"),
        "target_format": r.get("target_format"),
        "supported_upload_formats": supported_input_extensions(),
        "stats": r.get("stats", {}),
        "coverage": r.get("coverage", {}),
        "db_run_id": r.get("db_run_id"),
        "db_error": r.get("db_error"),
        "ai_usage": r.get("ai_usage", empty_usage()),
        "n_pages_base": len(r.get("base_imgs", [])),
        "n_pages_target": len(r.get("target_imgs", [])),
        "base_native_pages": r.get("base_native_pages") or _max_block_page(r.get("base_blocks", [])),
        "target_native_pages": r.get("target_native_pages") or _max_block_page(r.get("target_blocks", [])),
    }

@router.get("/runs/{run_id}/diff")
def get_diff(
    run_id: str,
    change_type: Optional[str] = None,
    section: Optional[str] = None,
    stable_key: Optional[str] = None,
    limit: int = 200,
):
    r = _ensure_complete(run_id)

    base_by_id = {b.id: b for b in r["base_blocks"]}
    target_by_id = {b.id: b for b in r["target_blocks"]}
    out = []

    for d in r["diffs"]:
        if change_type and d.change_type.value != change_type.upper():
            continue

        b = base_by_id.get(d.base_block_id) if d.base_block_id else None
        t = target_by_id.get(d.target_block_id) if d.target_block_id else None
        block = b or t

        if not block:
            continue
        if section and section.lower() not in (block.path or "").lower():
            continue
        if stable_key and (block.stable_key or "").upper() != stable_key.upper():
            continue

        out.append(
            {
                "change_type": d.change_type.value,
                "stable_key": block.stable_key,
                "block_type": block.block_type.value,
                "path": block.path,
                "page_base": b.page_number if b else None,
                "page_target": t.page_number if t else None,
                "before": b.text if b else None,
                "after": t.text if t else None,
                "field_diffs": _visible_field_diffs(d.field_diffs),
                "token_diff": [_dump_model(td) for td in d.token_diff],
                "similarity": d.similarity,
                "impact": d.impact_score,
                "bbox_base": b.bbox if b else None,
                "bbox_target": t.bbox if t else None,
            }
        )

        if len(out) >= limit:
            break

    return {"diffs": out, "count": len(out)}

@router.get("/runs/{run_id}/summary")
def get_summary(run_id: str):
    r = _ensure_complete(run_id)
    rows = [_dump_model(s) for s in r["summary"]]
    return {"summary": rows, "rows": rows, "stats": r.get("stats", {}), "quality": _summary_quality_profile(r)}

@router.post("/runs/{run_id}/enhance-summary")
def enhance_summary(run_id: str, req: EnhanceSummaryReq):
    # This imports nl_query dynamically to prevent import cycles.
    from ..query import query as nl_query
    from ..api_schemas import EnhanceSummaryReq
    r = _ensure_complete(run_id)
    quality = _summary_quality_profile(r, threshold=req.threshold)

    feedback = None
    if req.feedback is not None:
        from ..api_helpers import _feedback_record, _store_feedback
        feedback_record = _feedback_record(run_id, r, req.feedback, quality)
        r.setdefault("feedback", []).append(feedback_record)
        _store_feedback(feedback_record)
        feedback = feedback_record
    elif req.feedback_id:
        feedback = next((item for item in r.get("feedback", []) if item.get("id") == req.feedback_id), None)

    if not feedback:
        raise HTTPException(400, "Feedback is required before advanced AI enhancement.")

    focus_items = feedback.get("selected_focus") or quality.get("focus_items") or []
    page_hint = feedback.get("page_numbers") or "not specified"
    supplier, family_name = infer_family_supplier_and_name(
        r.get("base_label", ""),
        r.get("target_label", ""),
        (r.get("base_blocks") or []) + (r.get("target_blocks") or []),
    )
    prompt_profile = load_prompt_profile_for_family(
        supplier,
        family_name,
        tenant_id=str(r.get("tenant_id") or "default"),
        business_unit_id=str(r.get("business_unit_id") or "default"),
    )
    directives = _prompt_profile_directives(prompt_profile)
    prompt = (
        "Improve the review summary using only extracted comparison evidence. "
        "Focus on the lower-confidence or user-flagged areas. "
        "For each selected focus area, compare both the baseline document and the revised document before concluding. "
        "Do not improve from one side only; every answer must explain the baseline-vs-revised evidence. "
        f"Document type: {feedback.get('document_type')}. "
        f"System score: {feedback.get('system_score')}. User score: {feedback.get('user_score')}. "
        f"Reviewer flagged areas: {feedback.get('missing_areas')}. "
        f"Reviewer page hints: {page_hint}. "
        f"Reviewer comment: {feedback.get('comments')}. "
        f"{directives}"
        "Return a business-facing table with columns Feature, Change, Seek Clarification, Evidence. "
        f"Low-confidence focus items: {json.dumps(focus_items[:20], ensure_ascii=False, default=str)}"
    )

    result = nl_query(
        prompt,
        r["diffs"],
        r["base_blocks"],
        r["target_blocks"],
        db_run_id=r.get("db_run_id"),
        mode="ai",
        response_language=req.response_language,
    )

    if not isinstance(result, dict):
        result = {
            "answer": f"I found {len(result)} matching changes for the feedback scope.",
            "rows": result[:80],
            "count": len(result),
            "mode": "fast",
        }

    from ..api_usage import add_usage
    add_usage(r, result.get("usage"))
    _sync_job_metadata(run_id)
    result["feedback_id"] = feedback["id"]
    result["quality"] = quality
    result["job_ai_usage"] = r.get("ai_usage", empty_usage())
    return result

@router.get("/runs/{run_id}/pages/{side}/{n}")
def get_page(run_id: str, side: str, n: int):
    r = _ensure_complete(run_id)

    if side not in ("base", "target"):
        raise HTTPException(400, "side must be base|target")

    imgs = r["base_imgs"] if side == "base" else r["target_imgs"]
    if n < 1 or n > len(imgs):
        raise HTTPException(404, "page out of range")

    return FileResponse(imgs[n - 1], media_type="image/png")

@router.get("/runs/{run_id}/native-page/{side}/{n}")
def get_native_page(run_id: str, side: str, n: int):
    r = _ensure_complete(run_id)

    if side not in ("base", "target"):
        raise HTTPException(400, "side must be base|target")

    blocks = r["base_blocks"] if side == "base" else r["target_blocks"]
    fmt = r.get("base_format") if side == "base" else r.get("target_format")
    change_by_id, fields_by_id, tokens_by_id = _native_change_maps(r, side)

    table_by_id = {
        b.id: b for b in blocks
        if b.block_type.value == "table"
    }
    rows_by_table_on_page: dict[Any, list[Block]] = defaultdict(list)

    for row in blocks:
        if row.block_type.value != "table_row":
            continue
        if row.page_number == n and row.parent_id in table_by_id:
            rows_by_table_on_page[row.parent_id].append(row)

    table_ids_rendered = {
        b.id for b in blocks
        if b.block_type.value == "table" and (b.page_number == n or b.id in rows_by_table_on_page)
    }

    items = []
    for block in sorted(blocks, key=lambda b: (b.page_number, b.sequence)):
        if block.page_number != n and block.id not in rows_by_table_on_page:
            continue

        if block.block_type.value == "table_row" and block.parent_id in table_ids_rendered:
            continue

        if block.block_type.value == "table_row":
            continue

        change_type = change_by_id.get(block.id)
        item = {
            "id": str(block.id),
            "type": block.block_type.value,
            "path": block.path,
            "text": block.text,
            "stable_key": block.stable_key,
            "change_type": change_type.value if change_type else "UNCHANGED",
            "highlight": _native_color(change_type),
            "payload": _native_block_payload(block),
            "field_diffs": fields_by_id.get(block.id, []),
            "token_diff": tokens_by_id.get(block.id, []),
        }

        if block.block_type.value == "table":
            rows = rows_by_table_on_page.get(block.id) or [
                row for row in _table_rows(block, blocks)
                if row.page_number == n or row.page_number == block.page_number
            ]
            header = _column_names(block, rows)
            exposure = _table_exposure(block, rows, header)
            if not exposure["is_real_table"]:
                item["type"] = "paragraph"
                item["text"] = _native_layout_table_text(block, rows, header)
                item["payload"]["layout_table"] = True
                item["payload"]["table_classification"] = exposure["reason"]
            else:
                item["header"] = header
                item["rows"] = [
                    _native_row_payload(row, fields_by_id, change_by_id)
                    for row in rows
                ]

        items.append(item)

    rendered_table_ids = {item["id"] for item in items if item.get("type") == "table"}
    missing_table_ids = [
        table_id for table_id in rows_by_table_on_page.keys()
        if str(table_id) not in rendered_table_ids
    ]

    for table_id in missing_table_ids:
        table = table_by_id.get(table_id)
        if not table:
            continue

        rows = rows_by_table_on_page.get(table_id, [])
        change_type = change_by_id.get(table.id)
        header = _column_names(table, rows)
        exposure = _table_exposure(table, rows, header)
        if not exposure["is_real_table"]:
            items.append(
                {
                    "id": str(table.id),
                    "type": "paragraph",
                    "path": table.path,
                    "text": _native_layout_table_text(table, rows, header),
                    "stable_key": table.stable_key,
                    "change_type": change_type.value if change_type else "UNCHANGED",
                    "highlight": _native_color(change_type),
                    "payload": {
                        **_native_block_payload(table),
                        "layout_table": True,
                        "table_classification": exposure["reason"],
                    },
                    "field_diffs": fields_by_id.get(table.id, []),
                    "token_diff": tokens_by_id.get(table.id, []),
                }
            )
            continue
        items.append(
            {
                "id": str(table.id),
                "type": table.block_type.value,
                "path": table.path,
                "text": table.text,
                "stable_key": table.stable_key,
                "change_type": change_type.value if change_type else "UNCHANGED",
                "highlight": _native_color(change_type),
                "payload": _native_block_payload(table),
                "field_diffs": fields_by_id.get(table.id, []),
                "token_diff": tokens_by_id.get(table.id, []),
                "header": header,
                "rows": [
                    _native_row_payload(row, fields_by_id, change_by_id)
                    for row in rows
                ],
            }
        )

    max_native_page = max([b.page_number for b in blocks], default=1)

    return {
        "page": n,
        "side": side,
        "format": fmt,
        "viewer": "native",
        "viewer_type": _native_viewer_type(fmt),
        "max_page": max_native_page,
        "items": items,
    }

def _get_content_bbox(side_blocks: list[Any], n: int, page_width: float, page_height: float) -> dict[str, float]:
    bboxes = [b.bbox for b in side_blocks if b.page_number == n and b.bbox]
    if not bboxes:
        return {"x_min": 0.0, "y_min": 0.0, "x_max": page_width, "y_max": page_height}
    
    x0s = [box[0] for box in bboxes]
    y0s = [box[1] for box in bboxes]
    x1s = [box[2] for box in bboxes]
    y1s = [box[3] for box in bboxes]
    
    padding = 15.0
    return {
        "x_min": float(max(0.0, min(x0s) - padding)),
        "y_min": float(max(0.0, min(y0s) - padding)),
        "x_max": float(min(page_width, max(x1s) + padding)),
        "y_max": float(min(page_height, max(y1s) + padding))
    }


@router.get("/runs/{run_id}/overlay/{side}/{n}")
def get_overlay(run_id: str, side: str, n: int):
    r = _ensure_complete(run_id)

    if side not in ("base", "target"):
        raise HTTPException(400, "side must be base|target")

    base_by_id = {b.id: b for b in r["base_blocks"]}
    target_by_id = {b.id: b for b in r["target_blocks"]}
    side_blocks = r["base_blocks"] if side == "base" else r["target_blocks"]

    page_width, page_height = _page_dimensions_for(side_blocks, n)

    overlay_style_map = {
        "ADDED": {
            "fill": "rgba(31, 126, 65, 0.14)",
            "border": "rgba(31, 126, 65, 0.82)",
        },
        "DELETED": {
            "fill": "rgba(176, 46, 46, 0.13)",
            "border": "rgba(176, 46, 46, 0.82)",
        },
        "MODIFIED": {
            "fill": "rgba(196, 85, 16, 0.12)",
            "border": "rgba(196, 85, 16, 0.86)",
        },
    }

    regions = []

    for d in r["diffs"]:
        if d.change_type == ChangeType.UNCHANGED:
            continue

        if side == "base":
            blk = base_by_id.get(d.base_block_id) if d.base_block_id else None
            if not blk or blk.page_number != n:
                continue
            if d.change_type == ChangeType.ADDED:
                continue
        else:
            blk = target_by_id.get(d.target_block_id) if d.target_block_id else None
            if not blk or blk.page_number != n:
                continue
            if d.change_type == ChangeType.DELETED:
                continue

        if not blk.bbox:
            continue

        has_row_children = any(
            c.parent_id == blk.id and c.block_type.value == "table_row"
            for c in side_blocks
        )
        if blk.block_type.value == "table" and has_row_children:
            continue

        region_page_width = None
        region_page_height = None
        if isinstance(blk.payload, dict):
            region_page_width = blk.payload.get("page_width")
            region_page_height = blk.payload.get("page_height")

        regions.append(
            {
                "bbox": blk.bbox,
                "change_type": d.change_type.value,
                "color": overlay_style_map[d.change_type.value]["fill"],
                "border_color": overlay_style_map[d.change_type.value]["border"],
                "stable_key": blk.stable_key,
                "block_type": blk.block_type.value,
                "page_width": region_page_width or page_width,
                "page_height": region_page_height or page_height,
            }
        )

    return {
        "page": n,
        "side": side,
        "page_width": page_width,
        "page_height": page_height,
        "content_box": _get_content_bbox(side_blocks, n, page_width, page_height),
        "regions": regions,
    }
