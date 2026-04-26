import React, { useEffect, useMemo, useRef, useState } from "react";

const API = import.meta.env.VITE_API_BASE || "/api";

const BRAND = {
  name: "DocuLens AI Agent",
  subtitle: "AI-assisted document comparison with visual review, citations, summaries, and downloadable reports.",
};

const COLORS = {
  ADDED: {
    bg: "rgba(31, 160, 70, 0.24)",
    border: "#16813a",
    text: "#0f6a2f",
    chip: "#1f9f46",
    soft: "#e7f5eb",
  },
  DELETED: {
    bg: "rgba(218, 54, 54, 0.22)",
    border: "#b42323",
    text: "#9f1d1d",
    chip: "#c93333",
    soft: "#fff0f0",
  },
  MODIFIED: {
    bg: "rgba(218, 185, 42, 0.30)",
    border: "#9a7a10",
    text: "#765c08",
    chip: "#a8870f",
    soft: "#fff7d6",
  },
};

const PROCESS_STEPS = [
  "Uploading documents",
  "Reading pages",
  "Finding sections and tables",
  "Comparing changes",
  "Preparing review summary",
  "Finalizing results",
];

const shellStyle = {
  minHeight: "100vh",
  background: "#f7f3ea",
  color: "#1f2933",
  fontFamily:
    "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
};

const pageStyle = {
  maxWidth: 1720,
  margin: "0 auto",
  padding: "20px 24px 34px",
};

const panelStyle = {
  background: "#fffefa",
  border: "1px solid #ddd5c7",
  borderRadius: 12,
  boxShadow: "0 1px 4px rgba(20, 20, 20, 0.07)",
};

function fetchWithTimeout(url, options = {}, timeoutMs = 180000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  return fetch(url, {
    ...options,
    signal: controller.signal,
  }).finally(() => clearTimeout(timer));
}

async function readError(resp) {
  try {
    const text = await resp.text();
    return text || `Request failed with status ${resp.status}`;
  } catch {
    return `Request failed with status ${resp.status}`;
  }
}

function friendlyFetchError(err) {
  if (err?.name === "AbortError") {
    return "The comparison is taking longer than expected. Large PDFs or AI summaries can take extra time. Please try again, or run without AI summary for a quicker first check.";
  }

  if (String(err?.message || "").toLowerCase().includes("failed to fetch")) {
    return `Cannot reach the backend API at "${API}". Check that the FastAPI server is running and that VITE_API_BASE or the Vite proxy points to it.`;
  }

  return err?.message || "Something went wrong while processing the documents.";
}

