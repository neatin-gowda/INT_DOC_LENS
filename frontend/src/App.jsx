import React, { useEffect, useMemo, useRef, useState } from "react";

const API = import.meta.env.VITE_API_BASE || "/api";

const BRAND = {
  name: "DocuLens AI Agent",
  subtitle: "Document comparison with semantic review, visual evidence, citations, and reports.",
};

const COLORS = {
  ADDED: { bg: "rgba(31,160,70,.16)", border: "#1e8a47", text: "#176c38", chip: "#eef8f1" },
  DELETED: { bg: "rgba(218,54,54,.14)", border: "#bb3030", text: "#9f2525", chip: "#fff2f2" },
  MODIFIED: { bg: "rgba(218,185,42,.20)", border: "#9a7a10", text: "#735c11", chip: "#fff8df" },
  UNCHANGED: { bg: "rgba(96,108,128,.12)", border: "#98a2b3", text: "#475467", chip: "#f2f4f7" },
  MATCH: { bg: "#eef4ff", border: "#6b7da8", text: "#344054", chip: "#eef4ff" },
};

const css = `
  * { box-sizing: border-box; }
  body { margin: 0; }
  button, input, select, textarea { font: inherit; }
  button { transition: background .15s ease, border-color .15s ease, color .15s ease, opacity .15s ease; }
  code { background: #f6f1e8; border: 1px solid #e2d8c8; border-radius: 5px; padding: 1px 5px; }
  .dl-scrollbar::-webkit-scrollbar { height: 10px; width: 10px; }
  .dl-scrollbar::-webkit-scrollbar-thumb { background: #c9c0b0; border-radius: 999px; }
  .dl-scrollbar::-webkit-scrollbar-track { background: #f2ece2; }
  @media (max-width: 980px) {
    .upload-grid, .viewer-grid, .two-grid, .report-metrics, .table-picker-grid, .table-config-grid {
      grid-template-columns: 1fr !important;
    }
    .header-actions { justify-content: flex-start !important; }
  }
`;

const shellStyle = {
  minHeight: "100vh",
  background: "#f7f3eb",
  color: "#202936",
  fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
};

const pageStyle = {
  maxWidth: 1720,
  margin: "0 auto",
  padding: "18px 22px 32px",
};

const panelStyle = {
  background: "#fffdf8",
  border: "1px solid #ded6c8",
  borderRadius: 10,
  boxShadow: "0 1px 3px rgba(31,41,55,.08)",
};

export default function App() {
  const [runId, setRunId] = useState(null);
  const [meta, setMeta] = useState(null);
  const [tab, setTab] = useState("viewer");
  const [pageNum, setPageNum] = useState(1);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!runId || !busy) return;

    let cancelled = false;
    let timer = null;

    const poll = async () => {
      try {
        const resp = await fetch(`${API}/runs/${runId}`);
        if (!resp.ok) throw new Error(await readResponseError(resp));

        const data = await resp.json();
        if (cancelled) return;

        setMeta(data);

        if (data.status === "complete") {
          setBusy(false);
          setTab("viewer");
          return;
        }

        if (data.status === "failed") {
          setBusy(false);
          setError(normalizeErrorMessage(data.error || data.status_message || "Comparison failed."));
          return;
        }

        timer = setTimeout(poll, 1000);
      } catch (err) {
        if (cancelled) return;
        setBusy(false);
        setError(friendlyFetchError(err));
      }
    };

    poll();

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [runId, busy]);

  const onUpload = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const base = form.get("base");
    const target = form.get("target");

    if (!base || !target || !base.name || !target.name) {
      setError("Please select both PDF documents before starting.");
      return;
    }

    setBusy(true);
    setError("");
    setRunId(null);
    setPageNum(1);
    setTab("viewer");
    setMeta({
      status: "uploading",
      status_message: "Uploading documents",
      progress: 3,
      stats: {},
      coverage: {},
      n_pages_base: 0,
      n_pages_target: 0,
    });

    try {
      const resp = await fetch(`${API}/compare`, { method: "POST", body: form });
      if (!resp.ok) throw new Error(await readResponseError(resp));

      const data = await resp.json();

      setRunId(data.run_id);
      setMeta({
        run_id: data.run_id,
        status: data.status,
        status_message: data.status_message || "Starting comparison",
        progress: data.progress || 5,
        stats: {},
        coverage: {},
        n_pages_base: 0,
        n_pages_target: 0,
      });
    } catch (err) {
      setBusy(false);
      setError(friendlyFetchError(err));
    }
  };

  const startOver = () => {
    setRunId(null);
    setMeta(null);
    setPageNum(1);
    setTab("viewer");
    setError("");
    setBusy(false);
  };

  const downloadReport = () => {
    if (runId) window.location.href = `${API}/runs/${runId}/report.pdf`;
  };

  const isComplete = meta?.status === "complete";

  return (
    <div style={shellStyle}>
      <style>{css}</style>
      <div style={pageStyle}>
        <Header runId={isComplete ? runId : null} onStartOver={startOver} onDownloadReport={downloadReport} />

        {!isComplete && (
          <section style={{ ...panelStyle, padding: 22, marginBottom: 16 }}>
            <UploadPanel onUpload={onUpload} busy={busy} />
            {busy && meta && (
              <ProcessingState
                progress={meta.progress || 0}
                message={meta.status_message || "Processing documents"}
                status={meta.status || "running"}
              />
            )}
            {error && <ErrorBox message={error} />}
          </section>
        )}

        {isComplete && runId && meta && (
          <>
            <StatsBar meta={meta} />
            <Tabs tab={tab} setTab={setTab} />

            <main style={{ ...panelStyle, padding: 12 }}>
              {tab === "viewer" && <SideBySide runId={runId} meta={meta} pageNum={pageNum} setPageNum={setPageNum} />}
              {tab === "report" && <ReviewReport runId={runId} />}
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
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: "#1f2937",
                color: "white",
                display: "grid",
                placeItems: "center",
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              AI
            </div>
            <h1 style={{ margin: 0, fontSize: 28, letterSpacing: 0, lineHeight: 1.08, fontWeight: 650 }}>
              {BRAND.name}
            </h1>
          </div>
          <p style={{ margin: "6px 0 0", color: "#667085", fontSize: 15 }}>{BRAND.subtitle}</p>
        </div>

        {runId && (
          <div className="header-actions" style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" }}>
            <button onClick={onDownloadReport} style={primaryButtonStyle()}>
              Download report
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
        className="upload-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(260px, 1fr) minmax(260px, 1fr) 210px",
          gap: 16,
          alignItems: "stretch",
        }}
      >
        <FileInput label="Baseline document" helper="Previous, approved, or reference PDF" name="base" disabled={busy} />
        <FileInput label="Revised document" helper="Latest, proposed, or updated PDF" name="target" disabled={busy} />

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <label
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
              color: "#475467",
              fontSize: 14,
              background: "#fbfaf6",
              border: "1px solid #ded6c8",
              borderRadius: 8,
              padding: "10px 12px",
              fontWeight: 600,
            }}
          >
            <input type="checkbox" name="use_llm" value="true" defaultChecked disabled={busy} />
            AI review summary
          </label>

          <button disabled={busy} style={primaryButtonStyle(busy, { height: 44 })}>
            {busy ? "Processing" : "Compare documents"}
          </button>

          <div style={{ color: "#667085", fontSize: 12, lineHeight: 1.35 }}>
            Turn off AI review summary for a faster first check.
          </div>
        </div>
      </div>

      <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 10 }}>
        <Capability label="Semantic review" detail="Finds meaningful content changes, not layout-only differences." />
        <Capability label="Visual evidence" detail="Highlights additions, removals, and modifications on the PDFs." />
        <Capability label="Business report" detail="Creates a downloadable PDF report with citations and review items." />
      </div>
    </form>
  );
}

