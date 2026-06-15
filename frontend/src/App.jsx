import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API } from "./config.js";
import {
  css,
} from "./styles.js";

// Import modular components
import {
  StatsBar,
  ProcessingState,
  ErrorBox,
  readResponseError,
  friendlyFetchError,
  normalizeErrorMessage,
} from "./components/common.jsx";

import { JobsDashboard } from "./components/dashboard.jsx";
import { UploadPanel, ExtractUploadPanel } from "./components/upload.jsx";
import { SideBySide } from "./components/viewer.jsx";
import { ExtractionWorkspace } from "./components/extraction.jsx";
import { AskDocumentsWorkspace, WorkspaceShell } from "./components/workspaceShell.jsx";
import { AdminWorkspace } from "./components/admin.jsx";
import { useDocumentTitle } from "./theme/useDocumentTitle.js";

// Import comparison workspaces
import { ReviewReport, AccuracyImprovementTab } from "./components/feedback.jsx";
import { QueryPanel } from "./components/chat.jsx";
import { TablesWorkspace } from "./components/tables.jsx";

function Tabs({ tab, setTab }) {
  const items = [
    ["viewer", "Visual review"],
    ["report", "Review report"],
    ["query", "Ask agent"],
    ["accuracy", "Improve accuracy"],
    ["tables", "Table workspace"],
  ];

  return (
    <div className="workspace-tabs">
      {items.map(([key, label]) => (
        <button
          key={key}
          type="button"
          className={tab === key ? "active" : ""}
          onClick={() => setTab(key)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}


const getSession = (key, fallback) => {
  if (typeof window === "undefined") return fallback;
  try {
    const val = window.sessionStorage.getItem(`doculens_${key}`);
    return val !== null ? JSON.parse(val) : fallback;
  } catch {
    return fallback;
  }
};

const setSession = (key, value) => {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(`doculens_${key}`, JSON.stringify(value));
  } catch (e) {
    console.error(e);
  }
};

const workspacePaths = {
  compare: "/compare",
  extract: "/extract",
  assistant: "/ask",
  jobs: "/work-history",
  agents: "/ai-agents",
  admin: "/admin",
};

const pathWorkspaces = {
  "/": "compare",
  ...Object.fromEntries(Object.entries(workspacePaths).map(([key, value]) => [value, key])),
};

const workspaceFromPath = (pathname) => pathWorkspaces[pathname] || "compare";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [workspace, setWorkspace] = useState(() => workspaceFromPath(window.location.pathname) || getSession("workspace", "compare"));
  const [runId, setRunId] = useState(() => getSession("runId", null));
  const [meta, setMeta] = useState(() => getSession("meta", null));
  const [tab, setTab] = useState(() => getSession("tab", "viewer"));
  const [pageNum, setPageNum] = useState(() => getSession("pageNum", 1));
  const [busy, setBusy] = useState(() => getSession("busy", false));
  const [error, setError] = useState("");
  const [extractRunId, setExtractRunId] = useState(() => getSession("extractRunId", null));
  const [extractMeta, setExtractMeta] = useState(() => getSession("extractMeta", null));
  const [extractBusy, setExtractBusy] = useState(() => getSession("extractBusy", false));
  const [extractError, setExtractError] = useState("");
  const [extractTab, setExtractTab] = useState(() => getSession("extractTab", "overview"));
  const [jobError, setJobError] = useState("");
  const [historyKind, setHistoryKind] = useState(() => getSession("historyKind", "all"));
  const pageTitle = {
    compare: "Compare",
    extract: "Extract",
    assistant: "Ask Document",
    jobs: "Work History",
    agents: "AI Agents",
    admin: "Admin Studio",
  }[workspace] || "Workspace";

  useDocumentTitle(pageTitle);

  useEffect(() => { setSession("workspace", workspace); }, [workspace]);
  useEffect(() => { setSession("runId", runId); }, [runId]);
  useEffect(() => { setSession("meta", meta); }, [meta]);
  useEffect(() => { setSession("tab", tab); }, [tab]);
  useEffect(() => { setSession("pageNum", pageNum); }, [pageNum]);
  useEffect(() => { setSession("busy", busy); }, [busy]);
  useEffect(() => { setSession("extractRunId", extractRunId); }, [extractRunId]);
  useEffect(() => { setSession("extractMeta", extractMeta); }, [extractMeta]);
  useEffect(() => { setSession("extractBusy", extractBusy); }, [extractBusy]);
  useEffect(() => { setSession("extractTab", extractTab); }, [extractTab]);
  useEffect(() => { setSession("historyKind", historyKind); }, [historyKind]);

  useEffect(() => {
    const nextWorkspace = workspaceFromPath(location.pathname);
    if (nextWorkspace !== workspace) setWorkspace(nextWorkspace);
  }, [location.pathname]);

  useEffect(() => {
    if (workspace === "compare" && tab !== "viewer") setTab("viewer");
  }, [workspace]);

  const resetAll = () => {
    setWorkspace("compare");
    setRunId(null);
    setMeta(null);
    setPageNum(1);
    setTab("viewer");
    setError("");
    setBusy(false);
    setExtractRunId(null);
    setExtractMeta(null);
    setExtractBusy(false);
    setExtractError("");
    setExtractTab("overview");
    setHistoryKind("all");
    if (typeof window !== "undefined") {
      try {
        window.sessionStorage.clear();
      } catch (e) {
        console.error(e);
      }
    }
  };

  const startNewCompare = () => {
    setRunId(null);
    setMeta(null);
    setBusy(false);
    setError("");
    setPageNum(1);
    setTab("viewer");
    goWorkspace("compare");
  };

  const startNewExtract = () => {
    setExtractRunId(null);
    setExtractMeta(null);
    setExtractBusy(false);
    setExtractError("");
    setExtractTab("overview");
    goWorkspace("extract");
  };

  const goWorkspace = (nextWorkspace, options = {}) => {
    setWorkspace(nextWorkspace);
    if (nextWorkspace === "jobs") {
      setHistoryKind(options.historyKind || "all");
    }
    setError("");
    setExtractError("");
    setJobError("");
    navigate(workspacePaths[nextWorkspace] || workspacePaths.compare, { replace: false });
  };

  useEffect(() => {
    if (!runId || !busy) return;

    let cancelled = false;
    let timer = null;

    const poll = async () => {
      try {
        const resp = await fetch(`${API}/runs/${runId}`);
        if (!resp.ok) throw new Error(await readResponseError(resp));

        const data = await resp.json();
        if (cancelled) return;

        setMeta(data);

        if (data.status === "complete") {
          setBusy(false);
          setTab("viewer");
          return;
        }

        if (data.status === "failed") {
          setBusy(false);
          setError(normalizeErrorMessage(data.error || data.status_message || "Comparison failed."));
          return;
        }

        timer = setTimeout(poll, 1000);
      } catch (err) {
        if (cancelled) return;
        setBusy(false);
        setError(friendlyFetchError(err));
      }
    };

    poll();

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [runId, busy]);

  useEffect(() => {
    if (!extractRunId || !extractBusy) return;

    let cancelled = false;
    let timer = null;

    const poll = async () => {
      try {
        const resp = await fetch(`${API}/extract-runs/${extractRunId}`);
        if (!resp.ok) throw new Error(await readResponseError(resp));

        const data = await resp.json();
        if (cancelled) return;

        setExtractMeta(data);

        if (data.status === "complete") {
          setExtractBusy(false);
          setExtractTab("overview");
          return;
        }

        if (data.status === "failed") {
          setExtractBusy(false);
          setExtractError(normalizeErrorMessage(data.error || data.status_message || "Extraction failed."));
          return;
        }

        timer = setTimeout(poll, 1000);
      } catch (err) {
        if (cancelled) return;
        setExtractBusy(false);
        setExtractError(friendlyFetchError(err));
      }
    };

    poll();

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [extractRunId, extractBusy]);

  const onUpload = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const base = form.get("base");
    const target = form.get("target");
    const familyId = String(form.get("family_id") || "").trim();

    if (!base || !target || !base.name || !target.name) {
      setError("Please select both documents before starting.");
      return;
    }
    if (!familyId) {
      setError("Please select a document use case before starting comparison.");
      return;
    }

    setWorkspace("compare");
    setBusy(true);
    setError("");
    setRunId(null);
    setPageNum(1);
    setTab("viewer");
    setMeta({
      status: "uploading",
      status_message: "Uploading documents",
      progress: 3,
      stats: {},
      coverage: {},
      n_pages_base: 0,
      n_pages_target: 0,
    });

    try {
      const resp = await fetch(`${API}/compare`, { method: "POST", body: form });
      if (!resp.ok) throw new Error(await readResponseError(resp));

      const data = await resp.json();

      setRunId(data.run_id);
      setBusy(data.status !== "complete" && data.status !== "failed");
      setMeta({
        run_id: data.run_id,
        status: data.status,
        status_message: data.status_message || "Starting comparison",
        progress: data.progress || 5,
        stats: {},
        coverage: {},
        n_pages_base: 0,
        n_pages_target: 0,
      });
      setWorkspace("compare");
    } catch (err) {
      setBusy(false);
      setError(friendlyFetchError(err));
    }
  };

  const onExtractUpload = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const documents = form.getAll("document").filter((file) => file && file.name);
    const familyId = String(form.get("family_id") || "").trim();

    if (!documents.length) {
      setExtractError("Please select at least one document, spreadsheet, PDF, or image before starting extraction.");
      return;
    }
    if (!familyId) {
      setExtractError("Please select a document use case before starting extraction.");
      return;
    }

    setWorkspace("extract");
    setExtractBusy(true);
    setExtractError("");
    setExtractRunId(null);
    setExtractTab("overview");
    setExtractMeta({
      status: "uploading",
      status_message: "Uploading document",
      progress: 3,
      summary: {},
    });

    try {
      const resp = await fetch(`${API}/extract`, { method: "POST", body: form });
      if (!resp.ok) throw new Error(await readResponseError(resp));

      const data = await resp.json();
      setExtractRunId(data.run_id);
      setExtractBusy(data.status !== "complete" && data.status !== "failed");
      setExtractMeta({
        run_id: data.run_id,
        status: data.status,
        status_message: data.status_message || "Starting extraction",
        progress: data.progress || 5,
        summary: {},
      });
      setWorkspace("extract");
    } catch (err) {
      setExtractBusy(false);
      setExtractError(friendlyFetchError(err));
    }
  };

  const openJob = async (job) => {
    setJobError("");
    try {
      if (job.kind === "extraction") {
        const resp = await fetch(`${API}/extract-runs/${job.run_id}`);
        if (!resp.ok) throw new Error(await readResponseError(resp));
        const data = await resp.json();
        setRunId(null);
        setMeta(null);
        setBusy(false);
        setExtractRunId(job.run_id);
        setExtractMeta(data);
        setExtractBusy(data.status !== "complete" && data.status !== "failed");
        setExtractTab("overview");
        setWorkspace("extract");
        return;
      }

      const resp = await fetch(`${API}/runs/${job.run_id}`);
      if (!resp.ok) throw new Error(await readResponseError(resp));
      const data = await resp.json();
      setExtractRunId(null);
      setExtractMeta(null);
      setExtractBusy(false);
      setRunId(job.run_id);
      setMeta(data);
      setBusy(data.status !== "complete" && data.status !== "failed");
      setTab("viewer");
      setPageNum(1);
      setWorkspace("compare");
    } catch (err) {
      setJobError(friendlyFetchError(err));
    }
  };

  const askJob = async (job) => {
    setJobError("");
    try {
      if (job.kind === "extraction") {
        const resp = await fetch(`${API}/extract-runs/${job.run_id}`);
        if (!resp.ok) throw new Error(await readResponseError(resp));
        const data = await resp.json();
        setRunId(null);
        setMeta(null);
        setBusy(false);
        setExtractRunId(job.run_id);
        setExtractMeta(data);
        setExtractBusy(data.status !== "complete" && data.status !== "failed");
        setWorkspace("assistant");
        return;
      }

      await openJob(job);
    } catch (err) {
      setJobError(friendlyFetchError(err));
    }
  };

  const downloadReport = () => {
    if (runId) window.location.href = `${API}/runs/${runId}/report.pdf`;
  };

  const isComplete = meta?.status === "complete";
  const isExtractComplete = extractMeta?.status === "complete";

  return (
    <div>
      <style>{css}</style>
      <WorkspaceShell
        workspace={workspace}
        runId={workspace === "compare" && isComplete ? runId : null}
        onNavigate={goWorkspace}
        onDownloadReport={downloadReport}
      >
        {workspace === "jobs" && (
          <JobsDashboard
            onOpenJob={openJob}
            onAskJob={askJob}
            error={jobError}
            historyKind={historyKind}
            onStartCompare={startNewCompare}
            onStartExtract={startNewExtract}
          />
        )}

        {workspace === "compare" && !isComplete && (
          <section className="workflow-panel">
            <UploadPanel onUpload={onUpload} busy={busy} onAdmin={() => goWorkspace("admin")} />
            {busy && meta && (
              <ProcessingState
                progress={meta.progress || 0}
                message={meta.status_message || "Processing documents"}
                status={meta.status || "running"}
              />
            )}
            {error && <ErrorBox message={error} />}
          </section>
        )}

        {workspace === "extract" && !isExtractComplete && (
          <section className="workflow-panel">
            <ExtractUploadPanel onUpload={onExtractUpload} busy={extractBusy} onAdmin={() => goWorkspace("admin")} />
            {extractBusy && extractMeta && (
              <ProcessingState
                progress={extractMeta.progress || 0}
                message={extractMeta.status_message || "Extracting document"}
                status={extractMeta.status || "running"}
              />
            )}
            {extractError && <ErrorBox message={extractError} />}
          </section>
        )}

        {workspace === "compare" && isComplete && runId && meta && (
          <section className="comparison-workspace">
            <div className="comparison-head">
              <div>
                <h2 dir="auto">{meta.base_label || "Baseline"} → {meta.target_label || "Revised"}</h2>
              </div>
              <div className="comparison-head-actions">
                <button type="button" className="ghost-action compact" onClick={startNewCompare}>
                  New comparison
                </button>
                <div className="comparison-id">#{String(runId).slice(0, 6)}</div>
              </div>
            </div>
            <StatsBar meta={meta} />

            <Tabs tab={tab} setTab={setTab} />

            <main className="workspace-surface">
              {tab === "viewer" && <SideBySide runId={runId} meta={meta} pageNum={pageNum} setPageNum={setPageNum} />}
              {tab === "report" && <ReviewReport runId={runId} />}
              {tab === "query" && <QueryPanel runId={runId} onGoBoth={(p) => { setPageNum(p); setTab("viewer"); }} />}
              {tab === "accuracy" && <AccuracyImprovementTab runId={runId} meta={meta} />}
              {tab === "tables" && <TablesWorkspace runId={runId} />}
            </main>
          </section>

        )}

        {workspace === "extract" && isExtractComplete && extractRunId && extractMeta && (
          <ExtractionWorkspace
            runId={extractRunId}
            meta={extractMeta}
            tab={extractTab}
            setTab={setExtractTab}
          />
        )}

        {workspace === "assistant" && (
          <AskDocumentsWorkspace initialRunId={extractRunId || ""} initialMeta={extractMeta} />
        )}

        {workspace === "agents" && (
          <section className="workspace-placeholder">
            <h2>AI Agents</h2>
            <p>Future skills and multi-agent workflows will live here after the document intelligence workspace is stable.</p>
            <div className="placeholder-list">
              <span>Coming soon</span>
            </div>
          </section>
        )}

        {workspace === "admin" && (
          <AdminWorkspace />
        )}

      </WorkspaceShell>
    </div>
  );
}