export default function App() {
  const [runId, setRunId] = useState(null);
  const [meta, setMeta] = useState(null);
  const [tab, setTab] = useState("viewer");
  const [pageNum, setPageNum] = useState(1);

  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [waitingFinal, setWaitingFinal] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!busy) return;

    setProgress(6);
    setStepIndex(0);
    setWaitingFinal(false);

    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 92) {
          setWaitingFinal(true);
          setStepIndex(PROCESS_STEPS.length - 1);
          return 92;
        }

        const next = Math.min(92, p + Math.max(2, Math.round((96 - p) / 9)));
        const idx = Math.min(PROCESS_STEPS.length - 1, Math.floor(next / 17));
        setStepIndex(idx);
        return next;
      });
    }, 1100);

    return () => clearInterval(timer);
  }, [busy]);

  const onUpload = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const base = form.get("base");
    const target = form.get("target");

    if (!base || !target || !base.name || !target.name) {
      setError("Please select both documents before starting the comparison.");
      return;
    }

    setBusy(true);
    setError("");
    setRunId(null);
    setMeta(null);
    setPageNum(1);
    setTab("viewer");

    try {
      const resp = await fetchWithTimeout(`${API}/compare`, {
        method: "POST",
        body: form,
      });

      if (!resp.ok) {
        throw new Error(await readError(resp));
      }

      const data = await resp.json();
      setProgress(96);
      setStepIndex(PROCESS_STEPS.length - 1);
      setWaitingFinal(false);

      const metaResp = await fetchWithTimeout(`${API}/runs/${data.run_id}`, {}, 30000);
      if (!metaResp.ok) throw new Error(await readError(metaResp));

      const nextMeta = await metaResp.json();

      setRunId(data.run_id);
      setMeta(nextMeta);
      setProgress(100);
      setTab("viewer");
    } catch (err) {
      setError(friendlyFetchError(err));
    } finally {
      setBusy(false);
      setWaitingFinal(false);
    }
  };

  const startOver = () => {
    setRunId(null);
    setMeta(null);
    setPageNum(1);
    setTab("viewer");
    setError("");
    setProgress(0);
  };

  const downloadReport = () => {
    if (!runId) return;
    window.location.href = `${API}/runs/${runId}/report.pdf`;
  };

  return (
    <div style={shellStyle}>
      <div style={pageStyle}>
        <Header runId={runId} onStartOver={startOver} onDownloadReport={downloadReport} />

        {!runId && (
          <section style={{ ...panelStyle, padding: 22, marginBottom: 16 }}>
            <UploadPanel onUpload={onUpload} busy={busy} />
            {busy && (
              <ProcessingState
                progress={progress}
                step={PROCESS_STEPS[stepIndex]}
                waitingFinal={waitingFinal}
              />
            )}
            {error && <ErrorBox message={error} />}
          </section>
        )}

        {runId && meta && (
          <>
            <StatsBar meta={meta} onDownloadReport={downloadReport} />
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
              {tab === "report" && (
                <ReviewReport runId={runId} onDownloadReport={downloadReport} />
              )}
              {tab === "query" && <QueryPanel runId={runId} />}
              {tab === "tables" && <TablesList runId={runId} />}
            </main>
          </>
        )}
      </div>
    </div>
  );
}

function Header({ runId, onStartOver, onDownloadReport }) {
  return (
    <header style={{ marginBottom: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 16 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 5 }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: "#1f2937",
                color: "white",
                display: "grid",
                placeItems: "center",
                fontWeight: 900,
              }}
            >
              AI
            </div>
            <h1 style={{ margin: 0, fontSize: 34, letterSpacing: 0, lineHeight: 1.05 }}>
              {BRAND.name}
            </h1>
          </div>
          <p style={{ margin: "7px 0 0", color: "#667085", fontSize: 15 }}>
            {BRAND.subtitle}
          </p>
        </div>

        {runId && (
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" }}>
            <button onClick={onDownloadReport} style={primaryButtonStyle()}>
              Download PDF report
            </button>
            <button onClick={onStartOver} style={secondaryButtonStyle()}>
              New comparison
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

function UploadPanel({ onUpload, busy }) {
  return (
    <form onSubmit={onUpload}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(260px, 1fr) minmax(260px, 1fr) 210px",
          gap: 16,
          alignItems: "stretch",
        }}
      >
        <FileInput
          label="Baseline document"
          helper="Previous, approved, or reference PDF"
          name="base"
          disabled={busy}
        />
        <FileInput
          label="Revised document"
          helper="Latest, proposed, or updated PDF"
          name="target"
          disabled={busy}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <label
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
              color: "#475467",
              fontSize: 14,
              background: "#f7f3ea",
              border: "1px solid #ded6c8",
              borderRadius: 9,
              padding: "11px 12px",
              fontWeight: 700,
            }}
          >
            <input type="checkbox" name="use_llm" value="true" defaultChecked disabled={busy} />
            AI review summary
          </label>

          <button disabled={busy} style={primaryButtonStyle(busy, { height: 46 })}>
            {busy ? "Processing" : "Compare documents"}
          </button>

          <div style={{ color: "#667085", fontSize: 12, lineHeight: 1.35 }}>
            API: <code>{API}</code>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: 16,
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 10,
        }}
      >
        <Capability label="Semantic review" detail="Focuses on meaningful content changes, not page layout noise." />
        <Capability label="Visual evidence" detail="Highlights additions, removals, and modifications on both PDFs." />
        <Capability label="Business report" detail="Creates a downloadable PDF report with citations and review items." />
      </div>
    </form>
  );
}

