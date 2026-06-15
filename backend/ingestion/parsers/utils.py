"""
Shared parsing and matching utilities for docx, excel, csv, and pdf parsers.
"""
from __future__ import annotations

import hashlib
import json
import re
from pathlib import Path
from typing import Any, Optional

from rapidfuzz import fuzz

from ...models import Block, BlockType

def _hash_content(payload: dict) -> str:
    s = json.dumps(payload, sort_keys=True, ensure_ascii=False, default=str)
    return hashlib.sha256(s.encode("utf-8")).hexdigest()

def _clean(value: Any) -> str:
    text = str(value or "").replace("\u00a0", " ")
    return re.sub(r"\s+", " ", text).strip()

def _slug(value: Any, fallback: str = "section") -> str:
    text = re.sub(r"[^\w]+", "_", str(value or "")).strip("_").lower()
    return text[:70] or fallback

def _header_name(value: Any, index: int) -> str:
    text = _clean(value)
    return text[:90] if text else f"Column {index + 1}"

def _looks_like_identifier(value: Any) -> bool:
    text = _clean(value)
    if not text:
        return False

    low = text.lower()
    if low in {"x", "o", "s", "m", "-", "--", "n/a", "na", "none", "yes", "no", "tbd"}:
        return False
    if "$" in text or "%" in text:
        return False
    if re.fullmatch(r"(?:19|20)\d{2}", text):
        return False
    if re.fullmatch(r"\d{1,2}[/-]\d{1,2}[/-]\d{2,4}", text):
        return False

    return bool(
        re.fullmatch(r"[A-Z]{1,10}[- ]?\d{1,12}[A-Z]?", text, re.I)
        or re.fullmatch(r"\d{2,12}[A-Z]?", text, re.I)
        or re.fullmatch(r"[A-Z0-9]{2,12}[A-Z]?", text, re.I)
    )

def _detect_stable_key(row: list[str], header: Optional[list[str]] = None) -> Optional[str]:
    header = header or []
    header_low = [h.lower() for h in header]

    identifier_terms = (
        "id",
        "code",
        "key",
        "number",
        "no",
        "part",
        "item",
        "model",
        "option",
        "order",
        "package",
        "pcv",
        "pcb",
        "sku",
        "ref",
    )

    for i, cell in enumerate(row):
        if not _looks_like_identifier(cell):
            continue
        h = header_low[i] if i < len(header_low) else ""
        if any(term in h for term in identifier_terms):
            return _clean(cell)

    for cell in row:
        if _looks_like_identifier(cell):
            return _clean(cell)

    for cell in row:
        text = _clean(cell)
        if len(text) >= 3:
            return text[:120]

    return None

def _row_payload(header: list[str], row: list[str]) -> dict[str, str]:
    payload: dict[str, str] = {}
    used: set[str] = set()
    max_len = max(len(header), len(row))

    for i in range(max_len):
        key = _header_name(header[i] if i < len(header) else "", i)
        if key in used:
            key = f"{key} {i + 1}"
        used.add(key)
        payload[key] = _clean(row[i]) if i < len(row) else ""

    return payload

def _filled_count(row: list[str]) -> int:
    return sum(1 for cell in row if _clean(cell))

def _looks_like_header_row(row: list[str], body_sample: list[list[str]], n_cols: int) -> bool:
    filled = _filled_count(row)
    if filled == 0:
        return False

    low_text = " ".join(_clean(cell).lower() for cell in row)
    header_terms = (
        "feature",
        "description",
        "item",
        "code",
        "number",
        "no",
        "pcv",
        "pcb",
        "package",
        "model",
        "series",
        "option",
        "value",
        "status",
        "price",
        "date",
        "qty",
        "quantity",
        "size",
        "color",
        "colour",
        "remarks",
        "comments",
    )
    if any(term in low_text for term in header_terms):
        return True

    non_numeric = sum(
        1
        for cell in row
        if _clean(cell) and not re.fullmatch(r"[-+]?[$€£]?\d[\d,]*(?:\.\d+)?%?", _clean(cell))
    )
    body_filled = [_filled_count(sample) for sample in body_sample if _filled_count(sample)]
    avg_body_filled = (sum(body_filled) / len(body_filled)) if body_filled else filled

    if n_cols >= 4 and filled <= max(2, int(n_cols * 0.45)) and non_numeric >= 1:
        return True
    if filled >= 2 and non_numeric >= max(1, filled - 1) and filled <= avg_body_filled + 1:
        return True
    return False

