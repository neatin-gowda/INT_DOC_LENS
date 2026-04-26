"""
FastAPI app - orchestrates upload, extraction, diff, reports, and queries.

Flow:
  POST /compare              stores files, starts background processing, returns run_id quickly
  GET  /runs/{run_id}        returns progress/status/result metadata
  GET  /                    health check
"""
from __future__ import annotations

import re
import shutil
import tempfile
import threading
import traceback
import uuid
from pathlib import Path
from typing import Any, Optional

from fastapi import FastAPI, File, Form, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, Response
from pydantic import BaseModel
from rapidfuzz import fuzz

from .differ_v2 import diff_blocks, diff_stats
from .extractor_v2 import coverage_pct, extract_blocks_v2 as extract_blocks, render_pages
from .models import Block, ChangeType
from .query import query as nl_query
from .summarizer import summarize


app = FastAPI(title="Spec-Diff", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


_RUNS: dict[str, dict] = {}


class CompareResponse(BaseModel):
    run_id: str
    status: str
    status_message: str
    progress: int


class QueryReq(BaseModel):
    question: str


class CompareTablesReq(BaseModel):
    # New preferred fields: compare exact selected tables by ID.
    base_table_id: Optional[str] = None
    target_table_id: Optional[str] = None

    # Backward-compatible fields: compare by fuzzy header text.
    base_header_query: Optional[str] = None
    target_header_query: Optional[str] = None

    # Optional row-level focus. Examples: PCB 205 vs PCB 203, row key 765.
    base_row_key: Optional[str] = None
    target_row_key: Optional[str] = None


def _dump_model(obj):
    if hasattr(obj, "model_dump"):
        return obj.model_dump()
    if hasattr(obj, "dict"):
        return obj.dict()
    return obj


def _set_run_status(run_id: str, message: str, progress: int, status: str = "running") -> None:
    if run_id not in _RUNS:
        _RUNS[run_id] = {}

    _RUNS[run_id].update(
        {
            "status": status,
            "status_message": message,
            "progress": progress,
        }
    )


def _ensure_run(run_id: str) -> dict:
    r = _RUNS.get(run_id)
    if not r:
        raise HTTPException(404, "no such run")
    return r


def _ensure_complete(run_id: str) -> dict:
    r = _ensure_run(run_id)

    if r.get("status") == "failed":
        raise HTTPException(500, r.get("error", "Comparison failed"))

    if r.get("status") != "complete":
        raise HTTPException(409, r.get("status_message", "Comparison is still running"))

    return r


def _process_compare(
    run_id: str,
    work: Path,
    base_pdf: Path,
    target_pdf: Path,
    base_label: str,
    target_label: str,
    use_llm: bool,
) -> None:
    try:
        _set_run_status(run_id, "Rendering document pages", 12)

        base_imgs = render_pages(str(base_pdf), str(work / "pages_base"))
        target_imgs = render_pages(str(target_pdf), str(work / "pages_target"))

        _RUNS[run_id].update(
            {
                "base_imgs": base_imgs,
                "target_imgs": target_imgs,
            }
        )

        _set_run_status(run_id, "Extracting text, sections, and tables", 32)

        base_blocks = extract_blocks(str(base_pdf))
        target_blocks = extract_blocks(str(target_pdf))

        _set_run_status(run_id, "Checking extraction coverage", 48)

        cov_b = coverage_pct(str(base_pdf), base_blocks)
        cov_t = coverage_pct(str(target_pdf), target_blocks)

        _set_run_status(run_id, "Comparing semantic changes", 62)

        diffs = diff_blocks(base_blocks, target_blocks)
        stats = diff_stats(diffs)

        _set_run_status(
            run_id,
            "Preparing AI review summary" if use_llm else "Preparing review summary",
            78,
        )

        summary = summarize(diffs, base_blocks, target_blocks, use_llm=use_llm)

        _RUNS[run_id].update(
            {
                "status": "complete",
                "status_message": "Comparison complete",
                "progress": 100,
                "work": work,
                "base_pdf": base_pdf,
                "target_pdf": target_pdf,
                "base_label": base_label,
                "target_label": target_label,
                "base_imgs": base_imgs,
                "target_imgs": target_imgs,
                "base_blocks": base_blocks,
                "target_blocks": target_blocks,
                "diffs": diffs,
                "stats": stats,
                "summary": summary,
                "coverage": {"base": cov_b, "target": cov_t},
            }
        )

    except Exception as exc:
        _RUNS[run_id].update(
            {
                "status": "failed",
                "status_message": "Comparison failed",
                "progress": _RUNS.get(run_id, {}).get("progress", 0),
                "error": str(exc),
                "traceback": traceback.format_exc(),
            }
        )


@app.get("/")
def root():
    return {
        "status": "ok",
        "name": "doculens-ai-agent",
        "endpoints": [
            "POST /compare",
            "GET /runs/{id}",
            "GET /runs/{id}/diff",
            "GET /runs/{id}/summary",
            "GET /runs/{id}/report.pdf",
            "POST /runs/{id}/query",
            "GET /runs/{id}/pages/{side}/{n}",
            "GET /runs/{id}/overlay/{side}/{n}",
            "POST /runs/{id}/compare-tables",
            "GET /runs/{id}/tables",
        ],
    }


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/compare", response_model=CompareResponse)
async def compare(
    base: UploadFile = File(..., description="Older / previous version PDF"),
    target: UploadFile = File(..., description="Newer / current version PDF"),
    use_llm: bool = Form(False),
):
    if not base.filename or not target.filename:
        raise HTTPException(400, "Both files required")

    run_id = str(uuid.uuid4())
    work = Path(tempfile.mkdtemp(prefix=f"specdiff_{run_id}_"))
    base_pdf = work / "base.pdf"
    target_pdf = work / "target.pdf"

    base_label = Path(base.filename).stem
    target_label = Path(target.filename).stem

    _RUNS[run_id] = {
        "status": "queued",
        "status_message": "Uploading documents",
        "progress": 5,
        "work": work,
        "base_label": base_label,
        "target_label": target_label,
        "base_imgs": [],
        "target_imgs": [],
        "stats": {},
        "coverage": {},
    }

    try:
        with base_pdf.open("wb") as f:
            shutil.copyfileobj(base.file, f)
        with target_pdf.open("wb") as f:
            shutil.copyfileobj(target.file, f)
    except Exception as exc:
        _RUNS[run_id].update(
            {
                "status": "failed",
                "status_message": "Could not save uploaded documents",
                "progress": 0,
                "error": str(exc),
                "traceback": traceback.format_exc(),
            }
        )
        raise HTTPException(500, "Could not save uploaded documents")

    worker = threading.Thread(
        target=_process_compare,
        args=(
            run_id,
            work,
            base_pdf,
            target_pdf,
            base_label,
            target_label,
            use_llm,
        ),
        daemon=True,
    )
    worker.start()

    return CompareResponse(
        run_id=run_id,
        status="queued",
        status_message="Documents uploaded. Comparison is starting.",
        progress=5,
    )


@app.get("/runs/{run_id}")
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
        "stats": r.get("stats", {}),
        "coverage": r.get("coverage", {}),
        "n_pages_base": len(r.get("base_imgs", [])),
        "n_pages_target": len(r.get("target_imgs", [])),
    }


