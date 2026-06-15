"""
Extraction router - handles POST /extract and extract-runs metadata, blocks, tables, images, and JSON downloads.
"""
from __future__ import annotations

import json
import re
import tempfile
import uuid
import threading
import traceback
from pathlib import Path
from typing import Any, Optional

from fastapi import APIRouter, File, Form, HTTPException, UploadFile
from fastapi.responses import FileResponse, Response
from rapidfuzz import fuzz

from ..api_schemas import ExtractResponse, QueryReq
from ..api_helpers import (
    _RUNS,
    _ensure_run,
    _ensure_extraction_complete,
    _sync_job_metadata,
    _process_extract,
    _max_block_page,
    _block_record,
    _business_extraction_json,
)
from ..ingestion import save_upload_to_source, source_kind, supported_input_extensions
from ..job_store import empty_usage, now_iso
from ..security import job_ownership_fields
from ..services.table_tools import _table_matrix
from .admin import resolve_dataset_for_principal

router = APIRouter()

@router.post("/extract", response_model=ExtractResponse)
async def extract_document(
    document: list[UploadFile] = File(..., description="One or more documents/images to extract"),
    use_ai: bool = Form(False),
    family_id: Optional[str] = Form(None),
):
    uploads = [item for item in document if item and item.filename]
    if not uploads:
        raise HTTPException(400, "At least one document file is required")
    if not family_id:
        raise HTTPException(400, "A use case must be selected before document extraction.")
    selected_dataset = resolve_dataset_for_principal(family_id)

    run_id = str(uuid.uuid4())
    work = Path(tempfile.mkdtemp(prefix=f"doc_extract_{run_id}_"))
    label = Path(uploads[0].filename or "document").stem if len(uploads) == 1 else f"{len(uploads)} documents"

    if run_id not in _RUNS:
        _RUNS[run_id] = {}

    _RUNS[run_id].update({
        "kind": "extraction",
        "status": "queued",
        "status_message": "Uploading document",
        "progress": 5,
        "created_at": now_iso(),
        **job_ownership_fields(),
        "work": work,
        "label": label,
        "page_imgs": [],
        "coverage": None,
        "summary": {},
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
        sources = [
            save_upload_to_source(upload, work, f"extract_{idx + 1}")
            for idx, upload in enumerate(uploads)
        ]
        _RUNS[run_id].update(
            {
                "source": sources[0],
                "sources": sources,
                "source_format": source_kind(sources[0]) if len(sources) == 1 else "mixed",
                "documents": [
                    {
                        "index": idx + 1,
                        "label": Path(upload.filename or source.name).stem,
                        "filename": upload.filename,
                        "source_format": source_kind(source),
                    }
                    for idx, (upload, source) in enumerate(zip(uploads, sources))
                ],
            }
        )
        _sync_job_metadata(run_id)
    except Exception as exc:
        _RUNS[run_id].update(
            {
                "status": "failed",
                "status_message": "Could not save uploaded document",
                "progress": 0,
                "finished_at": now_iso(),
                "error": str(exc),
                "traceback": traceback.format_exc(),
            }
        )
        _sync_job_metadata(run_id)
        raise HTTPException(500, "Could not save uploaded document")

    from ..jobs.queue import enqueue_job
    enqueue_job(
        run_id=run_id,
        kind="extraction",
        args={
            "work": str(work),
            "sources": [str(s) for s in sources],
            "label": label,
            "use_ai": use_ai,
            "family_id": str(family_id or ""),
        },
        run_dict=_RUNS[run_id],
    )

    return ExtractResponse(
        run_id=run_id,
        status="queued",
        status_message="Document uploaded. Extraction is starting.",
        progress=5,
    )

@router.get("/extract-runs/{run_id}")
def extract_run_meta(run_id: str):
    r = _ensure_run(run_id)

    if r.get("kind") != "extraction":
        raise HTTPException(404, "no such extraction run")

    return {
        "run_id": run_id,
        "kind": "extraction",
        "status": r.get("status", "running"),
        "status_message": r.get("status_message", "Working"),
        "progress": r.get("progress", 0),
        "error": r.get("error"),
        "traceback": r.get("traceback"),
        "label": r.get("label"),
        "source_format": r.get("source_format"),
        "documents": r.get("documents", []),
        "supported_upload_formats": supported_input_extensions(),
        "coverage": r.get("coverage"),
        "summary": r.get("summary", {}),
        "ai_analysis": r.get("ai_analysis"),
        "ai_usage": r.get("ai_usage", empty_usage()),
        "n_pages": len(r.get("page_imgs", [])),
        "native_pages": r.get("native_pages") or _max_block_page(r.get("blocks", [])),
    }

@router.get("/extract-runs/{run_id}/pages/{n}")
def get_extract_page(run_id: str, n: int):
    r = _ensure_extraction_complete(run_id)
    imgs = r.get("page_imgs", [])

    if n < 1 or n > len(imgs):
        raise HTTPException(404, "page out of range")

    return FileResponse(imgs[n - 1], media_type="image/png")

@router.get("/extract-runs/{run_id}/blocks")
def get_extract_blocks(
    run_id: str,
    block_type: Optional[str] = None,
    page: Optional[int] = None,
    limit: int = 500,
):
    r = _ensure_extraction_complete(run_id)
    blocks = r.get("blocks", [])
    out = []

    for block in blocks:
        if block_type and block.block_type.value != block_type:
            continue
        if page and block.page_number != page:
            continue
        out.append(_block_record(block, include_payload=True))
        if len(out) >= max(1, min(limit, 2000)):
            break

    return {"blocks": out, "count": len(out), "total_blocks": len(blocks)}

@router.get("/extract-runs/{run_id}/tables")
def get_extract_tables(run_id: str, include_rows: bool = False):
    r = _ensure_extraction_complete(run_id)
    blocks = r.get("blocks", [])
    tables = [
        _table_matrix(block, blocks, include_rows=include_rows)
        for block in blocks
        if block.block_type.value == "table"
    ]
    tables = [table for table in tables if table.get("is_real_table", True)]
    return {"tables": tables, "count": len(tables)}

@router.get("/extract-runs/{run_id}/images")
def get_extract_images(run_id: str):
    r = _ensure_extraction_complete(run_id)
    figures = [
        _block_record(block, include_payload=True)
        for block in r.get("blocks", [])
        if block.block_type.value == "figure"
    ]
    return {"images": figures, "count": len(figures)}

@router.get("/extract-runs/{run_id}/json")
def download_extract_json(run_id: str):
    r = _ensure_extraction_complete(run_id)
    payload = _business_extraction_json(r, run_id)
    safe_label = re.sub(r"[^A-Za-z0-9]+", "_", str(r.get("label") or "document")).strip("_").lower() or "document"
    filename = f"{safe_label}_business_extraction.json"
    return Response(
        content=json.dumps(payload, ensure_ascii=False, indent=2, default=str),
        media_type="application/json",
        headers={"Content-Disposition": f'attachment; filename="{filename}"'},
    )

@router.get("/extract-runs/{run_id}/structured-json")
def get_extract_structured_json(run_id: str):
    r = _ensure_extraction_complete(run_id)
    return _business_extraction_json(r, run_id)


@router.post("/extract-runs/{run_id}/query")
def query_extract_run(run_id: str, req: QueryReq):
    r = _ensure_extraction_complete(run_id)
    blocks = r.get("blocks", [])
    question = str(req.question or "").strip()

    if not question:
        raise HTTPException(400, "question is required")

    rows = _search_extraction_blocks(blocks, question)
    label = r.get("label") or "document"

    if rows:
        answer = f"Found {len(rows)} relevant passage(s) in {label}."
    else:
        answer = f"I could not find a matching passage in {label}. Try a more specific term, heading, table value, or page reference."

    return {
        "answer": answer,
        "view": "extraction_evidence",
        "mode": req.mode,
        "columns": ["Page", "Type", "Path", "Text", "Score"],
        "rows": rows[:80],
        "count": len(rows),
        "plan": {
            "scope": "extraction_run",
            "run_id": run_id,
            "query": question,
            "ai_used": False,
        },
    }


def _search_extraction_blocks(blocks: list[Any], question: str) -> list[dict[str, Any]]:
    query = _norm_query(question)
    terms = [term for term in query.split() if len(term) > 2]
    page_hint = _page_hint(question)
    rows: list[dict[str, Any]] = []

    for block in blocks:
        if page_hint and getattr(block, "page_number", None) != page_hint:
            continue

        text = _block_search_text(block)
        if not text:
            continue

        norm_text = _norm_query(text)
        term_hits = sum(1 for term in terms if term in norm_text)
        fuzzy = fuzz.partial_ratio(query, norm_text) / 100 if query else 0
        score = min(1.0, (term_hits / max(1, len(terms))) * 0.68 + fuzzy * 0.32)

        if term_hits == 0 and fuzzy < 0.72:
            continue

        record = _block_record(block, include_payload=False)
        rows.append(
            {
                "Page": record.get("page_number") or record.get("page"),
                "Type": record.get("type") or record.get("block_type"),
                "Path": record.get("path"),
                "Text": _preview(record.get("text") or text, 900),
                "Score": round(score, 2),
            }
        )

    rows.sort(key=lambda item: item.get("Score", 0), reverse=True)
    return rows


def _block_search_text(block: Any) -> str:
    parts = [
        getattr(block, "text", ""),
        getattr(block, "path", ""),
        getattr(block, "stable_key", ""),
    ]
    payload = getattr(block, "payload", None)
    if isinstance(payload, dict):
        for key, value in payload.items():
            key_text = str(key)
            if key_text.startswith("__"):
                continue
            if isinstance(value, (str, int, float, bool)):
                parts.append(f"{key_text}: {value}")
            elif isinstance(value, list):
                parts.extend(str(item) for item in value[:20] if isinstance(item, (str, int, float, bool)))
    return " ".join(str(part) for part in parts if part)


def _norm_query(value: Any) -> str:
    return re.sub(r"\s+", " ", str(value or "").lower()).strip()


def _page_hint(value: str) -> Optional[int]:
    match = re.search(r"\b(?:page|p\\.?|pg\\.?)\s*(\d{1,4})\b", value, re.I)
    return int(match.group(1)) if match else None


def _preview(value: Any, limit: int = 900) -> str:
    text = re.sub(r"\s+", " ", str(value or "")).strip()
    if len(text) <= limit:
        return text
    return text[: limit - 1].rstrip() + "..."
