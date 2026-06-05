import React, { useState, useEffect } from "react";
import { API, COLORS } from "../config.js";
import { panelStyle, secondaryButtonStyle, primaryButtonStyle, th, td } from "../styles.js";
import {
  readResponseError,
  friendlyFetchError,
  SoftLoading,
  EmptyState,
  JobStatusBadge,
  ProgressMini,
  AiUsageInline,
  jobStatusInfo,
  trim,
  formatDateTime,
  formatDuration,
} from "./common.jsx";

export function LandingPage({ onExtract, onCompare, onJobs }) {
  return (
    <section style={{ ...panelStyle, padding: 22 }}>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 600 }}>Choose a workspace</h2>
        <p style={{ margin: "7px 0 0", color: "#667085", fontSize: 14 }}>
          Use extraction when you want to inspect one or more files. Use comparison when you want to review old vs revised versions.
        </p>
      </div>

      <div className="two-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 14 }}>
        <WorkspaceCard
          title="Extract documents"
          description="Upload PDFs, images, Word files, spreadsheets, xlsb workbooks, CSV, or TSV and review extracted text, tables, image/OCR content, coverage, JSON, and optional AI analysis."
          action="Start extraction"
          onClick={onExtract}
        />
        <WorkspaceCard
          title="Compare documents"
          description="Upload baseline and revised files, then use the existing side-by-side review, semantic diff, table workspace, Ask Agent, and reports."
          action="Start comparison"
          onClick={onCompare}
        />
        <WorkspaceCard
          title="Job status"
          description="Review queued, running, completed, or failed extraction and comparison jobs without blocking the upload page."
          action="Open jobs"
          onClick={onJobs}
        />
      </div>
    </section>
  );
}

export function WorkspaceCard({ title, description, action, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        textAlign: "left",
        border: "1px solid #ded6c8",
        background: "#fbfaf6",
        borderRadius: 8,
        padding: 18,
        cursor: "pointer",
        color: "#202936",
      }}
    >
      <div style={{ fontSize: 17, fontWeight: 650, marginBottom: 7 }}>{title}</div>
      <div style={{ color: "#667085", fontSize: 14, lineHeight: 1.45, minHeight: 62 }}>{description}</div>
      <div style={{ marginTop: 16, color: "#2f5f4f", fontWeight: 650 }}>{action}</div>
    </button>
  );
}

export function JobsDashboard({ onOpenJob, error }) {
  const [state, setState] = useState({ loading: true, error: "", jobs: [] });

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
      if (!cancelled) timer = setTimeout(poll, 1800);
    };

    poll();
    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, []);

  const jobs = state.jobs || [];

  return (
    <section style={{ ...panelStyle, padding: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 14 }}>
        <div>
          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 600 }}>Job status</h2>
          <p style={{ margin: "5px 0 0", color: "#667085", fontSize: 13 }}>
            Uploads start a background job. You can start another workflow and return here to open completed results.
          </p>
        </div>
        <button type="button" onClick={loadJobs} style={secondaryButtonStyle()}>
          Refresh
        </button>
      </div>

      {error && <ErrorBox message={error} />}
      {state.error && <ErrorBox message={state.error} />}
      {state.loading && !jobs.length ? (
        <SoftLoading label="Loading jobs" />
      ) : jobs.length === 0 ? (
        <EmptyState label="No jobs are available in this backend session yet." />
      ) : (
        <div className="dl-scrollbar" style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 1320, tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "12%" }} />
              <col style={{ width: "27%" }} />
              <col style={{ width: "13%" }} />
              <col style={{ width: "13%" }} />
              <col style={{ width: "11%" }} />
              <col style={{ width: "8%" }} />
              <col style={{ width: "7%" }} />
              <col style={{ width: "7%" }} />
              <col style={{ width: 150 }} />
            </colgroup>
            <thead>
              <tr style={{ background: "#1f2937", color: "white" }}>
                <th style={th}>Workflow</th>
                <th style={th}>Documents</th>
                <th style={th}>Status</th>
                <th style={th}>Progress</th>
                <th style={th}>Submitted</th>
                <th style={th}>Duration</th>
                <th style={th}>Pages</th>
                <th style={th}>AI tokens</th>
                <th style={th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => {
                const complete = job.status === "complete";
                const statusInfo = jobStatusInfo(job.status);
                return (
                  <tr key={job.run_id}>
                    <td style={td}>
                      <strong style={{ fontWeight: 650 }}>{job.kind === "extraction" ? "Extraction" : "Comparison"}</strong>
                      <div style={{ color: "#667085", marginTop: 4, fontFamily: "monospace", fontSize: 11 }}>#{String(job.run_id || "").slice(0, 6)}</div>
                    </td>
                    <td style={{ ...td, overflowWrap: "anywhere" }}>
                      {job.kind === "extraction" ? (
                        <div dir="auto">{job.label || "Uploaded document"}</div>
                      ) : (
                        <div dir="auto">{job.base_label || "Baseline"} → {job.target_label || "Revised"}</div>
                      )}
                      <div style={{ color: "#667085", marginTop: 4 }}>
                        {[job.source_format, job.base_format, job.target_format].filter(Boolean).join(" / ")}
                      </div>
                    </td>
                    <td style={td}>
                      <JobStatusBadge status={job.status} />
                      {job.status_message && <div style={{ color: "#667085", marginTop: 5 }} dir="auto">{job.status_message}</div>}
                      {statusInfo.isFailed && job.error && <div style={{ color: COLORS.DELETED.text, marginTop: 5 }} dir="auto">{trim(normalizeErrorMessage(job.error), 160)}</div>}
                    </td>
                    <td style={td}>
                      <ProgressMini value={job.progress || 0} status={job.status} />
                    </td>
                    <td style={td}>
                      <div>{formatDateTime(job.created_at)}</div>
                      {job.finished_at && <div style={{ color: "#667085", marginTop: 4 }}>Done {formatDateTime(job.finished_at)}</div>}
                    </td>
                    <td style={td}>
                      {formatDuration(job.duration_ms, job.status)}
                    </td>
                    <td style={td}>
                      {job.kind === "extraction"
                        ? (job.n_pages || "-")
                        : `${job.n_pages_base || "-"} / ${job.n_pages_target || "-"}`}
                    </td>
                    <td style={td}>
                      <AiUsageInline usage={job.ai_usage} />
                    </td>
                    <td style={{ ...td, width: 150 }}>
                      <button
                        type="button"
                        onClick={() => onOpenJob(job)}
                        disabled={!complete}
                        style={complete
                          ? primaryButtonStyle(false, { height: 36, minWidth: 118, whiteSpace: "nowrap" })
                          : secondaryButtonStyle({ height: 36, minWidth: 118, whiteSpace: "nowrap", opacity: 0.55, cursor: "default" })}
                      >
                        {complete ? "Open result" : statusInfo.isFailed ? "Failed" : "Processing"}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

// Re-export ErrorBox for JobsDashboard to use it (or it can import from common.jsx, but since it uses JobStatusBadge we import both from common.jsx)
function ErrorBox({ message }) {
  return (
    <div style={{ marginTop: 16, border: "1px solid #f0b4b4", background: "#fff5f5", color: "#9f1d1d", borderRadius: 8, padding: 13, fontSize: 14, fontWeight: 600, lineHeight: 1.45 }}>
      {message}
    </div>
  );
}
