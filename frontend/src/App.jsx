import React, { useEffect, useRef, useState } from "react";

const API = import.meta.env.VITE_API_BASE || "/api";

const BRAND = {
  name: "DocuLens AI Review Agent",
  shortName: "DocuLens AI",
  subtitle: "Evidence-backed document comparison for business reviews",
};

const COLORS = {
  ADDED: {
    bg: "rgba(31, 160, 70, 0.24)",
    border: "#16813a",
    text: "#0f6a2f",
    chip: "#1f9f46",
  },
  DELETED: {
    bg: "rgba(218, 54, 54, 0.22)",
    border: "#b42323",
    text: "#9f1d1d",
    chip: "#c93333",
  },
  MODIFIED: {
    bg: "rgba(218, 185, 42, 0.30)",
    border: "#9a7a10",
    text: "#765c08",
    chip: "#a8870f",
  },
};

const PROCESS_STEPS = [
  "Uploading documents",
  "Reading pages",
  "Finding sections and tables",
  "Comparing changes",
  "Preparing review summary",
  "Finalizing report",
];

const shellStyle = {
  minHeight: "100vh",
  background: "#f5f1e8",
  color: "#1f2933",
  fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
};

const pageStyle = {
  maxWidth: 1720,
  margin: "0 auto",
  padding: "18px 22px 30px",
};

const panelStyle = {
  background: "#fffefa",
  border: "1px solid #ddd4c5",
  borderRadius: 10,
  boxShadow: "0 2px 6px rgba(27, 35, 45, 0.06)",
};

export default function App() {
  const [runId, setRunId] = useState(null);
  const [meta, setMeta] = useState(null);
  const [tab, setTab] = useState("viewer");
  const [pageNum, setPageNum] = useState(1);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [error, setError] = useState("");
  const [baseName, setBaseName] = useState("");
  const [targetName, setTargetName] = useState("");

  useEffect(() => {
    if (!busy) return;

    setProgress(8);
    setStepIndex(0);

    const timer = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(92, p + Math.max(1, Math.round((96 - p) / 10)));
        setStepIndex(Math.min(PROCESS_STEPS.length - 1, Math.floor(next / 17)));
        return next;
      });
    }, 1200);

    return () => clearInterval(timer);
  }, [busy]);

  const onUpload = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    setBusy(true);
    setError("");
    setRunId(null);
    setMeta(null);
    setPageNum(1);
    setTab("viewer");

    try {
      const resp = await fetch(`${API}/compare`, { method: "POST", body: form });
      if (!resp.ok) {
        const text = await resp.text();
        throw new Error(text || `Comparison failed with status ${resp.status}`);
      }

      const data = await resp.json();
      setProgress(96);
      setStepIndex(PROCESS_STEPS.length - 1);

      const metaResp = await fetch(`${API}/runs/${data.run_id}`);
      if (!metaResp.ok) throw new Error(`Could not load comparison result: ${metaResp.status}`);

      const nextMeta = await metaResp.json();
      setRunId(data.run_id);
      setMeta(nextMeta);
      setProgress(100);
    } catch (err) {
      setError(err.message || "Comparison failed");
    } finally {
      setBusy(false);
    }
  };

  const startOver = () => {
    setRunId(null);
    setMeta(null);
    setPageNum(1);
    setTab("viewer");
    setError("");
    setProgress(0);
    setBaseName("");
    setTargetName("");
  };

  return (
    <div style={shellStyle}>
      <div style={pageStyle}>
        <header style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 16 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 8,
                    background: "#1f2937",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    letterSpacing: 0,
                  }}
                >
                  AI
                </div>
                <h1 style={{ margin: 0, fontSize: 32, letterSpacing: 0, lineHeight: 1.05 }}>
                  {BRAND.name}
                </h1>
              </div>
              <p style={{ margin: 0, color: "#667085", fontSize: 15 }}>
                {BRAND.subtitle}
              </p>
            </div>

            {runId && (
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <DownloadReportButton runId={runId} />
                <button onClick={startOver} style={secondaryButtonStyle}>
                  New comparison
                </button>
              </div>
            )}
          </div>
        </header>

        {!runId && (
          <section style={{ ...panelStyle, padding: 18, marginBottom: 16 }}>
            <form onSubmit={onUpload}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                <FileInput
                  label="Baseline document"
                  helper="Earlier version or approved reference PDF"
                  name="base"
                  fileName={baseName}
                  onFileName={setBaseName}
                />
                <FileInput
                  label="Updated document"
                  helper="New version to compare against the baseline"
                  name="target"
                  fileName={targetName}
                  onFileName={setTargetName}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 12,
                  alignItems: "center",
                  flexWrap: "wrap",
                  borderTop: "1px solid #e6dfd3",
                  paddingTop: 14,
                }}
              >
                <label style={{ display: "flex", gap: 9, alignItems: "center", color: "#475467", fontSize: 14 }}>
                  <input type="checkbox" name="use_llm" value="true" defaultChecked />
                  Generate AI review summary
                </label>

                <button disabled={busy} style={primaryButtonStyle(busy)}>
                  {busy ? "Comparing documents" : "Start comparison"}
                </button>
              </div>
            </form>

            {busy && <ProcessingState progress={progress} step={PROCESS_STEPS[stepIndex]} />}
            {error && <ErrorBox message={error} />}
          </section>
        )}

        {runId && meta && (
          <>
            <StatsBar meta={meta} />
            <Tabs tab={tab} setTab={setTab} />

            <main style={{ ...panelStyle, padding: 12 }}>
              {tab === "viewer" && (
                <SideBySide
                  runId={runId}
                  meta={meta}
                  pageNum={pageNum}
                  setPageNum={setPageNum}
                />
              )}
              {tab === "report" && <ReviewReport runId={runId} meta={meta} />}
              {tab === "agent" && <QueryPanel runId={runId} />}
              {tab === "tables" && <TablesList runId={runId} />}
            </main>
          </>
        )}
      </div>
    </div>
  );
}

