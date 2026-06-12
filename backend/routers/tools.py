"""Tool discovery endpoint for UI, automation, and future integrations."""

from __future__ import annotations

from fastapi import APIRouter

from ..security import current_principal
from ..tool_registry import list_tools

router = APIRouter()


@router.get("/tools")
def tools_catalog():
    principal = current_principal()
    tools = list_tools(principal)
    return {
        "tools": tools,
        "count": len(tools),
        "role": principal.role,
        "tenant_id": principal.tenant_id,
        "business_unit_id": principal.business_unit_id,
    }
