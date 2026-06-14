import React, { useEffect, useMemo, useState } from "react";
import {
  FileOutput,
  FileSearch,
  FileText,
  GitCompare,
  History,
  MessageSquare,
  Table,
} from "lucide-react";
import { fetchTools } from "../lib/api.js";

const staticSections = [
  {
    label: "Workspace",
    items: [
      { key: "home", label: "Chat", icon: MessageSquare },
      { key: "assistant", label: "Ask Document", icon: FileSearch },
      { key: "jobs", label: "Sessions", icon: History },
    ],
  },
];

const fallbackDocumentTools = [
  { key: "compare", label: "Compare", icon: GitCompare },
  { key: "extract", label: "Extract", icon: FileOutput },
  { key: "tables", label: "Tables", icon: Table },
  { key: "reports", label: "Reports", icon: FileText },
];

const toolRouteMap = {
  "document.compare": { key: "compare", icon: GitCompare },
  "document.extract": { key: "extract", icon: FileOutput },
  "document.table.compare": { key: "tables", icon: Table },
  "document.report.generate": { key: "reports", icon: FileText },
};

export function NavRail({ workspace, onNavigate, collapsed = false }) {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    let cancelled = false;
    fetchTools()
      .then((items) => {
        if (!cancelled) setTools(items);
      })
      .catch(() => {
        if (!cancelled) setTools([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const documentItems = useMemo(() => {
    const mapped = tools
      .map((tool) => {
        const route = toolRouteMap[tool.name];
        if (!route) return null;
        return {
          key: route.key,
          label: readableToolLabel(tool.label),
          icon: route.icon,
        };
      })
      .filter(Boolean);
    return mapped.length ? mapped : fallbackDocumentTools;
  }, [tools]);

  const sections = [
    staticSections[0],
    { label: "Documents", items: documentItems },
  ];

  return (
    <nav className="workspace-nav" aria-label="Workspace navigation">
      {sections.map((section) => (
        <div key={section.label} className={`workspace-nav-group${section.disabled ? " disabled" : ""}`}>
          {!collapsed && <div className="workspace-nav-label">{section.label}</div>}
          {section.items.map((item) => {
            const active = workspace === item.key || (workspace === "home" && item.key === "home");
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

function readableToolLabel(label = "") {
  return String(label)
    .replace(/^Altrai\s+/i, "")
    .replace(/^Document\s+/i, "")
    .trim() || "Tool";
}
