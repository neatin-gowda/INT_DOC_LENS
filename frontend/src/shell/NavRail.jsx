import React, { useEffect, useMemo, useState } from "react";
import { fetchTools } from "../lib/api.js";

const staticSections = [
  {
    label: "AI Studio",
    items: [
      { key: "home", label: "Chat", short: "C" },
      { key: "assistant", label: "Ask Documents", short: "A" },
    ],
  },
  {
    label: "Autonomous Agents",
    disabled: true,
    items: [
      { key: "agents", label: "Coming soon", short: "G", disabled: true },
    ],
  },
  {
    label: "Admin",
    adminOnly: true,
    items: [
      { key: "tools", label: "Capabilities", short: "T" },
      { key: "admin", label: "Access", short: "R" },
    ],
  },
];

const fallbackDocumentTools = [
  { key: "compare", label: "Compare", short: "D" },
  { key: "extract", label: "Extract", short: "E" },
  { key: "compare", label: "Table Review", short: "T" },
  { key: "compare", label: "Reports", short: "P" },
];

const toolRouteMap = {
  "document.compare": { key: "compare", short: "D" },
  "document.extract": { key: "extract", short: "E" },
  "document.query": { key: "assistant", short: "A" },
  "document.table.compare": { key: "compare", short: "T" },
  "document.report.generate": { key: "compare", short: "P" },
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
          short: route.short,
        };
      })
      .filter(Boolean);
    return mapped.length ? mapped : fallbackDocumentTools;
  }, [tools]);

  const sections = [
    staticSections[0],
    { label: "Document Intelligence", items: documentItems },
    staticSections[1],
    staticSections[2],
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
                title={collapsed ? item.label : undefined}
              >
                <span className="workspace-nav-mark">{item.short}</span>
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
