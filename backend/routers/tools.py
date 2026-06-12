"""Tool discovery endpoint for UI, automation, and future integrations."""

from __future__ import annotations

from fastapi import APIRouter

from ..tool_registry import list_tools

router = APIRouter()


@router.get("/tools")
def tools_catalog():
    tools = list_tools()
    return {
        "tools": tools,
        "count": len(tools),
    }
