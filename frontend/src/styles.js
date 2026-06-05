export const css = `
  * { box-sizing: border-box; }
  html, body, #root { min-height: 100%; }
  body { margin: 0; overflow-x: hidden; }
  button, input, select, textarea { font: inherit; }
  button { transition: background .15s ease, border-color .15s ease, color .15s ease, opacity .15s ease, transform .15s ease; }
  button:not(:disabled):hover { transform: translateY(-1px); }
  button:disabled { transform: none; }
  code { background: #f6f1e8; border: 1px solid #e2d8c8; border-radius: 5px; padding: 1px 5px; }
  .dl-scrollbar::-webkit-scrollbar { height: 10px; width: 10px; }
  .dl-scrollbar::-webkit-scrollbar-thumb { background: #c9c0b0; border-radius: 999px; }
  .dl-scrollbar::-webkit-scrollbar-track { background: #f2ece2; }
  .progress-track {
    height: 7px;
    background: #e9e2d7;
    border-radius: 999px;
    overflow: hidden;
    position: relative;
  }
  .progress-fill {
    height: 100%;
    min-width: 7%;
    border-radius: 999px;
    overflow: hidden;
    position: relative;
    background: #9a7a10;
    transition: width 450ms ease, background 250ms ease;
  }
  .progress-fill.running,
  .progress-fill.queued,
  .progress-fill.uploading {
    background: linear-gradient(90deg, #9a7a10 0%, #d2a917 48%, #9a7a10 100%);
  }
  .progress-fill.complete {
    background: #2f6f5b;
  }
  .progress-fill.failed {
    background: #bb3030;
  }
  .progress-fill.running::after,
  .progress-fill.queued::after,
  .progress-fill.uploading::after {
    content: "";
    position: absolute;
    inset: 0;
    transform: translateX(-100%);
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.45), transparent);
    animation: progress-shimmer 1.45s ease-in-out infinite;
  }
  @keyframes progress-shimmer {
    100% { transform: translateX(100%); }
  }
  .grid-safe {
    min-width: 0;
  }
  .viewer-grid {
    align-items: start;
    min-width: 0;
  }
  .viewer-grid > * {
    min-width: 0;
  }
  .doc-viewer-shell {
    min-width: 0;
  }
  .doc-frame {
    position: relative;
    border: 1px solid #b7ae9f;
    background: #f9f6ef;
    min-height: 520px;
    overflow: visible;
  }
  .doc-frame.native {
    background: #f7f2e9;
  }
  .native-page {
    width: 100%;
    min-width: 0;
    min-height: 520px;
    padding: 14px;
    color: #1f2937;
  }
  .native-page.document {
    max-width: 980px;
    margin: 0 auto;
    background: #fffdf8;
    box-shadow: 0 1px 4px rgba(31,41,55,.08);
  }
  .native-page.spreadsheet {
    min-width: 100%;
    background: #fffdf8;
  }
  .native-block {
    max-width: 100%;
    overflow-wrap: anywhere;
  }
  .native-token {
    border-radius: 4px;
    padding: 0 2px;
  }
  .native-token-delete,
  .native-token-replace-base {
    color: #9f2525;
    background: rgba(218,54,54,.16);
    text-decoration: line-through;
    text-decoration-thickness: 1px;
  }
  .native-token-insert,
  .native-token-replace-target {
    color: #176c38;
    background: rgba(31,160,70,.16);
    font-weight: 600;
  }
  .native-table-wrap {
    max-width: 100%;
    overflow-x: auto;
    border: 1px solid #e9dfd0;
    border-radius: 6px;
    background: #fffdf8;
  }
  .native-table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
  }
  .native-table.spreadsheet {
    table-layout: auto;
    min-width: 720px;
  }
  .native-table th,
  .native-table td {
    overflow-wrap: anywhere;
    vertical-align: top;
  }
  .table-selected-stack {
    display: grid;
    grid-template-columns: 1fr;
    gap: 14px;
    margin-bottom: 14px;
    min-width: 0;
  }
  .table-preview-shell {
    max-width: 100%;
    min-width: 0;
    overflow: hidden;
  }
  .table-scroll-frame {
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    border: 1px solid #eee7dc;
    border-radius: 8px;
  }
  .cell-wrap {
    white-space: normal;
    overflow-wrap: anywhere;
    word-break: normal;
  }
  .cell-truncate {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  @media (max-width: 1200px) {
    .table-picker-grid, .table-config-grid {
      grid-template-columns: 1fr !important;
    }
  }
  @media (max-width: 760px) {
    .table-action-grid {
      grid-template-columns: 1fr !important;
    }
    .table-action-grid button {
      width: 100%;
    }
  }
  @media (max-width: 980px) {
    .upload-grid, .viewer-grid, .two-grid, .report-metrics, .table-picker-grid, .table-config-grid {
      grid-template-columns: 1fr !important;
    }
    .header-actions { justify-content: flex-start !important; }
  }
`;

