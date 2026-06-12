import React, { useEffect, useState } from "react";
import { API } from "../config.js";
import {
  readResponseError,
  friendlyFetchError,
  SoftLoading,
  EmptyState,
  ErrorBox,
  JobStatusBadge,
  ProgressMini,
  jobStatusInfo,
  trim,
  formatDateTime,
  formatDuration,
  normalizeErrorMessage,
} from "./common.jsx";

export function LandingPage({ onExtract, onCompare, onJobs }) {
  return (
    <section className="session-board">
      <div className="board-head">
        <div>
          <div className="workflow-kicker">Workspace</div>
          <h2>Start a workflow</h2>
        </div>
      </div>
      <div className="quick-start-grid">
        <QuickStart title="Compare" detail="Baseline versus revised document review." onClick={onCompare} />
        <QuickStart title="Extract" detail="Single document extraction and query." onClick={onExtract} />
        <QuickStart title="Jobs" detail="Resume completed sessions." onClick={onJobs} />
      </div>
    </section>
  );
}

function QuickStart({ title, detail, onClick }) {
  return (
    <button type="button" className="quick-start-card" onClick={onClick}>
      <span>{title}</span>
      <small>{detail}</small>
    </button>
  );
}

export function JobsDashboard({ onOpenJob, onAskJob, error }) {
  const [state, setState] = useState({ loading: true, error: "", jobs: [] });
  const [deleteId, setDeleteId] = useState("");

  const loadJobs = async () => {
    try {
      const resp = await fetch(`${API}/jobs?limit=80`);
      if (!resp.ok) throw new Error(await readResponseError(resp));
      const data = await resp.json();
      setState({ loading: false, error: "", jobs: data.jobs || [] });
    } catch (err) {
      setState({ loading: false, error: friendlyFetchError(err), jobs: [] });
    }
  };

  useEffect(() => {
    let cancelled = false;
    let timer = null;

    const poll = async () => {
      if (cancelled) return;
      await loadJobs();
      if (!cancelled) timer = setTimeout(poll, 2200);
    };

    poll();
    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, []);

  const deleteJob = async (job) => {
    if (!job?.run_id || deleteId) return;
    setDeleteId(job.run_id);
    try {
      const resp = await fetch(`${API}/jobs/${job.run_id}`, { method: "DELETE" });
      if (!resp.ok) throw new Error(await readResponseError(resp));
      await loadJobs();
    } catch (err) {
      setState((prev) => ({ ...prev, error: friendlyFetchError(err) }));
    } finally {
      setDeleteId("");
    }
  };

  const jobs = state.jobs || [];
  const running = jobs.filter((job) => !["complete", "failed", "error"].includes(job.status)).length;
  const complete = jobs.filter((job) => job.status === "complete").length;

  return (
    <section className="session-board">
      <div className="board-head">
        <div>
          <div className="workflow-kicker">Sessions</div>
          <h2>Jobs</h2>
        </div>
        <div className="board-actions">
          <span>{running} running</span>
          <span>{complete} complete</span>
          <button type="button" onClick={loadJobs} className="ghost-action">Refresh</button>
        </div>
      </div>

      {error && <ErrorBox message={error} />}
      {state.error && <ErrorBox message={state.error} />}

      {state.loading && !jobs.length ? (
        <SoftLoading label="Loading jobs" />
      ) : jobs.length === 0 ? (
        <EmptyState label="No jobs are available yet." />
      ) : (
        <div className="job-list">
          {jobs.map((job) => (
            <JobCard
              key={job.run_id}
              job={job}
              deleting={deleteId === job.run_id}
              onOpen={() => onOpenJob(job)}
              onAsk={() => onAskJob?.(job)}
              onDelete={() => deleteJob(job)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function JobCard({ job, deleting, onOpen, onAsk, onDelete }) {
  const complete = job.status === "complete";
  const statusInfo = jobStatusInfo(job.status);
  const isExtraction = job.kind === "extraction";
  const title = isExtraction
    ? job.label || "Uploaded document"
    : `${job.base_label || "Baseline"} → ${job.target_label || "Revised"}`;
  const pages = isExtraction
    ? (job.n_pages || "-")
    : `${job.n_pages_base || "-"} / ${job.n_pages_target || "-"}`;

  return (
    <article className={`job-card ${statusInfo.className || "queued"}`}>
      <div className="job-main">
        <div className="job-kind">{isExtraction ? "Extraction" : "Comparison"}</div>
        <h3 dir="auto">{title}</h3>
        <div className="job-meta">
          <span>#{String(job.run_id || "").slice(0, 6)}</span>
          <span>{[job.source_format, job.base_format, job.target_format].filter(Boolean).join(" / ") || "document"}</span>
          <span>{pages} pages</span>
          <span>{formatDuration(job.duration_ms, job.status)}</span>
        </div>
        {job.status_message && <p dir="auto">{job.status_message}</p>}
        {statusInfo.isFailed && job.error && (
          <p className="job-error" dir="auto">{trim(normalizeErrorMessage(job.error), 180)}</p>
        )}
      </div>

      <div className="job-side">
        <JobStatusBadge status={job.status} />
        <ProgressMini value={job.progress || 0} status={job.status} />
        <span className="job-date">{formatDateTime(job.created_at)}</span>
        <div className="job-actions">
          <button type="button" onClick={onOpen} disabled={!complete} className="primary-action compact">
            Open
          </button>
          <button type="button" onClick={onAsk} disabled={!complete} className="ghost-action compact">
            Ask
          </button>
          <button type="button" onClick={onDelete} disabled={deleting} className="danger-action compact">
            {deleting ? "Deleting" : "Delete"}
          </button>
        </div>
      </div>
    </article>
  );
}