function FileInput({ label, helper, name, disabled }) {
  const [fileName, setFileName] = useState("");
  const inputRef = useRef(null);

  return (
    <div
      onClick={() => !disabled && inputRef.current?.click()}
      style={{
        border: "1px dashed #b9ae9e",
        borderRadius: 12,
        background: "#fbfaf6",
        padding: 16,
        minHeight: 128,
        cursor: disabled ? "default" : "pointer",
      }}
    >
      <input
        ref={inputRef}
        type="file"
        name={name}
        accept="application/pdf"
        required
        disabled={disabled}
        onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
        style={{ display: "none" }}
      />

      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <div>
          <div style={{ color: "#1f2937", fontSize: 15, fontWeight: 900 }}>{label}</div>
          <div style={{ marginTop: 4, color: "#667085", fontSize: 12 }}>{helper}</div>
        </div>
        <span
          style={{
            background: "#ebe6dc",
            color: "#344054",
            border: "1px solid #d8d0c3",
            borderRadius: 999,
            padding: "4px 9px",
            fontSize: 12,
            fontWeight: 800,
            height: 22,
          }}
        >
          PDF
        </span>
      </div>

      <div
        style={{
          marginTop: 18,
          border: "1px solid #d0c7b8",
          borderRadius: 8,
          padding: "10px 11px",
          background: "white",
          color: fileName ? "#2f5f4f" : "#667085",
          fontSize: 14,
          fontWeight: 800,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {fileName || "Select PDF"}
      </div>
    </div>
  );
}

function Capability({ label, detail }) {
  return (
    <div
      style={{
        background: "#f7f3ea",
        border: "1px solid #ded6c8",
        borderRadius: 9,
        padding: 11,
      }}
    >
      <div style={{ fontSize: 13, fontWeight: 900, color: "#344054" }}>{label}</div>
      <div style={{ marginTop: 4, fontSize: 12, color: "#667085", lineHeight: 1.35 }}>{detail}</div>
    </div>
  );
}

function ProcessingState({ progress, step, waitingFinal }) {
  const activeIndex = Math.max(0, PROCESS_STEPS.indexOf(step));

  return (
    <div style={{ marginTop: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7, color: "#475467", fontSize: 13 }}>
        <span style={{ fontWeight: 900 }}>{waitingFinal ? "Finalizing results" : step}</span>
        <span>{progress}%</span>
      </div>

      <div style={{ height: 9, background: "#e8dfd2", borderRadius: 999, overflow: "hidden" }}>
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: waitingFinal ? "#8a6f14" : "#2f5f4f",
            transition: "width 450ms ease, background 250ms ease",
          }}
        />
      </div>

      <div style={{ display: "flex", gap: 8, marginTop: 11, flexWrap: "wrap" }}>
        {PROCESS_STEPS.map((s, i) => (
          <span
            key={s}
            style={{
              fontSize: 12,
              color: i <= activeIndex ? "#2f5f4f" : "#98a2b3",
              background: i <= activeIndex ? "#e5f0e9" : "#f0ece4",
              border: "1px solid #ded6c8",
              padding: "4px 8px",
              borderRadius: 999,
              fontWeight: 800,
            }}
          >
            {s}
          </span>
        ))}
      </div>

      <p style={{ margin: "11px 0 0", color: "#667085", fontSize: 13 }}>
        {waitingFinal
          ? "The documents are processed. The app is preparing the final response and report. This can take longer when AI summary is enabled."
          : "Please keep this page open while the comparison runs."}
      </p>
    </div>
  );
}

function ErrorBox({ message }) {
  return (
    <div
      style={{
        marginTop: 16,
        border: "1px solid #f0b4b4",
        background: "#fff1f1",
        color: "#9f1d1d",
        borderRadius: 8,
        padding: 13,
        fontSize: 14,
        fontWeight: 800,
        lineHeight: 1.45,
      }}
    >
      {message}
    </div>
  );
}

