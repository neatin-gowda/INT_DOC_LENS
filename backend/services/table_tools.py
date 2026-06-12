"""Table discovery, viewing, and selected-column comparison helpers."""

from __future__ import annotations

import json
import os
import re
from typing import Any, Optional

from fastapi import HTTPException
from rapidfuzz import fuzz

from ..ai_usage import usage_from_response
from ..models import Block


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


_INTERNAL_TABLE_FIELDS = {
    "__anchors__",
    "__pages__",
    "__row_index__",
    "__table_title__",
    "__table_context__",
    "anchors",
    "bbox_by_page",
    "caption",
    "column_profiles",
    "extraction_confidence",
    "extraction_intelligence",
    "field_profiles",
    "header_index",
    "header_row_count",
    "header_rows",
    "header_sources",
    "header_strategy",
    "kind",
    "language",
    "page_width",
    "page_height",
    "quality_warnings",
    "source_extraction",
    "source_format",
    "source_tables",
    "strategies",
    "table_fingerprint",
    "visual_match_score",
    "visual_match_source",
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
    "pcb",
    "model",
    "series",
    "equipment",
    "group",
    "package",
    "option",
    "content",
)

_VALUE_COLUMN_HINTS = (
    "pcv",
    "pcb",
    "value",
    "column",
    "package",
    "series",
    "model",
    "price",
    "cost",
    "amount",
    "status",
    "availability",
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


def _safe_payload(block: Block) -> dict:
    return block.payload if isinstance(block.payload, dict) else {}


def _table_header(block: Block) -> list[str]:
    payload = _safe_payload(block)
    return [
        str(h or "").strip()
        for h in payload.get("header", [])
        if not _is_user_hidden_field(str(h or "").strip())
    ]


def _table_rows(table: Block, blocks: list[Block]) -> list[Block]:
    return [
        b for b in blocks
        if b.parent_id == table.id and b.block_type.value == "table_row"
    ]


def _table_payload_rows(table: Block) -> list[list[Any]]:
    payload = _safe_payload(table)
    rows = payload.get("rows")

    if not isinstance(rows, list):
        return []

    normalized = []
    for row in rows:
        if isinstance(row, list):
            normalized.append(row)
        elif isinstance(row, tuple):
            normalized.append(list(row))
        elif row is not None:
            normalized.append([row])

    return normalized


def _row_payload_index(row: Optional[Block]) -> Optional[int]:
    if not row:
        return None

    if isinstance(row.payload, dict):
        idx = row.payload.get("__row_index__")
        if isinstance(idx, int):
            return idx
        if isinstance(idx, str) and idx.isdigit():
            return int(idx)

    m = re.search(r"/row_(\d+)$", row.path or "")
    if m:
        return int(m.group(1))

    return None


def _row_values(row: Optional[Block]) -> dict[str, Any]:
    if not row or not isinstance(row.payload, dict):
        return {}

    out = {}
    for key, value in row.payload.items():
        clean_key = str(key or "").strip()
        if not clean_key:
            continue
        if clean_key in _INTERNAL_TABLE_FIELDS or _is_user_hidden_field(clean_key):
            continue
        if clean_key.startswith("__"):
            continue
        out[clean_key] = value

    return out


def _row_values_for_table(table: Optional[Block], row: Optional[Block], columns: Optional[list[str]] = None) -> dict[str, Any]:
    values = _row_values(row)
    if values:
        return values

    if not table or not row:
        return {}

    raw_rows = _table_payload_rows(table)
    row_idx = _row_payload_index(row)

    if row_idx is None or row_idx < 0 or row_idx >= len(raw_rows):
        return {}

    raw = raw_rows[row_idx]
    cols = columns or _column_names(table, _table_rows(table, []))
    if not cols:
        cols = [f"Column {i + 1}" for i in range(len(raw))]

    out = {}
    for idx, col in enumerate(cols):
        out[col] = raw[idx] if idx < len(raw) else ""

    return out


def _is_generic_column_name(name: str) -> bool:
    return bool(re.match(r"^(col|column|value)\s*[_-]?\s*\d+$", str(name or ""), re.I))


def _column_names(table: Block, rows: list[Block]) -> list[str]:
    names = _table_header(table)
    seen = set()
    out = []

    for name in names:
        name = str(name or "").strip()
        if not name or _is_user_hidden_field(name) or name in _INTERNAL_TABLE_FIELDS:
            continue
        if name not in seen:
            out.append(name)
            seen.add(name)

    for row in rows:
        for key in _row_values(row).keys():
            if key not in seen and not _is_user_hidden_field(key):
                out.append(key)
                seen.add(key)

    has_row_payload_values = any(_row_values(row) for row in rows)
    if not has_row_payload_values:
        raw_rows = _table_payload_rows(table)
        max_width = max([len(r) for r in raw_rows] + [0])
        for idx in range(max_width):
            name = out[idx] if idx < len(out) and out[idx] else f"Column {idx + 1}"
            if name not in seen and not _is_user_hidden_field(name):
                out.append(name)
                seen.add(name)

    return out


def _column_quality(columns: list[str]) -> float:
    if not columns:
        return 0.0

    useful = 0
    for col in columns:
        if not _is_generic_column_name(col):
            useful += 1

    return useful / max(1, len(columns))


def _table_exposure(table: Block, rows: list[Block], columns: list[str]) -> dict[str, Any]:
    payload = _safe_payload(table)
    source_format = str(payload.get("source_format") or "").lower()
    intelligence = payload.get("extraction_intelligence") if isinstance(payload.get("extraction_intelligence"), dict) else {}
    table_quality = intelligence.get("table_quality") if isinstance(intelligence.get("table_quality"), dict) else {}
    confidence = payload.get("extraction_confidence") or table_quality.get("confidence")
    try:
        confidence_float = float(confidence) if confidence is not None else None
    except Exception:
        confidence_float = None

    header_quality = _column_quality(columns)
    generic_count = sum(1 for col in columns if _is_generic_column_name(col))
    generic_ratio = generic_count / max(1, len(columns))
    row_texts = [_display_text(row.text, 500) for row in rows[:30]]
    long_text_rows = sum(1 for text in row_texts if len(text) > 160 or len(text.split()) > 24)
    long_text_ratio = long_text_rows / max(1, len(row_texts))
    row_value_sets = [_row_values(row) for row in rows[:30]]
    cell_texts = [
        _display_text(value, 500)
        for values in row_value_sets
        for value in values.values()
        if _display_text(value, 500)
    ]
    long_cells = sum(1 for text in cell_texts if len(text) > 70 or len(text.split()) >= 10)
    long_cell_ratio = long_cells / max(1, len(cell_texts))
    mixed_script_cells = sum(
        1
        for text in cell_texts
        if re.search(r"[\u0600-\u06ff]", text) and re.search(r"[A-Za-z]", text)
    )
    mixed_script_rows = sum(
        1
        for values in row_value_sets
        if any(re.search(r"[\u0600-\u06ff]", str(value or "")) for value in values.values())
        and any(re.search(r"[A-Za-z]", str(value or "")) for value in values.values())
    )
    mixed_script_ratio = max(
        mixed_script_cells / max(1, len(cell_texts)),
        mixed_script_rows / max(1, len(row_value_sets)),
    )
    structured_columns = [
        col for col in columns
        if any(term in _norm_text(col) for term in (*_ROW_LABEL_HINTS, *_VALUE_COLUMN_HINTS))
    ]
    is_layout_candidate = source_format in {"docx", "word", "pdf", "image", "png", "jpg", "jpeg"}
    structured_ratio = len(structured_columns) / max(1, len(columns))

    reason = "real_table"
    is_real = True

    if payload.get("layout_table"):
        is_real = False
        reason = "word_layout_table"
    elif len(columns) < 2 or not rows:
        is_real = False
        reason = "insufficient_table_shape"
    elif is_layout_candidate and len(columns) <= 6 and long_text_ratio >= 0.45 and not structured_columns:
        is_real = False
        reason = "word_narrative_layout"
    elif is_layout_candidate and not structured_columns and mixed_script_ratio >= 0.2:
        is_real = False
        reason = "word_bilingual_layout"
    elif is_layout_candidate and structured_ratio < 0.34 and mixed_script_ratio >= 0.2 and (long_cell_ratio >= 0.2 or long_text_ratio >= 0.2 or len(rows) <= 8):
        is_real = False
        reason = "word_bilingual_layout"
    elif is_layout_candidate and structured_ratio < 0.34 and long_cell_ratio >= 0.45 and len(rows) <= 6:
        is_real = False
        reason = "word_side_by_side_layout"
    elif is_layout_candidate and structured_ratio < 0.25 and long_cell_ratio >= 0.35 and long_text_ratio >= 0.35:
        is_real = False
        reason = "word_narrative_layout"
    elif confidence_float is not None and confidence_float < 0.42 and header_quality < 0.35:
        is_real = False
        reason = "low_table_confidence"
    elif generic_ratio >= 0.85 and len(rows) <= 2:
        is_real = False
        reason = "generic_short_table"

    return {
        "is_real_table": is_real,
        "reason": reason,
        "source_format": source_format or None,
        "header_quality": round(header_quality, 2),
        "confidence": confidence_float,
        "generic_header_ratio": round(generic_ratio, 2),
        "mixed_script_ratio": round(mixed_script_ratio, 2),
        "long_cell_ratio": round(long_cell_ratio, 2),
    }


def _table_title(table: Block, rows: Optional[list[Block]] = None) -> str:
    payload = _safe_payload(table)
    intelligence = payload.get("extraction_intelligence") if isinstance(payload.get("extraction_intelligence"), dict) else {}
    table_quality = intelligence.get("table_quality") if isinstance(intelligence.get("table_quality"), dict) else {}

    quality_title = _display_text(table_quality.get("title"), 160)
    if quality_title:
        return quality_title

    for key in ("table_title", "title", "caption"):
        value = _display_text(payload.get(key), 160)
        if value:
            return value

    near_texts = payload.get("near_texts")
    if isinstance(near_texts, list):
        for text in near_texts:
            value = _display_text(text, 160)
            if value:
                return value

    context = _display_text(payload.get("table_context"), 160)
    if context:
        return context

    path_label = _path_label(table.path)
    if path_label and path_label != "Document":
        return path_label

    rows = rows or []
    columns = _column_names(table, rows)
    useful_columns = [c for c in columns if not _is_generic_column_name(c)]

    if useful_columns:
        return " / ".join(useful_columns[:3])[:160]

    return f"Table on page {table.page_number}"


def _table_context(table: Block) -> str:
    payload = _safe_payload(table)
    context = _display_text(payload.get("table_context"), 260)
    if context:
        return context
    return _path_label(table.path)


def _table_pages(table: Block) -> list[int]:
    payload = _safe_payload(table)
    pages = payload.get("spans_pages")
    if isinstance(pages, list) and pages:
        return [int(p) for p in pages if p]
    return [table.page_number]


def _table_display_name(table: Block, rows: list[Block]) -> str:
    pages = _table_pages(table)
    page_label = f"p{pages[0]}" if len(pages) == 1 else f"p{pages[0]}-{pages[-1]}"
    columns = _column_names(table, rows)
    title = _table_title(table, rows)
    return f"{page_label} - {title} ({len(columns)} columns, {len(rows)} rows)"


def _row_key(row: Optional[Block], row_columns: Optional[list[str]] = None) -> str:
    if not row:
        return ""

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


def _row_key_for_table(table: Optional[Block], row: Optional[Block], row_columns: Optional[list[str]] = None) -> str:
    if not row:
        return ""

    columns = _column_names(table, _table_rows(table, [])) if table else []
    values = _row_values_for_table(table, row, columns)

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


def _row_definition(row: Optional[Block], row_columns: Optional[list[str]] = None) -> str:
    if not row:
        return ""

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

        if _is_generic_column_name(str(key)):
            parts.append(v)
        else:
            parts.append(f"{key}: {v}")

        if len(parts) >= 4:
            break

    if parts:
        return " | ".join(parts)

    return _display_text(row.text, 260)


def _row_definition_for_table(table: Optional[Block], row: Optional[Block], row_columns: Optional[list[str]] = None) -> str:
    if not row:
        return ""

    columns = _column_names(table, _table_rows(table, [])) if table else []
    values = _row_values_for_table(table, row, columns)
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

        if _is_generic_column_name(str(key)):
            parts.append(v)
        else:
            parts.append(f"{key}: {v}")

        if len(parts) >= 4:
            break

    if parts:
        return " | ".join(parts)

    return _display_text(row.text, 260)


def _row_summary(row: Block, index: int, columns: Optional[list[str]] = None, row_columns: Optional[list[str]] = None, table: Optional[Block] = None) -> dict:
    values = _row_values_for_table(table, row, columns)
    selected_values = {col: values.get(col, "") for col in columns} if columns else values

    return {
        "id": str(row.id),
        "row_index": index,
        "stable_key": row.stable_key,
        "row_key": _row_key_for_table(table, row, row_columns),
        "definition": _row_definition_for_table(table, row, row_columns),
        "page": row.page_number,
        "path": row.path,
        "text": _display_text(row.text, 500),
        "values": selected_values,
        "bbox": row.bbox,
    }


def _guess_row_label_columns(columns: list[str], rows: list[Block], table: Optional[Block] = None) -> list[str]:
    if not columns:
        return []

    scored = []

    for idx, col in enumerate(columns):
        col_low = _norm_text(col)
        non_empty = 0
        unique_values = set()
        text_len = 0
        numericish = 0

        for row in rows[:100]:
            value = _display_text(_row_values_for_table(table, row, columns).get(col), 160)
            if value:
                non_empty += 1
                unique_values.add(value.lower())
                text_len += len(value)
                compact = re.sub(r"[\s,$%/().:-]", "", value)
                if compact and sum(ch.isdigit() for ch in compact) >= max(1, sum(ch.isalpha() for ch in compact) * 2):
                    numericish += 1

        uniqueness = len(unique_values) / max(1, non_empty)
        avg_len = text_len / max(1, non_empty)
        numeric_ratio = numericish / max(1, non_empty)
        hint = 1.0 if any(term in col_low for term in _ROW_LABEL_HINTS) else 0.0
        left_bias = max(0.0, 1.0 - (idx / max(1, len(columns))))

        score = (
            hint * 0.40
            + uniqueness * 0.20
            + min(avg_len / 45.0, 1.0) * 0.20
            + left_bias * 0.15
            - numeric_ratio * 0.20
        )
        scored.append((score, col))

    scored.sort(key=lambda x: x[0], reverse=True)
    best = [col for score, col in scored[:1] if score >= 0.25]

    return best or [columns[0]]


def _guess_value_columns(columns: list[str], row_columns: list[str]) -> list[str]:
    candidates = [c for c in columns if c not in row_columns]

    if not candidates:
        return []

    hinted = [c for c in candidates if any(term in _norm_text(c) for term in _VALUE_COLUMN_HINTS)]
    if hinted:
        return hinted

    return candidates


def _column_details(columns: list[str], rows: list[Block], table: Optional[Block] = None) -> list[dict]:
    details = []
    payload = _safe_payload(table) if table else {}
    profile_by_name = {}
    for profile in payload.get("column_profiles", []) if isinstance(payload.get("column_profiles"), list) else []:
        if isinstance(profile, dict):
            profile_by_name[str(profile.get("name") or "")] = profile

    for col in columns:
        non_empty = 0
        samples = []
        distinct = set()
        profile = profile_by_name.get(col) or {}

        for row in rows[:120]:
            value = _display_text(_row_values_for_table(table, row, columns).get(col), 120)
            if not value:
                continue

            non_empty += 1
            distinct.add(value.lower())
            if len(samples) < 5 and value not in samples:
                samples.append(value)

        details.append(
            {
                "name": col,
                "is_generic": _is_generic_column_name(col),
                "non_empty": non_empty,
                "distinct_count": len(distinct),
                "sample_values": samples,
                "semantic_role": profile.get("semantic_role"),
                "value_type_hint": profile.get("value_type_hint"),
                "confidence": profile.get("confidence"),
            }
        )

    return details


def _table_matrix(table: Block, blocks: list[Block], include_rows: bool = False) -> dict:
    rows = _table_rows(table, blocks)
    columns = _column_names(table, rows)
    row_label_columns = _guess_row_label_columns(columns, rows, table)
    value_columns = _guess_value_columns(columns, row_label_columns)
    pages = _table_pages(table)
    payload = _safe_payload(table)
    intelligence = payload.get("extraction_intelligence") if isinstance(payload.get("extraction_intelligence"), dict) else {}
    table_quality = intelligence.get("table_quality") if isinstance(intelligence.get("table_quality"), dict) else {}
    header_preview = " | ".join(str(h)[:40] for h in columns[:8])
    exposure = _table_exposure(table, rows, columns)

    matrix = {
        "id": str(table.id),
        "page_first": table.page_number,
        "spans_pages": pages,
        "page_label": f"Page {pages[0]}" if len(pages) == 1 else f"Pages {pages[0]}-{pages[-1]}",
        "path": table.path,
        "title": _table_title(table, rows),
        "context": _table_context(table),
        "area": _path_label(table.path),
        "display_name": _table_display_name(table, rows),
        "n_columns": len(columns),
        "n_rows": len(rows),
        "columns": columns,
        "column_details": _column_details(columns, rows, table),
        "header": columns,
        "header_preview": header_preview,
        "header_quality": exposure["header_quality"],
        "extraction_confidence": exposure["confidence"],
        "quality_warnings": payload.get("quality_warnings") or table_quality.get("warnings") or [],
        "is_real_table": exposure["is_real_table"],
        "table_classification": exposure["reason"],
        "suggested_row_columns": row_label_columns,
        "suggested_value_columns": value_columns,
        "row_keys": [_row_key_for_table(table, r, row_label_columns) for r in rows[:150]],
        "row_preview": [_row_summary(r, i, columns=columns, row_columns=row_label_columns, table=table) for i, r in enumerate(rows[:12])],
    }

    if include_rows:
        matrix["rows"] = [_row_summary(r, i, columns=columns, row_columns=row_label_columns, table=table) for i, r in enumerate(rows)]

    return matrix


def _find_table_by_id(blocks: list[Block], table_id: str | None) -> Optional[Block]:
    if not table_id:
        return None

    for block in blocks:
        if block.block_type.value == "table" and str(block.id) == str(table_id):
            rows = _table_rows(block, blocks)
            columns = _column_names(block, rows)
            if not _table_exposure(block, rows, columns)["is_real_table"]:
                return None
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
        if not _table_exposure(block, rows, columns)["is_real_table"]:
            continue
        searchable = " ".join(
            [
                _table_title(block, rows),
                _table_context(block),
                " ".join(columns),
                block.path or "",
            ]
        )

        score = fuzz.partial_ratio(q, _norm_text(searchable)) / 100.0

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
    """
    Align selected value columns.

    If users intentionally select different names, e.g. baseline PCV 205 and
    revised PCV 203, fuzzy matching alone would call them unrelated. This
    function first matches obvious same-name columns, then pairs remaining
    selected columns by position when that is the only useful comparison.
    """
    used_target = set()
    alignment = []
    unmatched_base = []

    for base_col in base_cols:
        best_col = None
        best_score = 0.0

        for target_col in target_cols:
            if target_col in used_target:
                continue

            score = fuzz.token_set_ratio(_norm_text(base_col), _norm_text(target_col)) / 100.0
            if score > best_score:
                best_score = score
                best_col = target_col

        if best_col is not None and best_score >= 0.72:
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
            unmatched_base.append(base_col)

    unmatched_target = [c for c in target_cols if c not in used_target]

    # Intentional custom comparison: pair remaining selected columns by position.
    while unmatched_base and unmatched_target:
        base_col = unmatched_base.pop(0)
        target_col = unmatched_target.pop(0)
        score = fuzz.token_set_ratio(_norm_text(base_col), _norm_text(target_col)) / 100.0
        alignment.append(
            {
                "base_col": base_col,
                "target_col": target_col,
                "score": round(score, 2),
                "status": "selected_pair",
            }
        )

    for base_col in unmatched_base:
        alignment.append(
            {
                "base_col": base_col,
                "target_col": None,
                "score": 0.0,
                "status": "base_only",
            }
        )

    for target_col in unmatched_target:
        alignment.append(
            {
                "base_col": None,
                "target_col": target_col,
                "score": 0.0,
                "status": "target_only",
            }
        )

    return alignment


def _row_match_score(
    base_row: Block,
    target_row: Block,
    base_row_cols: list[str],
    target_row_cols: list[str],
    base_table: Optional[Block] = None,
    target_table: Optional[Block] = None,
) -> float:
    base_key = _norm_text(_row_key_for_table(base_table, base_row, base_row_cols))
    target_key = _norm_text(_row_key_for_table(target_table, target_row, target_row_cols))
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
    base_table: Optional[Block] = None,
    target_table: Optional[Block] = None,
) -> list[tuple[Optional[Block], Optional[Block], float]]:
    pairs = []
    used_base = set()
    used_target = set()
    scored = []

    for base_row in base_rows:
        for target_row in target_rows:
            score = _row_match_score(base_row, target_row, base_row_cols, target_row_cols, base_table, target_table)
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
    base_table: Optional[Block] = None,
    target_table: Optional[Block] = None,
) -> list[dict]:
    base_columns = _column_names(base_table, _table_rows(base_table, [])) if base_table else None
    target_columns = _column_names(target_table, _table_rows(target_table, [])) if target_table else None
    base_values = _row_values_for_table(base_table, base_row, base_columns) if base_row else {}
    target_values = _row_values_for_table(target_table, target_row, target_columns) if target_row else {}
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


