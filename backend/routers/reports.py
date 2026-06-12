"""
Reports router - handles standard PDF report generation, AI summaries PDF, and custom table report PDF downloads.
"""
from __future__ import annotations

import json
import re
from io import BytesIO
from pathlib import Path
from typing import Any, Optional

from fastapi import APIRouter, HTTPException, Response

from ..api_schemas import AiSummaryPdfReq, CompareTableColumnsReq
from ..api_helpers import (
    _ensure_complete,
    _ai_pdf_confidence,
    _ai_pdf_cell,
)

router = APIRouter()

@router.get("/runs/{run_id}/report.pdf")
def get_report_pdf(run_id: str):
    r = _ensure_complete(run_id)

    try:
        from ..report import build_pdf_report
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

@router.post("/runs/{run_id}/ai-summary.pdf")
def get_ai_summary_pdf(run_id: str, req: AiSummaryPdfReq):
    _ensure_complete(run_id)

    try:
        from html import escape

        from reportlab.lib import colors
        from reportlab.lib.pagesizes import A4, landscape
        from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
        from reportlab.lib.units import inch
        from reportlab.pdfbase import pdfmetrics
        from reportlab.pdfbase.ttfonts import TTFont
        from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle
    except Exception as exc:
        raise HTTPException(
            500,
            f"AI summary PDF generation is not available because the report dependency failed to load: {exc}",
        )

    font_name = "Helvetica"
    for font_path in (
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
        "/System/Library/Fonts/Supplemental/Arial Unicode.ttf",
    ):
        try:
            if Path(font_path).exists():
                pdfmetrics.registerFont(TTFont("AltraiUnicode", font_path))
                font_name = "AltraiUnicode"
                break
        except Exception:
            font_name = "Helvetica"

    page_size = landscape(A4)
    buffer = BytesIO()
    doc = SimpleDocTemplate(
        buffer,
        pagesize=page_size,
        leftMargin=0.45 * inch,
        rightMargin=0.45 * inch,
        topMargin=0.45 * inch,
        bottomMargin=0.45 * inch,
        title=req.title or "AI Summary",
    )

    styles = getSampleStyleSheet()
    title_style = ParagraphStyle(
        "AltraiTitle",
        parent=styles["Title"],
        fontName=font_name,
        fontSize=16,
        leading=20,
        textColor=colors.HexColor("#1f2937"),
        spaceAfter=8,
    )
    meta_style = ParagraphStyle(
        "AltraiMeta",
        parent=styles["BodyText"],
        fontName=font_name,
        fontSize=8,
        leading=10,
        textColor=colors.HexColor("#667085"),
        spaceAfter=8,
    )
    body_style = ParagraphStyle(
        "AltraiBody",
        parent=styles["BodyText"],
        fontName=font_name,
        fontSize=9,
        leading=12,
        textColor=colors.HexColor("#344054"),
        spaceAfter=8,
    )
    header_style = ParagraphStyle(
        "AltraiHeader",
        parent=body_style,
        fontName=font_name,
        fontSize=8.5,
        leading=10,
        textColor=colors.white,
    )
    cell_style = ParagraphStyle(
        "AltraiCell",
        parent=body_style,
        fontName=font_name,
        fontSize=8,
        leading=10,
        textColor=colors.HexColor("#1f2937"),
    )

    story = []
    title = (req.title or "AI Summary").strip() or "AI Summary"
    story.append(Paragraph(escape(title), title_style))

    confidence = _ai_pdf_confidence(req.confidence)
    meta_parts = [f"Run: {run_id}", "Source: extracted comparison evidence"]
    if confidence is not None:
        meta_parts.append(f"Confidence: {confidence}%")
    story.append(Paragraph(escape(" | ".join(meta_parts)), meta_style))

    if req.answer:
        for paragraph in str(req.answer).splitlines():
            if paragraph.strip():
                story.append(Paragraph(escape(paragraph.strip()), body_style))
        story.append(Spacer(1, 8))

    columns = [str(c) for c in (req.columns or []) if str(c).strip()]
    rows = [row for row in (req.rows or []) if isinstance(row, dict)]

    if columns and rows:
        usable_width = page_size[0] - doc.leftMargin - doc.rightMargin
        col_width = usable_width / max(1, len(columns))
        data = [[Paragraph(escape(col), header_style) for col in columns]]

        for row in rows[:200]:
            data.append(
                [
                    Paragraph(escape(_ai_pdf_cell(row, col)).replace("\n", "<br/>"), cell_style)
                    for col in columns
                ]
            )

        table = Table(data, colWidths=[col_width] * len(columns), repeatRows=1)
        table.setStyle(
            TableStyle(
                [
                    ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#1f2937")),
                    ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                    ("FONTNAME", (0, 0), (-1, -1), font_name),
                    ("VALIGN", (0, 0), (-1, -1), "TOP"),
                    ("GRID", (0, 0), (-1, -1), 0.25, colors.HexColor("#ded6c8")),
                    ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#fbfaf6")]),
                    ("LEFTPADDING", (0, 0), (-1, -1), 6),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 6),
                    ("TOPPADDING", (0, 0), (-1, -1), 5),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
                ]
            )
        )
        story.append(table)
    elif not req.answer:
        story.append(Paragraph("No AI summary content was provided for this run.", body_style))

    doc.build(story)
    filename = f"ai_summary_{run_id}.pdf"

    return Response(
        content=buffer.getvalue(),
        media_type="application/pdf",
        headers={"Content-Disposition": f'attachment; filename="{filename}"'},
    )

