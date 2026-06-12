"""Reusable tool metadata for UI, automation, and future MCP-style adapters."""

from __future__ import annotations

from typing import Any


TOOLS: list[dict[str, Any]] = [
    {
        "name": "document.extract",
        "label": "Extract documents",
        "category": "document",
        "description": "Extract text, tables, images, metadata, key-values, and warnings from supported files.",
        "endpoint": "POST /extract",
        "ai_optional": True,
        "permissions": ["documents:read", "documents:extract"],
    },
    {
        "name": "document.compare",
        "label": "Compare documents",
        "category": "document",
        "description": "Compare a baseline and revised document with visual, semantic, table, and report outputs.",
        "endpoint": "POST /compare",
        "ai_optional": True,
        "permissions": ["documents:read", "documents:compare"],
    },
    {
        "name": "document.table.compare",
        "label": "Compare tables",
        "category": "table",
        "description": "Align selected tables, compare row and value changes, and optionally generate an AI review.",
        "endpoint": "POST /runs/{run_id}/compare-table-columns",
        "ai_optional": True,
        "permissions": ["documents:read", "tables:compare"],
    },
    {
        "name": "document.query",
        "label": "Ask documents",
        "category": "assistant",
        "description": "Answer natural-language questions against a comparison run or extraction result with citations.",
        "endpoint": "POST /runs/{run_id}/query",
        "ai_optional": False,
        "permissions": ["documents:read", "assistant:query"],
    },
    {
        "name": "document.report.generate",
        "label": "Generate reports",
        "category": "reporting",
        "description": "Generate PDF review reports and AI summary PDFs from completed runs.",
        "endpoint": "GET /runs/{run_id}/report.pdf",
        "ai_optional": True,
        "permissions": ["documents:read", "reports:generate"],
    },
]


def list_tools() -> list[dict[str, Any]]:
    return [dict(tool) for tool in TOOLS]
