import React, { useEffect, useState } from "react";
import { API } from "./config.js";
import {
  css,
  pageStyle,
  panelStyle,
  shellStyle,
} from "./styles.js";

// Import modular components
import {
  Header,
  StatsBar,
  Tabs,
  ProcessingState,
  ErrorBox,
  readResponseError,
  friendlyFetchError,
  normalizeErrorMessage,
} from "./components/common.jsx";

import { LandingPage, JobsDashboard } from "./components/dashboard.jsx";
import { UploadPanel, ExtractUploadPanel } from "./components/upload.jsx";
import { SideBySide } from "./components/viewer.jsx";
import { TablesWorkspace } from "./components/tables.jsx";
import { QueryPanel } from "./components/chat.jsx";
import { ReviewReport, AccuracyImprovementTab } from "./components/feedback.jsx";
import { ExtractionWorkspace } from "./components/extraction.jsx";

export default function App() {
  const [workspace, setWorkspace] = useState("home");
  const [runId, setRunId] = useState(null);
  const [meta, setMeta] = useState(null);
  const [tab, setTab] = useState("viewer");
  const [pageNum, setPageNum] = useState(1);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [extractRunId, setExtractRunId] = useState(null);
  const [extractMeta, setExtractMeta] = useState(null);
  const [extractBusy, setExtractBusy] = useState(false);
  const [extractError, setExtractError] = useState("");
  const [extractTab, setExtractTab] = useState("overview");
  const [jobError, setJobError] = useState("");

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
      setBusy(false);
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
      setWorkspace("jobs");
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
      setExtractBusy(false);
      setExtractMeta({
        run_id: data.run_id,
        status: data.status,
        status_message: data.status_message || "Starting extraction",
        progress: data.progress || 5,
        summary: {},
      });
      setWorkspace("jobs");
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

  const downloadReport = () => {
    if (runId) window.location.href = `${API}/runs/${runId}/report.pdf`;
  };

  const isComplete = meta?.status === "complete";
  const isExtractComplete = extractMeta?.status === "complete";

  return (
    <div style={shellStyle}>
      <style>{css}</style>
      <div style={pageStyle}>
        <Header
          runId={workspace === "compare" && isComplete ? runId : null}
          workspace={workspace}
          onStartOver={() => goWorkspace("home")}
          onJobs={() => goWorkspace("jobs")}
          onDownloadReport={downloadReport}
        />

        {workspace === "home" && (
          <LandingPage
            onExtract={() => goWorkspace("extract")}
            onCompare={() => goWorkspace("compare")}
            onJobs={() => goWorkspace("jobs")}
          />
        )}

        {workspace === "jobs" && (
          <JobsDashboard onOpenJob={openJob} error={jobError} />
        )}

        {workspace === "compare" && !isComplete && (
          <section style={{ ...panelStyle, padding: 22, marginBottom: 16 }}>
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
          <section style={{ ...panelStyle, padding: 22, marginBottom: 16 }}>
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
          <>
            <StatsBar meta={meta} />
            <Tabs tab={tab} setTab={setTab} />

            <main style={{ ...panelStyle, padding: 12 }}>
              {tab === "viewer" && <SideBySide runId={runId} meta={meta} pageNum={pageNum} setPageNum={setPageNum} />}
              {tab === "report" && <ReviewReport runId={runId} />}
              {tab === "query" && <QueryPanel runId={runId} />}
              {tab === "accuracy" && <AccuracyImprovementTab runId={runId} meta={meta} />}
              {tab === "tables" && <TablesWorkspace runId={runId} />}
            </main>
          </>
        )}

        {workspace === "extract" && isExtractComplete && extractRunId && extractMeta && (
          <ExtractionWorkspace
            runId={extractRunId}
            meta={extractMeta}
            tab={extractTab}
            setTab={setExtractTab}
          />
        )}
      </div>
    </div>
  );
}
