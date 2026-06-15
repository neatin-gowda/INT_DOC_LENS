"""
Tables router - handles custom table comparisons, slicing, and views.
"""
from __future__ import annotations

from typing import Any

from fastapi import APIRouter, HTTPException

from ..api_schemas import CompareTableColumnsReq, CompareTablesReq, TableViewReq
from ..api_helpers import _ensure_complete
from ..ai_usage import add_usage
from ..services.table_tools import (
    _ai_selected_table_review,
    _align_columns,
    _align_rows,
    _column_names,
    _compare_row_values,
    _find_row,
    _find_table_by_id,
    _guess_row_label_columns,
    _resolve_table,
    _row_definition_for_table,
    _row_key_for_table,
    _row_matches_filter,
    _row_summary,
    _row_values_for_table,
    _table_exposure,
    _table_matrix,
    _table_review_rows,
    _table_rows,
    _table_view_payload,
    _table_header_insights,
)

router = APIRouter()

@router.get("/runs/{run_id}/tables")
def list_tables(run_id: str, include_rows: bool = False):
    r = _ensure_complete(run_id)

    def _summarize(blocks):
        out = []
        for block in blocks:
            if block.block_type.value != "table":
                continue
            matrix = _table_matrix(block, blocks, include_rows=include_rows)
            if matrix.get("is_real_table", True):
                out.append(matrix)
        return out

    return {
        "base": _summarize(r["base_blocks"]),
        "target": _summarize(r["target_blocks"]),
    }

@router.post("/runs/{run_id}/table-view")
def table_view(run_id: str, req: TableViewReq):
    r = _ensure_complete(run_id)

    if req.side not in ("base", "target"):
        raise HTTPException(400, "side must be base or target")

    blocks = r["base_blocks"] if req.side == "base" else r["target_blocks"]
    table = _find_table_by_id(blocks, req.table_id)

    if not table:
        raise HTTPException(404, "Selected table could not be found. Re-run the comparison and select a table from the current result.")

    return _table_view_payload(
        table,
        blocks,
        columns=req.columns,
        row_filter=req.row_filter,
        limit=req.limit,
    )

@router.post("/runs/{run_id}/compare-table-columns")
def compare_table_columns(run_id: str, req: CompareTableColumnsReq):
    r = _ensure_complete(run_id)

    base_table = _find_table_by_id(r["base_blocks"], req.base_table_id)
    target_table = _find_table_by_id(r["target_blocks"], req.target_table_id)

    if not base_table or not target_table:
        raise HTTPException(
            404,
            {
                "message": "Selected table could not be found. Re-run the comparison and select tables from the current result.",
                "base_found": bool(base_table),
                "target_found": bool(target_table),
            },
        )

    base_rows = _table_rows(base_table, r["base_blocks"])
    target_rows = _table_rows(target_table, r["target_blocks"])

    base_columns = _column_names(base_table, base_rows)
    target_columns = _column_names(target_table, target_rows)

    base_row_columns = req.base_row_columns or _guess_row_label_columns(base_columns, base_rows, base_table)
    target_row_columns = req.target_row_columns or _guess_row_label_columns(target_columns, target_rows, target_table)

    base_value_columns = req.base_value_columns or [c for c in base_columns if c not in base_row_columns]
    target_value_columns = req.target_value_columns or [c for c in target_columns if c not in target_row_columns]

    base_row_columns = list(dict.fromkeys(base_row_columns))
    target_row_columns = list(dict.fromkeys(target_row_columns))
    base_value_columns = [c for c in dict.fromkeys(base_value_columns) if c not in base_row_columns]
    target_value_columns = [c for c in dict.fromkeys(target_value_columns) if c not in target_row_columns]

    invalid_base = [c for c in base_row_columns + base_value_columns if c not in base_columns]
    invalid_target = [c for c in target_row_columns + target_value_columns if c not in target_columns]

    if invalid_base or invalid_target:
        raise HTTPException(
            400,
            {
                "message": "One or more selected columns were not found in the selected tables.",
                "invalid_base_columns": invalid_base,
                "invalid_target_columns": invalid_target,
                "base_columns": base_columns,
                "target_columns": target_columns,
            },
        )

    base_rows = [row for row in base_rows if _row_matches_filter(row, base_row_columns, req.row_filter, base_table, base_columns)]
    target_rows = [row for row in target_rows if _row_matches_filter(row, target_row_columns, req.row_filter, target_table, target_columns)]

    value_alignment = _align_columns(base_value_columns, target_value_columns)

    row_results = []
    counts = {"ADDED": 0, "DELETED": 0, "MODIFIED": 0, "UNCHANGED": 0}

    for base_row, target_row, match_score in _align_rows(base_rows, target_rows, base_row_columns, target_row_columns, base_table, target_table):
        field_diffs = _compare_row_values(base_row, target_row, value_alignment, base_table, target_table)

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

        selected_base_columns = base_row_columns + base_value_columns
        selected_target_columns = target_row_columns + target_value_columns

        from ..api_helpers import _row_values
        row_results.append(
            {
                "change_type": change_type,
                "match_score": round(match_score, 2),
                "row_key": {
                    "base": _row_key_for_table(base_table, base_row, base_row_columns) if base_row else None,
                    "target": _row_key_for_table(target_table, target_row, target_row_columns) if target_row else None,
                },
                "row_definition": {
                    "base": _row_definition_for_table(base_table, base_row, base_row_columns) if base_row else None,
                    "target": _row_definition_for_table(target_table, target_row, target_row_columns) if target_row else None,
                },
                "base_row": _row_summary(base_row, 0, selected_base_columns, base_row_columns, base_table) if base_row else None,
                "target_row": _row_summary(target_row, 0, selected_target_columns, target_row_columns, target_table) if target_row else None,
                "base_values": _row_values_for_table(base_table, base_row, base_columns) if base_row else {},
                "target_values": _row_values_for_table(target_table, target_row, target_columns) if target_row else {},
                "field_diffs": field_diffs,
            }
        )

        if len(row_results) >= max(1, min(req.limit, 1000)):
            break

    review_rows = _table_review_rows(row_results)
    header_insights = _table_header_insights(value_alignment, row_results)
    base_table_matrix = _table_matrix(base_table, r["base_blocks"], include_rows=False)
    target_table_matrix = _table_matrix(target_table, r["target_blocks"], include_rows=False)
    ai_review = None

    if req.use_ai:
        ai_review = _ai_selected_table_review(
            question=req.question or "Review this selected table comparison. Highlight changed values, unchanged values with changed headers, and clarification questions.",
            base_table=base_table_matrix,
            target_table=target_table_matrix,
            base_row_columns=base_row_columns,
            target_row_columns=target_row_columns,
            base_value_columns=base_value_columns,
            target_value_columns=target_value_columns,
            value_alignment=value_alignment,
            counts=counts,
            row_results=row_results,
            header_insights=header_insights,
        )
        if isinstance(ai_review, dict):
            add_usage(r, ai_review.get("usage"))

    return {
        "view": "table_comparison",
        "answer": (
            f"Compared {len(base_rows)} baseline row(s) with {len(target_rows)} revised row(s). "
            f"Found {counts['ADDED']} added, {counts['DELETED']} deleted, and {counts['MODIFIED']} modified row(s)."
        ),
        "review_summary": (
            f"Selected table slice review: {counts['ADDED']} added, {counts['DELETED']} deleted, "
            f"{counts['MODIFIED']} modified, and {counts['UNCHANGED']} unchanged aligned row(s). "
            "Use the review rows below to confirm business impact with the responsible owner."
        ),
        "review_columns": ["Feature", "Change", "Seek Clarification", "Change Type", "Confidence"],
        "review_rows": review_rows,
        "header_insight_columns": ["Baseline Header", "Revised Header", "Header Match", "Observation", "Seek Clarification"],
        "header_insights": header_insights,
        "ai_review": ai_review,
        "base_table": base_table_matrix,
        "target_table": target_table_matrix,
        "base_preview": _table_view_payload(base_table, r["base_blocks"], base_row_columns + base_value_columns, req.row_filter, limit=30),
        "target_preview": _table_view_payload(target_table, r["target_blocks"], target_row_columns + target_value_columns, req.row_filter, limit=30),
        "base_row_columns": base_row_columns,
        "target_row_columns": target_row_columns,
        "base_value_columns": base_value_columns,
        "target_value_columns": target_value_columns,
        "value_column_alignment": value_alignment,
        "counts": counts,
        "rows": row_results,
        "row_diffs": row_results,
    }