function FileInput({ label, helper, name, disabled }) {
  const [fileName, setFileName] = useState("");
  const inputRef = useRef(null);

  const openPicker = () => {
    if (!disabled) inputRef.current?.click();
  };

  return (
    <div
      onClick={openPicker}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") openPicker();
      }}
      role="button"
      tabIndex={disabled ? -1 : 0}
      style={{
        border: "1px dashed #b9ae9e",
        borderRadius: 10,
        background: "#fbfaf6",
        padding: 16,
        minHeight: 126,
        cursor: disabled ? "default" : "pointer",
        outline: "none",
      }}
    >
      <input
        ref={inputRef}
        type="file"
        name={name}
        accept="application/pdf"
        required
        disabled={disabled}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
        style={{ position: "absolute", width: 1, height: 1, opacity: 0, pointerEvents: "none" }}
      />

      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <div>
          <div style={{ color: "#1f2937", fontSize: 15, fontWeight: 650 }}>{label}</div>
          <div style={{ marginTop: 4, color: "#667085", fontSize: 12 }}>{helper}</div>
        </div>
        <span
          style={{
            background: "#eee8dd",
            color: "#344054",
            border: "1px solid #d8d0c3",
            borderRadius: 999,
            padding: "4px 9px",
            fontSize: 12,
            fontWeight: 650,
            height: 24,
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
          fontWeight: 600,
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
    <div style={{ background: "#fbfaf6", border: "1px solid #e0d8ca", borderRadius: 8, padding: 11 }}>
      <div style={{ fontSize: 13, fontWeight: 650, color: "#344054" }}>{label}</div>
      <div style={{ marginTop: 4, fontSize: 12, color: "#667085", lineHeight: 1.35 }}>{detail}</div>
    </div>
  );
}

function ProcessingState({ progress, message, status }) {
  const safeProgress = Math.max(0, Math.min(100, Number(progress) || 0));

  return (
    <div style={{ marginTop: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7, color: "#475467", fontSize: 13 }}>
        <span style={{ fontWeight: 650 }}>{message}</span>
        <span>{safeProgress}%</span>
      </div>
      <div style={{ height: 8, background: "#e8dfd2", borderRadius: 999, overflow: "hidden" }}>
        <div
          style={{
            width: `${safeProgress}%`,
            height: "100%",
            background: status === "failed" ? COLORS.DELETED.border : "#2f5f4f",
            transition: "width 450ms ease, background 250ms ease",
          }}
        />
      </div>
      <p style={{ margin: "10px 0 0", color: "#667085", fontSize: 13 }}>
        Results will appear automatically when processing completes.
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
        background: "#fff5f5",
        color: "#9f1d1d",
        borderRadius: 8,
        padding: 13,
        fontSize: 14,
        fontWeight: 600,
        lineHeight: 1.45,
        whiteSpace: "pre-wrap",
      }}
    >
      {normalizeErrorMessage(message)}
    </div>
  );
}