@router.post("/runs/{run_id}/table-report.pdf")
def table_report_pdf(run_id: str, req: CompareTableColumnsReq):
    try:
        from html import escape

        from reportlab.lib import colors
        from reportlab.lib.pagesizes import A4, landscape
        from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
        from reportlab.lib.units import inch
        from reportlab.pdfbase import pdfmetrics
        from reportlab.pdfbase.ttfonts import TTFont
        from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle
    except Exception as exc:
        raise HTTPException(500, f"Table PDF generation is not available: {exc}")

    # Import comparison functions from the sibling router directly to prevent cycle
    from .tables import compare_table_columns
    result = compare_table_columns(run_id, req)

    font_name = "Helvetica"
    for font_path in (
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
        "/System/Library/Fonts/Supplemental/Arial Unicode.ttf",
    ):
        try:
            if Path(font_path).exists():
                pdfmetrics.registerFont(TTFont("AltraiTableUnicode", font_path))
                font_name = "AltraiTableUnicode"
                break
        except Exception:
            font_name = "Helvetica"

    def _cell(value: Any, limit: int = 500) -> str:
        if value is None:
            return "-"
        if isinstance(value, (dict, list)):
            text = json.dumps(value, ensure_ascii=False, default=str)
        else:
            text = str(value)
        text = re.sub(r"\s+", " ", text).strip()
        return text[:limit] + "..." if len(text) > limit else text

    page_size = landscape(A4)
    buffer = BytesIO()
    doc = SimpleDocTemplate(
        buffer,
        pagesize=page_size,
        leftMargin=0.42 * inch,
        rightMargin=0.42 * inch,
        topMargin=0.42 * inch,
        bottomMargin=0.42 * inch,
        title=f"Table comparison - {run_id}",
    )

    styles = getSampleStyleSheet()
    title_style = ParagraphStyle("TableReportTitle", parent=styles["Title"], fontName=font_name, fontSize=15, leading=18, textColor=colors.HexColor("#1f2937"))
    meta_style = ParagraphStyle("TableReportMeta", parent=styles["BodyText"], fontName=font_name, fontSize=8, leading=10, textColor=colors.HexColor("#667085"))
    body_style = ParagraphStyle("TableReportBody", parent=styles["BodyText"], fontName=font_name, fontSize=8.2, leading=10.5, textColor=colors.HexColor("#344054"))
    header_style = ParagraphStyle("TableReportHeader", parent=body_style, fontName=font_name, textColor=colors.white)

    story = [
        Paragraph("Selected Table Comparison Report", title_style),
        Paragraph(escape(f"Run ID: {run_id}"), meta_style),
        Spacer(1, 6),
        Paragraph(escape(result.get("answer") or "Selected table comparison"), body_style),
        Paragraph(escape(result.get("review_summary") or ""), body_style),
        Spacer(1, 8),
    ]

    def _add_table(title: str, columns: list[str], rows: list[dict], max_rows: int = 80):
        story.append(Paragraph(escape(title), body_style))
        if not columns or not rows:
            story.append(Paragraph("No rows available for this selection.", body_style))
            story.append(Spacer(1, 6))
            return

        usable_width = page_size[0] - doc.leftMargin - doc.rightMargin
        col_width = usable_width / max(1, len(columns))
        data = [[Paragraph(escape(str(col)), header_style) for col in columns]]
        for row in rows[:max_rows]:
            data.append([Paragraph(escape(_cell(row.get(col))).replace("\n", "<br/>"), body_style) for col in columns])

        table = Table(data, colWidths=[col_width] * len(columns), repeatRows=1)
        table.setStyle(
            TableStyle(
                [
                    ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#1f2937")),
                    ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                    ("FONTNAME", (0, 0), (-1, -1), font_name),
                    ("VALIGN", (0, 0), (-1, -1), "TOP"),
                    ("GRID", (0, 0), (-1, -1), 0.25, colors.HexColor("#ded6c8")),
                    ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#fbfaf6")]),
                    ("LEFTPADDING", (0, 0), (-1, -1), 5),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 5),
                    ("TOPPADDING", (0, 0), (-1, -1), 4),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
                ]
            )
        )
        story.append(table)
        story.append(Spacer(1, 9))

    _add_table("Review and Clarification Summary", result.get("review_columns") or [], result.get("review_rows") or [], max_rows=60)

    diff_rows = []
    for row in (result.get("rows") or [])[:100]:
        row_key = row.get("row_key") if isinstance(row.get("row_key"), dict) else {}
        diff_rows.append(
            {
                "Change Type": row.get("change_type"),
                "Baseline Row": row_key.get("base"),
                "Revised Row": row_key.get("target"),
                "Changed Values": "; ".join(
                    f"{fd.get('field')}: {fd.get('before') or '-'} -> {fd.get('after') or '-'}"
                    for fd in (row.get("field_diffs") or [])[:4]
                ) or "-",
                "Match": f"{round(float(row.get('match_score') or 0) * 100)}%",
            }
        )
    _add_table("Compared Row Changes", ["Change Type", "Baseline Row", "Revised Row", "Changed Values", "Match"], diff_rows, max_rows=100)

    doc.build(story)
    filename = f"table_comparison_{run_id}.pdf"
    return Response(
        content=buffer.getvalue(),
        media_type="application/pdf",
        headers={"Content-Disposition": f'attachment; filename="{filename}"'},
    )