def _table_review_rows(row_results: list[dict], limit: int = 25) -> list[dict]:
    review_rows = []

    for row in row_results[:limit]:
        change_type = str(row.get("change_type") or "MODIFIED").upper()
        row_key = row.get("row_key") if isinstance(row.get("row_key"), dict) else {}
        row_definition = row.get("row_definition") if isinstance(row.get("row_definition"), dict) else {}
        feature = (
            row_key.get("base")
            or row_key.get("target")
            or row_definition.get("base")
            or row_definition.get("target")
            or "Selected item"
        )
        field_diffs = row.get("field_diffs") or []

        if change_type == "ADDED":
            change = f"New value appears in the revised document: {feature}"
            clarification = "Confirm whether this newly added entry is expected and applicable."
        elif change_type == "DELETED":
            change = f"Baseline value is no longer present in the revised document: {feature}"
            clarification = "Confirm whether this removed entry is intentional or moved."
        elif field_diffs:
            examples = []
            for fd in field_diffs[:3]:
                field = fd.get("field") or "value"
                before = str(fd.get("before") or "-")
                after = str(fd.get("after") or "-")
                examples.append(f"{field}: {before} -> {after}")
            change = "; ".join(examples)
            clarification = "Confirm the selected value changes with the responsible owner."
        else:
            change = "No selected value change detected."
            clarification = "No clarification required for the selected columns."

        match_score = row.get("match_score")
        review_rows.append(
            {
                "Feature": str(feature),
                "Change": change,
                "Seek Clarification": clarification,
                "Change Type": change_type,
                "Confidence": f"{round(float(match_score) * 100)}%" if match_score is not None else "-",
            }
        )

    return review_rows


