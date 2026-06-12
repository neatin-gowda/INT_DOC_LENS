import React, { useEffect, useRef, useState } from "react";
import { API, BRAND, FILE_ACCEPT } from "../config.js";

const navGroups = [
  {
    label: "Workspace",
    items: [
      { key: "home", label: "Command Center", short: "CC" },
      { key: "jobs", label: "Job Status", short: "JS" },
    ],
  },
  {
    label: "Document Intelligence",
    items: [
      { key: "compare", label: "DocuLens Compare", short: "DC" },
      { key: "extract", label: "DocuLens Extract", short: "DX" },
      { key: "assistant", label: "Ask Documents", short: "AD" },
    ],
  },
  {
    label: "AI Hub",
    items: [
      { key: "agents", label: "Agent Studio", short: "AS" },
      { key: "tools", label: "Tool Studio", short: "TS" },
      { key: "automations", label: "Workflow Runs", short: "WR" },
      { key: "sources", label: "Knowledge & RAG", short: "KR" },
    ],
  },
  {
    label: "Control Plane",
    items: [
      { key: "admin", label: "Admin & RBAC", short: "RB" },
    ],
  },
];

const workspaceLabels = {
  home: "Command Center",
  jobs: "Jobs",
  compare: "DocuLens Compare",
  extract: "DocuLens Extract",
  assistant: "Ask Documents",
  agents: "Agent Studio",
  tools: "Tool Studio",
  automations: "Workflow Runs",
  sources: "Knowledge & RAG",
  admin: "Admin & RBAC",
};

export function WorkspaceShell({
  workspace,
  runId,
  onNavigate,
  onDownloadReport,
  children,
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "system";
    return window.localStorage.getItem("astracore_theme") || "system";
  });

  const setThemeMode = (mode) => {
    setTheme(mode);
    if (typeof window !== "undefined") window.localStorage.setItem("astracore_theme", mode);
  };

  return (
    <div className={`workspace-shell theme-${theme}${collapsed ? " collapsed" : ""}`}>
      <aside className="workspace-sidebar">
        <div className="workspace-brand">
          <div className="workspace-logo">AC</div>
          <div className="workspace-brand-copy">
            <div className="workspace-brand-name">{BRAND.name}</div>
            <div className="workspace-brand-subtitle">Enterprise AI hub</div>
          </div>
          <button
            type="button"
            className="workspace-collapse-button"
            onClick={() => setCollapsed((value) => !value)}
            aria-label={collapsed ? "Expand navigation" : "Collapse navigation"}
            title={collapsed ? "Expand navigation" : "Collapse navigation"}
          >
            {collapsed ? ">" : "<"}
          </button>
        </div>

        <nav className="workspace-nav" aria-label="Workspace navigation">
          {navGroups.map((group) => (
            <div key={group.label} className="workspace-nav-group">
              <div className="workspace-nav-label">{group.label}</div>
              {group.items.map((item) => {
                const active = workspace === item.key || (workspace === "home" && item.key === "home");
                return (
                  <button
                    key={item.key}
                    type="button"
                    className={`workspace-nav-item${active ? " active" : ""}`}
                    onClick={() => onNavigate(item.key)}
                  >
                    <span className="workspace-nav-mark">{item.short}</span>
                    <span className="workspace-nav-text">{item.label}</span>
                  </button>
                );
              })}
            </div>
          ))}
        </nav>
      </aside>

      <section className="workspace-main">
        <header className="workspace-topbar">
          <div>
            <div className="workspace-eyebrow">Secure workspace</div>
            <h1>{workspaceLabels[workspace] || "Workspace"}</h1>
          </div>
          <div className="workspace-actions">
            <div className="theme-switch" aria-label="Theme selector">
              {[
                ["system", "Auto"],
                ["light", "Light"],
                ["dark", "Dark"],
              ].map(([mode, label]) => (
                <button
                  key={mode}
                  type="button"
                  className={theme === mode ? "active" : ""}
                  onClick={() => setThemeMode(mode)}
                >
                  {label}
                </button>
              ))}
            </div>
            {runId && (
              <button type="button" className="workspace-primary-action" onClick={onDownloadReport}>
                Export report
              </button>
            )}
            <button type="button" className="workspace-secondary-action" onClick={() => onNavigate("jobs")}>
              Jobs
            </button>
          </div>
        </header>

        <div className="workspace-content">
          {children}
        </div>
      </section>
    </div>
  );
}

