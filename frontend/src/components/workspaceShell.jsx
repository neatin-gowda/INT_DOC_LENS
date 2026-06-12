import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { API, FILE_ACCEPT } from "../config.js";
import { AltraiWordmark } from "../shell/AppShell.jsx";
import { NavRail } from "../shell/NavRail.jsx";
import { UserFooter } from "../shell/UserFooter.jsx";
import { useTheme } from "../theme/ThemeProvider.jsx";

const workspaceLabels = {
  home: "Chat",
  jobs: "Jobs",
  compare: "Compare",
  extract: "Extract",
  assistant: "Ask",
  agents: "Agents",
  tools: "Capabilities",
  automations: "Workflows",
  sources: "Knowledge Bases",
  models: "Models",
  knowledge: "Knowledge Bases",
  usage: "Usage",
  admin: "Admin",
};

export function WorkspaceShell({
  workspace,
  runId,
  onNavigate,
  onDownloadReport,
  children,
}) {
  const [collapsed, setCollapsed] = useState(false);
  const { theme } = useTheme();

  return (
    <div className={`workspace-shell theme-${theme}${collapsed ? " collapsed" : ""}`}>
      <aside className="workspace-sidebar">
        <div className="workspace-brand">
          <div className="workspace-brand-copy">
            <AltraiWordmark />
          </div>
          <button
            type="button"
            className="workspace-collapse-button"
            onClick={() => setCollapsed((value) => !value)}
            aria-label={collapsed ? "Expand navigation" : "Collapse navigation"}
            title={collapsed ? "Expand navigation" : "Collapse navigation"}
          >
            {collapsed ? <ChevronRight size={16} strokeWidth={1.5} /> : <ChevronLeft size={16} strokeWidth={1.5} />}
          </button>
        </div>

        <NavRail workspace={workspace} onNavigate={onNavigate} collapsed={collapsed} />
        <UserFooter collapsed={collapsed} />
      </aside>

      <section className="workspace-main">
        <header className="workspace-topbar">
          <div>
            <h1>{workspaceLabels[workspace] || "Workspace"}</h1>
          </div>
          <div className="workspace-actions">
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

export function WorkspacePlaceholder({ title, detail, items = [] }) {
  return (
    <section className="workspace-placeholder">
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
  const [messages, setMessages] = useState([]);
  const [asking, setAsking] = useState(false);

  useEffect(() => {
    if (!initialRunId) return;
    setRunId(initialRunId);
    setMeta(initialMeta || null);
    setBusy(initialMeta ? initialMeta.status !== "complete" && initialMeta.status !== "failed" : true);
    setMessages([]);
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
    setMessages([]);
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
    const asked = question.trim();
    if (!runId || meta?.status !== "complete" || !asked) return;
    setAsking(true);
    setError("");
    setQuestion("");
    setMessages((prev) => [...prev, { role: "user", text: asked }]);

    try {
      const resp = await fetch(`${API}/extract-runs/${runId}/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: asked, mode: "fast" }),
      });
      if (!resp.ok) throw new Error(await responseError(resp));
      const data = await resp.json();
      setMessages((prev) => [...prev, { role: "assistant", text: data.answer || "I found matching evidence.", rows: data.rows || [] }]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: "assistant", text: errorMessage(err), rows: [] }]);
    } finally {
      setAsking(false);
    }
  };

  const ready = meta?.status === "complete";

  return (
    <section className="ask-documents-grid">
      <div className="ask-documents-panel">
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
          <span className={messages.some((message) => message.role === "assistant") ? "active" : ""}>Answer</span>
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
        <div className="document-chat-thread">
          {messages.length === 0 && (
            <div className="chat-empty compact">
              <p>{ready ? "Ask about clauses, tables, fields, pages, dates, values, or extracted content." : "Upload or select a completed extraction job to begin."}</p>
            </div>
          )}
          {messages.map((message, index) => (
            <div key={`${message.role}-${index}`} className={`chat-row ${message.role}`}>
              <div className={`chat-bubble ${message.role}`} dir="auto">
                <div>{message.text}</div>
                {message.role === "assistant" && Array.isArray(message.rows) && message.rows.length > 0 && (
                  <div className="ask-results compact">
                    {message.rows.slice(0, 4).map((row, rowIndex) => (
                      <div key={rowIndex}>
                        <strong>Page {row.Page || "-"}</strong>
                        <span dir="auto">{row.Text}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          {asking && (
            <div className="chat-row assistant">
              <div className="chat-bubble assistant thinking">Searching document evidence...</div>
            </div>
          )}
        </div>
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