def _table_header_insights(value_alignment: list[dict], row_results: list[dict]) -> list[dict[str, Any]]:
    insights = []

    for item in value_alignment:
        base_col = item.get("base_col")
        target_col = item.get("target_col")
        if not base_col or not target_col:
            continue
        if _norm_text(base_col) == _norm_text(target_col):
            continue

        field_name = f"{base_col} -> {target_col}"
        changed_cells = 0
        for row in row_results:
            for fd in row.get("field_diffs") or []:
                if fd.get("field") == field_name or fd.get("field") == base_col:
                    changed_cells += 1

        insights.append(
            {
                "Baseline Header": base_col,
                "Revised Header": target_col,
                "Header Match": f"{round(float(item.get('score') or 0) * 100)}%",
                "Observation": (
                    f"Header changed from '{base_col}' to '{target_col}' and {changed_cells} selected row value(s) also changed."
                    if changed_cells
                    else f"Header changed from '{base_col}' to '{target_col}', while selected row values appear unchanged in the compared slice."
                ),
                "Seek Clarification": "Confirm whether this is only a label/header rename or a business meaning change.",
            }
        )

    for item in value_alignment:
        if item.get("status") == "base_only" and item.get("base_col"):
            insights.append(
                {
                    "Baseline Header": item.get("base_col"),
                    "Revised Header": "-",
                    "Header Match": "0%",
                    "Observation": f"Selected baseline column '{item.get('base_col')}' has no revised counterpart in the selected table slice.",
                    "Seek Clarification": "Confirm whether the column was removed, moved, renamed, or excluded from the revised template.",
                }
            )
        elif item.get("status") == "target_only" and item.get("target_col"):
            insights.append(
                {
                    "Baseline Header": "-",
                    "Revised Header": item.get("target_col"),
                    "Header Match": "0%",
                    "Observation": f"Selected revised column '{item.get('target_col')}' has no baseline counterpart in the selected table slice.",
                    "Seek Clarification": "Confirm whether this is a newly introduced value/attribute or a renamed baseline column.",
                }
            )

    return insights


