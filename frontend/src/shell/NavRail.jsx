import React from "react";
import {
  Bot,
  FileOutput,
  GitCompare,
  History,
  ShieldCheck,
} from "lucide-react";

const sections = [
  {
    label: "AI Document Intelligence",
    items: [
      { key: "compare", label: "Compare", icon: GitCompare },
      { key: "extract", label: "Extract", icon: FileOutput },
      { key: "jobs", label: "Work History", icon: History },
    ],
  },
  {
    label: "Administration",
    items: [
      { key: "admin", label: "Admin Studio", icon: ShieldCheck, title: "Use cases, datasets, and access policies" },
    ],
  },
  {
    label: "AI Agents",
    items: [
      { key: "agents", label: "Coming soon", icon: Bot, disabled: true, title: "Future skills and multi-agent workflows" },
    ],
  },
];

export function NavRail({ workspace, onNavigate, collapsed = false }) {
  return (
    <nav className="workspace-nav" aria-label="Workspace navigation">
      {sections.map((section) => (
        <div key={section.label} className="workspace-nav-group">
          {!collapsed && <div className="workspace-nav-label">{section.label}</div>}
          {section.items.map((item) => {
            const active = workspace === item.key;
            return (
              <button
                key={`${section.label}-${item.label}-${item.key}`}
                type="button"
                className={`workspace-nav-item${active ? " active" : ""}`}
                onClick={() => !item.disabled && onNavigate(item.key)}
                disabled={item.disabled}
                title={collapsed ? (item.title || item.label) : item.title}
              >
                <item.icon className="workspace-nav-icon" aria-hidden="true" />
                {!collapsed && <span className="workspace-nav-text">{item.label}</span>}
              </button>
            );
          })}
        </div>
      ))}
    </nav>
  );
}
