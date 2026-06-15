"""
FastAPI app - orchestrates upload, extraction, diff, reports, queries.
Restructured to use modular routers under backend/routers/.
"""
from __future__ import annotations

import os
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware

from .api_helpers import (
    _RUNS,
    _ensure_run,
    _job_patch_from_run,
    _db_health_payload,
)
from .ingestion import supported_input_extensions
from .extraction.registry import list_providers
from .job_store import delete_job, get_job, init_job_store, list_jobs as list_stored_jobs, public_job_record
from .security import (
    can_access_job,
    current_principal,
    principal_from_headers,
    reset_current_principal,
    set_current_principal,
)
from .routers import comparison, extraction, queries, feedback, tables, reports, tools, admin

app = FastAPI(title="Altrai API", version="0.1.0")

_cors_origins = [
    origin.strip()
    for origin in os.getenv("DOCULENS_CORS_ORIGINS", "*").split(",")
    if origin.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=_cors_origins or ["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
def shutdown_event():
    try:
        from .db import close_pool
        close_pool()
    except Exception:
        pass

init_job_store()

from .jobs.queue import start_worker
start_worker()

@app.middleware("http")
async def _principal_context(request: Request, call_next):
    token = set_current_principal(principal_from_headers(request.headers))
    try:
        return await call_next(request)
    finally:
        reset_current_principal(token)

# Include sub-routers
app.include_router(comparison.router)
app.include_router(extraction.router)
app.include_router(queries.router)
app.include_router(feedback.router)
app.include_router(tables.router)
app.include_router(reports.router)
app.include_router(tools.router)
app.include_router(admin.router)

@app.get("/")
def root():
    return {
        "status": "ok",
        "name": "altrai-api",
        "endpoints": [
            "POST /extract",
            "GET /extract-runs/{id}",
            "GET /extract-runs/{id}/blocks",
            "GET /extract-runs/{id}/tables",
            "GET /extract-runs/{id}/images",
            "GET /extract-runs/{id}/structured-json",
            "GET /extract-runs/{id}/json",
            "POST /extract-runs/{id}/query",
            "POST /compare",
            "GET /jobs",
            "GET /jobs/{id}",
            "DELETE /jobs/{id}",
            "GET /db-health",
            "GET /tools",
            "GET /datasets",
            "GET /admin/datasets",
            "POST /admin/datasets/{id}/samples",
            "GET /ai-health",
            "GET /runs/{id}",
            "GET /runs/{id}/diff",
            "GET /runs/{id}/summary",
            "POST /runs/{id}/feedback",
            "POST /runs/{id}/enhance-summary",
            "GET /runs/{id}/report.pdf",
            "POST /runs/{id}/ai-summary.pdf",
            "POST /runs/{id}/query",
            "GET /runs/{id}/pages/{side}/{n}",
            "GET /runs/{id}/native-page/{side}/{n}",
            "GET /runs/{id}/overlay/{side}/{n}",
            "GET /runs/{id}/tables",
            "POST /runs/{id}/table-view",
            "POST /runs/{id}/compare-tables",
            "POST /runs/{id}/compare-table-columns",
            "POST /runs/{id}/table-report.pdf",
        ],
        "supported_upload_formats": supported_input_extensions(),
        "extraction_intelligence": {
            "mode": "local_deterministic",
            "external_services_required": False,
            "providers": list_providers(),
        },
    }

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/jobs")
def list_jobs(limit: int = 50):
    principal = current_principal()
    by_id = {}

    for record in list_stored_jobs(limit=200):
        if can_access_job(principal, record):
            by_id[record["run_id"]] = public_job_record(record)

    for run_id, run in _RUNS.items():
        if can_access_job(principal, run):
            by_id[run_id] = public_job_record(_job_patch_from_run(run_id, run))

    rows = list(by_id.values())
    rows.sort(key=lambda item: item.get("created_at") or item.get("updated_at") or item.get("run_id", ""), reverse=True)
    limit = max(1, min(limit, 200))
    return {"jobs": rows[:limit], "count": min(len(rows), limit), "total": len(rows)}

@app.get("/jobs/{run_id}")
def job_detail(run_id: str):
    r = _ensure_run(run_id)
    if r.get("kind") == "extraction":
        from .routers.extraction import extract_run_meta
        return extract_run_meta(run_id)
    from .routers.comparison import run_meta
    return run_meta(run_id)

@app.delete("/jobs/{run_id}")
def delete_job_record(run_id: str):
    principal = current_principal()
    record = get_job(run_id) or _RUNS.get(run_id)

    if not record:
        raise HTTPException(404, "Job not found")
    if not can_access_job(principal, record):
        raise HTTPException(403, "You do not have access to this job")

    _RUNS.pop(run_id, None)
    deleted = delete_job(run_id)
    return {"run_id": run_id, "deleted": deleted or True}

@app.get("/db-health")
def db_health():
    return _db_health_payload()