def _merge_header_rows(header_rows: list[list[str]], n_cols: int) -> list[str]:
    filled_header_rows: list[list[str]] = []
    if len(header_rows) > 1:
        for row in header_rows:
            filled_row = []
            last_value = ""
            for col in range(n_cols):
                value = _clean(row[col] if col < len(row) else "")
                if value:
                    last_value = value
                filled_row.append(value or last_value)
            filled_header_rows.append(filled_row)
    else:
        filled_header_rows = [[_clean(cell) for cell in row] for row in header_rows]

    merged: list[str] = []
    previous = ""

    for col in range(n_cols):
        parts = []
        last = ""
        for row in filled_header_rows:
            value = row[col] if col < len(row) else ""
            if not value:
                continue
            if value == last:
                continue
            parts.append(value)
            last = value

        name = " / ".join(parts).strip()
        if not name:
            name = f"Column {col + 1}"
        if name == previous and len(parts) == 1:
            name = f"{name} {col + 1}"
        previous = name
        merged.append(name[:140])

    return merged

def _detect_header_band(normalized_rows: list[list[str]], n_cols: int) -> tuple[list[str], list[list[str]], list[list[str]], int, str]:
    if not normalized_rows:
        return [], [], [], 0, "empty"

    header_start = 0
    for idx, row in enumerate(normalized_rows[:12]):
        if _filled_count(row) >= max(1, min(2, n_cols)):
            header_start = idx
            break

    body_sample = normalized_rows[header_start + 1 : header_start + 8]
    header_count = 1
    for offset in range(1, min(4, len(normalized_rows) - header_start)):
        row = normalized_rows[header_start + offset]
        next_body = normalized_rows[header_start + offset + 1 : header_start + offset + 6]
        if _looks_like_header_row(row, next_body or body_sample, n_cols):
            header_count += 1
        else:
            break

    header_rows = normalized_rows[header_start : header_start + header_count]
    header = _merge_header_rows(header_rows, n_cols)
    body_rows = normalized_rows[header_start + header_count :]

    if not body_rows:
        body_rows = normalized_rows[header_start + 1 :] if len(normalized_rows) > header_start + 1 else normalized_rows
        header_rows = [normalized_rows[header_start]]
        header = [_header_name(cell, i) for i, cell in enumerate(normalized_rows[header_start])]
        header_count = 1

    return header, body_rows, header_rows, header_start, "nested_header" if header_count > 1 else "single_header"

def _text_scripts(value: Any) -> set[str]:
    text = _clean(value)
    scripts = set()
    if re.search(r"[\u0600-\u06ff]", text):
        scripts.add("arabic")
    if re.search(r"[A-Za-z]", text):
        scripts.add("latin")
    return scripts

def _script_distribution(value: Any) -> dict[str, float]:
    text = _clean(value)
    latin = len(re.findall(r"[A-Za-z]", text))
    arabic = len(re.findall(r"[\u0600-\u06ff]", text))
    total = latin + arabic
    if not total:
        return {"latin": 0.0, "arabic": 0.0}
    return {"latin": latin / total, "arabic": arabic / total}

def _has_bilingual_column_layout(rows: list[list[str]], n_cols: int) -> bool:
    column_scripts: list[dict[str, float]] = []
    for ci in range(n_cols):
        text = " ".join(_clean(row[ci]) for row in rows if ci < len(row) and _clean(row[ci]))
        if not text:
            column_scripts.append({"latin": 0.0, "arabic": 0.0})
            continue
        column_scripts.append(_script_distribution(text))

    latin_columns = [ci for ci, ratios in enumerate(column_scripts) if ratios["latin"] >= 0.40]
    arabic_columns = [ci for ci, ratios in enumerate(column_scripts) if ratios["arabic"] >= 0.40]
    return bool(latin_columns and arabic_columns and set(latin_columns) != set(arabic_columns))