@app.get("/runs/{run_id}/diff")
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
                "field_diffs": [_dump_model(fd) for fd in d.field_diffs],
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


@app.get("/runs/{run_id}/summary")
def get_summary(run_id: str):
    r = _ensure_complete(run_id)
    return {"summary": [_dump_model(s) for s in r["summary"]]}


@app.get("/runs/{run_id}/report.pdf")
def get_report_pdf(run_id: str):
    r = _ensure_complete(run_id)

    try:
        from .report import build_pdf_report
    except Exception as exc:
        raise HTTPException(
            500,
            f"PDF report generation is not available because the report dependency failed to load: {exc}",
        )

    pdf_bytes = build_pdf_report(run_id, r)
    filename = f"document_comparison_report_{run_id}.pdf"

    return Response(
        content=pdf_bytes,
        media_type="application/pdf",
        headers={"Content-Disposition": f'attachment; filename="{filename}"'},
    )


@app.post("/runs/{run_id}/query")
def post_query(run_id: str, req: QueryReq):
    r = _ensure_complete(run_id)

    result = nl_query(req.question, r["diffs"], r["base_blocks"], r["target_blocks"])

    if isinstance(result, dict):
        return result

    return {
        "answer": f"I found {len(result)} matching changes.",
        "rows": result[:200],
        "count": len(result),
        "plan": {},
    }


