"""
Queries router - handles natural language query endpoints and AI health check.
"""
from __future__ import annotations

from fastapi import APIRouter

from ..api_schemas import QueryReq
from ..api_helpers import _ensure_complete, _sync_job_metadata
from ..api_usage import add_usage
from ..job_store import empty_usage
from ..query import ai_health, query as nl_query

router = APIRouter()

@router.get("/ai-health")
def get_ai_health():
    return ai_health()

@router.post("/runs/{run_id}/query")
def post_query(run_id: str, req: QueryReq):
    r = _ensure_complete(run_id)

    result = nl_query(
        req.question,
        r["diffs"],
        r["base_blocks"],
        r["target_blocks"],
        db_run_id=r.get("db_run_id"),
        mode=req.mode,
        response_language=req.response_language,
        model_name=req.model_name,
    )

    if isinstance(result, dict):
        add_usage(r, result.get("usage"))
        _sync_job_metadata(run_id)
        result["job_ai_usage"] = r.get("ai_usage", empty_usage())
        return result

    return {
        "answer": f"I found {len(result)} matching changes.",
        "view": "evidence",
        "columns": [],
        "rows": result[:200],
        "count": len(result),
        "plan": {},
    }