function StatsBar({ meta }) {
  const s = meta.stats || {};

  return (
    <section style={{ ...panelStyle, padding: 12, display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap", alignItems: "center" }}>
      <StatChip label="Added" value={s.ADDED || 0} tone="added" />
      <StatChip label="Deleted" value={s.DELETED || 0} tone="deleted" />
      <StatChip label="Modified" value={s.MODIFIED || 0} tone="modified" />
      <StatChip label="Unchanged" value={s.UNCHANGED || 0} />
      <StatChip label="Coverage" value={`${safePercent(meta.coverage?.base)} / ${safePercent(meta.coverage?.target)}`} />
      <StatChip label="Pages" value={`${meta.n_pages_base} / ${meta.n_pages_target}`} />
    </section>
  );
}

function StatChip({ label, value, tone }) {
  const toneStyle =
    tone === "added"
      ? { borderColor: "#c8e6d2", background: "#f1faf4", color: COLORS.ADDED.text }
      : tone === "deleted"
        ? { borderColor: "#f2caca", background: "#fff6f6", color: COLORS.DELETED.text }
        : tone === "modified"
          ? { borderColor: "#eadb8d", background: "#fffaf0", color: COLORS.MODIFIED.text }
          : { borderColor: "#d8d0c3", background: "#fbfaf6", color: "#475467" };

  return (
    <span style={{ display: "inline-flex", alignItems: "baseline", gap: 6, border: "1px solid", borderRadius: 999, padding: "5px 10px", fontSize: 13, ...toneStyle }}>
      <span>{label}</span>
      <strong style={{ fontWeight: 650 }}>{value}</strong>
    </span>
  );
}

function safePercent(value) {
  return typeof value === "number" ? `${value.toFixed(1)}%` : "-";
}

function Tabs({ tab, setTab }) {
  const items = [
    ["viewer", "Visual review"],
    ["report", "Review report"],
    ["query", "Ask agent"],
    ["tables", "Table compare"],
  ];

  return (
    <nav style={{ display: "flex", gap: 4, borderBottom: "1px solid #d8d0c3", marginBottom: 12, overflowX: "auto" }}>
      {items.map(([key, label]) => {
        const active = tab === key;
        return (
          <button
            key={key}
            onClick={() => setTab(key)}
            style={{
              padding: "10px 14px",
              background: active ? "#1f2937" : "transparent",
              color: active ? "white" : "#344054",
              border: active ? "1px solid #1f2937" : "1px solid transparent",
              borderRadius: "8px 8px 0 0",
              cursor: "pointer",
              fontWeight: 600,
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
  const maxPages = Math.max(meta.n_pages_base || 1, meta.n_pages_target || 1);

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
        <button onClick={() => setPageNum(Math.max(1, pageNum - 1))} disabled={pageNum <= 1} style={navButtonStyle(pageNum <= 1)}>
          Prev
        </button>
        <span style={{ fontSize: 17, fontWeight: 650, minWidth: 100 }}>Page {pageNum} / {maxPages}</span>
        <button onClick={() => setPageNum(Math.min(maxPages, pageNum + 1))} disabled={pageNum >= maxPages} style={navButtonStyle(pageNum >= maxPages)}>
          Next
        </button>
        <Legend />
      </div>

      <div className="viewer-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <PageView runId={runId} side="base" pageNum={pageNum} totalPages={meta.n_pages_base} label="Baseline document" docName={meta.base_label} />
        <PageView runId={runId} side="target" pageNum={pageNum} totalPages={meta.n_pages_target} label="Revised document" docName={meta.target_label} />
      </div>
    </div>
  );
}

function navButtonStyle(disabled) {
  return {
    border: "1px solid #c9c0b0",
    background: disabled ? "#f1ece3" : "#fffdf8",
    color: disabled ? "#98a2b3" : "#344054",
    borderRadius: 7,
    padding: "7px 12px",
    cursor: disabled ? "default" : "pointer",
    fontWeight: 600,
  };
}

function Legend() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 7, marginLeft: 6, flexWrap: "wrap" }}>
      <LegendChip label="added" color={COLORS.ADDED.bg} border={COLORS.ADDED.border} />
      <LegendChip label="deleted" color={COLORS.DELETED.bg} border={COLORS.DELETED.border} />
      <LegendChip label="modified" color={COLORS.MODIFIED.bg} border={COLORS.MODIFIED.border} />
    </div>
  );
}

function LegendChip({ label, color, border }) {
  return (
    <span style={{ background: color, border: `1px solid ${border}`, color: "#344054", padding: "2px 8px", borderRadius: 999, fontSize: 12, fontWeight: 600 }}>
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
        <div style={{ fontSize: 13, color: "#667085", fontWeight: 600 }}>{label}</div>
        <div style={{ fontSize: 14, color: "#344054", fontWeight: 650 }}>
          {docName} - {pageExists ? `page ${pageNum}` : "no page"}
        </div>
      </div>

      <div style={{ position: "relative", border: "1px solid #b7ae9f", background: "#f9f6ef", minHeight: 520, overflow: "hidden" }}>
        {!pageExists ? (
          <EmptyPage pageNum={pageNum} />
        ) : (
          <>
            {imageState === "loading" && (
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#667085", background: "#f9f6ef", zIndex: 1, fontWeight: 600 }}>
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
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.DELETED.text, background: "#fff5f5", zIndex: 2, fontWeight: 600 }}>
                Could not load page {pageNum}
              </div>
            )}

            {(overlay.regions || []).map((r, i) => {
              const [x0, y0, x1, y1] = r.bbox || [0, 0, 0, 0];
              const c = COLORS[r.change_type] || COLORS.MODIFIED;
              const pageWidth = r.page_width || overlay.page_width || 612;
              const pageHeight = r.page_height || overlay.page_height || 792;

              return (
                <div
                  key={i}
                  title={`${r.change_type || "change"} ${r.stable_key || ""} (${r.block_type || "block"})`}
                  style={{
                    position: "absolute",
                    left: `${(x0 / pageWidth) * 100}%`,
                    top: `${(y0 / pageHeight) * 100}%`,
                    width: `${Math.max(0.15, ((x1 - x0) / pageWidth) * 100)}%`,
                    height: `${Math.max(0.15, ((y1 - y0) / pageHeight) * 100)}%`,
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
    <div style={{ minHeight: 520, display: "grid", placeItems: "center", color: "#667085", fontWeight: 600 }}>
      No page {pageNum} in this document.
    </div>
  );
}

function ReviewReport({ runId }) {
  const [rows, setRows] = useState(null);
  const [filter, setFilter] = useState("ALL");
  const [error, setError] = useState("");

  useEffect(() => {
    setRows(null);
    setError("");

    fetch(`${API}/runs/${runId}/summary`)
      .then(async (r) => {
        if (!r.ok) throw new Error(await readResponseError(r));
        return r.json();
      })
      .then((data) => setRows(Array.isArray(data) ? data : data.rows || data.summary || []))
      .catch((err) => setError(friendlyFetchError(err)));
  }, [runId]);

  const filteredRows = useMemo(() => {
    const list = rows || [];
    if (filter === "ALL") return list;
    if (filter === "REVIEW") return list.filter((r) => needsReview(r));
    return list.filter((r) => String(r.change_type || r.type || "").toUpperCase() === filter);
  }, [rows, filter]);

  const avgConfidence = average((rows || []).map((r) => normalizeConfidence(r.confidence)).filter((v) => typeof v === "number"));
  const reviewCount = (rows || []).filter(needsReview).length;

  if (error) return <ErrorBox message={error} />;
  if (!rows) return <SoftLoading label="Building review report" />;

  return (
    <div>
      <div className="report-metrics" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 10, marginBottom: 14 }}>
        <MetricCard label="Review items" value={rows.length} />
        <MetricCard label="Needs review" value={reviewCount} />
        <MetricCard label="Avg confidence" value={avgConfidence == null ? "-" : `${Math.round(avgConfidence * 100)}%`} />
        <MetricCard label="Report" value="PDF ready" />
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
        {["ALL", "ADDED", "DELETED", "MODIFIED", "REVIEW"].map((key) => (
          <button key={key} onClick={() => setFilter(key)} style={filterButtonStyle(filter === key)}>
            {filterLabel(key)}
          </button>
        ))}
      </div>

      {filteredRows.length === 0 ? (
        <EmptyState label="No review items match this filter." />
      ) : (
        <div className="dl-scrollbar" style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 980 }}>
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
              {filteredRows.map((row, i) => (
                <tr key={i}>
                  <td style={{ ...td, width: "24%" }}>
                    <strong style={{ fontWeight: 650 }}>{row.feature || row.area || row.item || row.path || "Document change"}</strong>
                    <div style={{ color: "#667085", marginTop: 6 }}>{trim(row.before || row.after || row.text || "", 180)}</div>
                  </td>
                  <td style={{ ...td, width: "22%" }}>
                    <ChangeBadge type={row.change_type || row.type || "MODIFIED"} />
                    <div style={{ marginTop: 7 }}>{trim(row.change || row.description || "", 240)}</div>
                  </td>
                  <td style={{ ...td, width: "28%" }}>
                    <div>{row.citation || row.evidence || "-"}</div>
                    {row.before && <div style={{ color: COLORS.DELETED.text, marginTop: 7 }}>Before: {trim(row.before, 180)}</div>}
                    {row.after && <div style={{ color: COLORS.ADDED.text, marginTop: 4 }}>After: {trim(row.after, 180)}</div>}
                  </td>
                  <td style={{ ...td, width: "11%" }}>
                    <Confidence value={normalizeConfidence(row.confidence)} />
                    {row.impact && <div style={{ color: "#667085", marginTop: 4 }}>{row.impact}</div>}
                  </td>
                  <td style={{ ...td, width: "15%", color: needsReview(row) ? COLORS.DELETED.text : "#475467", fontWeight: needsReview(row) ? 650 : 400 }}>
                    {row.seek_clarification || row.review || row.recommendation || (needsReview(row) ? "Review recommended." : "No action suggested.")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function QueryPanel({ runId }) {
  const [q, setQ] = useState("");
  const [response, setResponse] = useState(null);
  const [busy, setBusy] = useState(false);

  const ask = async () => {
    if (!q.trim()) return;
    setBusy(true);
    setResponse(null);

    try {
      const r = await fetch(`${API}/runs/${runId}/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q }),
      });

      if (!r.ok) throw new Error(await readResponseError(r));

      const data = await r.json();
      setResponse(data);
    } catch (err) {
      setResponse({ answer: friendlyFetchError(err), rows: [] });
    } finally {
      setBusy(false);
    }
  };

  const rows = response?.rows || [];
  const columns = response?.columns || inferColumns(rows);

  return (
    <div>
      <div style={{ background: "#fbfaf6", border: "1px solid #ded6c8", borderRadius: 8, padding: 12, marginBottom: 12 }}>
        <div style={{ fontWeight: 650, marginBottom: 6 }}>Ask about the comparison</div>
        <div style={{ color: "#667085", fontSize: 13, marginBottom: 10 }}>
          Ask for a summary, evidence, a table row, a code, a PCV value, or a specific column comparison.
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && ask()}
            placeholder="Example: Compare PCV 205 in the old file with PCV 203 in the new file"
            style={{ ...inputStyle, flex: 1 }}
          />
          <button onClick={ask} disabled={busy} style={primaryButtonStyle(busy)}>
            {busy ? "Searching" : "Ask"}
          </button>
        </div>
      </div>

      {response?.answer && (
        <div style={{ background: "#fffdf8", border: "1px solid #d8d0c3", borderLeft: "4px solid #2f5f4f", borderRadius: 8, padding: 12, marginBottom: 12, color: "#344054", lineHeight: 1.45 }}>
          {response.answer}
        </div>
      )}

      {response && rows.length === 0 && <EmptyState label="No supporting results were found." />}

      {rows.length > 0 && columns.length > 0 ? (
        <GenericRowsTable columns={columns} rows={rows} />
      ) : (
        rows.slice(0, 50).map((r, i) => <QueryResult key={i} r={r} />)
      )}
    </div>
  );
}

function QueryResult({ r }) {
  const c = COLORS[r.change_type] || COLORS.MODIFIED;

  return (
    <div style={{ borderLeft: `4px solid ${c.border}`, background: "#fffdf8", padding: "10px 12px", marginBottom: 8, fontSize: 13, borderRadius: 7, boxShadow: "0 1px 1px rgba(20,20,20,.04)" }}>
      <div style={{ fontWeight: 650, marginBottom: 5 }}>
        <ChangeBadge type={r.change_type || "MODIFIED"} />
        {r.stable_key && <code style={{ marginLeft: 6 }}>{r.stable_key}</code>}
        <span style={{ color: "#667085", marginLeft: 8 }}>{r.citation || `page ${r.page || "-"} - ${r.block_type || "block"}`}</span>
      </div>
      {r.before && <div style={{ color: COLORS.DELETED.text }}>Before: {trim(r.before, 260)}</div>}
      {r.after && <div style={{ color: COLORS.ADDED.text }}>After: {trim(r.after, 260)}</div>}
      {r.field_changes?.length > 0 && <FieldDiffTable rows={r.field_changes} />}
    </div>
  );
}

function TablesList({ runId }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [baseTableId, setBaseTableId] = useState("");
  const [targetTableId, setTargetTableId] = useState("");
  const [baseRowColumns, setBaseRowColumns] = useState([]);
  const [targetRowColumns, setTargetRowColumns] = useState([]);
  const [baseValueColumns, setBaseValueColumns] = useState([]);
  const [targetValueColumns, setTargetValueColumns] = useState([]);
  const [rowFilter, setRowFilter] = useState("");
  const [diff, setDiff] = useState(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    setData(null);
    setError("");

    fetch(`${API}/runs/${runId}/tables?include_rows=true`)
      .then(async (r) => {
        if (!r.ok) throw new Error(await readResponseError(r));
        return r.json();
      })
      .then((payload) => setData(payload))
      .catch((err) => {
        setError(friendlyFetchError(err));
        setData({ base: [], target: [] });
      });
  }, [runId]);

  const baseTables = data?.base || [];
  const targetTables = data?.target || [];
  const baseTable = baseTables.find((t) => t.id === baseTableId);
  const targetTable = targetTables.find((t) => t.id === targetTableId);

  useEffect(() => {
    if (!baseTable) {
      setBaseRowColumns([]);
      setBaseValueColumns([]);
      return;
    }
    setBaseRowColumns(defaultRowColumns(baseTable));
    setBaseValueColumns(defaultValueColumns(baseTable));
  }, [baseTableId]);

  useEffect(() => {
    if (!targetTable) {
      setTargetRowColumns([]);
      setTargetValueColumns([]);
      return;
    }
    setTargetRowColumns(defaultRowColumns(targetTable));
    setTargetValueColumns(defaultValueColumns(targetTable));
  }, [targetTableId]);

  const compare = async () => {
    if (!baseTableId || !targetTableId) return;

    setBusy(true);
    setDiff(null);
    setError("");

    try {
      const r = await fetch(`${API}/runs/${runId}/compare-table-columns`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          base_table_id: baseTableId,
          target_table_id: targetTableId,
          base_row_columns: baseRowColumns,
          target_row_columns: targetRowColumns,
          base_value_columns: baseValueColumns,
          target_value_columns: targetValueColumns,
          row_filter: rowFilter.trim() || null,
          limit: 200,
        }),
      });

      if (!r.ok) throw new Error(await readResponseError(r));
      setDiff(await r.json());
    } catch (err) {
      setError(friendlyFetchError(err));
    } finally {
      setBusy(false);
    }
  };

  if (!data) return <SoftLoading label="Loading detected tables" />;

  return (
    <div>
      <div style={{ background: "#fbfaf6", border: "1px solid #ded6c8", borderRadius: 8, padding: 12, marginBottom: 14 }}>
        <div style={{ fontWeight: 650, marginBottom: 4 }}>Compare detected tables</div>
        <div style={{ color: "#667085", fontSize: 13 }}>
          Select tables, choose the row/feature columns, then choose the PCV/value columns you want to compare.
        </div>
      </div>

      {error && <ErrorBox message={error} />}

      <div className="table-picker-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
        <TablePicker title="Baseline document table" value={baseTableId} onChange={setBaseTableId} tables={baseTables} />
        <TablePicker title="Revised document table" value={targetTableId} onChange={setTargetTableId} tables={targetTables} />
      </div>

      {(baseTable || targetTable) && (
        <div className="two-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
          <TableInfo table={baseTable} emptyLabel="Select a baseline table to inspect detected rows." />
          <TableInfo table={targetTable} emptyLabel="Select a revised table to inspect detected rows." />
        </div>
      )}

      {(baseTable || targetTable) && (
        <div className="table-config-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
          <ColumnConfig
            title="Baseline columns"
            table={baseTable}
            rowColumns={baseRowColumns}
            setRowColumns={setBaseRowColumns}
            valueColumns={baseValueColumns}
            setValueColumns={setBaseValueColumns}
          />
          <ColumnConfig
            title="Revised columns"
            table={targetTable}
            rowColumns={targetRowColumns}
            setRowColumns={setTargetRowColumns}
            valueColumns={targetValueColumns}
            setValueColumns={setTargetValueColumns}
          />
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 10, alignItems: "end", marginBottom: 14 }}>
        <div>
          <label style={labelStyle}>Optional row filter</label>
          <input
            value={rowFilter}
            onChange={(e) => setRowFilter(e.target.value)}
            placeholder="Filter by feature, code, package, PCV, or any phrase from the row"
            style={inputStyle}
          />
        </div>
        <button
          onClick={compare}
          disabled={busy || !baseTableId || !targetTableId}
          style={primaryButtonStyle(busy || !baseTableId || !targetTableId, { height: 40 })}
        >
          {busy ? "Comparing" : "Compare"}
        </button>
      </div>

      {diff && <TableColumnCompareResult diff={diff} />}
    </div>
  );
}

function TablePicker({ title, value, onChange, tables }) {
  return (
    <div>
      <label style={labelStyle}>{title}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} style={inputStyle}>
        <option value="">Select a detected table</option>
        {tables.map((t) => (
          <option key={t.id} value={t.id}>
            p{t.page_first || t.page || "-"} - {t.n_columns || columnNames(t).length}c x {t.n_rows || rowsOf(t).length}r - {t.header_preview || t.area || "table"}
          </option>
        ))}
      </select>
    </div>
  );
}

function TableInfo({ table, emptyLabel }) {
  if (!table) return <EmptyState label={emptyLabel} />;

  const columns = columnNames(table);
  const rows = rowsOf(table);

  return (
    <div style={{ background: "#fffdf8", border: "1px solid #ded6c8", borderRadius: 8, padding: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
        <div>
          <div style={{ fontWeight: 650 }}>{table.area || "Detected table"}</div>
          <div style={{ marginTop: 4, color: "#667085", fontSize: 13 }}>
            Page {table.page_first || table.page || "-"} · {columns.length} columns · {table.n_rows || rows.length} rows
          </div>
        </div>
        {table.id && <code>{table.id.slice(0, 8)}</code>}
      </div>

      <div style={{ marginTop: 10, color: "#475467", fontSize: 13 }}>
        <strong style={{ fontWeight: 650 }}>Columns:</strong> {columns.slice(0, 12).join(" | ") || "No columns detected"}
      </div>

      {rows.length > 0 && <TablePreview table={table} />}
    </div>
  );
}

function ColumnConfig({ title, table, rowColumns, setRowColumns, valueColumns, setValueColumns }) {
  if (!table) return <EmptyState label={`${title}: select a table first.`} />;

  const columns = columnNames(table);

  return (
    <div style={{ background: "#fffdf8", border: "1px solid #ded6c8", borderRadius: 8, padding: 12 }}>
      <div style={{ fontWeight: 650, marginBottom: 10 }}>{title}</div>

      <MultiSelect
        label="Row / feature columns"
        helper="Used to identify and align rows."
        options={columns}
        selected={rowColumns}
        onChange={setRowColumns}
      />

      <div style={{ height: 12 }} />

      <MultiSelect
        label="Value / PCV columns"
        helper="Only selected value columns are compared."
        options={columns}
        selected={valueColumns}
        onChange={setValueColumns}
      />
    </div>
  );
}

function MultiSelect({ label, helper, options, selected, onChange }) {
  const toggle = (option) => {
    if (selected.includes(option)) onChange(selected.filter((x) => x !== option));
    else onChange([...selected, option]);
  };

  const selectAll = () => onChange(options);
  const clear = () => onChange([]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "baseline", marginBottom: 6 }}>
        <div>
          <div style={{ fontSize: 13, color: "#344054", fontWeight: 650 }}>{label}</div>
          <div style={{ fontSize: 12, color: "#667085" }}>{helper}</div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <button type="button" onClick={selectAll} style={miniButtonStyle}>All</button>
          <button type="button" onClick={clear} style={miniButtonStyle}>Clear</button>
        </div>
      </div>

      <div className="dl-scrollbar" style={{ maxHeight: 150, overflow: "auto", border: "1px solid #e0d8ca", borderRadius: 8, padding: 8, background: "#fbfaf6" }}>
        {options.length === 0 ? (
          <div style={{ color: "#667085", fontSize: 13 }}>No columns available.</div>
        ) : (
          options.map((option) => (
            <label key={option} style={{ display: "flex", gap: 8, alignItems: "center", padding: "5px 4px", fontSize: 13, color: "#344054" }}>
              <input type="checkbox" checked={selected.includes(option)} onChange={() => toggle(option)} />
              <span>{option}</span>
            </label>
          ))
        )}
      </div>
    </div>
  );
}

function TablePreview({ table }) {
  const columns = columnNames(table).slice(0, 6);
  const rows = rowsOf(table).slice(0, 5);

  if (!columns.length || !rows.length) return null;

  return (
    <div className="dl-scrollbar" style={{ marginTop: 12, overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, minWidth: 520 }}>
        <thead>
          <tr style={{ background: "#f2eee6" }}>
            {columns.map((col) => <th key={col} style={smallTh}>{col}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => <td key={col} style={smallTd}>{displayCell(row[col])}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableColumnCompareResult({ diff }) {
  const counts = diff.counts || {};
  const rows = diff.rows || diff.row_diffs || [];
  const alignment = diff.value_column_alignment || diff.header_alignment || [];

  return (
    <div style={{ marginTop: 14 }}>
      {diff.answer && (
        <div style={{ background: "#fffdf8", border: "1px solid #d8d0c3", borderLeft: "4px solid #2f5f4f", borderRadius: 8, padding: 12, marginBottom: 12, color: "#344054" }}>
          {diff.answer}
        </div>
      )}

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
        <StatChip label="Added rows" value={counts.ADDED || counts.added || 0} tone="added" />
        <StatChip label="Deleted rows" value={counts.DELETED || counts.deleted || 0} tone="deleted" />
        <StatChip label="Modified rows" value={counts.MODIFIED || counts.modified || 0} tone="modified" />
        <StatChip label="Compared rows" value={rows.length} />
      </div>

      {alignment.length > 0 && <ColumnAlignment alignment={alignment} />}

      {rows.length === 0 ? (
        <EmptyState label="No row-level differences were found for the selected columns." />
      ) : (
        <div style={{ marginTop: 14 }}>
          {rows.slice(0, 200).map((row, i) => <TableColumnRowDiff key={i} row={row} />)}
        </div>
      )}
    </div>
  );
}

function ColumnAlignment({ alignment }) {
  return (
    <div style={{ background: "#fffdf8", border: "1px solid #ded6c8", borderRadius: 8, padding: 12 }}>
      <div style={{ fontWeight: 650, marginBottom: 8 }}>Selected column alignment</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {alignment.slice(0, 60).map((item, i) => {
          const type = item.status === "matched" ? "MATCH" : item.status === "base_only" ? "DELETED" : "ADDED";
          return (
            <span key={i} style={{ border: `1px solid ${COLORS[type].border}`, background: COLORS[type].chip, color: COLORS[type].text, borderRadius: 999, padding: "3px 8px", fontSize: 12 }}>
              {item.base_col || item.base || "new"} {item.target_col || item.target ? `→ ${item.target_col || item.target}` : ""}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function TableColumnRowDiff({ row }) {
  const type = row.change_type || row.status || "MODIFIED";
  const diffs = row.field_diffs || row.cell_diffs || row.value_diffs || row.diffs || [];

  return (
    <div style={{ background: "#fffdf8", border: "1px solid #ded6c8", borderLeft: `4px solid ${(COLORS[type] || COLORS.MODIFIED).border}`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
        <div>
          <ChangeBadge type={type} />
          <span style={{ marginLeft: 8, fontWeight: 650 }}>
            {row.key || row.row_key || row.base_key || row.target_key || row.definition || "row"}
          </span>
        </div>
        {typeof row.match_score === "number" && (
          <span style={{ color: "#667085", fontSize: 13 }}>Match {Math.round(row.match_score * 100)}%</span>
        )}
      </div>

      <div className="two-grid" style={{ marginTop: 10, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <DefinitionBox title="Baseline row" value={row.base_definition || row.definition?.base || row.base_row?.definition || row.base_row?.text || row.before} />
        <DefinitionBox title="Revised row" value={row.target_definition || row.definition?.target || row.target_row?.definition || row.target_row?.text || row.after} />
      </div>

      {diffs.length > 0 ? (
        <FieldDiffTable rows={diffs} />
      ) : (
        <div style={{ marginTop: 10 }}>
          <ValuesSideBySide base={row.base_values || row.base_row?.values || row.base_row} target={row.target_values || row.target_row?.values || row.target_row} />
        </div>
      )}
    </div>
  );
}

function ValuesSideBySide({ base, target }) {
  return (
    <div className="two-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
      <ValuesTable title="Baseline values" values={base} />
      <ValuesTable title="Revised values" values={target} />
    </div>
  );
}

function GenericRowsTable({ columns, rows }) {
  return (
    <div className="dl-scrollbar" style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 780 }}>
        <thead>
          <tr style={{ background: "#1f2937", color: "white" }}>
            {columns.map((col) => <th key={col} style={th}>{col}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.slice(0, 200).map((row, i) => (
            <tr key={i}>
              {columns.map((col) => <td key={col} style={td}>{displayCell(row[col])}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FieldDiffTable({ rows }) {
  if (!rows?.length) return null;

  return (
    <div className="dl-scrollbar" style={{ overflowX: "auto", marginTop: 10 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 640 }}>
        <thead>
          <tr style={{ background: "#f2eee6", color: "#344054" }}>
            <th style={smallTh}>Field</th>
            <th style={smallTh}>Before</th>
            <th style={smallTh}>After</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td style={smallTd}>{r.field || r.column || r.name || "-"}</td>
              <td style={{ ...smallTd, color: COLORS.DELETED.text }}>{displayCell(r.before ?? r.base ?? r.old)}</td>
              <td style={{ ...smallTd, color: COLORS.ADDED.text }}>{displayCell(r.after ?? r.target ?? r.new)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ValuesTable({ title, values }) {
  const entries = Object.entries(values || {}).filter(([k]) => !["text", "definition"].includes(k));
  if (!entries.length) return <DefinitionBox title={title} value="-" />;

  return (
    <div style={{ background: "#fbfaf6", border: "1px solid #e0d8ca", borderRadius: 8, padding: 10 }}>
      <div style={{ fontSize: 12, color: "#667085", fontWeight: 650, marginBottom: 6 }}>{title}</div>
      <div className="dl-scrollbar" style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <tbody>
            {entries.slice(0, 40).map(([key, value]) => (
              <tr key={key}>
                <td style={{ ...smallTd, width: "32%", color: "#667085" }}>{key}</td>
                <td style={smallTd}>{displayCell(value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function DefinitionBox({ title, value }) {
  return (
    <div style={{ background: "#fbfaf6", border: "1px solid #e0d8ca", borderRadius: 8, padding: 10 }}>
      <div style={{ fontSize: 12, color: "#667085", fontWeight: 650, marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: 13, color: "#344054", lineHeight: 1.4 }}>{displayCell(value)}</div>
    </div>
  );
}

function ChangeBadge({ type }) {
  const normalized = String(type || "MODIFIED").toUpperCase();
  const c = COLORS[normalized] || COLORS.MODIFIED;

  return (
    <span style={{ display: "inline-block", background: c.chip, color: c.text, border: `1px solid ${c.border}`, padding: "2px 8px", borderRadius: 999, fontWeight: 650, fontSize: 12 }}>
      {normalized}
    </span>
  );
}

function MetricCard({ label, value }) {
  return (
    <div style={{ background: "#fbfaf6", border: "1px solid #ded6c8", borderRadius: 8, padding: 12 }}>
      <div style={{ fontSize: 12, color: "#667085", fontWeight: 600 }}>{label}</div>
      <div style={{ marginTop: 4, fontSize: 22, color: "#1f2937", fontWeight: 650 }}>{value}</div>
    </div>
  );
}

function Confidence({ value }) {
  if (typeof value !== "number") return <span>-</span>;
  const pct = Math.round(value * 100);
  const color = pct >= 80 ? COLORS.ADDED.text : pct >= 65 ? COLORS.MODIFIED.text : COLORS.DELETED.text;
  return <span style={{ color, fontWeight: 650 }}>{pct}%</span>;
}

async function readResponseError(resp) {
  try {
    const text = await resp.text();
    if (!text) return `Request failed with status ${resp.status}`;

    try {
      const parsed = JSON.parse(text);
      return normalizeErrorMessage(parsed.detail || parsed.error || parsed.message || parsed);
    } catch {
      return text;
    }
  } catch {
    return `Request failed with status ${resp.status}`;
  }
}

function friendlyFetchError(err) {
  const message = normalizeErrorMessage(err);
  if (message.toLowerCase().includes("failed to fetch")) {
    return "The app could not reach the comparison service. Please confirm the backend is running and the API URL is correct.";
  }
  return message || "Something went wrong while processing the documents.";
}

function normalizeErrorMessage(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (value instanceof Error) return normalizeErrorMessage(value.message);
  if (Array.isArray(value)) return value.map(normalizeErrorMessage).filter(Boolean).join("\n");
  if (typeof value === "object") {
    if (value.detail) return normalizeErrorMessage(value.detail);
    if (value.error) return normalizeErrorMessage(value.error);
    if (value.message) return normalizeErrorMessage(value.message);
    try {
      return JSON.stringify(value, null, 2);
    } catch {
      return String(value);
    }
  }
  return String(value);
}

function defaultRowColumns(table) {
  const suggested = table?.suggested_row_columns || [];
  if (suggested.length) return suggested.filter((c) => columnNames(table).includes(c));
  const columns = columnNames(table);
  return columns.length ? [columns[0]] : [];
}

function defaultValueColumns(table) {
  const columns = columnNames(table);
  const suggested = table?.suggested_value_columns || [];
  const rowCols = defaultRowColumns(table);
  const picked = suggested.filter((c) => columns.includes(c) && !rowCols.includes(c));
  if (picked.length) return picked;
  return columns.filter((c) => !rowCols.includes(c)).slice(0, 8);
}

function columnNames(table) {
  if (!table) return [];
  if (Array.isArray(table.columns) && table.columns.length) return table.columns.map(String);
  if (Array.isArray(table.header) && table.header.length) {
    return table.header.map((h, i) => String(h || `col_${i + 1}`));
  }
  const rows = rowsOf(table);
  if (rows.length && typeof rows[0] === "object" && !Array.isArray(rows[0])) return Object.keys(rows[0]);
  const count = table.n_columns || 0;
  return Array.from({ length: count }, (_, i) => `col_${i + 1}`);
}

function rowsOf(table) {
  if (!table) return [];
  if (Array.isArray(table.rows)) return normalizeRows(table.rows, columnNamesWithoutRows(table));
  if (Array.isArray(table.row_preview)) return normalizeRows(table.row_preview, columnNamesWithoutRows(table));
  return [];
}

function columnNamesWithoutRows(table) {
  if (!table) return [];
  if (Array.isArray(table.columns) && table.columns.length) return table.columns.map(String);
  if (Array.isArray(table.header) && table.header.length) {
    return table.header.map((h, i) => String(h || `col_${i + 1}`));
  }
  const count = table.n_columns || 0;
  return Array.from({ length: count }, (_, i) => `col_${i + 1}`);
}

function normalizeRows(rows, columns) {
  return rows.map((row) => {
    if (!Array.isArray(row)) return row || {};
    const obj = {};
    row.forEach((value, i) => {
      obj[columns[i] || `col_${i + 1}`] = value;
    });
    return obj;
  });
}

function inferColumns(rows) {
  if (!rows?.length) return [];
  const keys = new Set();
  rows.slice(0, 20).forEach((row) => {
    if (row && typeof row === "object" && !Array.isArray(row)) {
      Object.keys(row).forEach((key) => {
        if (!["payload", "raw"].includes(key)) keys.add(key);
      });
    }
  });
  return Array.from(keys).slice(0, 12);
}

function displayCell(value) {
  if (value === null || value === undefined || value === "") return "-";
  if (Array.isArray(value)) return value.map(displayCell).join(", ");
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

function trim(value, limit) {
  if (!value) return "";
  const text = String(value).replace(/\s+/g, " ").trim();
  return text.length <= limit ? text : `${text.slice(0, limit - 1)}...`;
}

function filterLabel(filter) {
  if (filter === "ALL") return "All changes";
  if (filter === "REVIEW") return "Needs review";
  return filter.toLowerCase();
}

function needsReview(row) {
  const text = `${row.seek_clarification || ""} ${row.review || ""} ${row.recommendation || ""}`.toLowerCase();
  const confidence = normalizeConfidence(row.confidence);
  return text.includes("review") || text.includes("clarif") || text.includes("confirm") || (typeof confidence === "number" && confidence < 0.8);
}

function normalizeConfidence(value) {
  if (typeof value !== "number") return null;
  return value > 1 ? value / 100 : value;
}

function average(values) {
  if (!values.length) return null;
  return values.reduce((a, b) => a + b, 0) / values.length;
}

const inputStyle = {
  width: "100%",
  padding: "10px 11px",
  border: "1px solid #c9c0b0",
  borderRadius: 7,
  background: "white",
  color: "#344054",
};

const labelStyle = {
  display: "block",
  marginBottom: 7,
  fontSize: 13,
  color: "#344054",
  fontWeight: 650,
};

const th = {
  textAlign: "left",
  padding: "10px 12px",
  borderBottom: "1px solid #384250",
  whiteSpace: "nowrap",
  fontWeight: 650,
};

const td = {
  padding: "10px 12px",
  borderBottom: "1px solid #e5dfd4",
  verticalAlign: "top",
};

const smallTh = {
  textAlign: "left",
  padding: "8px 9px",
  borderBottom: "1px solid #ded6c8",
  fontWeight: 650,
};

const smallTd = {
  padding: "8px 9px",
  borderBottom: "1px solid #eee7dc",
  verticalAlign: "top",
};

const miniButtonStyle = {
  border: "1px solid #c9c0b0",
  background: "#fffdf8",
  color: "#344054",
  borderRadius: 6,
  padding: "3px 7px",
  cursor: "pointer",
  fontSize: 12,
  fontWeight: 600,
};

function SoftLoading({ label }) {
  return <div style={{ padding: 20, color: "#667085", fontWeight: 600 }}>{label}</div>;
}

function EmptyState({ label }) {
  return (
    <div style={{ padding: 18, border: "1px dashed #c9c0b0", borderRadius: 8, color: "#667085", background: "#fbfaf7", fontWeight: 600 }}>
      {label}
    </div>
  );
}

function filterButtonStyle(active) {
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

function primaryButtonStyle(disabled = false, extra = {}) {
  return {
    border: "none",
    borderRadius: 7,
    background: disabled ? "#98a2b3" : "#1f2937",
    color: "white",
    padding: "9px 14px",
    fontWeight: 600,
    cursor: disabled ? "default" : "pointer",
    ...extra,
  };
}

function secondaryButtonStyle(extra = {}) {
  return {
    border: "1px solid #c9c0b0",
    borderRadius: 7,
    background: "#fffdf8",
    color: "#344054",
    padding: "9px 13px",
    fontWeight: 600,
    cursor: "pointer",
    ...extra,
  };
}