@app.get("/runs/{run_id}/pages/{side}/{n}")
def get_page(run_id: str, side: str, n: int):
    r = _ensure_complete(run_id)

    if side not in ("base", "target"):
        raise HTTPException(400, "side must be base|target")

    imgs = r["base_imgs"] if side == "base" else r["target_imgs"]
    if n < 1 or n > len(imgs):
        raise HTTPException(404, "page out of range")

    return FileResponse(imgs[n - 1], media_type="image/png")


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


@app.get("/runs/{run_id}/overlay/{side}/{n}")
def get_overlay(run_id: str, side: str, n: int):
    r = _ensure_complete(run_id)

    if side not in ("base", "target"):
        raise HTTPException(400, "side must be base|target")

    base_by_id = {b.id: b for b in r["base_blocks"]}
    target_by_id = {b.id: b for b in r["target_blocks"]}
    side_blocks = r["base_blocks"] if side == "base" else r["target_blocks"]

    page_width, page_height = _page_dimensions_for(side_blocks, n)

    color_map = {
        "ADDED": "rgba(40,180,40,0.30)",
        "DELETED": "rgba(220,40,40,0.30)",
        "MODIFIED": "rgba(220,200,40,0.30)",
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
                "color": color_map[d.change_type.value],
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
        "regions": regions,
    }


# ---------------- table intelligence helpers ----------------

_INTERNAL_TABLE_FIELDS = {
    "__anchors__",
    "__pages__",
    "anchors",
    "page_width",
    "page_height",
}


def _norm_text(value: Any) -> str:
    return re.sub(r"\s+", " ", str(value or "")).strip().lower()


def _display_text(value: Any, limit: int = 180) -> str:
    text = re.sub(r"\s+", " ", str(value or "")).strip()
    if len(text) <= limit:
        return text
    return text[: limit - 1].rstrip() + "..."


def _path_label(path: str | None) -> str:
    if not path:
        return "Document"
    parts = [p for p in path.split("/") if p]
    if not parts:
        return "Document"
    return " / ".join(p.replace("_", " ").title() for p in parts[:4])


def _table_header(block: Block) -> list[str]:
    if not isinstance(block.payload, dict):
        return []
    return [str(h or "").strip() for h in block.payload.get("header", [])]


def _table_rows(table: Block, blocks: list[Block]) -> list[Block]:
    return [
        b for b in blocks
        if b.parent_id == table.id and b.block_type.value == "table_row"
    ]


def _row_values(row: Block) -> dict[str, Any]:
    if not isinstance(row.payload, dict):
        return {}

    out = {}
    for key, value in row.payload.items():
        if key in _INTERNAL_TABLE_FIELDS:
            continue
        if str(key).startswith("__"):
            continue
        out[str(key)] = value
    return out


def _row_key(row: Block) -> str:
    if row.stable_key:
        return str(row.stable_key).strip()

    values = _row_values(row)
    for value in values.values():
        text = str(value or "").strip()
        if text:
            return text[:80]

    return _display_text(row.text, 80)


def _row_definition(row: Block) -> str:
    values = _row_values(row)
    parts = []

    for key, value in values.items():
        v = str(value or "").strip()
        if not v:
            continue
        if key.lower().startswith("col_"):
            parts.append(v)
        else:
            parts.append(f"{key}: {v}")
        if len(parts) >= 3:
            break

    if parts:
        return " | ".join(parts)

    return _display_text(row.text, 220)