def _looks_like_layout_table(rows: list[list[str]], n_cols: int) -> bool:
    if n_cols < 2 or n_cols > 6:
        return False

    filled_rows = [row for row in rows if _filled_count(row) >= 1]
    if not filled_rows:
        return False

    if _has_bilingual_column_layout(filled_rows[:24], n_cols):
        return True

    long_cell_count = 0
    short_code_count = 0
    numeric_like_count = 0
    total_cells = 0
    headerish_terms = 0
    mixed_script_rows = 0
    bilingual_parallel_rows = 0
    delimiter_light_rows = 0
    word_counts = []

    for row in filled_rows[:12]:
        scripts = set()
        cell_scripts = []
        row_text = " ".join(_clean(cell) for cell in row[:n_cols] if _clean(cell))
        if "|" not in row_text and "\t" not in row_text and not re.search(r"\s{3,}", row_text):
            delimiter_light_rows += 1

        for cell in row[:n_cols]:
            text = _clean(cell)
            if not text:
                continue
            scripts_for_cell = _text_scripts(text)
            scripts.update(scripts_for_cell)
            cell_scripts.append(scripts_for_cell)
            total_cells += 1
            word_counts.append(len(text.split()))
            if len(text) > 45 or len(text.split()) >= 7:
                long_cell_count += 1
            if _looks_like_identifier(text):
                short_code_count += 1
            if re.fullmatch(r"[-+]?[$€£]?\d[\d,]*(?:\.\d+)?%?", text):
                numeric_like_count += 1
            if re.search(r"\b(feature|item|code|pcv|pcb|qty|quantity|price|status|value)\b", text, re.I):
                headerish_terms += 1
        if len(scripts) >= 2:
            mixed_script_rows += 1
        if any("latin" in item for item in cell_scripts) and any("arabic" in item for item in cell_scripts):
            bilingual_parallel_rows += 1

    if total_cells == 0:
        return False

    long_ratio = long_cell_count / total_cells
    structured_ratio = (short_code_count + numeric_like_count + headerish_terms) / total_cells
    mixed_script_ratio = mixed_script_rows / max(1, len(filled_rows[:12]))
    bilingual_parallel_ratio = bilingual_parallel_rows / max(1, len(filled_rows[:12]))
    delimiter_light_ratio = delimiter_light_rows / max(1, len(filled_rows[:12]))
    avg_words = sum(word_counts) / max(1, len(word_counts))

    if long_ratio >= 0.35 and structured_ratio < 0.35:
        return True

    if (
        (mixed_script_ratio >= 0.25 or bilingual_parallel_ratio >= 0.25)
        and structured_ratio < 0.55
        and (delimiter_light_ratio >= 0.35 or long_ratio >= 0.2 or avg_words >= 4)
    ):
        return True

    if (
        len(filled_rows) <= 2
        and n_cols <= 4
        and bilingual_parallel_ratio > 0
        and structured_ratio < 0.55
    ):
        return True

    return False

def _row_text(payload: dict[str, str]) -> str:
    parts = []
    for key, value in payload.items():
        if not _clean(value):
            continue
        if re.fullmatch(r"Column \d+", str(key), re.I):
            parts.append(_clean(value))
        else:
            parts.append(f"{key}: {_clean(value)}")
    return " | ".join(parts)

def _text_for_visual_match(block: Block) -> str:
    parts = [block.text or "", block.stable_key or "", block.path or ""]

    if isinstance(block.payload, dict):
        for key, value in block.payload.items():
            key = str(key)
            if key.startswith("__") or key in {"page_width", "page_height", "source_extraction"}:
                continue
            if isinstance(value, list):
                parts.extend(str(v or "") for v in value[:30])
            elif isinstance(value, dict):
                parts.extend(f"{k} {v}" for k, v in list(value.items())[:30])
            else:
                parts.append(str(value or ""))

    return _clean(" ".join(parts))

