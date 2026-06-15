"""
Database-backed job queue for concurrent background processing.
"""
from __future__ import annotations

import os
import time
import threading
import traceback
from pathlib import Path
from typing import Any, Optional

from ..db import db_enabled, get_conn
from ..api_helpers import _RUNS, _process_compare, _process_extract, _sync_job_metadata

_WORKER_THREAD: Optional[threading.Thread] = None
_WORKER_LOCK = threading.Lock()

def enqueue_job(
    run_id: str,
    kind: str,
    args: dict[str, Any],
    run_dict: dict[str, Any],
) -> None:
    """
    Queue a comparison or extraction job.
    Uses PostgreSQL FOR UPDATE SKIP LOCKED in production, or falls back to in-memory threading if DB is disabled.
    """
    if db_enabled():
        # Production DB-backed queue path
        run_dict["status"] = "queued"
        run_dict["status_message"] = "Job queued in database"
        
        # Store serialized inputs inside result_ref so workers can read them
        result_ref = run_dict.setdefault("result_ref", {})
        result_ref["args"] = args
        
        _sync_job_metadata(run_id)
        print(f"Job {run_id} enqueued in Postgres.")
    else:
        # Development fallback / in-memory path
        run_dict["status"] = "running"
        run_dict["status_message"] = "Processing starting"
        
        if kind == "comparison":
            target = _process_compare
            target_args = (
                run_id,
                Path(args["work"]),
                Path(args["base_source"]),
                Path(args["target_source"]),
                args["base_label"],
                args["target_label"],
                args["use_llm"],
                args.get("family_id"),
            )
        else:
            target = _process_extract
            target_args = (
                run_id,
                Path(args["work"]),
                [Path(s) for s in args["sources"]],
                args["label"],
                args["use_ai"],
                args.get("family_id"),
            )
            
        worker = threading.Thread(
            target=target,
            args=target_args,
            daemon=True,
        )
        worker.start()
        print(f"Job {run_id} started in-memory thread.")

def worker_loop() -> None:
    """
    Daemon worker loop picking up tasks from doculens_job table.
    """
    print("Altrai Job Queue Worker loop started.")
    while True:
        if not db_enabled():
            time.sleep(5)
            continue

        try:
            job_to_run = None
            with get_conn() as conn:
                # Atomically select and lock one queued job
                row = conn.execute(
                    """
                    SELECT run_id, kind, result_ref 
                    FROM doculens_job 
                    WHERE status = 'queued' 
                    ORDER BY created_at ASC 
                    FOR UPDATE SKIP LOCKED 
                    LIMIT 1
                    """
                ).fetchone()

                if row:
                    job_to_run = {
                        "run_id": row["run_id"],
                        "kind": row["kind"],
                        "result_ref": row["result_ref"] or {},
                    }
                    # Mark it as running inside the locked transaction
                    conn.execute(
                        "UPDATE doculens_job SET status = 'running', updated_at = now() WHERE run_id = %s",
                        (row["run_id"],),
                    )

            if job_to_run:
                run_id = job_to_run["run_id"]
                kind = job_to_run["kind"]
                result_ref = job_to_run["result_ref"]
                args = result_ref.get("args", {})

                print(f"Worker picked up job: {run_id} ({kind})")

                # Rehydrate run state in memory
                if run_id not in _RUNS:
                    _RUNS[run_id] = {}
                _RUNS[run_id].update({
                    "status": "running",
                    "status_message": "Processing starting",
                    "progress": 8,
                    "kind": kind,
                    "work": Path(args["work"]) if "work" in args else None,
                })

                # Run processing
                if kind == "comparison":
                    _process_compare(
                        run_id=run_id,
                        work=Path(args["work"]),
                        base_source=Path(args["base_source"]),
                        target_source=Path(args["target_source"]),
                        base_label=args["base_label"],
                        target_label=args["target_label"],
                        use_llm=args["use_llm"],
                        family_id=args.get("family_id"),
                    )
                elif kind == "extraction":
                    _process_extract(
                        run_id=run_id,
                        work=Path(args["work"]),
                        sources=[Path(s) for s in args["sources"]],
                        label=args["label"],
                        use_ai=args["use_ai"],
                        family_id=args.get("family_id"),
                    )
            else:
                time.sleep(2)
        except Exception as exc:
            print(f"Error in job worker loop: {exc}")
            traceback.print_exc()
            time.sleep(3)

def start_worker() -> None:
    """
    Start the background job worker daemon thread if not already running.
    """
    global _WORKER_THREAD
    with _WORKER_LOCK:
        if _WORKER_THREAD is not None:
            return
        
        _WORKER_THREAD = threading.Thread(target=worker_loop, daemon=True)
        _WORKER_THREAD.start()
        print("Background job worker thread started successfully.")