export function CommandCenter({ onExtract, onCompare, onJobs, onAgents, onTools, onAutomations }) {
  return (
    <div className="command-grid">
      <section className="command-hero">
        <div className="workspace-eyebrow">Command center</div>
        <h2>Choose a workspace and continue from the same shell.</h2>
        <div className="command-actions">
          <button type="button" className="workspace-primary-action" onClick={onCompare}>Start comparison</button>
          <button type="button" className="workspace-secondary-action" onClick={onExtract}>Extract documents</button>
          <button type="button" className="workspace-secondary-action" onClick={onJobs}>Open jobs</button>
        </div>
      </section>

      <section className="assistant-console">
        <div className="assistant-console-header">
          <span>Ask Documents</span>
          <strong>Available</strong>
        </div>
        <button type="button" className="assistant-dropzone" onClick={() => onExtract()}>
          Upload a document
        </button>
        <div className="assistant-message system">Ask over an extracted document or a completed comparison session.</div>
        <div className="model-strip">
          <span>Runtime</span>
          <strong>Backend evidence query</strong>
          <small>Model routing can be added from Admin later.</small>
        </div>
        <div className="assistant-input-shell">
          <span>Select a completed job or upload a file.</span>
          <button type="button" onClick={onTools}>Tools</button>
        </div>
      </section>

      <section className="workspace-lane">
        <WorkspaceLaunch title="Agent Studio" detail="Supervised agent runs with approval gates and tool policies." onClick={onAgents} />
        <WorkspaceLaunch title="Tool Studio" detail="Approved tools, MCP connectors, schemas, and cost controls." onClick={onTools} />
        <WorkspaceLaunch title="Workflow Runs" detail="Document pipelines, schedules, monitors, and run history." onClick={onAutomations} />
      </section>
    </div>
  );
}

export function WorkspaceLaunch({ title, detail, onClick }) {
  return (
    <button type="button" className="workspace-launch" onClick={onClick}>
      <span>{title}</span>
      <small>{detail}</small>
    </button>
  );
}

