"""
FastAPI app - orchestrates upload, extraction, diff, reports, and queries.

Flow:
  POST /compare              stores files, starts background processing, returns run_id quickly
  GET  /runs/{run_id}        returns progress/status/result metadata
  GET  /                    health check

Table intelligence:
  GET  /runs/{run_id}/tables?include_rows=true
  POST /runs/{run_id}/compare-table-columns
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
from pydantic import BaseModel, Field
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
    base_table_id: Optional[str] = None
    target_table_id: Optional[str] = None
    base_header_query: Optional[str] = None
    target_header_query: Optional[str] = None
    base_row_key: Optional[str] = None
    target_row_key: Optional[str] = None


class CompareTableColumnsReq(BaseModel):
    base_table_id: str
    target_table_id: str

    # Columns used to identify/align rows. If empty, backend chooses likely label columns.
    base_row_columns: list[str] = Field(default_factory=list)
    target_row_columns: list[str] = Field(default_factory=list)

    # Columns whose values should be compared. If empty, all non-row-label columns are used.
    base_value_columns: list[str] = Field(default_factory=list)
    target_value_columns: list[str] = Field(default_factory=list)

    # Optional row filter. Supports exact/fuzzy matching against row label/cells.
    row_filter: Optional[str] = None

    # Maximum output rows.
    limit: int = 200


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
            "GET /runs/{id}/tables",
            "POST /runs/{id}/compare-tables",
            "POST /runs/{id}/compare-table-columns",
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
        "view": "evidence",
        "columns": [],
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


_ROW_LABEL_HINTS = (
    "feature",
    "description",
    "item",
    "name",
    "order",
    "code",
    "part",
    "pcv",
    "model",
    "series",
    "equipment",
    "group",
    "package",
)


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
    cleaned = []
    for part in parts:
        if part.startswith("table_") or part.startswith("row_"):
            continue
        cleaned.append(part.replace("_", " ").title())
    return " / ".join(cleaned[:4]) if cleaned else "Document"


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


def _column_names(table: Block, rows: list[Block]) -> list[str]:
    names = _table_header(table)
    seen = set()
    out = []

    for name in names:
        name = str(name or "").strip()
        if not name:
            continue
        if name not in seen:
            out.append(name)
            seen.add(name)

    for row in rows:
        for key in _row_values(row).keys():
            if key not in seen:
                out.append(key)
                seen.add(key)

    return out


def _row_key(row: Block, row_columns: Optional[list[str]] = None) -> str:
    values = _row_values(row)

    if row_columns:
        parts = [_display_text(values.get(col), 120) for col in row_columns if _display_text(values.get(col), 120)]
        if parts:
            return " | ".join(parts)

    if row.stable_key:
        return str(row.stable_key).strip()

    for value in values.values():
        text = _display_text(value, 120)
        if text:
            return text

    return _display_text(row.text, 120)


def _row_definition(row: Block, row_columns: Optional[list[str]] = None) -> str:
    values = _row_values(row)
    parts = []

    source_items = []
    if row_columns:
        source_items.extend((col, values.get(col)) for col in row_columns)
    source_items.extend(values.items())

    seen = set()
    for key, value in source_items:
        if key in seen:
            continue
        seen.add(key)

        v = str(value or "").strip()
        if not v:
            continue
        if str(key).lower().startswith("col_"):
            parts.append(v)
        else:
            parts.append(f"{key}: {v}")
        if len(parts) >= 4:
            break

    if parts:
        return " | ".join(parts)

    return _display_text(row.text, 260)


def _row_summary(row: Block, index: int, columns: Optional[list[str]] = None) -> dict:
    values = _row_values(row)
    selected_values = {col: values.get(col, "") for col in columns} if columns else values

    return {
        "id": str(row.id),
        "row_index": index,
        "stable_key": row.stable_key,
        "row_key": _row_key(row),
        "definition": _row_definition(row),
        "page": row.page_number,
        "path": row.path,
        "text": _display_text(row.text, 500),
        "values": selected_values,
        "bbox": row.bbox,
    }


def _guess_row_label_columns(columns: list[str], rows: list[Block]) -> list[str]:
    if not columns:
        return []

    scored = []

    for col in columns:
        col_low = _norm_text(col)
        non_empty = 0
        unique_values = set()
        text_len = 0

        for row in rows[:80]:
            value = _display_text(_row_values(row).get(col), 120)
            if value:
                non_empty += 1
                unique_values.add(value.lower())
                text_len += len(value)

        uniqueness = len(unique_values) / max(1, non_empty)
        avg_len = text_len / max(1, non_empty)
        hint = 1.0 if any(term in col_low for term in _ROW_LABEL_HINTS) else 0.0
        left_bias = max(0.0, 1.0 - (columns.index(col) / max(1, len(columns))))

        score = hint * 0.45 + uniqueness * 0.25 + min(avg_len / 40.0, 1.0) * 0.15 + left_bias * 0.15
        scored.append((score, col))

    scored.sort(key=lambda x: x[0], reverse=True)
    return [col for _, col in scored[:1]]


def _table_matrix(table: Block, blocks: list[Block], include_rows: bool = False) -> dict:
    rows = _table_rows(table, blocks)
    columns = _column_names(table, rows)
    row_label_columns = _guess_row_label_columns(columns, rows)
    spans = table.payload.get("spans_pages", [table.page_number]) if isinstance(table.payload, dict) else [table.page_number]
    header_preview = " | ".join(str(h)[:40] for h in columns[:8])

    matrix = {
        "id": str(table.id),
        "page_first": table.page_number,
        "spans_pages": spans,
        "path": table.path,
        "area": _path_label(table.path),
        "n_columns": len(columns),
        "n_rows": len(rows),
        "columns": columns,
        "header": columns,
        "header_preview": header_preview,
        "suggested_row_columns": row_label_columns,
        "suggested_value_columns": [c for c in columns if c not in row_label_columns],
        "row_keys": [_row_key(r, row_label_columns) for r in rows[:150]],
        "row_preview": [_row_summary(r, i) for i, r in enumerate(rows[:12])],
    }

    if include_rows:
        matrix["rows"] = [_row_summary(r, i) for i, r in enumerate(rows)]

    return matrix


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

        rows = _table_rows(block, blocks)
        columns = _column_names(block, rows)
        header_text = _norm_text(" ".join(columns))
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


def _find_row(rows: list[Block], row_key: str | None, row_columns: Optional[list[str]] = None) -> Optional[Block]:
    if not row_key:
        return None

    q = _norm_text(row_key)
    if not q:
        return None

    scored = []

    for row in rows:
        values = _row_values(row)
        key = _norm_text(_row_key(row, row_columns))
        stable = _norm_text(row.stable_key)
        text = _norm_text(row.text)
        values_text = _norm_text(" ".join(str(v or "") for v in values.values()))

        score = max(
            1.0 if q in {key, stable} else 0.0,
            0.94 if q and q in key else 0.0,
            0.88 if q and q in values_text else 0.0,
            fuzz.partial_ratio(q, key) / 100.0,
            fuzz.partial_ratio(q, stable) / 100.0,
            fuzz.partial_ratio(q, text) / 100.0,
            fuzz.partial_ratio(q, values_text) / 100.0,
        )
        scored.append((score, row))

    scored.sort(key=lambda item: item[0], reverse=True)
    if scored and scored[0][0] >= 0.62:
        return scored[0][1]

    return None


def _align_columns(base_cols: list[str], target_cols: list[str]) -> list[dict]:
    used_target = set()
    alignment = []

    for base_col in base_cols:
        best_col = None
        best_score = 0.0

        for target_col in target_cols:
            if target_col in used_target:
                continue

            score = fuzz.ratio(_norm_text(base_col), _norm_text(target_col)) / 100.0
            if score > best_score:
                best_score = score
                best_col = target_col

        if best_col is not None and best_score >= 0.55:
            used_target.add(best_col)
            alignment.append(
                {
                    "base_col": base_col,
                    "target_col": best_col,
                    "score": round(best_score, 2),
                    "status": "matched",
                }
            )
        else:
            alignment.append(
                {
                    "base_col": base_col,
                    "target_col": None,
                    "score": 0.0,
                    "status": "base_only",
                }
            )

    for target_col in target_cols:
        if target_col not in used_target:
            alignment.append(
                {
                    "base_col": None,
                    "target_col": target_col,
                    "score": 0.0,
                    "status": "target_only",
                }
            )

    return alignment


def _row_match_score(base_row: Block, target_row: Block, base_row_cols: list[str], target_row_cols: list[str]) -> float:
    base_key = _norm_text(_row_key(base_row, base_row_cols))
    target_key = _norm_text(_row_key(target_row, target_row_cols))
    base_text = _norm_text(base_row.text)
    target_text = _norm_text(target_row.text)

    return max(
        1.0 if base_key and base_key == target_key else 0.0,
        fuzz.token_set_ratio(base_key, target_key) / 100.0,
        fuzz.token_set_ratio(base_text, target_text) / 100.0,
    )


def _align_rows(
    base_rows: list[Block],
    target_rows: list[Block],
    base_row_cols: list[str],
    target_row_cols: list[str],
) -> list[tuple[Optional[Block], Optional[Block], float]]:
    pairs = []
    used_base = set()
    used_target = set()
    scored = []

    for base_row in base_rows:
        for target_row in target_rows:
            score = _row_match_score(base_row, target_row, base_row_cols, target_row_cols)
            if score >= 0.55:
                scored.append((score, base_row, target_row))

    scored.sort(key=lambda x: x[0], reverse=True)

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


def _compare_row_values(
    base_row: Optional[Block],
    target_row: Optional[Block],
    value_alignment: list[dict],
) -> list[dict]:
    base_values = _row_values(base_row) if base_row else {}
    target_values = _row_values(target_row) if target_row else {}
    changes = []

    if base_row is None:
        for item in value_alignment:
            col = item.get("target_col")
            if not col:
                continue
            after = target_values.get(col)
            if _norm_text(after):
                changes.append({"field": col, "before": None, "after": after, "change_type": "ADDED"})
        return changes

    if target_row is None:
        for item in value_alignment:
            col = item.get("base_col")
            if not col:
                continue
            before = base_values.get(col)
            if _norm_text(before):
                changes.append({"field": col, "before": before, "after": None, "change_type": "DELETED"})
        return changes

    for item in value_alignment:
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
                changes.append({"field": base_col, "before": before, "after": None, "change_type": "DELETED"})
        elif target_col:
            after = target_values.get(target_col)
            if _norm_text(after):
                changes.append({"field": target_col, "before": None, "after": after, "change_type": "ADDED"})

    return changes


# ---------------- table endpoints ----------------

@app.get("/runs/{run_id}/tables")
def list_tables(run_id: str, include_rows: bool = False):
    r = _ensure_complete(run_id)

    def _summarize(blocks):
        out = []
        for block in blocks:
            if block.block_type.value != "table":
                continue
            out.append(_table_matrix(block, blocks, include_rows=include_rows))
        return out

    return {
        "base": _summarize(r["base_blocks"]),
        "target": _summarize(r["target_blocks"]),
    }


@app.post("/runs/{run_id}/compare-table-columns")
def compare_table_columns(run_id: str, req: CompareTableColumnsReq):
    r = _ensure_complete(run_id)

    base_table = _find_table_by_id(r["base_blocks"], req.base_table_id)
    target_table = _find_table_by_id(r["target_blocks"], req.target_table_id)

    if not base_table or not target_table:
        return {
            "error": "Selected table could not be found. Re-run the comparison and select tables from the current result.",
            "base_found": bool(base_table),
            "target_found": bool(target_table),
        }

    base_rows = _table_rows(base_table, r["base_blocks"])
    target_rows = _table_rows(target_table, r["target_blocks"])

    base_columns = _column_names(base_table, base_rows)
    target_columns = _column_names(target_table, target_rows)

    base_row_columns = req.base_row_columns or _guess_row_label_columns(base_columns, base_rows)
    target_row_columns = req.target_row_columns or _guess_row_label_columns(target_columns, target_rows)

    base_value_columns = req.base_value_columns or [c for c in base_columns if c not in base_row_columns]
    target_value_columns = req.target_value_columns or [c for c in target_columns if c not in target_row_columns]

    invalid_base = [c for c in base_row_columns + base_value_columns if c not in base_columns]
    invalid_target = [c for c in target_row_columns + target_value_columns if c not in target_columns]

    if invalid_base or invalid_target:
        return {
            "error": "One or more selected columns were not found in the selected tables.",
            "invalid_base_columns": invalid_base,
            "invalid_target_columns": invalid_target,
            "base_columns": base_columns,
            "target_columns": target_columns,
        }

    if req.row_filter:
        base_rows = [row for row in base_rows if fuzz.partial_ratio(_norm_text(req.row_filter), _norm_text(_row_key(row, base_row_columns) + " " + row.text)) / 100.0 >= 0.55]
        target_rows = [row for row in target_rows if fuzz.partial_ratio(_norm_text(req.row_filter), _norm_text(_row_key(row, target_row_columns) + " " + row.text)) / 100.0 >= 0.55]

    value_alignment = _align_columns(base_value_columns, target_value_columns)

    row_results = []
    counts = {"ADDED": 0, "DELETED": 0, "MODIFIED": 0, "UNCHANGED": 0}

    for base_row, target_row, match_score in _align_rows(base_rows, target_rows, base_row_columns, target_row_columns):
        field_diffs = _compare_row_values(base_row, target_row, value_alignment)

        if base_row is None and target_row is not None:
            change_type = "ADDED"
        elif target_row is None and base_row is not None:
            change_type = "DELETED"
        elif field_diffs:
            change_type = "MODIFIED"
        else:
            change_type = "UNCHANGED"

        counts[change_type] += 1

        if change_type == "UNCHANGED":
            continue

        row_results.append(
            {
                "change_type": change_type,
                "match_score": round(match_score, 2),
                "row_key": {
                    "base": _row_key(base_row, base_row_columns) if base_row else None,
                    "target": _row_key(target_row, target_row_columns) if target_row else None,
                },
                "row_definition": {
                    "base": _row_definition(base_row, base_row_columns) if base_row else None,
                    "target": _row_definition(target_row, target_row_columns) if target_row else None,
                },
                "base_row": _row_summary(base_row, 0, base_row_columns + base_value_columns) if base_row else None,
                "target_row": _row_summary(target_row, 0, target_row_columns + target_value_columns) if target_row else None,
                "field_diffs": field_diffs,
            }
        )

        if len(row_results) >= max(1, min(req.limit, 1000)):
            break

    return {
        "view": "table_comparison",
        "answer": (
            f"Compared {len(base_rows)} baseline row(s) with {len(target_rows)} revised row(s). "
            f"Found {counts['ADDED']} added, {counts['DELETED']} deleted, and {counts['MODIFIED']} modified row(s)."
        ),
        "base_table": _table_matrix(base_table, r["base_blocks"], include_rows=False),
        "target_table": _table_matrix(target_table, r["target_blocks"], include_rows=False),
        "base_row_columns": base_row_columns,
        "target_row_columns": target_row_columns,
        "base_value_columns": base_value_columns,
        "target_value_columns": target_value_columns,
        "value_column_alignment": value_alignment,
        "counts": counts,
        "rows": row_results,
        "row_diffs": row_results,
    }


@app.post("/runs/{run_id}/compare-tables")
def compare_tables_endpoint(run_id: str, req: CompareTablesReq):
    r = _ensure_complete(run_id)

    base_table = _resolve_table(r["base_blocks"], req.base_table_id, req.base_header_query)
    target_table = _resolve_table(r["target_blocks"], req.target_table_id, req.target_header_query)

    if not base_table or not target_table:
        return {
            "error": "Selected table could not be found.",
            "base_found": bool(base_table),
            "target_found": bool(target_table),
            "hint": "Use table IDs from GET /runs/{run_id}/tables, or provide header text that appears in the table.",
        }

    base_rows = _table_rows(base_table, r["base_blocks"])
    target_rows = _table_rows(target_table, r["target_blocks"])

    base_columns = _column_names(base_table, base_rows)
    target_columns = _column_names(target_table, target_rows)
    base_row_columns = _guess_row_label_columns(base_columns, base_rows)
    target_row_columns = _guess_row_label_columns(target_columns, target_rows)

    if req.base_row_key or req.target_row_key:
        base_row = _find_row(base_rows, req.base_row_key or req.target_row_key, base_row_columns)
        target_row = _find_row(target_rows, req.target_row_key or req.base_row_key, target_row_columns)

        if not base_row or not target_row:
            return {
                "error": "Selected row could not be found in one or both tables.",
                "base_row_found": bool(base_row),
                "target_row_found": bool(target_row),
                "base_table": _table_matrix(base_table, r["base_blocks"]),
                "target_table": _table_matrix(target_table, r["target_blocks"]),
            }

        value_alignment = _align_columns(
            [c for c in base_columns if c not in base_row_columns],
            [c for c in target_columns if c not in target_row_columns],
        )
        field_diffs = _compare_row_values(base_row, target_row, value_alignment)

        return {
            "mode": "selected_rows",
            "base_table": _table_matrix(base_table, r["base_blocks"]),
            "target_table": _table_matrix(target_table, r["target_blocks"]),
            "base_header": base_columns,
            "target_header": target_columns,
            "header_alignment": value_alignment,
            "counts": {"ADDED": 0, "DELETED": 0, "MODIFIED": 1 if field_diffs else 0, "UNCHANGED": 0 if field_diffs else 1},
            "row_diffs": [
                {
                    "change_type": "MODIFIED" if field_diffs else "UNCHANGED",
                    "key": _row_key(base_row, base_row_columns),
                    "match_score": 1.0,
                    "base_row": _row_summary(base_row, 0),
                    "target_row": _row_summary(target_row, 0),
                    "definition": _row_definition(base_row, base_row_columns),
                    "field_diffs": field_diffs,
                }
            ] if field_diffs else [],
        }

    # Backward compatible all-row compare using guessed label columns and all value columns.
    req2 = CompareTableColumnsReq(
        base_table_id=str(base_table.id),
        target_table_id=str(target_table.id),
        base_row_columns=base_row_columns,
        target_row_columns=target_row_columns,
        base_value_columns=[c for c in base_columns if c not in base_row_columns],
        target_value_columns=[c for c in target_columns if c not in target_row_columns],
    )
    return compare_table_columns(run_id, req2)
