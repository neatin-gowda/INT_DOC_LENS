"""
Word Document (.docx) parser.
"""
from __future__ import annotations

import re
from pathlib import Path

from ...models import Block, BlockType
from .utils import (
    _clean,
    _slug,
    _looks_like_layout_table,
    _detect_header_band,
    _block,
    _page_for_sequence,
    _row_payload,
    _detect_stable_key,
    _row_text,
)

def _iter_docx_blocks(document):
    from docx.table import Table
    from docx.text.paragraph import Paragraph

    body = document.element.body
    for child in body.iterchildren():
        if child.tag.endswith("}p"):
            yield Paragraph(child, document)
        elif child.tag.endswith("}tbl"):
            yield Table(child, document)

def _extract_docx(source_path: Path) -> list[Block]:
    try:
        from docx import Document
        from docx.table import Table
        from docx.text.paragraph import Paragraph
    except Exception:
        return []

    document = Document(str(source_path))
    blocks: list[Block] = []
    seq = 0
    path_stack = ["document"]
    current_section = None

    for item in _iter_docx_blocks(document):
        if isinstance(item, Paragraph):
            text = _clean(item.text)
            if not text:
                continue

            style_name = _clean(getattr(item.style, "name", ""))
            is_heading = style_name.lower().startswith("heading")

            if is_heading:
                level_match = re.search(r"(\d+)", style_name)
                level = int(level_match.group(1)) if level_match else 1
                level = max(1, min(6, level))
                path_stack = path_stack[:level] + [_slug(text, f"heading_{seq}")]
                path = "/" + "/".join(path_stack)
                block = _block(
                    block_type=BlockType.SECTION,
                    path=path,
                    text=text,
                    payload={
                        "heading": text,
                        "style": style_name,
                        "source_format": "docx",
                    },
                    sequence=seq,
                    page_number=_page_for_sequence(seq),
                    parent_id=current_section.id if current_section and level > 1 else None,
                )
                blocks.append(block)
                current_section = block
                seq += 1
                continue

            block_type = BlockType.LIST_ITEM if style_name.lower().startswith("list") or re.match(r"^[-*•]\s+", text) else BlockType.PARAGRAPH
            base_path = current_section.path if current_section else "/document"
            block = _block(
                parent_id=current_section.id if current_section else None,
                block_type=block_type,
                path=f"{base_path}/p_{seq}",
                text=text,
                payload={
                    "text": text,
                    "style": style_name,
                    "source_format": "docx",
                },
                sequence=seq,
                page_number=_page_for_sequence(seq),
            )
            blocks.append(block)
            seq += 1
            continue

        if isinstance(item, Table):
            rows = []
            for raw_row in item.rows:
                rows.append([_clean(cell.text) for cell in raw_row.cells])

            rows = [row for row in rows if any(_clean(cell) for cell in row)]
            if not rows:
                continue

            n_cols = max(len(row) for row in rows)
            normalized_rows = [row + [""] * (n_cols - len(row)) for row in rows]

            if _looks_like_layout_table(normalized_rows, n_cols):
                base_path = current_section.path if current_section else "/document"
                for ri, row in enumerate(normalized_rows):
                    row_text = " / ".join(_clean(cell) for cell in row if _clean(cell))
                    if not row_text:
                        continue
                    block = _block(
                        parent_id=current_section.id if current_section else None,
                        block_type=BlockType.PARAGRAPH,
                        path=f"{base_path}/layout_{seq}",
                        text=row_text,
                        payload={
                            "text": row_text,
                            "source_format": "docx",
                            "layout_table": True,
                            "layout_columns": [_clean(cell) for cell in row if _clean(cell)],
                        },
                        sequence=seq,
                        page_number=_page_for_sequence(seq),
                    )
                    blocks.append(block)
                    seq += 1
                continue

            header, body_rows, header_rows, header_index, header_strategy = _detect_header_band(normalized_rows, n_cols)

            base_path = current_section.path if current_section else "/document"
            table_title = _clean(current_section.text if current_section else "") or f"Table {len([b for b in blocks if b.block_type == BlockType.TABLE]) + 1}"
            table_payload = {
                "header": header,
                "header_rows": header_rows,
                "header_row_count": len(header_rows),
                "header_index": header_index,
                "header_strategy": header_strategy,
                "rows": body_rows,
                "spans_pages": [_page_for_sequence(seq)],
                "table_title": table_title,
                "table_context": base_path.replace("_", " ").strip("/"),
                "source_format": "docx",
            }
            table_block = _block(
                parent_id=current_section.id if current_section else None,
                block_type=BlockType.TABLE,
                path=f"{base_path}/table_{seq}",
                text=table_title,
                payload=table_payload,
                sequence=seq,
                page_number=_page_for_sequence(seq),
            )
            blocks.append(table_block)
            seq += 1

            for ri, row in enumerate(body_rows):
                payload = _row_payload(header, row)
                payload.update(
                    {
                        "__row_index__": ri,
                        "__table_title__": table_title,
                        "__pages__": [_page_for_sequence(seq)],
                        "source_format": "docx",
                    }
                )
                text = _row_text(payload)
                block = _block(
                    parent_id=table_block.id,
                    block_type=BlockType.TABLE_ROW,
                    path=f"{table_block.path}/row_{ri}",
                    text=text,
                    payload=payload,
                    sequence=seq,
                    page_number=_page_for_sequence(seq),
                    stable_key=_detect_stable_key(row, header),
                )
                blocks.append(block)
                seq += 1

    return blocks
