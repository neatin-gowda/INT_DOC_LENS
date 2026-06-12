import React from "react";
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
      { key: "compare", label: "Compare", short: "CP" },
      { key: "extract", label: "Extract", short: "EX" },
      { key: "assistant", label: "Ask Documents", short: "AD" },
    ],
  },
  {
    label: "AI Platform",
    items: [
      { key: "agents", label: "Autonomous Agents", short: "AA" },
      { key: "tools", label: "Tools & MCPs", short: "TM" },
      { key: "automations", label: "Automations", short: "AU" },
      { key: "sources", label: "Sources & RAG", short: "SR" },
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
  agents: "Autonomous Agents",
  tools: "Tools & MCPs",
  automations: "Automations",
  sources: "Sources & RAG",
  admin: "Admin & RBAC",
};

export function WorkspaceShell({
  workspace,
  runId,
  onNavigate,
  onDownloadReport,
  children,
}) {
  return (
    <div className="workspace-shell">
      <aside className="workspace-sidebar">
        <div className="workspace-brand">
          <div className="workspace-logo">DL</div>
          <div>
            <div className="workspace-brand-name">{BRAND.name}</div>
            <div className="workspace-brand-subtitle">AI operating layer</div>
          </div>
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
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          ))}
        </nav>

        <div className="workspace-tenant-card">
          <div className="workspace-tenant-label">Tenant</div>
          <div className="workspace-tenant-name">Organization AI</div>
          <div className="workspace-tenant-copy">RBAC-ready tools, sources, and automations.</div>
        </div>
      </aside>

      <section className="workspace-main">
        <header className="workspace-topbar">
          <div>
            <div className="workspace-eyebrow">Unified AI Workspace</div>
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
        <div className="workspace-eyebrow">AI workbench</div>
        <h2>One place to process, compare, ask, automate, and govern document work.</h2>
        <div className="command-actions">
          <button type="button" className="workspace-primary-action" onClick={onCompare}>Compare documents</button>
          <button type="button" className="workspace-secondary-action" onClick={onExtract}>Extract content</button>
          <button type="button" className="workspace-secondary-action" onClick={onJobs}>Open jobs</button>
        </div>
      </section>

      <section className="assistant-console">
        <div className="assistant-console-header">
          <span>Assistant</span>
          <strong>Context aware</strong>
        </div>
        <div className="assistant-message user">Drop files, pick a tool, or ask across approved sources.</div>
        <div className="assistant-message system">Document tools run deterministically first. AI actions stay explicit and auditable.</div>
        <div className="assistant-input-shell">
          <span>Ask about a job, source, policy, or document...</span>
          <button type="button" onClick={onTools}>Tools</button>
        </div>
      </section>

      <section className="workspace-lane">
        <WorkspaceLaunch title="Autonomous Agents" detail="Agent runs, approval gates, and supervised task chains." onClick={onAgents} />
        <WorkspaceLaunch title="Tools & MCPs" detail="Reusable capabilities exposed by policy and department." onClick={onTools} />
        <WorkspaceLaunch title="Automations" detail="Scheduled jobs, monitors, and repeatable document workflows." onClick={onAutomations} />
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