export const shellStyle = {
  minHeight: "100vh",
  background: "#f8f5ef",
  color: "#202936",
  fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
};

export const pageStyle = {
  maxWidth: 1720,
  margin: "0 auto",
  padding: "18px 22px 32px",
};

export const panelStyle = {
  background: "#fffdf8",
  border: "1px solid #ded6c8",
  borderRadius: 8,
  boxShadow: "0 1px 3px rgba(31,41,55,.08)",
};

export const inputStyle = {
  width: "100%",
  padding: "10px 11px",
  border: "1px solid #c9c0b0",
  borderRadius: 7,
  background: "white",
  color: "#344054",
};

export const labelStyle = {
  display: "block",
  marginBottom: 7,
  fontSize: 13,
  color: "#344054",
  fontWeight: 650,
};

export const th = {
  textAlign: "start",
  padding: "10px 12px",
  borderBottom: "1px solid #384250",
  whiteSpace: "nowrap",
  fontWeight: 650,
};

export const td = {
  padding: "10px 12px",
  borderBottom: "1px solid #e5dfd4",
  verticalAlign: "top",
};

export const smallTh = {
  textAlign: "start",
  padding: "8px 9px",
  borderBottom: "1px solid #ded6c8",
  fontWeight: 650,
  verticalAlign: "top",
  whiteSpace: "normal",
  overflowWrap: "anywhere",
};

export const smallTd = {
  padding: "8px 9px",
  borderBottom: "1px solid #eee7dc",
  verticalAlign: "top",
  whiteSpace: "normal",
  overflowWrap: "anywhere",
  lineHeight: 1.35,
};

export const miniButtonStyle = {
  border: "1px solid #c9c0b0",
  background: "#fffdf8",
  color: "#344054",
  borderRadius: 6,
  padding: "3px 7px",
  cursor: "pointer",
  fontSize: 12,
  fontWeight: 600,
};

export const softPillStyle = {
  border: "1px solid #ded6c8",
  background: "#fbfaf6",
  color: "#344054",
  borderRadius: 999,
  padding: "4px 8px",
  fontSize: 12,
  fontWeight: 600,
};

export function filterButtonStyle(active) {
  return {
    border: `1px solid ${active ? "#1f2937" : "#c9c0b0"}`,
    background: active ? "#1f2937" : "#fffdf8",
    color: active ? "white" : "#344054",
    borderRadius: 999,
    padding: "7px 11px",
    cursor: "pointer",
    fontWeight: 600,
  };
}

export function modeButtonStyle(active, disabled = false) {
  return {
    border: `1px solid ${active ? "#1f2937" : "#c9c0b0"}`,
    background: active ? "#1f2937" : "#fffdf8",
    color: active ? "white" : "#344054",
    borderRadius: 999,
    padding: "7px 12px",
    cursor: disabled ? "default" : "pointer",
    fontWeight: 600,
    opacity: disabled ? 0.7 : 1,
  };
}

export function presetButtonStyle(disabled = false) {
  return {
    border: "1px solid #d8d0c3",
    background: "#fffdf8",
    color: "#344054",
    borderRadius: 999,
    padding: "6px 10px",
    cursor: disabled ? "default" : "pointer",
    fontWeight: 550,
    fontSize: 12,
    opacity: disabled ? 0.65 : 1,
  };
}

export function primaryButtonStyle(disabled = false, extra = {}) {
  return {
    border: "none",
    borderRadius: 6,
    background: disabled ? "#98a2b3" : "#1f2937",
    color: "white",
    padding: "9px 14px",
    fontWeight: 550,
    cursor: disabled ? "default" : "pointer",
    ...extra,
  };
}

export function secondaryButtonStyle(extra = {}) {
  return {
    border: "1px solid #c9c0b0",
    borderRadius: 6,
    background: "#fffdf8",
    color: "#344054",
    padding: "9px 13px",
    fontWeight: 550,
    cursor: "pointer",
    ...extra,
  };
}
