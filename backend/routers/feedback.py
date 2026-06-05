"""
Feedback router - handles feedback submission for runs.
"""
from __future__ import annotations

from fastapi import APIRouter

from ..api_schemas import FeedbackReq
from ..api_helpers import _ensure_complete, _summary_quality_profile, _feedback_record, _store_feedback

router = APIRouter()

@router.post("/runs/{run_id}/feedback")
def submit_feedback(run_id: str, req: FeedbackReq):
    r = _ensure_complete(run_id)
    quality = _summary_quality_profile(r)
    record = _feedback_record(run_id, r, req, quality)
    r.setdefault("feedback", []).append(record)
    stored_id = _store_feedback(record)
    return {
        "feedback_id": record["id"],
        "stored": bool(stored_id),
        "quality": quality,
        "feedback": {
            "reviewer_name": record["reviewer_name"],
            "document_type": record["document_type"],
            "user_score": record["user_score"],
            "wants_ai_enhancement": record["wants_ai_enhancement"],
        },
    }
