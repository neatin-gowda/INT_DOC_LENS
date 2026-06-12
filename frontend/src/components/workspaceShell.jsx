import React, { useState } from "react";
import { BRAND } from "../config.js";

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
  jobs: "Job Status",
  compare: "Document Comparison",
  extract: "Document Extraction",
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

  return (
    <div className={`workspace-shell${collapsed ? " collapsed" : ""}`}>
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
            <div className="workspace-eyebrow">Secure AI operating surface</div>
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

export function CommandCenter({ onExtract, onCompare, onJobs, onAgents, onTools, onAutomations }) {
  return (
    <div className="command-grid">
      <section className="command-hero">
        <div className="workspace-eyebrow">Command center</div>
        <h2>One governed workspace for document intelligence, approved tools, and knowledge workflows.</h2>
        <div className="command-actions">
          <button type="button" className="workspace-primary-action" onClick={onCompare}>Start comparison</button>
          <button type="button" className="workspace-secondary-action" onClick={onExtract}>Extract documents</button>
          <button type="button" className="workspace-secondary-action" onClick={onJobs}>Open jobs</button>
        </div>
      </section>

      <section className="assistant-console">
        <div className="assistant-console-header">
          <span>Ask Documents</span>
          <strong>Model ready</strong>
        </div>
        <div className="assistant-dropzone">Drop documents here for instant chat</div>
        <div className="assistant-message system">Chat will stream answers with citations from the selected job, upload, or approved knowledge source.</div>
        <div className="model-strip">
          <span>Model</span>
          <strong>Bring your own LLM</strong>
          <small>Azure OpenAI / OpenAI / local gateway</small>
        </div>
        <div className="assistant-input-shell">
          <span>Ask a question after upload or source selection...</span>
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

export function AskDocumentsWorkspace() {
  return (
    <section className="ask-documents-grid">
      <div className="ask-documents-panel">
        <div className="workspace-eyebrow">Document chat</div>
        <h2>Upload, select a source, then chat with citations.</h2>
        <div className="assistant-dropzone large">Drop PDF, Word, Excel, image, CSV, or TSV files</div>
        <div className="processing-steps">
          <span>Upload</span>
          <span>Extract</span>
          <span>Index</span>
          <span>Stream answer</span>
        </div>
      </div>
      <div className="ask-documents-panel chat">
        <div className="assistant-console-header">
          <span>Streaming preview</span>
          <strong>Reasoning hidden</strong>
        </div>
        <div className="assistant-message user">What changed in this policy and where is the evidence?</div>
        <div className="assistant-message system">Answers will stream here with page citations, tool trace, and source scope.</div>
        <div className="model-strip">
          <span>Runtime</span>
          <strong>Model configurable by admin</strong>
          <small>Department policy controls model, tools, and retrieval scope.</small>
        </div>
        <div className="assistant-input-shell">
          <span>Ask anything about the active document...</span>
          <button type="button">Send</button>
        </div>
      </div>
    </section>
  );
}