function FileInput({ label, helper, name, fileName, onFileName }) {
  return (
    <label
      style={{
        display: "block",
        border: "1px solid #d0c7b8",
        background: "#fbfaf6",
        borderRadius: 10,
        padding: 14,
      }}
    >
      <span style={{ display: "block", color: "#1f2937", fontSize: 15, fontWeight: 800 }}>
        {label}
      </span>
      <span style={{ display: "block", marginTop: 3, marginBottom: 10, color: "#667085", fontSize: 13 }}>
        {helper}
      </span>
      <input
        type="file"
        name={name}
        accept="application/pdf"
        required
        onChange={(e) => onFileName(e.target.files?.[0]?.name || "")}
        style={{
          width: "100%",
          boxSizing: "border-box",
          border: "1px solid #c9c2b6",
          borderRadius: 7,
          padding: 9,
          background: "white",
          color: "#344054",
        }}
      />
      <div style={{ marginTop: 8, color: fileName ? "#2f5f4f" : "#98a2b3", fontSize: 13, fontWeight: 700 }}>
        {fileName || "No file selected"}
      </div>
    </label>
  );
}

function ProcessingState({ progress, step }) {
  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, color: "#475467", fontSize: 13 }}>
        <span>{step}</span>
        <span>{progress}%</span>
      </div>
      <div style={{ height: 9, background: "#ebe4d8", borderRadius: 999, overflow: "hidden" }}>
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "#2f5f4f",
            transition: "width 400ms ease",
          }}
        />
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
        {PROCESS_STEPS.map((s, i) => (
          <span
            key={s}
            style={{
              fontSize: 12,
              color: i <= PROCESS_STEPS.indexOf(step) ? "#2f5f4f" : "#98a2b3",
              background: i <= PROCESS_STEPS.indexOf(step) ? "#e7f0ea" : "#f2f0eb",
              border: "1px solid #ded8cd",
              padding: "4px 9px",
              borderRadius: 999,
              fontWeight: 700,
            }}
          >
            {s}
          </span>
        ))}
      </div>
      <p style={{ margin: "10px 0 0", color: "#667085", fontSize: 13 }}>
        Large files and AI summary generation can take a little longer. The report will open automatically when complete.
      </p>
    </div>
  );
}

