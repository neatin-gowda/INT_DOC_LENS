import React, { useEffect, useState } from "react";
import { API } from "./config.js";
import {
  css,
} from "./styles.js";

// Import modular components
import {
  StatsBar,
  Tabs,
  ProcessingState,
  ErrorBox,
  readResponseError,
  friendlyFetchError,
  normalizeErrorMessage,
} from "./components/common.jsx";

import { JobsDashboard } from "./components/dashboard.jsx";
import { UploadPanel, ExtractUploadPanel } from "./components/upload.jsx";
import { SideBySide } from "./components/viewer.jsx";
import { TablesWorkspace } from "./components/tables.jsx";
import { QueryPanel } from "./components/chat.jsx";
import { ReviewReport } from "./components/feedback.jsx";
import { ExtractionWorkspace } from "./components/extraction.jsx";
import { AskDocumentsWorkspace, CommandCenter, WorkspacePlaceholder, WorkspaceShell } from "./components/workspaceShell.jsx";

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

export default function App() {
  const [workspace, setWorkspace] = useState(() => getSession("workspace", "home"));
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

  const resetAll = () => {
    setWorkspace("home");
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
    if (typeof window !== "undefined") {
      try {
        window.sessionStorage.clear();
      } catch (e) {
        console.error(e);
      }
    }
  };

  const goWorkspace = (nextWorkspace) => {
    if (nextWorkspace === "home") {
      resetAll();
    } else {
      setWorkspace(nextWorkspace);
      setError("");
      setExtractError("");
      setJobError("");
    }

    if (typeof window !== "undefined" && window.history?.pushState) {
      window.history.pushState({ doculensWorkspace: nextWorkspace }, "", window.location.href);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined" || !window.history?.replaceState) return undefined;

    window.history.replaceState({ doculensWorkspace: "home" }, "", window.location.href);
    const onPopState = () => resetAll();
    window.addEventListener("popstate", onPopState);

    return () => window.removeEventListener("popstate", onPopState);
  }, []);

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

    if (!base || !target || !base.name || !target.name) {
      setError("Please select both documents before starting.");
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

    if (!documents.length) {
      setExtractError("Please select at least one document, spreadsheet, PDF, or image before starting extraction.");
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

      const resp = await fetch(`${API}/runs/${job.run_id}`);
      if (!resp.ok) throw new Error(await readResponseError(resp));
      const data = await resp.json();
      setExtractRunId(null);
      setExtractMeta(null);
      setExtractBusy(false);
      setRunId(job.run_id);
      setMeta(data);
      setBusy(data.status !== "complete" && data.status !== "failed");
      setWorkspace("assistant");
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
        {workspace === "home" && (
          <CommandCenter
            onExtract={() => goWorkspace("extract")}
            onCompare={() => goWorkspace("compare")}
            onJobs={() => goWorkspace("jobs")}
            onAgents={() => goWorkspace("agents")}
            onTools={() => goWorkspace("tools")}
            onAutomations={() => goWorkspace("automations")}
          />
        )}

        {workspace === "jobs" && (
          <JobsDashboard onOpenJob={openJob} onAskJob={askJob} error={jobError} />
        )}

        {workspace === "compare" && !isComplete && (
          <section className="workflow-panel">
            <UploadPanel onUpload={onUpload} busy={busy} onBack={() => goWorkspace("home")} />
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
            <ExtractUploadPanel onUpload={onExtractUpload} busy={extractBusy} onBack={() => goWorkspace("home")} />
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
                <div className="workflow-kicker">Active comparison</div>
                <h2 dir="auto">{meta.base_label || "Baseline"} → {meta.target_label || "Revised"}</h2>
              </div>
              <div className="comparison-id">#{String(runId).slice(0, 6)}</div>
            </div>
            <StatsBar meta={meta} />
            <Tabs tab={tab} setTab={setTab} />

            <main className="workspace-surface">
              {tab === "viewer" && <SideBySide runId={runId} meta={meta} pageNum={pageNum} setPageNum={setPageNum} />}
              {tab === "query" && <QueryPanel runId={runId} />}
              {tab === "tables" && <TablesWorkspace runId={runId} />}
              {tab === "report" && <ReviewReport runId={runId} />}
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
          runId && isComplete ? (
            <main className="workspace-surface">
              <QueryPanel runId={runId} />
            </main>
          ) : (
            <AskDocumentsWorkspace initialRunId={extractRunId || ""} initialMeta={extractMeta} />
          )
        )}

        {workspace === "agents" && (
          <WorkspacePlaceholder
            title="Agent Studio"
            detail="Build supervised agent workspaces that call approved tools, ask for human approval, and keep every run auditable."
            items={["Agent runs", "Approval gates", "Tool policy", "Run history"]}
          />
        )}

        {workspace === "tools" && (
          <WorkspacePlaceholder
            title="Tool Studio"
            detail="Register internal tools, MCP connectors, schemas, permissions, model use, and cost controls in one governed catalog."
            items={["GET /tools", "MCP connectors", "Tool RBAC", "Cost controls"]}
          />
        )}

        {workspace === "automations" && (
          <WorkspacePlaceholder
            title="Workflow Runs"
            detail="Run document pipelines, recurring comparisons, monitors, and department workflows with status and approvals."
            items={["Schedules", "Watch folders", "Notifications", "Human approvals"]}
          />
        )}

        {workspace === "sources" && (
          <WorkspacePlaceholder
            title="Knowledge & RAG"
            detail="Approved knowledge sources, document collections, vector stores, and connector-backed retrieval scopes will be managed here."
            items={["Department stores", "Connectors", "Citations", "Retention policies"]}
          />
        )}

        {workspace === "admin" && (
          <WorkspacePlaceholder
            title="Admin & RBAC"
            detail="Admins will control users, groups, departments, tool access, source access, model policies, and audit settings from this control plane."
            items={["Users", "Groups", "Tool access", "Audit logs", "Model policy"]}
          />
        )}
      </WorkspaceShell>
    </div>
  );
}
