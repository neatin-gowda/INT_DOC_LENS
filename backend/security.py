"""
Lightweight tenant/RBAC context for production-MVP deployments.

This intentionally supports a header-based demo mode so the app can be shown
without Entra ID, while keeping the same authorization shape production will
use behind APIM/Entra.
"""
from __future__ import annotations

import os
from contextvars import ContextVar
from dataclasses import dataclass
from typing import Any, Optional


ROLE_PLATFORM_ADMIN = "platform_admin"
ROLE_BUSINESS_UNIT_ADMIN = "business_unit_admin"
ROLE_REVIEWER = "reviewer"
ROLE_SUBMITTER = "submitter"
ROLE_VIEWER = "viewer"

ALL_ROLES = {
    ROLE_PLATFORM_ADMIN,
    ROLE_BUSINESS_UNIT_ADMIN,
    ROLE_REVIEWER,
    ROLE_SUBMITTER,
    ROLE_VIEWER,
}


@dataclass(frozen=True)
class Principal:
    user_id: str
    role: str = ROLE_VIEWER
    tenant_id: str = "default"
    business_unit_id: str = "default"
    display_name: str = ""

    @property
    def is_platform_admin(self) -> bool:
        return self.role == ROLE_PLATFORM_ADMIN

    @property
    def is_business_unit_admin(self) -> bool:
        return self.role == ROLE_BUSINESS_UNIT_ADMIN


_CURRENT_PRINCIPAL: ContextVar[Principal] = ContextVar(
    "doculens_current_principal",
    default=Principal(
        user_id="demo-user",
        role=ROLE_PLATFORM_ADMIN,
        tenant_id="default",
        business_unit_id="default",
        display_name="Demo User",
    ),
)


def auth_mode() -> str:
    return os.getenv("DOCULENS_AUTH_MODE", "demo").strip().lower() or "demo"


def current_principal() -> Principal:
    return _CURRENT_PRINCIPAL.get()


def set_current_principal(principal: Principal):
    return _CURRENT_PRINCIPAL.set(principal)


def reset_current_principal(token) -> None:
    _CURRENT_PRINCIPAL.reset(token)


def principal_from_headers(headers: Any) -> Principal:
    """
    Header contract for demo/APIM mode:
      X-User-Id, X-User-Role, X-Tenant-Id, X-Business-Unit-Id, X-User-Name

    In demo mode missing headers become a platform admin so the existing UI
    keeps working. In header mode missing user/tenant/BU claims become a viewer
    in the default tenant and will only see their own jobs.
    """
    mode = auth_mode()
    default_role = ROLE_PLATFORM_ADMIN if mode == "demo" else ROLE_VIEWER

    user_id = _header(headers, "x-user-id") or ("demo-user" if mode == "demo" else "anonymous")
    role = (_header(headers, "x-user-role") or default_role).strip().lower()
    tenant_id = _header(headers, "x-tenant-id") or "default"
    business_unit_id = _header(headers, "x-business-unit-id") or _header(headers, "x-business-unit") or "default"
    display_name = _header(headers, "x-user-name") or user_id

    if role not in ALL_ROLES:
        role = ROLE_VIEWER

    return Principal(
        user_id=user_id.strip()[:160] or "anonymous",
        role=role,
        tenant_id=tenant_id.strip()[:120] or "default",
        business_unit_id=business_unit_id.strip()[:120] or "default",
        display_name=display_name.strip()[:160] or user_id,
    )


def can_access_job(principal: Principal, job: dict[str, Any]) -> bool:
    if auth_mode() == "disabled":
        return True

    tenant_id = str(job.get("tenant_id") or "default")
    business_unit_id = str(job.get("business_unit_id") or "default")
    created_by = str(job.get("created_by") or job.get("created_by_user_id") or "")

    if principal.is_platform_admin:
        return True
    if principal.tenant_id != tenant_id:
        return False
    if principal.is_business_unit_admin:
        return principal.business_unit_id == business_unit_id
    return created_by == principal.user_id


def job_ownership_fields(principal: Optional[Principal] = None) -> dict[str, str]:
    principal = principal or current_principal()
    return {
        "tenant_id": principal.tenant_id,
        "business_unit_id": principal.business_unit_id,
        "created_by": principal.user_id,
        "created_by_role": principal.role,
        "created_by_name": principal.display_name,
    }


def _header(headers: Any, name: str) -> str:
    try:
        return str(headers.get(name) or headers.get(name.title()) or "").strip()
    except Exception:
        return ""
