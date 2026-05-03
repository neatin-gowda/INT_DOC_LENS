"""
Durable job metadata store.

The heavy run payload still lives in memory for the current API implementation,
but status, ownership, progress, errors, labels, and result pointers are stored
durably. This is the bridge between the prototype and a queue/worker split.
"""
from __future__ import annotations

import json
import os
import threading
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Optional

from .db import db_enabled, get_conn


DEFAULT_STORE_PATH = Path(os.getenv("DOCULENS_JOB_STORE_PATH", "/tmp/doculens_jobs.json"))
_LOCK = threading.RLock()


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def init_job_store() -> None:
    if db_enabled():
        try:
            with get_conn() as conn:
                conn.execute(
                    """
                    CREATE TABLE IF NOT EXISTS doculens_job (
                        run_id TEXT PRIMARY KEY,
                        kind TEXT NOT NULL,
                        status TEXT NOT NULL,
                        status_message TEXT,
                        progress INT NOT NULL DEFAULT 0,
                        tenant_id TEXT NOT NULL DEFAULT 'default',
                        business_unit_id TEXT NOT NULL DEFAULT 'default',
                        created_by TEXT NOT NULL DEFAULT 'anonymous',
                        created_by_role TEXT,
                        created_by_name TEXT,
                        label TEXT,
                        base_label TEXT,
                        target_label TEXT,
                        source_format TEXT,
                        base_format TEXT,
                        target_format TEXT,
                        n_pages INT NOT NULL DEFAULT 0,
                        n_pages_base INT NOT NULL DEFAULT 0,
                        n_pages_target INT NOT NULL DEFAULT 0,
                        ai_usage JSONB NOT NULL DEFAULT '{}'::jsonb,
                        result_ref JSONB NOT NULL DEFAULT '{}'::jsonb,
                        error TEXT,
                        created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
                        updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
                        finished_at TIMESTAMPTZ
                    )
                    """
                )
                conn.execute("CREATE INDEX IF NOT EXISTS idx_doculens_job_owner ON doculens_job (tenant_id, business_unit_id, created_by, updated_at DESC)")
                conn.execute("CREATE INDEX IF NOT EXISTS idx_doculens_job_status ON doculens_job (tenant_id, business_unit_id, status, updated_at DESC)")
            return
        except Exception:
            # Fall back to local JSON so demos keep working even before DB setup.
            pass

    _ensure_json_store()


def upsert_job(run_id: str, patch: dict[str, Any]) -> None:
    record = _job_record(run_id, patch)
    if db_enabled():
        try:
            _upsert_db(record)
            return
        except Exception:
            pass
    _upsert_json(record)


def get_job(run_id: str) -> Optional[dict[str, Any]]:
    if db_enabled():
        try:
            with get_conn() as conn:
                row = conn.execute("SELECT * FROM doculens_job WHERE run_id = %s", (run_id,)).fetchone()
                return dict(row) if row else None
        except Exception:
            pass
    return _read_json().get(run_id)


def list_jobs(limit: int = 50) -> list[dict[str, Any]]:
    limit = max(1, min(int(limit or 50), 200))
    if db_enabled():
        try:
            with get_conn() as conn:
                rows = conn.execute(
                    "SELECT * FROM doculens_job ORDER BY updated_at DESC LIMIT %s",
                    (limit,),
                ).fetchall()
                return [dict(row) for row in rows]
        except Exception:
            pass

    rows = list(_read_json().values())
    rows.sort(key=lambda item: str(item.get("updated_at") or item.get("created_at") or ""), reverse=True)
    return rows[:limit]


def public_job_record(record: dict[str, Any]) -> dict[str, Any]:
    return {
        "run_id": record.get("run_id"),
        "kind": record.get("kind", "comparison"),
        "status": record.get("status", "unknown"),
        "status_message": record.get("status_message"),
        "progress": int(record.get("progress") or 0),
        "tenant_id": record.get("tenant_id") or "default",
        "business_unit_id": record.get("business_unit_id") or "default",
        "created_by": record.get("created_by"),
        "created_by_role": record.get("created_by_role"),
        "created_by_name": record.get("created_by_name"),
        "label": record.get("label"),
        "base_label": record.get("base_label"),
        "target_label": record.get("target_label"),
        "source_format": record.get("source_format"),
        "base_format": record.get("base_format"),
        "target_format": record.get("target_format"),
        "n_pages": int(record.get("n_pages") or 0),
        "n_pages_base": int(record.get("n_pages_base") or 0),
        "n_pages_target": int(record.get("n_pages_target") or 0),
        "ai_usage": record.get("ai_usage") or {},
        "result_ref": record.get("result_ref") or {},
        "error": record.get("error"),
        "created_at": _iso(record.get("created_at")),
        "updated_at": _iso(record.get("updated_at")),
        "finished_at": _iso(record.get("finished_at")),
    }


