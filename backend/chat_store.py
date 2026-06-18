"""Durable comparison conversation storage backed by nl_query_log."""

from __future__ import annotations

import json
import uuid
from typing import Any, Optional

from .db import db_enabled, get_conn


def _json(value: Any) -> str:
    return json.dumps(value, ensure_ascii=False, default=str)


def _as_dict(value: Any) -> dict[str, Any]:
    if isinstance(value, dict):
        return value
    if isinstance(value, str) and value.strip():
        try:
            parsed = json.loads(value)
            return parsed if isinstance(parsed, dict) else {}
        except json.JSONDecodeError:
            return {}
    return {}


def _as_list(value: Any) -> list[Any]:
    if isinstance(value, list):
        return value
    if isinstance(value, str) and value.strip():
        try:
            parsed = json.loads(value)
            return parsed if isinstance(parsed, list) else []
        except json.JSONDecodeError:
            return []
    return []


def _run_uuid(db_run_id: Optional[str]) -> Optional[uuid.UUID]:
    if not db_run_id:
        return None
    try:
        return uuid.UUID(str(db_run_id))
    except (TypeError, ValueError):
        return None


def save_exchange(
    *,
    db_run_id: Optional[str],
    user_id: str,
    question: str,
    result: dict[str, Any],
) -> Optional[int]:
    run_id = _run_uuid(db_run_id)
    if not db_enabled() or not run_id:
        return None

    plan = _as_dict(result.get("plan"))
    plan["_chat"] = {
        "mode": result.get("mode") or "fast",
        "model": result.get("ai_deployment"),
        "usage": result.get("usage") or {},
        "confidence": result.get("confidence"),
        "warning": result.get("ai_error") or "",
        "ai_called": result.get("ai_called"),
        "presentation": result.get("presentation") or result.get("view") or "text",
        "answer_columns": (result.get("columns") or [])[:12],
        "answer_rows": (result.get("rows") or [])[:30],
    }
    sources = result.get("sources") or result.get("rows") or []
    sources = sources[:20] if isinstance(sources, list) else []
    citations = [
        source.get("citation")
        for source in sources
        if isinstance(source, dict) and source.get("citation")
    ][:20]

    with get_conn() as conn:
        row = conn.execute(
            """
            INSERT INTO nl_query_log (
                run_id,
                user_id,
                nl_text,
                resolved_plan,
                response_view,
                answer_text,
                result_columns,
                result_rows,
                citations,
                result_count
            )
            VALUES (%s, %s, %s, %s::jsonb, %s, %s, %s::jsonb, %s::jsonb, %s::jsonb, %s)
            RETURNING id
            """,
            (
                run_id,
                user_id,
                question,
                _json(plan),
                result.get("presentation") or result.get("view") or "text",
                result.get("answer") or "",
                _json(result.get("columns") or []),
                _json(sources),
                _json(citations),
                int(result.get("count") or len(sources)),
            ),
        ).fetchone()
        conn.commit()
        return int(row["id"]) if row else None


def load_conversation(
    *,
    db_run_id: Optional[str],
    user_id: str,
    limit: int = 50,
) -> list[dict[str, Any]]:
    run_id = _run_uuid(db_run_id)
    if not db_enabled() or not run_id:
        return []

    with get_conn() as conn:
        rows = conn.execute(
            """
            SELECT
                id,
                nl_text,
                resolved_plan,
                response_view,
                answer_text,
                result_columns,
                result_rows,
                citations,
                created_at
            FROM nl_query_log
            WHERE run_id = %s
              AND user_id = %s
            ORDER BY created_at ASC, id ASC
            LIMIT %s
            """,
            (run_id, user_id, max(1, min(limit, 100))),
        ).fetchall()

    messages: list[dict[str, Any]] = []
    for row in rows:
        plan = _as_dict(row.get("resolved_plan"))
        metadata = _as_dict(plan.get("_chat"))
        created_at = row.get("created_at")
        timestamp = created_at.isoformat() if hasattr(created_at, "isoformat") else str(created_at or "")
        exchange_id = int(row["id"])
        messages.extend(
            [
                {
                    "id": f"query-{exchange_id}-user",
                    "role": "user",
                    "text": row.get("nl_text") or "",
                    "timestamp": timestamp,
                },
                {
                    "id": f"query-{exchange_id}-assistant",
                    "role": "assistant",
                    "text": row.get("answer_text") or "",
                    "rows": _as_list(metadata.get("answer_rows")),
                    "columns": _as_list(metadata.get("answer_columns")) or _as_list(row.get("result_columns")),
                    "sources": _as_list(row.get("result_rows")),
                    "citations": _as_list(row.get("citations")),
                    "mode": metadata.get("mode") or "fast",
                    "model": metadata.get("model"),
                    "usage": metadata.get("usage") or None,
                    "confidence": metadata.get("confidence"),
                    "warning": metadata.get("warning") or "",
                    "presentation": metadata.get("presentation") or row.get("response_view") or "text",
                    "timestamp": timestamp,
                },
            ]
        )
    return messages


def conversation_context(
    *,
    db_run_id: Optional[str],
    user_id: str,
    limit: int = 8,
) -> list[dict[str, str]]:
    messages = load_conversation(db_run_id=db_run_id, user_id=user_id, limit=max(1, limit // 2))
    return [
        {"role": message["role"], "text": str(message.get("text") or "")}
        for message in messages[-limit:]
        if message.get("role") in {"user", "assistant"} and message.get("text")
    ]


def clear_conversation(*, db_run_id: Optional[str], user_id: str) -> int:
    run_id = _run_uuid(db_run_id)
    if not db_enabled() or not run_id:
        return 0

    with get_conn() as conn:
        cursor = conn.execute(
            """
            DELETE FROM nl_query_log
            WHERE run_id = %s
              AND user_id = %s
            """,
            (run_id, user_id),
        )
        conn.commit()
        return int(cursor.rowcount or 0)