/* Rest of the application: results view */

function StatsBar({ meta, onDownloadReport }) {
  const s = meta.stats || {};

  return (
    <section
      style={{
        ...panelStyle,
        padding: 12,
        display: "flex",
        gap: 10,
        marginBottom: 12,
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
        <Tag label={`Added ${s.ADDED || 0}`} color={COLORS.ADDED.chip} />
        <Tag label={`Deleted ${s.DELETED || 0}`} color={COLORS.DELETED.chip} />
        <Tag label={`Modified ${s.MODIFIED || 0}`} color={COLORS.MODIFIED.chip} />
        <Tag label={`Unchanged ${s.UNCHANGED || 0}`} color="#667085" />
        <Tag
          label={`Coverage ${safePercent(meta.coverage?.base)} / ${safePercent(meta.coverage?.target)}`}
          color="#475467"
        />
        <Tag label={`Pages ${meta.n_pages_base} / ${meta.n_pages_target}`} color="#2f5f4f" />
      </div>
      <button onClick={onDownloadReport} style={secondaryButtonStyle()}>
        Download PDF report
      </button>
    </section>
  );
}

function safePercent(value) {
  return typeof value === "number" ? `${value.toFixed(1)}%` : "-";
}

function Tag({ label, color }) {
  return (
    <span
      style={{
        backgroundColor: color,
        color: "white",
        padding: "5px 10px",
        borderRadius: 999,
        fontSize: 13,
        fontWeight: 900,
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
    ["query", "Ask AI agent"],
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
              background: active ? "#1f2937" : "#ebe6dc",
              color: active ? "white" : "#344054",
              border: active ? "1px solid #1f2937" : "1px solid #d8d0c3",
              borderBottom: active ? "1px solid #1f2937" : "none",
              borderRadius: "8px 8px 0 0",
              cursor: "pointer",
              fontWeight: 900,
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
        <PageView runId={runId} side="base" pageNum={pageNum} totalPages={meta.n_pages_base} label="Baseline document" docName={meta.base_label} />
        <PageView runId={runId} side="target" pageNum={pageNum} totalPages={meta.n_pages_target} label="Revised document" docName={meta.target_label} />
      </div>
    </div>
  );
}

function navButtonStyle(disabled) {
  return {
    border: "1px solid #b7ae9f",
    background: disabled ? "#efebe3" : "#fffefa",
    color: disabled ? "#98a2b3" : "#1f2937",
    borderRadius: 7,
    padding: "8px 13px",
    cursor: disabled ? "default" : "pointer",
    fontWeight: 900,
  };
}

function Legend() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: 8, flexWrap: "wrap" }}>
      <LegendChip label="added" color={COLORS.ADDED.bg} border={COLORS.ADDED.border} />
      <LegendChip label="deleted" color={COLORS.DELETED.bg} border={COLORS.DELETED.border} />
      <LegendChip label="modified" color={COLORS.MODIFIED.bg} border={COLORS.MODIFIED.border} />
    </div>
  );
}

function LegendChip({ label, color, border }) {
  return (
    <span style={{ background: color, border: `1px solid ${border}`, color: "#344054", padding: "2px 9px", borderRadius: 999, fontSize: 13, fontWeight: 900 }}>
      {label}
    </span>
  );
}