def _compact_table_rows_for_ai(row_results: list[dict], limit: int = 80) -> list[dict[str, Any]]:
    rows = []

    for row in row_results[:limit]:
        rows.append(
            {
                "change_type": row.get("change_type"),
                "match_score": row.get("match_score"),
                "row_key": row.get("row_key"),
                "row_definition": row.get("row_definition"),
                "field_diffs": row.get("field_diffs", [])[:12],
                "base_values": row.get("base_row", {}).get("values") if isinstance(row.get("base_row"), dict) else row.get("base_values"),
                "target_values": row.get("target_row", {}).get("values") if isinstance(row.get("target_row"), dict) else row.get("target_values"),
            }
        )

    return rows


def _ai_selected_table_review(
    *,
    question: str,
    base_table: dict[str, Any],
    target_table: dict[str, Any],
    base_row_columns: list[str],
    target_row_columns: list[str],
    base_value_columns: list[str],
    target_value_columns: list[str],
    value_alignment: list[dict],
    counts: dict[str, int],
    row_results: list[dict],
    header_insights: list[dict[str, Any]],
) -> dict[str, Any]:
    endpoint = os.getenv("AZURE_OPENAI_ENDPOINT")
    api_key = os.getenv("AZURE_OPENAI_API_KEY")
    deployment = (
        os.getenv("AZURE_OPENAI_DEPLOYMENT")
        or os.getenv("AZURE_OPENAI_CHAT_DEPLOYMENT")
        or os.getenv("AZURE_OPENAI_DEPLOYMENT_NAME")
        or os.getenv("AZURE_OPENAI_MODEL")
    )

    if not (endpoint and api_key and deployment):
        return {
            "available": False,
            "error": "Azure OpenAI is not configured.",
        }

    prompt_payload = {
        "question": question or "Review the selected table comparison and summarize meaningful changes.",
        "base_table": {
            "name": base_table.get("display_name"),
            "page": base_table.get("page_label"),
            "area": base_table.get("area"),
            "columns": base_table.get("columns"),
        },
        "target_table": {
            "name": target_table.get("display_name"),
            "page": target_table.get("page_label"),
            "area": target_table.get("area"),
            "columns": target_table.get("columns"),
        },
        "selected_columns": {
            "base_row_columns": base_row_columns,
            "target_row_columns": target_row_columns,
            "base_value_columns": base_value_columns,
            "target_value_columns": target_value_columns,
        },
        "column_alignment": value_alignment,
        "header_insights": header_insights,
        "counts": counts,
        "changed_rows": _compact_table_rows_for_ai(row_results),
    }

    try:
        from openai import AzureOpenAI

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
                        "You are Altrai table reviewer. Use only the selected table evidence. "
                        "Do not invent rows, columns, values, or business meaning. "
                        "If headers changed but values stayed the same, say that explicitly. "
                        "Return strict JSON only with keys answer, columns, rows, confidence. "
                        "Rows should be useful business review rows."
                    ),
                },
                {
                    "role": "user",
                    "content": json.dumps(prompt_payload, ensure_ascii=False, default=str),
                },
            ],
            temperature=0.1,
            max_tokens=2200,
            response_format={"type": "json_object"},
        )
        data = json.loads(response.choices[0].message.content or "{}")
        if not isinstance(data, dict):
            raise ValueError("AI returned a non-object response")
        return {
            "available": True,
            "answer": str(data.get("answer") or "").strip(),
            "columns": [str(c) for c in data.get("columns", [])] if isinstance(data.get("columns"), list) else [],
            "rows": data.get("rows", []) if isinstance(data.get("rows"), list) else [],
            "confidence": data.get("confidence"),
            "usage": usage_from_response(response, operation="table_ai_review", model=deployment),
        }
    except Exception as exc:
        return {
            "available": False,
            "error": f"Azure OpenAI selected-table review failed: {type(exc).__name__}: {exc}",
        }


