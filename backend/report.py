"""
PDF report generation for Spec-Diff.

Produces a business-friendly comparison report:
  - Executive overview
  - Coverage / confidence / counts
  - Key review items
  - Detailed changes with citations

Uses reportlab because it is predictable in Azure/container deployments and
does not require a browser runtime.
"""
from __future__ import annotations

import io
from datetime import datetime
from typing import Any

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

from .models import SummaryRow


CHANGE_COLORS = {
    "ADDED": colors.HexColor("#1f9f46"),
    "DELETED": colors.HexColor("#c93333"),
    "MODIFIED": colors.HexColor("#a8870f"),
}


def _safe_text(value: Any, fallback: str = "-") -> str:
    if value is None:
        return fallback
    text = str(value).strip()
    return text if text else fallback


def _short(value: Any, limit: int = 360) -> str:
    text = _safe_text(value)
    if len(text) <= limit:
        return text
    return text[: limit - 1].rstrip() + "…"


def _confidence_label(value: float | None) -> str:
    if value is None:
        return "Not rated"
    pct = round(value * 100)
    return f"{pct}%"


def _avg_confidence(summary: list[SummaryRow]) -> float | None:
    values = [s.confidence for s in summary if s.confidence is not None]
    if not values:
        return None
    return sum(values) / len(values)


def _count_needs_review(summary: list[SummaryRow]) -> int:
    return sum(1 for s in summary if s.needs_review or (s.seek_clarification and s.seek_clarification != "None"))


def _style_sheet():
    base = getSampleStyleSheet()

    base.add(ParagraphStyle(
        name="ReportTitle",
        parent=base["Title"],
        fontName="Helvetica-Bold",
        fontSize=20,
        leading=24,
        textColor=colors.HexColor("#1f2937"),
        spaceAfter=10,
    ))

    base.add(ParagraphStyle(
        name="SectionTitle",
        parent=base["Heading2"],
        fontName="Helvetica-Bold",
        fontSize=13,
        leading=16,
        textColor=colors.HexColor("#1f2937"),
        spaceBefore=14,
        spaceAfter=8,
    ))

    base.add(ParagraphStyle(
        name="BodySmall",
        parent=base["BodyText"],
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor("#344054"),
        alignment=TA_LEFT,
    ))

    base.add(ParagraphStyle(
        name="BodyTiny",
        parent=base["BodyText"],
        fontSize=7.5,
        leading=9.5,
        textColor=colors.HexColor("#344054"),
        alignment=TA_LEFT,
    ))

    return base