function PageView({ runId, side, pageNum, totalPages, label, docName }) {
  const [overlay, setOverlay] = useState({ regions: [] });
  const [imageState, setImageState] = useState("idle");

  const pageExists = pageNum >= 1 && pageNum <= totalPages;

  useEffect(() => {
    setImageState(pageExists ? "loading" : "idle");

    if (!pageExists) {
      setOverlay({ regions: [] });
      return;
    }

    fetch(`${API}/runs/${runId}/overlay/${side}/${pageNum}`)
      .then((r) => r.json())
      .then(setOverlay)
      .catch(() => setOverlay({ regions: [] }));
  }, [runId, side, pageNum, pageExists]);

  return (
    <div>
      <div style={{ marginBottom: 7 }}>
        <div style={{ fontSize: 13, color: "#667085", fontWeight: 900 }}>{label}</div>
        <div style={{ fontSize: 14, color: "#344054", fontWeight: 900 }}>
          {docName} - {pageExists ? `page ${pageNum}` : "no page"}
        </div>
      </div>

      <div style={{ position: "relative", border: "1px solid #b7ae9f", background: "#f9f6ef", minHeight: 520, overflow: "hidden" }}>
        {!pageExists ? (
          <EmptyPage pageNum={pageNum} />
        ) : (
          <>
            {imageState === "loading" && (
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#667085", background: "#f9f6ef", zIndex: 1, fontWeight: 900 }}>
                Loading page {pageNum}
              </div>
            )}

            <img
              key={`${side}-${pageNum}`}
              src={`${API}/runs/${runId}/pages/${side}/${pageNum}`}
              onLoad={() => setImageState("ready")}
              onError={() => setImageState("error")}
              style={{ display: "block", width: "100%", height: "auto" }}
              alt={`${side} page ${pageNum}`}
            />

            {imageState === "error" && (
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.DELETED.text, background: "#fff1f1", zIndex: 2, fontWeight: 900 }}>
                Could not load page {pageNum}
              </div>
            )}

            {overlay.regions.map((r, i) => {
              const [x0, y0, x1, y1] = r.bbox;
              const c = COLORS[r.change_type] || COLORS.MODIFIED;
              const pageWidth = r.page_width || overlay.page_width || 612;
              const pageHeight = r.page_height || overlay.page_height || 792;

              return (
                <div
                  key={i}
                  title={`${r.change_type} ${r.stable_key || ""} (${r.block_type})`}
                  style={{
                    position: "absolute",
                    left: `${(x0 / pageWidth) * 100}%`,
                    top: `${(y0 / pageHeight) * 100}%`,
                    width: `${((x1 - x0) / pageWidth) * 100}%`,
                    height: `${((y1 - y0) / pageHeight) * 100}%`,
                    background: c.bg,
                    outline: `1px solid ${c.border}`,
                    pointerEvents: "auto",
                    mixBlendMode: "multiply",
                  }}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

function EmptyPage({ pageNum }) {
  return (
    <div style={{ minHeight: 520, display: "flex", alignItems: "center", justifyContent: "center", color: "#667085", fontSize: 14, background: "#f0ebe2", fontWeight: 900 }}>
      This document has no page {pageNum}
    </div>
  );
}

/* Report, query, tables */

function ReviewReport({ runId, onDownloadReport }) {
  const [rows, setRows] = useState(null);
  const [filter, setFilter] = useState("ALL");
  const [reviewOnly, setReviewOnly] = useState(false);

  useEffect(() => {
    fetch(`${API}/runs/${runId}/summary`)
      .then((r) => r.json())
      .then((d) => setRows(d.summary || []));
  }, [runId]);

  const filtered = useMemo(() => {
    if (!rows) return [];
    return rows.filter((r) => {
      const typeOk = filter === "ALL" || r.change_type === filter;
      const reviewOk = !reviewOnly || r.needs_review || (r.seek_clarification && r.seek_clarification !== "None");
      return typeOk && reviewOk;
    });
  }, [rows, filter, reviewOnly]);

  if (rows === null) return <SoftLoading label="Loading review report" />;
  if (rows.length === 0) return <EmptyState label="No review rows were produced." />;

  const reviewCount = rows.filter((r) => r.needs_review || (r.seek_clarification && r.seek_clarification !== "None")).length;
  const avgConfidence = average(rows.map((r) => r.confidence).filter((v) => typeof v === "number"));

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 10, marginBottom: 14 }}>
        <MetricCard label="Review items" value={rows.length} />
        <MetricCard label="Needs review" value={reviewCount} />
        <MetricCard label="Avg confidence" value={avgConfidence == null ? "-" : `${Math.round(avgConfidence * 100)}%`} />
        <MetricCard label="Report" value="PDF ready" />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {["ALL", "ADDED", "DELETED", "MODIFIED"].map((value) => (
            <button key={value} onClick={() => setFilter(value)} style={filterButtonStyle(filter === value)}>
              {value === "ALL" ? "All changes" : value}
            </button>
          ))}
          <button onClick={() => setReviewOnly((v) => !v)} style={filterButtonStyle(reviewOnly)}>
            Needs review
          </button>
        </div>
        <button onClick={onDownloadReport} style={primaryButtonStyle()}>
          Download PDF report
        </button>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 14 }}>
          <thead>
            <tr style={{ background: "#1f2937", color: "white" }}>
              <th style={th}>Area / Item</th>
              <th style={th}>Change</th>
              <th style={th}>Evidence</th>
              <th style={th}>Confidence</th>
              <th style={th}>Review</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r, i) => {
              const color = COLORS[r.change_type] || COLORS.MODIFIED;
              const needsReview = r.needs_review || (r.seek_clarification && r.seek_clarification !== "None");
              return (
                <tr key={i} style={{ background: i % 2 ? "#fbfaf7" : "white" }}>
                  <td style={td}>
                    <div style={{ fontWeight: 900 }}>{r.area || "Document"}</div>
                    <div style={{ marginTop: 4, color: "#475467" }}>{r.item || r.feature}</div>
                    {r.stable_key && <code style={{ display: "inline-block", marginTop: 5 }}>Key {r.stable_key}</code>}
                  </td>
                  <td style={td}>
                    <span style={{ display: "inline-block", marginBottom: 6, background: color.soft, color: color.text, border: `1px solid ${color.border}`, padding: "2px 8px", borderRadius: 999, fontWeight: 900, fontSize: 12 }}>
                      {r.change_type || "CHANGE"}
                    </span>
                    <div>{r.change}</div>
                  </td>
                  <td style={td}>
                    <div>{r.citation || "-"}</div>
                    {r.before && <div style={{ marginTop: 6, color: COLORS.DELETED.text }}>Before: {trim(r.before, 140)}</div>}
                    {r.after && <div style={{ marginTop: 3, color: COLORS.ADDED.text }}>After: {trim(r.after, 140)}</div>}
                  </td>
                  <td style={td}>
                    <Confidence value={r.confidence} />
                    <div style={{ marginTop: 6, color: "#667085" }}>{r.impact || "medium"} impact</div>
                  </td>
                  <td style={td}>
                    {needsReview ? (
                      <div style={{ color: COLORS.DELETED.text, fontWeight: 900 }}>
                        {r.seek_clarification && r.seek_clarification !== "None" ? r.seek_clarification : r.review_reason || "Review recommended"}
                      </div>
                    ) : (
                      <span style={{ color: "#667085" }}>No clarification needed</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MetricCard({ label, value }) {
  return (
    <div style={{ background: "#f7f3ea", border: "1px solid #ded6c8", borderRadius: 9, padding: 12 }}>
      <div style={{ fontSize: 12, color: "#667085", fontWeight: 900 }}>{label}</div>
      <div style={{ marginTop: 4, fontSize: 22, color: "#1f2937", fontWeight: 900 }}>{value}</div>
    </div>
  );
}

function Confidence({ value }) {
  if (typeof value !== "number") return <span>-</span>;
  const pct = Math.round(value * 100);
  const color = pct >= 80 ? COLORS.ADDED.text : pct >= 65 ? COLORS.MODIFIED.text : COLORS.DELETED.text;
  return <span style={{ color, fontWeight: 900 }}>{pct}%</span>;
}

function average(values) {
  if (!values.length) return null;
  return values.reduce((a, b) => a + b, 0) / values.length;
}

const th = {
  textAlign: "left",
  padding: "10px 12px",
  borderBottom: "1px solid #384250",
  whiteSpace: "nowrap",
};

const td = {
  padding: "10px 12px",
  borderBottom: "1px solid #e5dfd4",
  verticalAlign: "top",
};

function QueryPanel({ runId }) {
  const [q, setQ] = useState("");
  const [answer, setAnswer] = useState("");
  const [results, setResults] = useState(null);
  const [busy, setBusy] = useState(false);

  const ask = async () => {
    if (!q.trim()) return;
    setBusy(true);
    setAnswer("");

    try {
      const r = await fetch(`${API}/runs/${runId}/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q }),
      });
      const data = await r.json();
      setAnswer(data.answer || `I found ${data.count || 0} matching changes.`);
      setResults(data.rows || []);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div>
      <div style={{ background: "#f7f3ea", border: "1px solid #ded6c8", borderRadius: 9, padding: 12, marginBottom: 12 }}>
        <div style={{ fontWeight: 900, marginBottom: 6 }}>Ask the AI agent</div>
        <div style={{ color: "#667085", fontSize: 13, marginBottom: 10 }}>
          Ask about a feature, requirement, price, date, table, clause, or section.
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && ask()}
            placeholder="Example: What changed in pricing or availability?"
            style={{ flex: 1, padding: "10px 12px", fontSize: 14, border: "1px solid #c9c0b0", borderRadius: 7, background: "white" }}
          />
          <button onClick={ask} disabled={busy} style={primaryButtonStyle(busy)}>
            {busy ? "Searching" : "Ask"}
          </button>
        </div>
      </div>

      {answer && (
        <div style={{ background: "#fffefa", border: "1px solid #d8d0c3", borderLeft: "4px solid #2f5f4f", borderRadius: 8, padding: 12, marginBottom: 12, color: "#344054", fontWeight: 800 }}>
          {answer}
        </div>
      )}

      {results && (
        <div>
          <div style={{ marginBottom: 8, color: "#667085", fontWeight: 900 }}>
            {results.length} supporting row{results.length === 1 ? "" : "s"}
          </div>
          {results.length === 0 && <EmptyState label="No matching changes found." />}
          {results.slice(0, 50).map((r, i) => <QueryResult key={i} r={r} />)}
        </div>
      )}
    </div>
  );
}

function QueryResult({ r }) {
  const c = COLORS[r.change_type] || COLORS.MODIFIED;

  return (
    <div style={{ borderLeft: `4px solid ${c.border}`, background: "#fffefa", padding: "10px 12px", marginBottom: 8, fontSize: 13, borderRadius: 7, boxShadow: "0 1px 1px rgba(20, 20, 20, 0.04)" }}>
      <div style={{ fontWeight: 900, marginBottom: 5 }}>
        <span style={{ background: c.soft, color: c.text, padding: "1px 7px", marginRight: 6, borderRadius: 999 }}>
          {r.change_type}
        </span>
        {r.stable_key && <code>{r.stable_key}</code>}
        <span style={{ color: "#667085", marginLeft: 8 }}>
          {r.citation || `page ${r.page} - ${r.block_type}`}
        </span>
      </div>
      {r.before && <div style={{ color: COLORS.DELETED.text }}>Before: {trim(r.before, 260)}</div>}
      {r.after && <div style={{ color: COLORS.ADDED.text }}>After: {trim(r.after, 260)}</div>}
    </div>
  );
}

function TablesList({ runId }) {
  const [data, setData] = useState(null);
  const [baseSel, setBaseSel] = useState("");
  const [targetSel, setTargetSel] = useState("");
  const [diff, setDiff] = useState(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    fetch(`${API}/runs/${runId}/tables`)
      .then((r) => r.json())
      .then(setData);
  }, [runId]);

  const compare = async () => {
    if (!baseSel || !targetSel) return;
    setBusy(true);

    try {
      const r = await fetch(`${API}/runs/${runId}/compare-tables`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ base_header_query: baseSel, target_header_query: targetSel }),
      });
      setDiff(await r.json());
    } finally {
      setBusy(false);
    }
  };

  if (!data) return <SoftLoading label="Loading detected tables" />;

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
        <TablePicker title="Baseline document tables" value={baseSel} onChange={setBaseSel} tables={data.base || []} />
        <TablePicker title="Revised document tables" value={targetSel} onChange={setTargetSel} tables={data.target || []} />
      </div>

      <button onClick={compare} disabled={busy || !baseSel || !targetSel} style={primaryButtonStyle(busy || !baseSel || !targetSel)}>
        {busy ? "Comparing" : "Compare selected tables"}
      </button>

      {diff && diff.error && <div style={{ marginTop: 12, color: COLORS.DELETED.text, fontWeight: 900 }}>{diff.error}</div>}

      {diff && diff.row_diffs && (
        <div style={{ marginTop: 14 }}>
          <div style={{ marginBottom: 8, color: "#667085", fontWeight: 900 }}>
            {diff.row_diffs.length} row changes
          </div>
          {diff.row_diffs.length === 0 && <EmptyState label="No row-level differences found." />}
          {diff.row_diffs.slice(0, 100).map((rd, i) => (
            <div key={i} style={{ fontSize: 13, padding: "8px 10px", borderBottom: "1px solid #e5dfd4", background: i % 2 ? "#fbfaf7" : "white" }}>
              <span style={{ background: COLORS[rd.change_type]?.soft, color: COLORS[rd.change_type]?.text, padding: "1px 7px", marginRight: 6, borderRadius: 999, fontWeight: 900 }}>
                {rd.change_type}
              </span>
              <code>{rd.key || "-"}</code>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function TablePicker({ title, value, onChange, tables }) {
  return (
    <div>
      <h3 style={{ margin: "0 0 8px", fontSize: 15 }}>{title}</h3>
      <select value={value} onChange={(e) => onChange(e.target.value)} style={{ width: "100%", padding: "10px 11px", border: "1px solid #c9c0b0", borderRadius: 7, background: "white", color: "#344054" }}>
        <option value="">Select a detected table</option>
        {tables.map((t) => (
          <option key={t.id} value={t.header_preview}>
            p{t.page_first} - {t.n_columns}c x {t.n_rows}r - {t.header_preview}
          </option>
        ))}
      </select>
    </div>
  );
}

function SoftLoading({ label }) {
  return <div style={{ padding: 20, color: "#667085", fontWeight: 900 }}>{label}</div>;
}

function EmptyState({ label }) {
  return (
    <div style={{ padding: 18, border: "1px dashed #c9c0b0", borderRadius: 9, color: "#667085", background: "#fbfaf7", fontWeight: 900 }}>
      {label}
    </div>
  );
}

function filterButtonStyle(active) {
  return {
    border: `1px solid ${active ? "#1f2937" : "#c9c0b0"}`,
    background: active ? "#1f2937" : "#fffefa",
    color: active ? "white" : "#344054",
    borderRadius: 999,
    padding: "7px 11px",
    cursor: "pointer",
    fontWeight: 900,
  };
}

function primaryButtonStyle(disabled = false, extra = {}) {
  return {
    border: "none",
    borderRadius: 7,
    background: disabled ? "#98a2b3" : "#1f2937",
    color: "white",
    padding: "9px 14px",
    fontWeight: 900,
    cursor: disabled ? "default" : "pointer",
    ...extra,
  };
}

function secondaryButtonStyle(extra = {}) {
  return {
    border: "1px solid #c9c0b0",
    borderRadius: 7,
    background: "#fffefa",
    color: "#344054",
    padding: "9px 13px",
    fontWeight: 900,
    cursor: "pointer",
    ...extra,
  };
}

function trim(value, limit) {
  if (!value) return "";
  const text = String(value).replace(/\s+/g, " ").trim();
  return text.length <= limit ? text : `${text.slice(0, limit - 1)}...`;
}