def _row_summary(row: Block, index: int) -> dict:
    values = _row_values(row)
    return {
        "id": str(row.id),
        "row_index": index,
        "stable_key": row.stable_key,
        "row_key": _row_key(row),
        "definition": _row_definition(row),
        "page": row.page_number,
        "path": row.path,
        "text": _display_text(row.text, 500),
        "values": values,
        "bbox": row.bbox,
    }


def _table_summary(table: Block, blocks: list[Block], include_rows: bool = False) -> dict:
    header = _table_header(table)
    rows = _table_rows(table, blocks)
    spans = table.payload.get("spans_pages", [table.page_number]) if isinstance(table.payload, dict) else [table.page_number]
    header_preview = " | ".join(str(h)[:40] for h in header[:8])

    summary = {
        "id": str(table.id),
        "page_first": table.page_number,
        "spans_pages": spans,
        "path": table.path,
        "area": _path_label(table.path),
        "n_columns": len(header),
        "n_rows": len(rows),
        "header": header,
        "header_preview": header_preview,
        "row_keys": [_row_key(r) for r in rows[:80]],
        "row_preview": [_row_summary(r, i) for i, r in enumerate(rows[:10])],
    }

    if include_rows:
        summary["rows"] = [_row_summary(r, i) for i, r in enumerate(rows)]

    return summary


def _find_table_by_id(blocks: list[Block], table_id: str | None) -> Optional[Block]:
    if not table_id:
        return None

    for block in blocks:
        if block.block_type.value == "table" and str(block.id) == str(table_id):
            return block

    return None


def _find_table_by_header(blocks: list[Block], query: str | None) -> Optional[Block]:
    if not query:
        return None

    q = _norm_text(query)
    if not q:
        return None

    best = None
    best_score = 0.0

    for block in blocks:
        if block.block_type.value != "table":
            continue

        header = _table_header(block)
        header_text = _norm_text(" ".join(header))
        path_text = _norm_text(block.path)
        score = max(
            fuzz.partial_ratio(q, header_text) / 100.0,
            fuzz.partial_ratio(q, path_text) / 100.0,
        )

        if score > best_score:
            best_score = score
            best = block

    return best if best_score >= 0.45 else None


def _resolve_table(blocks: list[Block], table_id: str | None, header_query: str | None) -> Optional[Block]:
    return _find_table_by_id(blocks, table_id) or _find_table_by_header(blocks, header_query)


def _find_row(rows: list[Block], row_key: str | None) -> Optional[Block]:
    if not row_key:
        return None

    q = _norm_text(row_key)
    if not q:
        return None

    exact = []
    fuzzy = []

    for row in rows:
        key = _norm_text(_row_key(row))
        stable = _norm_text(row.stable_key)
        text = _norm_text(row.text)
        values_text = _norm_text(" ".join(str(v or "") for v in _row_values(row).values()))

        if q in {key, stable} or q == text:
            exact.append(row)
            continue

        score = max(
            fuzz.partial_ratio(q, key) / 100.0,
            fuzz.partial_ratio(q, stable) / 100.0,
            fuzz.partial_ratio(q, text) / 100.0,
            fuzz.partial_ratio(q, values_text) / 100.0,
        )
        fuzzy.append((score, row))

    if exact:
        return exact[0]

    fuzzy.sort(key=lambda item: item[0], reverse=True)
    if fuzzy and fuzzy[0][0] >= 0.70:
        return fuzzy[0][1]

    return None


