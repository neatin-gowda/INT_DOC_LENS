"""
Queries router - handles natural language query endpoints and AI health check.
"""
from __future__ import annotations

from fastapi import APIRouter

from ..api_schemas import QueryReq
from ..api_helpers import _ensure_complete, _sync_job_metadata
from ..ai_usage import add_usage, empty_usage
from ..chat_store import clear_conversation, conversation_context, load_conversation, save_exchange
from ..db import db_enabled
from ..query import ai_health, query as nl_query
from ..security import current_principal

router = APIRouter()

@router.get("/ai-health")
@router.get("/api/ai-health")
def get_ai_health():
    return ai_health()


@router.get("/runs/{run_id}/conversation")
@router.get("/api/runs/{run_id}/conversation")
def get_conversation(run_id: str):
    r = _ensure_complete(run_id)
    principal = current_principal()
    try:
        messages = load_conversation(
            db_run_id=r.get("db_run_id"),
            user_id=principal.user_id,
        )
    except Exception:
        messages = []
    return {
        "run_id": run_id,
        "messages": messages,
        "count": len(messages),
        "durable": bool(db_enabled() and r.get("db_run_id")),
    }


@router.delete("/runs/{run_id}/conversation")
@router.delete("/api/runs/{run_id}/conversation")
def delete_conversation(run_id: str):
    r = _ensure_complete(run_id)
    principal = current_principal()
    try:
        deleted = clear_conversation(
            db_run_id=r.get("db_run_id"),
            user_id=principal.user_id,
        )
    except Exception:
        deleted = 0
    return {"run_id": run_id, "deleted": deleted}


@router.post("/runs/{run_id}/query")
def post_query(run_id: str, req: QueryReq):
    r = _ensure_complete(run_id)
    principal = current_principal()
    stored_history = []
    try:
        stored_history = conversation_context(
            db_run_id=r.get("db_run_id"),
            user_id=principal.user_id,
        )
    except Exception:
        stored_history = []

    result = nl_query(
        req.question,
        r["diffs"],
        r["base_blocks"],
        r["target_blocks"],
        db_run_id=r.get("db_run_id"),
        mode=req.mode,
        response_language=req.response_language,
        model_name=req.model_name,
        history=stored_history or req.history,
    )

    if isinstance(result, dict):
        requested_ai = str(req.mode or "").strip().lower() in {"ai", "openai", "llm", "agent"}
        if not requested_ai:
            result.pop("usage", None)
            result["mode"] = result.get("mode") or "fast"
            try:
                result["conversation_id"] = save_exchange(
                    db_run_id=r.get("db_run_id"),
                    user_id=principal.user_id,
                    question=req.question,
                    result=result,
                )
            except Exception:
                result["conversation_id"] = None
            return result
        add_usage(r, result.get("usage"))
        _sync_job_metadata(run_id)
        result["job_ai_usage"] = r.get("ai_usage", empty_usage())
        try:
            result["conversation_id"] = save_exchange(
                db_run_id=r.get("db_run_id"),
                user_id=principal.user_id,
                question=req.question,
                result=result,
            )
        except Exception:
            result["conversation_id"] = None
        return result

    return {
        "answer": f"I found {len(result)} matching changes.",
        "view": "evidence",
        "columns": [],
        "rows": result[:200],
        "count": len(result),
        "plan": {},
    }