def _job_record(run_id: str, patch: dict[str, Any]) -> dict[str, Any]:
    current = get_job(run_id) or {}
    created_at = current.get("created_at") or patch.get("created_at") or now_iso()
    status = patch.get("status", current.get("status", "queued"))
    finished_at = patch.get("finished_at", current.get("finished_at"))
    if status in {"complete", "failed"} and not finished_at:
        finished_at = now_iso()

    return {
        **current,
        **patch,
        "run_id": run_id,
        "kind": patch.get("kind", current.get("kind", "comparison")),
        "status": status,
        "progress": int(patch.get("progress", current.get("progress", 0)) or 0),
        "tenant_id": patch.get("tenant_id", current.get("tenant_id", "default")),
        "business_unit_id": patch.get("business_unit_id", current.get("business_unit_id", "default")),
        "created_by": patch.get("created_by", current.get("created_by", "anonymous")),
        "created_at": created_at,
        "updated_at": now_iso(),
        "finished_at": finished_at,
    }


def _upsert_db(record: dict[str, Any]) -> None:
    with get_conn() as conn:
        conn.execute(
            """
            INSERT INTO doculens_job (
                run_id, kind, status, status_message, progress,
                tenant_id, business_unit_id, created_by, created_by_role, created_by_name,
                label, base_label, target_label, source_format, base_format, target_format,
                n_pages, n_pages_base, n_pages_target, ai_usage, result_ref, error,
                created_at, updated_at, finished_at
            ) VALUES (
                %(run_id)s, %(kind)s, %(status)s, %(status_message)s, %(progress)s,
                %(tenant_id)s, %(business_unit_id)s, %(created_by)s, %(created_by_role)s, %(created_by_name)s,
                %(label)s, %(base_label)s, %(target_label)s, %(source_format)s, %(base_format)s, %(target_format)s,
                %(n_pages)s, %(n_pages_base)s, %(n_pages_target)s, %(ai_usage)s::jsonb, %(result_ref)s::jsonb, %(error)s,
                %(created_at)s, %(updated_at)s, %(finished_at)s
            )
            ON CONFLICT (run_id) DO UPDATE SET
                kind = EXCLUDED.kind,
                status = EXCLUDED.status,
                status_message = EXCLUDED.status_message,
                progress = EXCLUDED.progress,
                tenant_id = EXCLUDED.tenant_id,
                business_unit_id = EXCLUDED.business_unit_id,
                created_by = EXCLUDED.created_by,
                created_by_role = EXCLUDED.created_by_role,
                created_by_name = EXCLUDED.created_by_name,
                label = EXCLUDED.label,
                base_label = EXCLUDED.base_label,
                target_label = EXCLUDED.target_label,
                source_format = EXCLUDED.source_format,
                base_format = EXCLUDED.base_format,
                target_format = EXCLUDED.target_format,
                n_pages = EXCLUDED.n_pages,
                n_pages_base = EXCLUDED.n_pages_base,
                n_pages_target = EXCLUDED.n_pages_target,
                ai_usage = EXCLUDED.ai_usage,
                result_ref = EXCLUDED.result_ref,
                error = EXCLUDED.error,
                updated_at = EXCLUDED.updated_at,
                finished_at = EXCLUDED.finished_at
            """,
            {
                **record,
                "ai_usage": json.dumps(record.get("ai_usage") or {}),
                "result_ref": json.dumps(record.get("result_ref") or {}),
                "n_pages": int(record.get("n_pages") or 0),
                "n_pages_base": int(record.get("n_pages_base") or 0),
                "n_pages_target": int(record.get("n_pages_target") or 0),
            },
        )


def _ensure_json_store() -> None:
    with _LOCK:
        DEFAULT_STORE_PATH.parent.mkdir(parents=True, exist_ok=True)
        if not DEFAULT_STORE_PATH.exists():
            DEFAULT_STORE_PATH.write_text("{}", encoding="utf-8")


def _read_json() -> dict[str, dict[str, Any]]:
    _ensure_json_store()
    with _LOCK:
        try:
            data = json.loads(DEFAULT_STORE_PATH.read_text(encoding="utf-8"))
            return data if isinstance(data, dict) else {}
        except Exception:
            return {}


def _upsert_json(record: dict[str, Any]) -> None:
    _ensure_json_store()
    with _LOCK:
        data = _read_json()
        data[record["run_id"]] = _jsonable(record)
        DEFAULT_STORE_PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False, default=str), encoding="utf-8")


def _jsonable(record: dict[str, Any]) -> dict[str, Any]:
    return {key: _iso(value) if key.endswith("_at") else value for key, value in record.items()}


def _iso(value: Any) -> Any:
    if isinstance(value, datetime):
        return value.isoformat()
    return value