def _header_alignment(base_header: list[str], target_header: list[str]) -> list[dict]:
    used_target = set()
    alignment = []

    for base_index, base_col in enumerate(base_header):
        best_index = None
        best_score = 0.0

        for target_index, target_col in enumerate(target_header):
            if target_index in used_target:
                continue

            score = fuzz.ratio(_norm_text(base_col), _norm_text(target_col)) / 100.0
            if score > best_score:
                best_score = score
                best_index = target_index

        if best_index is not None and best_score >= 0.55:
            used_target.add(best_index)
            alignment.append(
                {
                    "base_col": base_col,
                    "target_col": target_header[best_index],
                    "base_index": base_index,
                    "target_index": best_index,
                    "score": round(best_score, 2),
                    "status": "matched",
                }
            )
        else:
            alignment.append(
                {
                    "base_col": base_col,
                    "target_col": None,
                    "base_index": base_index,
                    "target_index": None,
                    "score": 0.0,
                    "status": "base_only",
                }
            )

    for target_index, target_col in enumerate(target_header):
        if target_index not in used_target:
            alignment.append(
                {
                    "base_col": None,
                    "target_col": target_col,
                    "base_index": None,
                    "target_index": target_index,
                    "score": 0.0,
                    "status": "target_only",
                }
            )

    return alignment


def _compare_row_values(base_row: Optional[Block], target_row: Optional[Block], alignment: list[dict]) -> list[dict]:
    if base_row is None and target_row is None:
        return []

    base_values = _row_values(base_row) if base_row else {}
    target_values = _row_values(target_row) if target_row else {}

    changes = []

    if base_row is None:
        for col, value in target_values.items():
            changes.append(
                {
                    "field": col,
                    "before": None,
                    "after": value,
                    "change_type": "ADDED",
                }
            )
        return changes

    if target_row is None:
        for col, value in base_values.items():
            changes.append(
                {
                    "field": col,
                    "before": value,
                    "after": None,
                    "change_type": "DELETED",
                }
            )
        return changes

    for item in alignment:
        base_col = item.get("base_col")
        target_col = item.get("target_col")

        if base_col and target_col:
            before = base_values.get(base_col)
            after = target_values.get(target_col)
            if _norm_text(before) != _norm_text(after):
                changes.append(
                    {
                        "field": base_col if base_col == target_col else f"{base_col} -> {target_col}",
                        "before": before,
                        "after": after,
                        "change_type": "MODIFIED",
                    }
                )
        elif base_col:
            before = base_values.get(base_col)
            if _norm_text(before):
                changes.append(
                    {
                        "field": base_col,
                        "before": before,
                        "after": None,
                        "change_type": "DELETED",
                    }
                )
        elif target_col:
            after = target_values.get(target_col)
            if _norm_text(after):
                changes.append(
                    {
                        "field": target_col,
                        "before": None,
                        "after": after,
                        "change_type": "ADDED",
                    }
                )

    return changes


def _align_table_rows(base_rows: list[Block], target_rows: list[Block]) -> list[tuple[Optional[Block], Optional[Block], float]]:
    pairs = []
    used_base = set()
    used_target = set()

    target_by_key: dict[str, list[Block]] = {}
    for row in target_rows:
        key = _norm_text(_row_key(row))
        if key:
            target_by_key.setdefault(key, []).append(row)

    for base_row in base_rows:
        key = _norm_text(_row_key(base_row))
        candidates = target_by_key.get(key, [])
        match = next((row for row in candidates if row.id not in used_target), None)

        if match:
            pairs.append((base_row, match, 1.0))
            used_base.add(base_row.id)
            used_target.add(match.id)

    scored = []
    for base_row in base_rows:
        if base_row.id in used_base:
            continue

        for target_row in target_rows:
            if target_row.id in used_target:
                continue

            score = max(
                fuzz.token_set_ratio(_norm_text(base_row.text), _norm_text(target_row.text)) / 100.0,
                fuzz.token_set_ratio(_norm_text(_row_definition(base_row)), _norm_text(_row_definition(target_row))) / 100.0,
            )
            if score >= 0.62:
                scored.append((score, base_row, target_row))

    scored.sort(key=lambda item: item[0], reverse=True)

    for score, base_row, target_row in scored:
        if base_row.id in used_base or target_row.id in used_target:
            continue

        pairs.append((base_row, target_row, score))
        used_base.add(base_row.id)
        used_target.add(target_row.id)

    for base_row in base_rows:
        if base_row.id not in used_base:
            pairs.append((base_row, None, 0.0))

    for target_row in target_rows:
        if target_row.id not in used_target:
            pairs.append((None, target_row, 0.0))

    return pairs