def _p(text: Any, style) -> Paragraph:
    return Paragraph(_safe_text(text).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;"), style)


def _summary_metrics_table(run: dict, styles):
    stats = run.get("stats", {}) or {}
    coverage = run.get("coverage", {}) or {}
    summary = run.get("summary", []) or []

    avg_conf = _avg_confidence(summary)
    needs_review = _count_needs_review(summary)

    data = [
        [
            _p("Added", styles["BodySmall"]),
            _p(str(stats.get("ADDED", 0)), styles["BodySmall"]),
            _p("Deleted", styles["BodySmall"]),
            _p(str(stats.get("DELETED", 0)), styles["BodySmall"]),
        ],
        [
            _p("Modified", styles["BodySmall"]),
            _p(str(stats.get("MODIFIED", 0)), styles["BodySmall"]),
            _p("Unchanged", styles["BodySmall"]),
            _p(str(stats.get("UNCHANGED", 0)), styles["BodySmall"]),
        ],
        [
            _p("Base Coverage", styles["BodySmall"]),
            _p(f"{coverage.get('base', 0):.1f}%", styles["BodySmall"]),
            _p("Target Coverage", styles["BodySmall"]),
            _p(f"{coverage.get('target', 0):.1f}%", styles["BodySmall"]),
        ],
        [
            _p("Average Confidence", styles["BodySmall"]),
            _p(_confidence_label(avg_conf), styles["BodySmall"]),
            _p("Needs Review", styles["BodySmall"]),
            _p(str(needs_review), styles["BodySmall"]),
        ],
    ]

    table = Table(data, colWidths=[1.35 * inch, 1.0 * inch, 1.35 * inch, 1.0 * inch])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#f7f4ee")),
        ("GRID", (0, 0), (-1, -1), 0.4, colors.HexColor("#d8d0c3")),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("FONTNAME", (0, 0), (-1, -1), "Helvetica"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    return table


def _review_items_table(summary: list[SummaryRow], styles):
    rows = [
        [
            _p("Area / Item", styles["BodySmall"]),
            _p("Change", styles["BodySmall"]),
            _p("Evidence", styles["BodySmall"]),
            _p("Confidence", styles["BodySmall"]),
            _p("Review", styles["BodySmall"]),
        ]
    ]

    review_rows = [
        s for s in summary
        if s.needs_review or (s.seek_clarification and s.seek_clarification != "None")
    ][:20]

    if not review_rows:
        review_rows = summary[:10]

    for s in review_rows:
        item = s.item or s.feature
        area_item = f"{_safe_text(s.area, 'Document')}<br/>{_safe_text(item)}"
        change = f"<b>{_safe_text(s.change_type, 'CHANGE')}</b><br/>{_short(s.change, 260)}"
        review = s.seek_clarification if s.seek_clarification and s.seek_clarification != "None" else s.review_reason

        rows.append([
            _p(area_item, styles["BodyTiny"]),
            _p(change, styles["BodyTiny"]),
            _p(_short(s.citation, 180), styles["BodyTiny"]),
            _p(_confidence_label(s.confidence), styles["BodyTiny"]),
            _p(_short(review or "No specific clarification required.", 180), styles["BodyTiny"]),
        ])

    table = Table(
        rows,
        repeatRows=1,
        colWidths=[1.45 * inch, 2.0 * inch, 1.45 * inch, 0.75 * inch, 1.6 * inch],
    )
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#1f2937")),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("GRID", (0, 0), (-1, -1), 0.35, colors.HexColor("#d8d0c3")),
        ("BACKGROUND", (0, 1), (-1, -1), colors.white),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    return table


def _detailed_changes_table(summary: list[SummaryRow], styles):
    rows = [[
        _p("Type", styles["BodySmall"]),
        _p("Area / Item", styles["BodySmall"]),
        _p("Before", styles["BodySmall"]),
        _p("After", styles["BodySmall"]),
        _p("Citation", styles["BodySmall"]),
    ]]

    for s in summary[:80]:
        rows.append([
            _p(_safe_text(s.change_type, "CHANGE"), styles["BodyTiny"]),
            _p(f"{_safe_text(s.area, 'Document')}<br/>{_safe_text(s.item or s.feature)}", styles["BodyTiny"]),
            _p(_short(s.before, 220), styles["BodyTiny"]),
            _p(_short(s.after, 220), styles["BodyTiny"]),
            _p(_short(s.citation, 160), styles["BodyTiny"]),
        ])

    table = Table(
        rows,
        repeatRows=1,
        colWidths=[0.7 * inch, 1.55 * inch, 1.85 * inch, 1.85 * inch, 1.25 * inch],
    )
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#1f2937")),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("GRID", (0, 0), (-1, -1), 0.3, colors.HexColor("#d8d0c3")),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 4),
        ("RIGHTPADDING", (0, 0), (-1, -1), 4),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]))

    for i, s in enumerate(summary[:80], start=1):
        color = CHANGE_COLORS.get(s.change_type or "", colors.HexColor("#667085"))
        table.setStyle(TableStyle([
            ("TEXTCOLOR", (0, i), (0, i), color),
        ]))

    return table


def build_pdf_report(run_id: str, run: dict) -> bytes:
    """
    Build and return PDF bytes.
    """
    buffer = io.BytesIO()
    styles = _style_sheet()

    doc = SimpleDocTemplate(
        buffer,
        pagesize=A4,
        rightMargin=0.45 * inch,
        leftMargin=0.45 * inch,
        topMargin=0.45 * inch,
        bottomMargin=0.45 * inch,
        title="Spec-Diff Comparison Report",
    )

    summary: list[SummaryRow] = run.get("summary", []) or []

    story = []

    story.append(_p("Document Comparison Report", styles["ReportTitle"]))
    story.append(_p(
        f"Run ID: {run_id}<br/>"
        f"Previous document: {_safe_text(run.get('base_label'))}<br/>"
        f"Current document: {_safe_text(run.get('target_label'))}<br/>"
        f"Generated: {datetime.utcnow().strftime('%Y-%m-%d %H:%M UTC')}",
        styles["BodySmall"],
    ))
    story.append(Spacer(1, 10))

    story.append(_p("Executive Overview", styles["SectionTitle"]))
    story.append(_summary_metrics_table(run, styles))
    story.append(Spacer(1, 10))

    stats = run.get("stats", {}) or {}
    story.append(_p(
        "This report summarizes the detected document changes using extracted text, "
        "tables, semantic block matching, and available page citations. Confidence values "
        "reflect extraction and alignment signals; items marked for review should be validated "
        "against the source PDFs before business decisions are made.",
        styles["BodySmall"],
    ))
    story.append(Spacer(1, 8))
    story.append(_p(
        f"Detected changes: {stats.get('ADDED', 0)} added, "
        f"{stats.get('DELETED', 0)} deleted, "
        f"{stats.get('MODIFIED', 0)} modified.",
        styles["BodySmall"],
    ))

    story.append(_p("Items Needing Review", styles["SectionTitle"]))
    story.append(_review_items_table(summary, styles))

    story.append(PageBreak())

    story.append(_p("Detailed Change Register", styles["SectionTitle"]))
    if summary:
        story.append(_detailed_changes_table(summary, styles))
    else:
        story.append(_p("No summary rows were generated.", styles["BodySmall"]))

    doc.build(story)

    pdf = buffer.getvalue()
    buffer.close()
    return pdf
