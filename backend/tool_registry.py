"""Reusable tool metadata for UI, automation, and future MCP-style adapters."""

from __future__ import annotations

from typing import Any

from .security import ROLE_PLATFORM_ADMIN, ROLE_BUSINESS_UNIT_ADMIN, ROLE_REVIEWER, ROLE_SUBMITTER, ROLE_VIEWER, Principal


DOCUMENT_USER_ROLES = [ROLE_PLATFORM_ADMIN, ROLE_BUSINESS_UNIT_ADMIN, ROLE_REVIEWER, ROLE_SUBMITTER, ROLE_VIEWER]
POWER_USER_ROLES = [ROLE_PLATFORM_ADMIN, ROLE_BUSINESS_UNIT_ADMIN, ROLE_REVIEWER]
ADMIN_ROLES = [ROLE_PLATFORM_ADMIN, ROLE_BUSINESS_UNIT_ADMIN]


TOOLS: list[dict[str, Any]] = [
    {
        "name": "document.extract",
        "label": "Extract documents",
        "category": "document",
        "description": "Extract text, tables, images, metadata, key-values, and warnings from supported files.",
        "endpoint": "POST /extract",
        "ai_optional": True,
        "permissions": ["documents:read", "documents:extract"],
        "allowed_roles": DOCUMENT_USER_ROLES,
    },
    {
        "name": "document.compare",
        "label": "Compare documents",
        "category": "document",
        "description": "Compare a baseline and revised document with visual, semantic, table, and report outputs.",
        "endpoint": "POST /compare",
        "ai_optional": True,
        "permissions": ["documents:read", "documents:compare"],
        "allowed_roles": DOCUMENT_USER_ROLES,
    },
    {
        "name": "document.table.compare",
        "label": "Compare tables",
        "category": "table",
        "description": "Align selected tables, compare row and value changes, and optionally generate an AI review.",
        "endpoint": "POST /runs/{run_id}/compare-table-columns",
        "ai_optional": True,
        "permissions": ["documents:read", "tables:compare"],
        "allowed_roles": POWER_USER_ROLES,
    },
    {
        "name": "document.query",
        "label": "Ask documents",
        "category": "assistant",
        "description": "Answer natural-language questions against a comparison run or extraction result with citations.",
        "endpoint": "POST /runs/{run_id}/query",
        "ai_optional": False,
        "permissions": ["documents:read", "assistant:query"],
        "allowed_roles": DOCUMENT_USER_ROLES,
    },
    {
        "name": "document.report.generate",
        "label": "Generate reports",
        "category": "reporting",
        "description": "Generate PDF review reports and AI summary PDFs from completed runs.",
        "endpoint": "GET /runs/{run_id}/report.pdf",
        "ai_optional": True,
        "permissions": ["documents:read", "reports:generate"],
        "allowed_roles": POWER_USER_ROLES,
    },
    {
        "name": "platform.tool.manage",
        "label": "Manage tools",
        "category": "admin",
        "description": "Register tools, MCP connectors, schemas, permissions, and cost policies.",
        "endpoint": "GET /tools",
        "ai_optional": False,
        "permissions": ["tools:manage"],
        "allowed_roles": ADMIN_ROLES,
    },
]


def list_tools(principal: Principal | None = None) -> list[dict[str, Any]]:
    role = principal.role if principal else ROLE_VIEWER
    return [
        dict(tool)
        for tool in TOOLS
        if role in tool.get("allowed_roles", [])
    ]