export function WorkspacePlaceholder({ title, detail, items = [] }) {
  return (
    <section className="workspace-placeholder">
      <div className="workspace-eyebrow">Platform module</div>
      <h2>{title}</h2>
      <p>{detail}</p>
      <div className="placeholder-list">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

export function AskDocumentsWorkspace({ initialRunId = "", initialMeta = null }) {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [runId, setRunId] = useState(initialRunId || "");
  const [meta, setMeta] = useState(initialMeta || null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  const [asking, setAsking] = useState(false);

  useEffect(() => {
    if (!initialRunId) return;
    setRunId(initialRunId);
    setMeta(initialMeta || null);
    setBusy(initialMeta ? initialMeta.status !== "complete" && initialMeta.status !== "failed" : true);
    setAnswer(null);
    setError("");
  }, [initialRunId, initialMeta]);

  useEffect(() => {
    if (!runId || !busy) return undefined;

    let cancelled = false;
    let timer = null;

    const poll = async () => {
      try {
        const resp = await fetch(`${API}/extract-runs/${runId}`);
        if (!resp.ok) throw new Error(await responseError(resp));
        const data = await resp.json();
        if (cancelled) return;
        setMeta(data);

        if (data.status === "complete" || data.status === "failed") {
          setBusy(false);
          return;
        }

        timer = setTimeout(poll, 1100);
      } catch (err) {
        if (!cancelled) {
          setBusy(false);
          setError(errorMessage(err));
        }
      }
    };

    poll();

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [runId, busy]);

  const upload = async (files) => {
    const selected = Array.from(files || []).filter((file) => file && file.name);
    if (!selected.length) return;

    const form = new FormData();
    selected.forEach((file) => form.append("document", file));

    setFileName(selected.length > 1 ? `${selected.length} files selected` : selected[0].name);
    setRunId("");
    setMeta({ status: "uploading", progress: 3, status_message: "Uploading document" });
    setAnswer(null);
    setError("");
    setBusy(true);

    try {
      const resp = await fetch(`${API}/extract`, { method: "POST", body: form });
      if (!resp.ok) throw new Error(await responseError(resp));
      const data = await resp.json();
      setRunId(data.run_id);
      setMeta(data);
    } catch (err) {
      setBusy(false);
      setError(errorMessage(err));
    }
  };

  const ask = async () => {
    if (!runId || meta?.status !== "complete" || !question.trim()) return;
    setAsking(true);
    setError("");

    try {
      const resp = await fetch(`${API}/extract-runs/${runId}/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, mode: "fast" }),
      });
      if (!resp.ok) throw new Error(await responseError(resp));
      setAnswer(await resp.json());
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setAsking(false);
    }
  };

  const ready = meta?.status === "complete";

  return (
    <section className="ask-documents-grid">
      <div className="ask-documents-panel">
        <div className="workspace-eyebrow">Document chat</div>
        <h2>{runId ? "Ask the selected document" : "Upload and ask"}</h2>
        <input
          ref={inputRef}
          type="file"
          accept={FILE_ACCEPT}
          multiple
          onChange={(event) => upload(event.target.files)}
          style={{ position: "absolute", width: 1, height: 1, opacity: 0, pointerEvents: "none" }}
        />
        <button
          type="button"
          className="assistant-dropzone large"
          onClick={() => inputRef.current?.click()}
          onDragOver={(event) => event.preventDefault()}
          onDrop={(event) => {
            event.preventDefault();
            upload(event.dataTransfer.files);
          }}
        >
          {fileName || (runId ? `Selected job #${String(runId).slice(0, 6)}` : "Drop PDF, Word, Excel, image, CSV, or TSV files")}
        </button>
        <div className="processing-steps">
          <span className={meta ? "active" : ""}>Upload</span>
          <span className={busy || ready ? "active" : ""}>Extract</span>
          <span className={ready ? "active" : ""}>Index</span>
          <span className={answer ? "active" : ""}>Answer</span>
        </div>
        {meta && (
          <div className="ask-status">
            <strong>{meta.status_message || meta.status || "Working"}</strong>
            <span>{Math.max(0, Math.min(100, Number(meta.progress || 0)))}%</span>
          </div>
        )}
        {error && <div className="ask-error">{error}</div>}
      </div>
      <div className="ask-documents-panel chat">
        <div className="assistant-console-header">
          <span>Document chat</span>
          <strong>{ready ? "Ready" : busy ? "Processing" : "Waiting"}</strong>
        </div>
        <div className="assistant-message user">Ask about clauses, tables, fields, pages, dates, values, or extracted content.</div>
        <div className="assistant-message system">
          {answer?.answer || "Upload a document to enable natural-language search over extracted text and tables."}
        </div>
        {Array.isArray(answer?.rows) && answer.rows.length > 0 && (
          <div className="ask-results">
            {answer.rows.slice(0, 5).map((row, index) => (
              <div key={index}>
                <strong>Page {row.Page || "-"}</strong>
                <span>{row.Text}</span>
              </div>
            ))}
          </div>
        )}
        <div className="model-strip">
          <span>Runtime</span>
          <strong>{ready ? "Deterministic document query" : "Extraction required"}</strong>
          <small>Admin-configured LLM streaming can layer on top of this endpoint later.</small>
        </div>
        <div className="assistant-input-shell">
          <input
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") ask();
            }}
            placeholder="Ask anything about the active document..."
            disabled={!ready || asking}
          />
          <button type="button" onClick={ask} disabled={!ready || asking || !question.trim()}>
            {asking ? "Asking" : "Send"}
          </button>
        </div>
      </div>
    </section>
  );
}

async function responseError(resp) {
  try {
    const text = await resp.text();
    if (!text) return `Request failed with status ${resp.status}`;
    try {
      const parsed = JSON.parse(text);
      return parsed.detail || parsed.error || parsed.message || `Request failed with status ${resp.status}`;
    } catch {
      return text.length > 240 ? `Server error (${resp.status}). Please check backend logs.` : text;
    }
  } catch {
    return `Request failed with status ${resp.status}`;
  }
}

function errorMessage(err) {
  const text = String(err?.message || err || "");
  if (text.toLowerCase().includes("failed to fetch")) {
    return "The app could not reach the document service. Confirm the backend URL and service status.";
  }
  return text || "Something went wrong.";
}