def _row_diff_record(
    base_row: Optional[Block],
    target_row: Optional[Block],
    alignment: list[dict],
    score: float = 0.0,
) -> Optional[dict]:
    changes = _compare_row_values(base_row, target_row, alignment)

    if base_row is None and target_row is not None:
        change_type = "ADDED"
    elif target_row is None and base_row is not None:
        change_type = "DELETED"
    elif changes:
        change_type = "MODIFIED"
    else:
        change_type = "UNCHANGED"

    if change_type == "UNCHANGED":
        return None

    key = _row_key(base_row or target_row)
    return {
        "change_type": change_type,
        "key": key,
        "match_score": round(score, 2),
        "base_row": _row_summary(base_row, 0) if base_row else None,
        "target_row": _row_summary(target_row, 0) if target_row else None,
        "definition": _row_definition(base_row or target_row),
        "field_diffs": changes,
    }


# ---------------- table endpoints ----------------

@app.get("/runs/{run_id}/tables")
def list_tables(run_id: str, include_rows: bool = False):
    r = _ensure_complete(run_id)

    def _summarize(blocks):
        out = []
        for block in blocks:
            if block.block_type.value != "table":
                continue
            out.append(_table_summary(block, blocks, include_rows=include_rows))
        return out

    return {
        "base": _summarize(r["base_blocks"]),
        "target": _summarize(r["target_blocks"]),
    }


@app.post("/runs/{run_id}/compare-tables")
def compare_tables_endpoint(run_id: str, req: CompareTablesReq):
    r = _ensure_complete(run_id)

    base_table = _resolve_table(r["base_blocks"], req.base_table_id, req.base_header_query)
    target_table = _resolve_table(r["target_blocks"], req.target_table_id, req.target_header_query)

    if not base_table or not target_table:
        return {
            "error": "table not found",
            "base_found": bool(base_table),
            "target_found": bool(target_table),
            "hint": "Use table IDs from GET /runs/{run_id}/tables, or provide a header query that appears in the table header/path.",
        }

    base_rows = _table_rows(base_table, r["base_blocks"])
    target_rows = _table_rows(target_table, r["target_blocks"])

    base_header = _table_header(base_table)
    target_header = _table_header(target_table)
    alignment = _header_alignment(base_header, target_header)

    row_diffs = []

    base_row_key = req.base_row_key or req.target_row_key
    target_row_key = req.target_row_key or req.base_row_key

    if base_row_key or target_row_key:
        base_row = _find_row(base_rows, base_row_key)
        target_row = _find_row(target_rows, target_row_key)

        if not base_row or not target_row:
            return {
                "error": "row not found",
                "base_row_found": bool(base_row),
                "target_row_found": bool(target_row),
                "base_row_key": base_row_key,
                "target_row_key": target_row_key,
                "base_table": _table_summary(base_table, r["base_blocks"]),
                "target_table": _table_summary(target_table, r["target_blocks"]),
            }

        rec = _row_diff_record(base_row, target_row, alignment, score=1.0)
        if rec:
            row_diffs.append(rec)

        mode = "selected_rows"
    else:
        for base_row, target_row, score in _align_table_rows(base_rows, target_rows):
            rec = _row_diff_record(base_row, target_row, alignment, score=score)
            if rec:
                row_diffs.append(rec)

        mode = "all_rows"

    counts = {"ADDED": 0, "DELETED": 0, "MODIFIED": 0, "UNCHANGED": 0}
    for row in row_diffs:
        counts[row["change_type"]] += 1

    return {
        "mode": mode,
        "base_table": _table_summary(base_table, r["base_blocks"]),
        "target_table": _table_summary(target_table, r["target_blocks"]),
        "base_header": base_header,
        "target_header": target_header,
        "header_alignment": alignment,
        "row_diffs": row_diffs,
        "counts": counts,
    }