function ErrorBox({ message }) {
  return (
    <div
      style={{
        marginTop: 14,
        border: "1px solid #f0b4b4",
        background: "#fff1f1",
        color: COLORS.DELETED.text,
        borderRadius: 7,
        padding: 12,
        fontSize: 14,
        fontWeight: 700,
      }}
    >
      {message}
    </div>
  );
}

function StatsBar({ meta }) {
  const s = meta.stats || {};
  const coverage = meta.coverage || { base: 0, target: 0 };

  return (
    <section style={{ display: "flex", gap: 10, marginBottom: 12, flexWrap: "wrap", alignItems: "center" }}>
      <Tag label={`Added ${s.ADDED || 0}`} color={COLORS.ADDED.chip} />
      <Tag label={`Deleted ${s.DELETED || 0}`} color={COLORS.DELETED.chip} />
      <Tag label={`Modified ${s.MODIFIED || 0}`} color={COLORS.MODIFIED.chip} />
      <Tag label={`Unchanged ${s.UNCHANGED || 0}`} color="#667085" />
      <Tag label={`Coverage ${coverage.base.toFixed(1)}% / ${coverage.target.toFixed(1)}%`} color="#475467" />
      <Tag label={`Pages ${meta.n_pages_base} / ${meta.n_pages_target}`} color="#2f5f4f" />
    </section>
  );
}

function Tag({ label, color }) {
  return (
    <span
      style={{
        backgroundColor: color,
        color: "white",
        padding: "6px 11px",
        borderRadius: 999,
        fontSize: 13,
        fontWeight: 800,
      }}
    >
      {label}
    </span>
  );
}

function Tabs({ tab, setTab }) {
  const items = [
    ["viewer", "Visual review"],
    ["report", "Review report"],
    ["agent", "Ask Agent"],
    ["tables", "Table compare"],
  ];

  return (
    <nav style={{ display: "flex", gap: 6, borderBottom: "1px solid #d8d0c3", marginBottom: 12, overflowX: "auto" }}>
      {items.map(([key, label]) => {
        const active = tab === key;
        return (
          <button
            key={key}
            onClick={() => setTab(key)}
            style={{
              padding: "10px 15px",
              background: active ? "#1f2937" : "#ebe7df",
              color: active ? "white" : "#344054",
              border: active ? "1px solid #1f2937" : "1px solid #d8d0c3",
              borderBottom: active ? "1px solid #1f2937" : "none",
              borderRadius: "8px 8px 0 0",
              cursor: "pointer",
              fontWeight: 800,
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </button>
        );
      })}
    </nav>
  );
}

function SideBySide({ runId, meta, pageNum, setPageNum }) {
  const maxPages = Math.max(meta.n_pages_base, meta.n_pages_target);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
        <button onClick={() => setPageNum(Math.max(1, pageNum - 1))} disabled={pageNum <= 1} style={navButtonStyle(pageNum <= 1)}>
          Prev
        </button>
        <span style={{ fontSize: 18, fontWeight: 900, minWidth: 110 }}>
          Page {pageNum} / {maxPages}
        </span>
        <button onClick={() => setPageNum(Math.min(maxPages, pageNum + 1))} disabled={pageNum >= maxPages} style={navButtonStyle(pageNum >= maxPages)}>
          Next
        </button>
        <Legend />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <PageView runId={runId} side="base" pageNum={pageNum} totalPages={meta.n_pages_base} label={meta.base_label || "Baseline document"} />
        <PageView runId={runId} side="target" pageNum={pageNum} totalPages={meta.n_pages_target} label={meta.target_label || "Updated document"} />
      </div>
    </div>
  );
}

function navButtonStyle(disabled) {
  return {
    border: "1