def _row_matches_filter(row: Block, row_columns: list[str], row_filter: Optional[str], table: Optional[Block] = None, columns: Optional[list[str]] = None) -> bool:
    if not row_filter:
        return True

    q = _norm_text(row_filter)
    values = _row_values_for_table(table, row, columns)
    searchable = " ".join(
        [
            _row_key_for_table(table, row, row_columns),
            row.text or "",
            " ".join(str(v or "") for v in values.values()),
        ]
    )

    text = _norm_text(searchable)
    if q in text:
        return True

    return fuzz.partial_ratio(q, text) / 100.0 >= 0.55


def _table_view_payload(
    table: Block,
    blocks: list[Block],
    columns: Optional[list[str]] = None,
    row_filter: Optional[str] = None,
    limit: int = 300,
) -> dict:
    rows = _table_rows(table, blocks)
    all_columns = _column_names(table, rows)
    if not _table_exposure(table, rows, all_columns)["is_real_table"]:
        raise HTTPException(409, "This extracted content is narrative/layout text, not a structured business table.")
    row_columns = _guess_row_label_columns(all_columns, rows, table)

    if columns:
        selected_columns = [c for c in columns if c in all_columns]
    else:
        selected_columns = all_columns

    filtered_rows = [
        row for row in rows
        if _row_matches_filter(row, row_columns, row_filter, table, all_columns)
    ]

    output_rows = []
    for idx, row in enumerate(filtered_rows[: max(1, min(limit, 1000))]):
        values = _row_values_for_table(table, row, all_columns)
        output_rows.append(
            {
                "row_index": idx,
                "row_key": _row_key_for_table(table, row, row_columns),
                "definition": _row_definition_for_table(table, row, row_columns),
                "page": row.page_number,
                "values": {col: values.get(col, "") for col in selected_columns},
            }
        )

    matrix = _table_matrix(table, blocks, include_rows=False)

    return {
        "view": "table",
        "table": matrix,
        "title": matrix["display_name"],
        "columns": selected_columns,
        "row_columns": row_columns,
        "rows": output_rows,
        "count": len(output_rows),
        "total_rows": len(filtered_rows),
        "row_filter": row_filter,
    }


