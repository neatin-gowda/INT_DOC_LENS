"""
Persistence layer for normalized document/table comparison data.

This module is intentionally defensive:
- If database env vars are missing, persistence is skipped.
- If persistence fails, the API comparison can still complete in memory.
- IDs from in-memory dataclasses are mapped to SQL UUIDs.
"""
from __future__ import annotations

import hashlib
import json
import re
import uuid
from pathlib import Path
from typing import Any, Optional

from .db import db_enabled, get_conn
from .ai_usage import merge_usage
from .embeddings import embed_texts_with_usage, vector_literal
from .models import Block, BlockDiff


def _json(value: Any) -> str:
    return json.dumps(value, ensure_ascii=False, default=str)


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


def _model_json(value: Any) -> str:
    if hasattr(value, "model_dump_json"):
        return value.model_dump_json()
    if hasattr(value, "json"):
        return value.json()
    return _json(value)


def _clean(value: Any) -> str:
    return re.sub(r"\s+", " ", str(value or "")).strip()


def _norm(value: Any) -> str:
    return _clean(value).lower()


def _sha256_file(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def _payload(block: Block) -> dict:
    return block.payload if isinstance(block.payload, dict) else {}


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
        key = str(key)
        if key.startswith("__"):
            continue
        if key in {
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
        }:
            continue
        out[key] = value

    return out


def _is_generic_column(name: str) -> bool:
    return bool(re.match(r"^(col|column|value)\s*[_-]?\s*\d+$", str(name or ""), re.I))


def _value_type(value: Any) -> str:
    text = _clean(value)

    if not text:
        return "blank"

    low = text.lower()

    if low in {"-", "--", "—", "–", ".", "•", "●", "○", "x", "s", "o", "m", "i"}:
        return "symbol"

    if "$" in text or re.search(r"\b(?:usd|eur|inr|cad)\b", low):
        return "currency"

    if re.fullmatch(r"\d{1,2}[/-]\d{1,2}[/-]\d{2,4}", text):
        return "date"

    compact = re.sub(r"[\s,%(),.-]", "", text)
    if compact and compact.isdigit():
        return "number"

    return "text"


def _semantic_role(column_name: str, column_index: int, template_profile: Optional[dict] = None) -> str:
    if template_profile:
        rules = template_profile.get("column_rules")
        if isinstance(rules, list):
            raw = str(column_name or "").strip()
            for rule in rules:
                if not isinstance(rule, dict):
                    continue
                pattern = str(rule.get("pattern") or "").strip()
                role = str(rule.get("role") or "").strip().lower()
                if not pattern or role not in {"row_label", "value", "pcv", "code", "amount", "status", "date", "unknown"}:
                    continue
                try:
                    if re.search(pattern, raw, flags=re.I):
                        return role
                except re.error:
                    if pattern.lower() in raw.lower():
                        return role

    low = _norm(column_name)

    if any(term in low for term in ("feature", "description", "item", "content", "name")):
        return "row_label"

    if any(term in low for term in ("order", "code", "part", "model", "sku", "ref", "reference")):
        return "code"

    if "pcv" in low or "pcb" in low or (column_index > 0 and re.search(r"\b\d{3,4}\b", low)):
        return "pcv"

    if any(term in low for term in ("price", "cost", "amount", "msrp", "$")):
        return "amount"

    if any(term in low for term in ("date", "year", "month")):
        return "date"

    if any(term in low for term in ("status", "availability", "available", "standard", "optional")):
        return "status"

    if column_index == 0:
        return "row_label"

    return "value"


def _table_title(table: Block) -> str:
    payload = _payload(table)

    for key in ("table_title", "title", "caption"):
        value = _clean(payload.get(key))
        if value:
            return value[:240]

    near_texts = payload.get("near_texts")
    if isinstance(near_texts, list):
        for item in near_texts:
            value = _clean(item)
            if value:
                return value[:240]

    if table.text:
        return _clean(table.text)[:240]

    return f"Table on page {table.page_number}"


def _table_context(table: Block) -> str:
    payload = _payload(table)
    context = _clean(payload.get("table_context"))

    if context:
        return context[:500]

    if table.path:
        return table.path[:500]

    return ""


def _table_pages(table: Block) -> list[int]:
    payload = _payload(table)
    pages = payload.get("spans_pages")

    if isinstance(pages, list) and pages:
        return [int(p) for p in pages if p]

    return [table.page_number]


def _table_columns(table: Block, rows: list[Block]) -> list[str]:
    payload = _payload(table)
    header = [str(h or "").strip() for h in payload.get("header", [])]

    columns = []
    seen = set()

    for idx, h in enumerate(header):
        name = h or f"Column {idx + 1}"
        if name not in seen:
            columns.append(name)
            seen.add(name)

    for row in rows:
        for key in _row_values(row).keys():
            if key not in seen:
                columns.append(key)
                seen.add(key)

    return columns


def _row_label(row: Block) -> str:
    if row.stable_key:
        return str(row.stable_key)

    values = _row_values(row)
    for value in values.values():
        text = _clean(value)
        if text:
            return text[:300]

    return _clean(row.text)[:300]


def _embedding_text(block: Block) -> str:
    payload = _payload(block)
    parts = [
        block.block_type.value,
        block.path or "",
        block.stable_key or "",
        block.text or "",
    ]

    if block.block_type.value in {"table", "table_row"}:
        title = payload.get("table_title") or payload.get("__table_title__")
        context = payload.get("table_context") or payload.get("__table_context__")
        if title:
            parts.append(str(title))
        if context:
            parts.append(str(context))

        if block.block_type.value == "table":
            header = payload.get("header")
            if isinstance(header, list):
                parts.append(" | ".join(str(h or "") for h in header))

        if block.block_type.value == "table_row":
            values = _row_values(block)
            parts.extend(f"{key}: {value}" for key, value in values.items())

    text = _clean(" | ".join(str(p or "") for p in parts))
    return text[:7500]


def _block_embeddings(blocks: list[Block]) -> tuple[dict[Any, Optional[str]], dict[str, Any]]:
    texts = [_embedding_text(block) for block in blocks]

    try:
        vectors, usage = embed_texts_with_usage(texts)
    except Exception:
        vectors = [None] * len(blocks)
        usage = merge_usage()

    return (
        {
            block.id: vector_literal(vector)
            for block, vector in zip(blocks, vectors)
        },
        usage,
    )


def persist_run(
    *,
    run_id: str,
    family_supplier: str,
    family_name: str,
    tenant_id: str = "default",
    business_unit_id: str = "default",
    uploaded_by: str = "anonymous",
    base_label: str,
    target_label: str,
    base_pdf: Path,
    target_pdf: Path,
    base_blocks: list[Block],
    target_blocks: list[Block],
    diffs: list[BlockDiff],
    summary: list[Any],
    stats: dict,
    coverage: dict,
    base_page_count: int,
    target_page_count: int,
    enable_embeddings: bool = True,
    usage_callback=None,
) -> Optional[str]:
    """
    Persist comparison data to PostgreSQL.

    Returns comparison_run.id as string when successful.
    Returns None when DB is not configured.
    Raises on actual DB failures; caller should catch and log.
    """
    if not db_enabled():
        return None

    with get_conn() as conn:
        family_id = _upsert_family(
            conn,
            family_supplier,
            family_name,
            tenant_id=tenant_id,
            business_unit_id=business_unit_id,
            pdf_path_for_discovery=base_pdf,
        )

        base_doc_id = _upsert_document(
            conn,
            family_id=family_id,
            tenant_id=tenant_id,
            business_unit_id=business_unit_id,
            uploaded_by=uploaded_by,
            label=base_label,
            pdf_path=base_pdf,
            page_count=base_page_count,
            coverage=coverage.get("base"),
        )
        target_doc_id = _upsert_document(
            conn,
            family_id=family_id,
            tenant_id=tenant_id,
            business_unit_id=business_unit_id,
            uploaded_by=uploaded_by,
            label=target_label,
            pdf_path=target_pdf,
            page_count=target_page_count,
            coverage=coverage.get("target"),
        )

        base_block_map = _insert_blocks(conn, base_doc_id, base_blocks, enable_embeddings=enable_embeddings, usage_callback=usage_callback)
        target_block_map = _insert_blocks(conn, target_doc_id, target_blocks, enable_embeddings=enable_embeddings, usage_callback=usage_callback)

        base_table_maps = _insert_tables(conn, base_doc_id, base_blocks, base_block_map)
        target_table_maps = _insert_tables(conn, target_doc_id, target_blocks, target_block_map)

        comparison_id = _upsert_comparison_run(
            conn,
            family_id=family_id,
            base_doc_id=base_doc_id,
            target_doc_id=target_doc_id,
            summary=summary,
            stats=stats,
        )

        _insert_block_diffs(conn, comparison_id, diffs, base_block_map, target_block_map)
        _insert_table_comparisons(
            conn,
            comparison_id,
            base_blocks,
            target_blocks,
            diffs,
            base_table_maps,
            target_table_maps,
        )

        return str(comparison_id)


def _upsert_family(
    conn,
    supplier: str,
    family_name: str,
    *,
    tenant_id: str,
    business_unit_id: str,
    pdf_path_for_discovery: Optional[Path] = None,
) -> uuid.UUID:
    row = conn.execute(
        """
        INSERT INTO document_family (tenant_id, business_unit_id, supplier, family_name)
        VALUES (%s, %s, %s, %s)
        ON CONFLICT (tenant_id, business_unit_id, supplier, family_name)
        DO UPDATE SET updated_at = now()
        RETURNING id, template_profile
        """,
        (tenant_id, business_unit_id, supplier, family_name),
    ).fetchone()

    family_id = row["id"]
    template_profile = _json_dict(row.get("template_profile") if hasattr(row, "get") else row["template_profile"])
    if pdf_path_for_discovery and not template_profile:
        try:
            from .schema_discovery import discover

            initial_profile = discover(str(pdf_path_for_discovery), supplier, family_name, use_llm=True)
            conn.execute(
                """
                UPDATE document_family
                SET template_profile = %s::jsonb,
                    updated_at = now()
                WHERE id = %s
                """,
                (_model_json(initial_profile), family_id),
            )
        except Exception as exc:
            print(f"Error bootstrapping template_profile for {supplier}/{family_name}: {exc}")

    return family_id


def _upsert_document(
    conn,
    *,
    family_id,
    tenant_id: str,
    business_unit_id: str,
    uploaded_by: str,
    label: str,
    pdf_path: Path,
    page_count: int,
    coverage: Optional[float],
) -> uuid.UUID:
    sha = _sha256_file(pdf_path)

    row = conn.execute(
        """
        INSERT INTO spec_document (
            tenant_id,
            business_unit_id,
            family_id,
            label,
            raw_pdf_blob_uri,
            page_images_prefix,
            page_count,
            sha256,
            extracted_at,
            coverage_pct,
            uploaded_by
        )
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, now(), %s, %s)
        ON CONFLICT (family_id, sha256)
        DO UPDATE SET
            label = EXCLUDED.label,
            page_count = EXCLUDED.page_count,
            extracted_at = now(),
            coverage_pct = EXCLUDED.coverage_pct,
            uploaded_by = EXCLUDED.uploaded_by
        RETURNING id
        """,
        (
            tenant_id,
            business_unit_id,
            family_id,
            label,
            str(pdf_path),
            "",
            page_count,
            sha,
            coverage,
            uploaded_by,
        ),
    ).fetchone()

    return row["id"]


def _insert_blocks(conn, document_id, blocks: list[Block], *, enable_embeddings: bool, usage_callback=None) -> dict[Any, uuid.UUID]:
    conn.execute("DELETE FROM doc_block WHERE document_id = %s", (document_id,))

    block_id_map: dict[Any, uuid.UUID] = {}
    embeddings = {}
    if enable_embeddings:
        embeddings, usage = _block_embeddings(blocks)
        if usage_callback:
            usage_callback(usage)

    for block in blocks:
        sql_id = uuid.uuid4()
        block_id_map[block.id] = sql_id

    block_data = [
        (
            block_id_map[block.id],
            document_id,
            block_id_map.get(block.parent_id),
            block.block_type.value,
            block.path,
            block.stable_key,
            block.page_number,
            block.bbox,
            block.text,
            _json(block.payload or {}),
            embeddings.get(block.id),
            block.content_hash,
            block.sequence,
        )
        for block in blocks
    ]

    if block_data:
        with conn.cursor() as cur:
            cur.executemany(
                """
                INSERT INTO doc_block (
                    id,
                    document_id,
                    parent_id,
                    block_type,
                    path,
                    stable_key,
                    page_number,
                    bbox,
                    text,
                    payload,
                    embedding,
                    content_hash,
                    sequence
                )
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s::jsonb, %s::vector, %s, %s)
                """,
                block_data,
            )

    return block_id_map


def _insert_tables(
    conn,
    document_id,
    blocks: list[Block],
    block_id_map: dict[Any, uuid.UUID],
) -> dict[Any, tuple[uuid.UUID, dict[int, uuid.UUID], dict[int, uuid.UUID]]]:
    template_profile = {}
    try:
        row = conn.execute(
            """
            SELECT f.template_profile
            FROM document_family f
            JOIN spec_document d ON d.family_id = f.id
            WHERE d.id = %s
            """,
            (document_id,),
        ).fetchone()
        if row:
            template_profile = _json_dict(row["template_profile"])
    except Exception as exc:
        print(f"Error loading template_profile for document {document_id}: {exc}")

    conn.execute(
        """
        DELETE FROM doc_table
        WHERE document_id = %s
        """,
        (document_id,),
    )

    table_index = 0
    table_maps = {}

    for table in blocks:
        if table.block_type.value != "table":
            continue

        rows = _table_rows(table, blocks)
        columns = _table_columns(table, rows)
        pages = _table_pages(table)
        payload = _payload(table)

        table_id = uuid.uuid4()
        page_start = min(pages) if pages else table.page_number
        page_end = max(pages) if pages else table.page_number

        header_sources = payload.get("header_sources", [])
        strategies = payload.get("strategies", [])

        header_source = "mixed"
        if isinstance(header_sources, list) and header_sources:
            unique_sources = sorted(set(str(x) for x in header_sources if x))
            header_source = unique_sources[0] if len(unique_sources) == 1 else "mixed"

        extraction_strategy = "mixed"
        if isinstance(strategies, list) and strategies:
            unique_strategies = sorted(set(str(x) for x in strategies if x))
            extraction_strategy = unique_strategies[0] if len(unique_strategies) == 1 else "mixed"

        conn.execute(
            """
            INSERT INTO doc_table (
                id,
                document_id,
                block_id,
                table_index,
                title,
                context,
                page_start,
                page_end,
                pages,
                bbox_by_page,
                header_source,
                extraction_strategy,
                extraction_confidence,
                stitched_from,
                column_count,
                row_count,
                metadata
            )
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s::jsonb, %s, %s, %s, %s, %s, %s, %s::jsonb)
            """,
            (
                table_id,
                document_id,
                block_id_map.get(table.id),
                table_index,
                _table_title(table),
                _table_context(table),
                page_start,
                page_end,
                pages,
                _json({str(page): table.bbox for page in pages}),
                header_source,
                extraction_strategy,
                None,
                int(payload.get("stitched_from", 1) or 1),
                len(columns),
                len(rows),
                _json(
                    {
                        "path": table.path,
                        "payload": payload,
                        "bbox": table.bbox,
                    }
                ),
            ),
        )

        column_id_map = _insert_table_columns(conn, table_id, columns, rows, payload, template_profile)
        row_id_map = _insert_table_rows(conn, table_id, rows, block_id_map)
        _insert_table_cells(conn, table_id, rows, columns, row_id_map, column_id_map)

        table_maps[table.id] = (table_id, column_id_map, row_id_map)
        table_index += 1

    return table_maps


def _insert_table_columns(
    conn,
    table_id,
    columns: list[str],
    rows: list[Block],
    payload: dict,
    template_profile: Optional[dict] = None,
) -> dict[int, uuid.UUID]:
    column_id_map = {}
    col_data = []

    for idx, column in enumerate(columns):
        column_id = uuid.uuid4()
        column_id_map[idx] = column_id

        samples = []
        value_types = []

        for row in rows[:80]:
            values = _row_values(row)
            value = values.get(column, "")
            if _clean(value) and len(samples) < 8:
                samples.append(_clean(value))
            value_types.append(_value_type(value))

        value_type_hint = "mixed"
        if value_types:
            non_blank = [v for v in value_types if v != "blank"]
            if non_blank:
                common = max(set(non_blank), key=non_blank.count)
                value_type_hint = common

        header_sources = payload.get("header_sources", [])
        header_source = header_sources[0] if isinstance(header_sources, list) and header_sources else None

        col_data.append((
            column_id,
            table_id,
            idx,
            column,
            _norm(column),
            header_source,
            _semantic_role(column, idx, template_profile),
            value_type_hint,
            _json(samples),
            None,
            _json({"is_generic": _is_generic_column(column)}),
        ))

    if col_data:
        with conn.cursor() as cur:
            cur.executemany(
                """
                INSERT INTO doc_table_column (
                    id,
                    table_id,
                    column_index,
                    header_text,
                    normalized_header,
                    header_source,
                    semantic_role,
                    value_type_hint,
                    sample_values,
                    confidence,
                    metadata
                )
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s::jsonb, %s, %s::jsonb)
                """,
                col_data,
            )

    return column_id_map


def _insert_table_rows(conn, table_id, rows: list[Block], block_id_map: dict[Any, uuid.UUID]) -> dict[int, uuid.UUID]:
    row_id_map = {}
    row_data = []

    for idx, row in enumerate(rows):
        row_id = uuid.uuid4()
        row_id_map[idx] = row_id
        row_data.append((
            row_id,
            table_id,
            block_id_map.get(row.id),
            idx,
            row.page_number,
            row.bbox,
            row.stable_key,
            _row_label(row),
            row.text,
            _json({"payload": row.payload or {}}),
        ))

    if row_data:
        with conn.cursor() as cur:
            cur.executemany(
                """
                INSERT INTO doc_table_row (
                    id,
                    table_id,
                    block_id,
                    row_index,
                    page_number,
                    bbox,
                    stable_key,
                    row_label,
                    row_text,
                    metadata
                )
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s::jsonb)
                """,
                row_data,
            )

    return row_id_map


def _insert_table_cells(
    conn,
    table_id,
    rows: list[Block],
    columns: list[str],
    row_id_map: dict[int, uuid.UUID],
    column_id_map: dict[int, uuid.UUID],
) -> None:
    cell_data = []

    for row_idx, row in enumerate(rows):
        values = _row_values(row)
        row_id = row_id_map[row_idx]

        for col_idx, column in enumerate(columns):
            column_id = column_id_map[col_idx]
            raw_value = values.get(column, "")
            normalized_value = _norm(raw_value)
            cell_data.append((
                table_id,
                row_id,
                column_id,
                row_idx,
                col_idx,
                _clean(raw_value),
                normalized_value,
                _value_type(raw_value),
                None,
                _json({}),
            ))

    if cell_data:
        with conn.cursor() as cur:
            cur.executemany(
                """
                INSERT INTO doc_table_cell (
                    table_id,
                    row_id,
                    column_id,
                    row_index,
                    column_index,
                    raw_value,
                    normalized_value,
                    value_type,
                    bbox,
                    metadata
                )
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s::jsonb)
                """,
                cell_data,
            )


def _upsert_comparison_run(
    conn,
    *,
    family_id,
    base_doc_id,
    target_doc_id,
    summary: list[Any],
    stats: dict,
) -> uuid.UUID:
    row = conn.execute(
        """
        INSERT INTO comparison_run (
            family_id,
            base_doc_id,
            target_doc_id,
            status,
            summary_json,
            stats,
            finished_at
        )
        VALUES (%s, %s, %s, 'complete', %s::jsonb, %s::jsonb, now())
        ON CONFLICT (base_doc_id, target_doc_id)
        DO UPDATE SET
            status = 'complete',
            summary_json = EXCLUDED.summary_json,
            stats = EXCLUDED.stats,
            finished_at = now(),
            error = NULL
        RETURNING id
        """,
        (
            family_id,
            base_doc_id,
            target_doc_id,
            _json([_to_plain(s) for s in summary]),
            _json(stats),
        ),
    ).fetchone()

    comparison_id = row["id"]

    conn.execute("DELETE FROM table_comparison_result WHERE run_id = %s", (comparison_id,))
    conn.execute("DELETE FROM block_diff WHERE run_id = %s", (comparison_id,))

    return comparison_id


def persist_feedback(record: dict[str, Any]) -> Optional[str]:
    """
    Store reviewer feedback used to guide optional AI enhancement.

    The app can still run without this table; callers catch failures so feedback
    remains available in the in-memory run during the session.
    """
    if not db_enabled():
        return None

    with get_conn() as conn:
        conn.execute(
            """
            INSERT INTO doculens_feedback (
                id,
                run_id,
                tenant_id,
                business_unit_id,
                created_by,
                reviewer_name,
                document_type,
                system_score,
                user_score,
                missing_areas,
                page_numbers,
                comments,
                wants_ai_enhancement,
                quality_profile,
                ai_context
            )
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s::jsonb, %s::jsonb)
            """,
            (
                record["id"],
                record["run_id"],
                record.get("tenant_id", "default"),
                record.get("business_unit_id", "default"),
                record.get("created_by", "anonymous"),
                record.get("reviewer_name", ""),
                record.get("document_type", ""),
                record.get("system_score"),
                record.get("user_score"),
                record.get("missing_areas", ""),
                record.get("page_numbers", ""),
                record.get("comments", ""),
                bool(record.get("wants_ai_enhancement")),
                _json(record.get("quality_profile") or {}),
                _json(record.get("ai_context") or {}),
            ),
        )
    return str(record["id"])


def _insert_block_diffs(
    conn,
    comparison_id,
    diffs: list[BlockDiff],
    base_block_map: dict[Any, uuid.UUID],
    target_block_map: dict[Any, uuid.UUID],
) -> None:
    diff_data = [
        (
            comparison_id,
            base_block_map.get(diff.base_block_id),
            target_block_map.get(diff.target_block_id),
            diff.change_type.value,
            diff.similarity,
            _json([_to_plain(fd) for fd in diff.field_diffs]),
            _json([_to_plain(td) for td in diff.token_diff]),
            diff.impact_score,
        )
        for diff in diffs
    ]

    if diff_data:
        with conn.cursor() as cur:
            cur.executemany(
                """
                INSERT INTO block_diff (
                    run_id,
                    base_block_id,
                    target_block_id,
                    change_type,
                    similarity,
                    field_diffs,
                    token_diff,
                    impact_score
                )
                VALUES (%s, %s, %s, %s, %s, %s::jsonb, %s::jsonb, %s)
                """,
                diff_data,
            )


def _change_value(change_type: Any) -> str:
    return str(getattr(change_type, "value", change_type) or "").upper()


def _cell_text(value: Any) -> Optional[str]:
    if value is None:
        return None
    return str(value)


def _insert_table_comparisons(
    conn,
    comparison_id: uuid.UUID,
    base_blocks: list[Block],
    target_blocks: list[Block],
    diffs: list[BlockDiff],
    base_table_maps: dict[Any, tuple[uuid.UUID, dict[int, uuid.UUID], dict[int, uuid.UUID]]],
    target_table_maps: dict[Any, tuple[uuid.UUID, dict[int, uuid.UUID], dict[int, uuid.UUID]]],
) -> None:
    try:
        from .services.table_tools import (
            _align_columns,
            _align_rows,
            _column_names,
            _compare_row_values,
            _guess_row_label_columns,
            _row_key_for_table,
            _row_values_for_table,
            _table_exposure,
            _table_rows,
        )
    except Exception as exc:
        print(f"Could not load table comparison helpers: {exc}")
        return

    base_by_id = {block.id: block for block in base_blocks}
    target_by_id = {block.id: block for block in target_blocks}

    for diff in diffs:
        if _change_value(diff.change_type) not in {"MODIFIED", "UNCHANGED"}:
            continue
        if not diff.base_block_id or not diff.target_block_id:
            continue

        base_table = base_by_id.get(diff.base_block_id)
        target_table = target_by_id.get(diff.target_block_id)
        if not base_table or not target_table:
            continue
        if base_table.block_type.value != "table" or target_table.block_type.value != "table":
            continue

        base_map = base_table_maps.get(base_table.id)
        target_map = target_table_maps.get(target_table.id)
        if not base_map or not target_map:
            continue

        base_table_id, base_col_map, base_row_map = base_map
        target_table_id, target_col_map, target_row_map = target_map

        try:
            base_rows = _table_rows(base_table, base_blocks)
            target_rows = _table_rows(target_table, target_blocks)
            base_columns = _column_names(base_table, base_rows)
            target_columns = _column_names(target_table, target_rows)

            if not _table_exposure(base_table, base_rows, base_columns)["is_real_table"]:
                continue
            if not _table_exposure(target_table, target_rows, target_columns)["is_real_table"]:
                continue

            base_row_cols = _guess_row_label_columns(base_columns, base_rows, base_table)
            target_row_cols = _guess_row_label_columns(target_columns, target_rows, target_table)
            base_value_cols = [col for col in base_columns if col not in base_row_cols]
            target_value_cols = [col for col in target_columns if col not in target_row_cols]
            value_alignment = _align_columns(base_value_cols, target_value_cols)
            row_pairs = _align_rows(base_rows, target_rows, base_row_cols, target_row_cols, base_table, target_table)

            base_row_indexes = {row.id: idx for idx, row in enumerate(base_rows)}
            target_row_indexes = {row.id: idx for idx, row in enumerate(target_rows)}
            counts = {"ADDED": 0, "DELETED": 0, "MODIFIED": 0, "UNCHANGED": 0}
            cell_diffs = []
            table_comparison_id = uuid.uuid4()

            for base_row, target_row, match_score in row_pairs:
                field_diffs = _compare_row_values(base_row, target_row, value_alignment, base_table, target_table)
                if base_row is None and target_row is not None:
                    row_change = "ADDED"
                elif target_row is None and base_row is not None:
                    row_change = "DELETED"
                elif field_diffs:
                    row_change = "MODIFIED"
                else:
                    row_change = "UNCHANGED"
                counts[row_change] += 1

                if row_change == "UNCHANGED":
                    continue

                base_idx = base_row_indexes.get(base_row.id) if base_row else None
                target_idx = target_row_indexes.get(target_row.id) if target_row else None
                base_row_id = base_row_map.get(base_idx) if base_idx is not None else None
                target_row_id = target_row_map.get(target_idx) if target_idx is not None else None
                row_key_base = _row_key_for_table(base_table, base_row, base_row_cols) if base_row else None
                row_key_target = _row_key_for_table(target_table, target_row, target_row_cols) if target_row else None
                base_values = _row_values_for_table(base_table, base_row, base_columns) if base_row else {}
                target_values = _row_values_for_table(target_table, target_row, target_columns) if target_row else {}

                for field in field_diffs:
                    field_name = str(field.get("field") or "")
                    base_col = field_name
                    target_col = field_name
                    if " -> " in field_name:
                        base_col, target_col = [part.strip() for part in field_name.split(" -> ", 1)]

                    base_col_idx = base_columns.index(base_col) if base_col in base_columns else None
                    target_col_idx = target_columns.index(target_col) if target_col in target_columns else None
                    change_type = _change_value(field.get("change_type") or row_change)
                    if change_type not in {"ADDED", "DELETED", "MODIFIED", "UNCHANGED"}:
                        change_type = row_change

                    cell_diffs.append(
                        (
                            table_comparison_id,
                            base_row_id,
                            target_row_id,
                            base_col_map.get(base_col_idx) if base_col_idx is not None else None,
                            target_col_map.get(target_col_idx) if target_col_idx is not None else None,
                            row_key_base,
                            row_key_target,
                            base_col if base_col_idx is not None else None,
                            target_col if target_col_idx is not None else None,
                            _cell_text(field.get("before", base_values.get(base_col))),
                            _cell_text(field.get("after", target_values.get(target_col))),
                            change_type,
                            float(match_score or 0.0),
                            1.0,
                            "Cell-level table comparison",
                        )
                    )

            if counts["ADDED"] + counts["DELETED"] + counts["MODIFIED"] == 0:
                continue

            result_summary = (
                f"Compared {len(base_rows)} baseline row(s) with {len(target_rows)} revised row(s). "
                f"Found {counts['ADDED']} added, {counts['DELETED']} deleted, "
                f"{counts['MODIFIED']} modified, and {counts['UNCHANGED']} unchanged row(s)."
            )
            conn.execute(
                """
                INSERT INTO table_comparison_result (
                    id,
                    run_id,
                    base_table_id,
                    target_table_id,
                    base_row_columns,
                    target_row_columns,
                    base_value_columns,
                    target_value_columns,
                    counts,
                    result_summary,
                    result_json
                )
                VALUES (%s, %s, %s, %s, %s::jsonb, %s::jsonb, %s::jsonb, %s::jsonb, %s::jsonb, %s, %s::jsonb)
                """,
                (
                    table_comparison_id,
                    comparison_id,
                    base_table_id,
                    target_table_id,
                    _json(base_row_cols),
                    _json(target_row_cols),
                    _json(base_value_cols),
                    _json(target_value_cols),
                    _json(counts),
                    result_summary,
                    _json(
                        {
                            "status": "complete",
                            "value_alignment": value_alignment,
                            "row_pair_count": len(row_pairs),
                        }
                    ),
                ),
            )

            if cell_diffs:
                with conn.cursor() as cur:
                    cur.executemany(
                        """
                        INSERT INTO table_comparison_cell_diff (
                            table_comparison_id,
                            base_row_id,
                            target_row_id,
                            base_column_id,
                            target_column_id,
                            row_key_base,
                            row_key_target,
                            column_name_base,
                            column_name_target,
                            before_value,
                            after_value,
                            change_type,
                            similarity,
                            confidence,
                            insight
                        )
                        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                        """,
                        cell_diffs,
                    )
        except Exception as exc:
            print(f"Could not persist table comparison for run {comparison_id}: {exc}")


def _to_plain(value: Any) -> Any:
    if hasattr(value, "model_dump"):
        return value.model_dump()
    if hasattr(value, "dict"):
        return value.dict()
    if hasattr(value, "__dict__"):
        return value.__dict__
    return value


def load_blocks(conn, document_id: uuid.UUID) -> list[Block]:
    rows = conn.execute(
        """
        SELECT id, parent_id, block_type, path, stable_key, page_number, bbox, text, payload, content_hash, sequence
        FROM doc_block
        WHERE document_id = %s
        ORDER BY sequence ASC
        """,
        (document_id,),
    ).fetchall()

    blocks = []
    for r in rows:
        blocks.append(
            Block(
                id=uuid.UUID(r["id"]) if isinstance(r["id"], str) else r["id"],
                parent_id=uuid.UUID(r["parent_id"]) if r["parent_id"] else None,
                block_type=r["block_type"],
                path=r["path"],
                stable_key=r["stable_key"],
                page_number=r["page_number"],
                bbox=[float(x) for x in r["bbox"]] if r["bbox"] else None,
                text=r["text"] or "",
                payload=r["payload"] or {},
                content_hash=r["content_hash"],
                sequence=r["sequence"],
            )
        )
    return blocks


def load_block_diffs(conn, comparison_id: uuid.UUID) -> list[BlockDiff]:
    from .models import ChangeType, FieldDiff, TokenOp

    rows = conn.execute(
        """
        SELECT base_block_id, target_block_id, change_type, similarity, field_diffs, token_diff, impact_score
        FROM block_diff
        WHERE run_id = %s
        """,
        (comparison_id,),
    ).fetchall()

    diffs = []
    for r in rows:
        diffs.append(
            BlockDiff(
                base_block_id=uuid.UUID(r["base_block_id"]) if r["base_block_id"] else None,
                target_block_id=uuid.UUID(r["target_block_id"]) if r["target_block_id"] else None,
                change_type=ChangeType(r["change_type"]),
                similarity=float(r["similarity"]) if r["similarity"] is not None else 1.0,
                field_diffs=[FieldDiff(**fd) for fd in (r["field_diffs"] or [])],
                token_diff=[TokenOp(**td) for td in (r["token_diff"] or [])],
                impact_score=float(r["impact_score"]) if r["impact_score"] is not None else 0.0,
            )
        )
    return diffs