def _visual_match_score(native: Block, visual: Block) -> float:
    native_text = _text_for_visual_match(native)
    visual_text = _text_for_visual_match(visual)

    if not native_text or not visual_text:
        return 0.0

    token_score = fuzz.token_set_ratio(native_text, visual_text) / 100.0
    partial_score = fuzz.partial_ratio(native_text, visual_text) / 100.0
    ratio_score = fuzz.ratio(native_text, visual_text) / 100.0
    type_bonus = 0.06 if native.block_type == visual.block_type else 0.0

    if native.stable_key and native.stable_key == visual.stable_key:
        type_bonus += 0.12

    return min(1.0, max(token_score, partial_score * 0.92, ratio_score * 0.85) + type_bonus)

def _visual_candidates(native: Block, visual_blocks: list[Block]) -> list[Block]:
    if native.block_type == BlockType.TABLE_ROW:
        preferred = [b for b in visual_blocks if b.block_type == BlockType.TABLE_ROW and b.bbox]
        if preferred:
            return preferred

    if native.block_type == BlockType.TABLE:
        preferred = [b for b in visual_blocks if b.block_type == BlockType.TABLE and b.bbox]
        if preferred:
            return preferred

    if native.block_type in {BlockType.SECTION, BlockType.HEADING}:
        preferred = [
            b for b in visual_blocks
            if b.block_type in {BlockType.SECTION, BlockType.HEADING, BlockType.PARAGRAPH} and b.bbox
        ]
        if preferred:
            return preferred

    return [b for b in visual_blocks if b.bbox]

def _attach_visual_bboxes(native_blocks: list[Block], visual_blocks: list[Block]) -> list[Block]:
    if not native_blocks or not visual_blocks:
        return native_blocks

    used_visual: set[Any] = set()
    by_type_threshold = {
        BlockType.TABLE_ROW: 0.54,
        BlockType.TABLE: 0.50,
        BlockType.SECTION: 0.58,
        BlockType.HEADING: 0.58,
        BlockType.PARAGRAPH: 0.60,
        BlockType.LIST_ITEM: 0.58,
        BlockType.KV_PAIR: 0.58,
    }

    for block in native_blocks:
        if block.bbox:
            continue

        candidates = _visual_candidates(block, visual_blocks)
        best = None
        best_score = 0.0

        for candidate in candidates:
            if candidate.id in used_visual and block.block_type != BlockType.TABLE:
                continue

            score = _visual_match_score(block, candidate)
            if score > best_score:
                best = candidate
                best_score = score

        threshold = by_type_threshold.get(block.block_type, 0.60)
        if not best or best_score < threshold:
            continue

        block.bbox = best.bbox
        block.page_number = best.page_number
        if isinstance(best.payload, dict):
            block.payload["page_width"] = best.payload.get("page_width", block.payload.get("page_width", 612))
            block.payload["page_height"] = best.payload.get("page_height", block.payload.get("page_height", 792))
        block.payload["visual_match_score"] = round(best_score, 3)
        block.payload["visual_match_source"] = "converted_pdf"

        if block.block_type != BlockType.TABLE:
            used_visual.add(best.id)

    return native_blocks

def _block(
    *,
    block_type: BlockType,
    path: str,
    text: str = "",
    payload: Optional[dict[str, Any]] = None,
    sequence: int = 0,
    page_number: int = 1,
    parent_id: Any = None,
    stable_key: Optional[str] = None,
) -> Block:
    payload = payload or {}
    payload.setdefault("source_extraction", "native")
    payload.setdefault("page_width", 612)
    payload.setdefault("page_height", 792)

    block = Block(
        parent_id=parent_id,
        block_type=block_type,
        path=path,
        page_number=max(1, int(page_number or 1)),
        bbox=None,
        text=text,
        payload=payload,
        sequence=sequence,
        stable_key=stable_key,
    )
    block.content_hash = _hash_content(payload if payload else {"text": text})
    return block

def _page_for_sequence(seq: int, rows_per_page: int = 45) -> int:
    return max(1, int(seq // rows_per_page) + 1)