@router.post("/runs/{run_id}/compare-tables")
def compare_tables_endpoint(run_id: str, req: CompareTablesReq):
    r = _ensure_complete(run_id)

    base_table = _resolve_table(r["base_blocks"], req.base_table_id, req.base_header_query)
    target_table = _resolve_table(r["target_blocks"], req.target_table_id, req.target_header_query)

    if not base_table or not target_table:
        raise HTTPException(
            404,
            {
                "message": "Selected table could not be found.",
                "base_found": bool(base_table),
                "target_found": bool(target_table),
                "hint": "Use table IDs from GET /runs/{run_id}/tables, or provide header/title text that appears near the table.",
            },
        )

    base_rows = _table_rows(base_table, r["base_blocks"])
    target_rows = _table_rows(target_table, r["target_blocks"])

    base_columns = _column_names(base_table, base_rows)
    target_columns = _column_names(target_table, target_rows)
    base_row_columns = _guess_row_label_columns(base_columns, base_rows, base_table)
    target_row_columns = _guess_row_label_columns(target_columns, target_rows, target_table)

    if req.base_row_key or req.target_row_key:
        base_row = _find_row(base_rows, req.base_row_key or req.target_row_key, base_row_columns)
        target_row = _find_row(target_rows, req.target_row_key or req.base_row_key, target_row_columns)

        if not base_row or not target_row:
            raise HTTPException(
                404,
                {
                    "message": "Selected row could not be found in one or both tables.",
                    "base_row_found": bool(base_row),
                    "target_row_found": bool(target_row),
                    "base_table": _table_matrix(base_table, r["base_blocks"]),
                    "target_table": _table_matrix(target_table, r["target_blocks"]),
                },
            )

        value_alignment = _align_columns(
            [c for c in base_columns if c not in base_row_columns],
            [c for c in target_columns if c not in target_row_columns],
        )
        field_diffs = _compare_row_values(base_row, target_row, value_alignment, base_table, target_table)

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
                    "key": _row_key_for_table(base_table, base_row, base_row_columns),
                    "match_score": 1.0,
                    "base_row": _row_summary(base_row, 0, base_columns, base_row_columns, base_table),
                    "target_row": _row_summary(target_row, 0, target_columns, target_row_columns, target_table),
                    "definition": _row_definition_for_table(base_table, base_row, base_row_columns),
                    "field_diffs": field_diffs,
                }
            ] if field_diffs else [],
        }

    req2 = CompareTableColumnsReq(
        base_table_id=str(base_table.id),
        target_table_id=str(target_table.id),
        base_row_columns=base_row_columns,
        target_row_columns=target_row_columns,
        base_value_columns=[c for c in base_columns if c not in base_row_columns],
        target_value_columns=[c for c in target_columns if c not in target_row_columns],
    )
    return compare_table_columns(run_id, req2)
