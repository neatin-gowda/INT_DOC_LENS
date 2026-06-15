import React, { useState, useEffect, useRef } from "react";
import { API, COLORS } from "../config.js";
import { smallTh, smallTd } from "../styles.js";
import {
  navButtonStyle,
  smallNavButtonStyle,
  nativeHighlightStyle,
  displayCell,
  isInternalColumn,
  mergeReviewRows,
  rowChangeType,
  ChangeBadge,
  friendlyCitation,
  impactRank,
  needsReview,
  normalizeConfidence,
  trim,
} from "./common.jsx";

export function KeyChangesSummary({ runId, meta, onVerifyPage }) {
  const basePages = meta.base_format && meta.base_format !== "pdf" ? meta.base_native_pages || meta.n_pages_base || 1 : meta.n_pages_base || 1;
  const targetPages = meta.target_format && meta.target_format !== "pdf" ? meta.target_native_pages || meta.n_pages_target || 1 : meta.n_pages_target || 1;
  const maxPages = Math.max(basePages, targetPages);
  const [summaryRows, setSummaryRows] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setSummaryRows(null);
    Promise.all([
      fetch(`${API}/runs/${runId}/summary`).then(async (resp) => {
        if (!resp.ok) throw new Error("Failed to load summary");
        return resp.json();
      }),
      fetch(`${API}/runs/${runId}/diff?limit=500`).then(async (resp) => {
        if (!resp.ok) return { diffs: [] };
        return resp.json();
      }),
    ])
      .then(([summaryData, diffData]) => {
        if (cancelled) return;
        const rows = Array.isArray(summaryData) ? summaryData : summaryData.rows || summaryData.summary || [];
        setSummaryRows(mergeReviewRows(rows, diffData.diffs || []));
      })
      .catch((err) => {
        if (!cancelled) {
          console.error("Failed to build quick summary", err);
          setSummaryRows([]);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [runId]);

  const keyInsights = React.useMemo(() => {
    const rows = Array.isArray(summaryRows) ? summaryRows : [];
    return rows
      .filter((row) => row.change || row.description || row.before || row.after)
      .sort((a, b) => {
        const ai = impactRank(a.impact) + (needsReview(a) ? 2 : 0) + (normalizeConfidence(a.confidence) || 0);
        const bi = impactRank(b.impact) + (needsReview(b) ? 2 : 0) + (normalizeConfidence(b.confidence) || 0);
        return bi - ai;
      });
  }, [summaryRows]);

  const pageFromCitation = (citation) => {
    const text = String(citation || "");
    const match = text.match(/(?:revised|target|page|p\.)\s*(\d+)/i) || text.match(/\b(\d{1,4})\b/);
    if (!match) return null;
    const nextPage = Number.parseInt(match[1], 10);
    return Number.isFinite(nextPage) && nextPage >= 1 && nextPage <= maxPages ? nextPage : null;
  };

  if (summaryRows === null) {
    return <div className="key-audit-empty">Building comparison summary...</div>;
  }

  if (!keyInsights.length) {
    return <div className="key-audit-empty">No prioritized summary items were returned for this comparison.</div>;
  }

  const visibleRows = showAll ? keyInsights.slice(0, 16) : keyInsights.slice(0, 8);

  return (
    <div className="key-audit-panel compact">
      <div className="key-audit-list">
        {visibleRows.map((row, index) => {
          const verifyPage = pageFromCitation(row.citation);
          return (
            <div key={`${row.stable_key || row.feature || row.item || index}`} className="key-audit-item">
              <ChangeBadge type={rowChangeType(row)} />
              <div className="key-audit-copy" dir="auto">
                <strong>{trim(row.feature || row.item || row.area || "Document change", 120)}</strong>
                <span>{trim(row.change || row.description || row.before || row.after || "Value updated.", 260)}</span>
                {row.citation ? <small>{friendlyCitation(row.citation)}</small> : null}
              </div>
              {verifyPage ? (
                <button type="button" className="primary-action compact" onClick={() => onVerifyPage(verifyPage)}>
                  Verify page {verifyPage}
                </button>
              ) : null}
            </div>
          );
        })}
      </div>
      {keyInsights.length > 8 && (
        <button type="button" className="key-audit-more" onClick={() => setShowAll((value) => !value)}>
          {showAll ? "Show fewer" : `Show ${Math.min(16, keyInsights.length)} items`}
        </button>
      )}
    </div>
  );
}

export function SideBySide({ runId, meta, pageNum, setPageNum }) {
  const basePages = meta.base_format && meta.base_format !== "pdf" ? meta.base_native_pages || meta.n_pages_base || 1 : meta.n_pages_base || 1;
  const targetPages = meta.target_format && meta.target_format !== "pdf" ? meta.target_native_pages || meta.n_pages_target || 1 : meta.n_pages_target || 1;
  const maxPages = Math.max(basePages, targetPages);
  const [basePage, setBasePage] = useState(pageNum);
  const [targetPage, setTargetPage] = useState(pageNum);
  const [zoom, setZoom] = useState(100);
  const [cropMargins, setCropMargins] = useState(false);
  const [syncScroll, setSyncScroll] = useState(true);
  const leftScrollRef = useRef(null);
  const rightScrollRef = useRef(null);

  useEffect(() => {
    setBasePage(pageNum);
    setTargetPage(pageNum);
  }, [runId, pageNum]);

  useEffect(() => {
    if (!syncScroll) return undefined;
    const leftEl = leftScrollRef.current;
    const rightEl = rightScrollRef.current;
    if (!leftEl || !rightEl) return undefined;

    let syncing = false;
    const syncFrom = (source, target) => {
      if (syncing) return;
      syncing = true;
      target.scrollTop = source.scrollTop;
      target.scrollLeft = source.scrollLeft;
      window.requestAnimationFrame(() => {
        syncing = false;
      });
    };
    const onLeftScroll = () => syncFrom(leftEl, rightEl);
    const onRightScroll = () => syncFrom(rightEl, leftEl);

    leftEl.addEventListener("scroll", onLeftScroll, { passive: true });
    rightEl.addEventListener("scroll", onRightScroll, { passive: true });
    return () => {
      leftEl.removeEventListener("scroll", onLeftScroll);
      rightEl.removeEventListener("scroll", onRightScroll);
    };
  }, [runId, pageNum, syncScroll]);

  const goBoth = (nextPage) => {
    const safePage = Math.max(1, Math.min(maxPages, nextPage));
    setPageNum(safePage);
    setBasePage(safePage);
    setTargetPage(safePage);
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
        <button onClick={() => goBoth(pageNum - 1)} disabled={pageNum <= 1} style={navButtonStyle(pageNum <= 1)}>
          Prev both
        </button>
        <span style={{ fontSize: 17, fontWeight: 650, minWidth: 100 }}>Page {pageNum} / {maxPages}</span>
        <button onClick={() => goBoth(pageNum + 1)} disabled={pageNum >= maxPages} style={navButtonStyle(pageNum >= maxPages)}>
          Next both
        </button>
        <div className="viewer-toolbar-group" aria-label="PDF zoom controls">
          <button type="button" onClick={() => setZoom((value) => Math.max(50, value - 25))} title="Zoom out">
            -
          </button>
          <span>{zoom}%</span>
          <button type="button" onClick={() => setZoom((value) => Math.min(300, value + 25))} title="Zoom in">
            +
          </button>
          <button type="button" onClick={() => setZoom(100)} title="Reset zoom">
            Reset
          </button>
        </div>
        <label className="viewer-sync-toggle">
          <input type="checkbox" checked={syncScroll} onChange={(event) => setSyncScroll(event.target.checked)} />
          <span>Sync scroll</span>
        </label>
        <label className="viewer-sync-toggle" style={{ marginLeft: 8 }}>
          <input type="checkbox" checked={cropMargins} onChange={(event) => setCropMargins(event.target.checked)} />
          <span>Smart crop</span>
        </label>
        <Legend />
      </div>

      <div className="viewer-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 14 }}>

        <PageView
          runId={runId}
          side="base"
          pageNum={basePage}
          setPageNum={setBasePage}
          totalPages={basePages}
          label="Baseline document"
          docName={meta.base_label}
          format={meta.base_format}
          zoom={zoom}
          scrollRef={leftScrollRef}
          cropMargins={cropMargins}
        />
        <PageView
          runId={runId}
          side="target"
          pageNum={targetPage}
          setPageNum={setTargetPage}
          totalPages={targetPages}
          label="Revised document"
          docName={meta.target_label}
          format={meta.target_format}
          zoom={zoom}
          scrollRef={rightScrollRef}
          cropMargins={cropMargins}
        />
      </div>
    </div>
  );
}

export function Legend() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 7, marginLeft: 6, flexWrap: "wrap" }}>
      <LegendChip label="added" color={COLORS.ADDED.bg} border={COLORS.ADDED.border} />
      <LegendChip label="deleted" color={COLORS.DELETED.bg} border={COLORS.DELETED.border} />
      <LegendChip label="modified" color={COLORS.MODIFIED.bg} border={COLORS.MODIFIED.border} />
    </div>
  );
}

export function LegendChip({ label, color, border }) {
  return (
    <span style={{ background: color, border: `1px solid ${border}`, color: "var(--text-primary)", padding: "2px 8px", borderRadius: 999, fontSize: 12, fontWeight: 600 }}>
      {label}
    </span>
  );
}

export function PageView({ runId, side, pageNum, setPageNum, totalPages, label, docName, format, zoom = 100, scrollRef, cropMargins }) {
  const [overlay, setOverlay] = useState({ regions: [] });
  const [nativePage, setNativePage] = useState(null);
  const [imageState, setImageState] = useState("idle");
  const pageExists = pageNum >= 1 && pageNum <= totalPages;
  const useNativeViewer = format && format !== "pdf";

  useEffect(() => {
    setImageState(pageExists && !useNativeViewer ? "loading" : "idle");

    if (!pageExists) {
      setOverlay({ regions: [] });
      setNativePage(null);
      return;
    }

    if (useNativeViewer) {
      setOverlay({ regions: [] });
      fetch(`${API}/runs/${runId}/native-page/${side}/${pageNum}`)
        .then((r) => r.json())
        .then(setNativePage)
        .catch(() => setNativePage({ items: [] }));
      return;
    }

    setNativePage(null);
    fetch(`${API}/runs/${runId}/overlay/${side}/${pageNum}`)
      .then((r) => r.json())
      .then(setOverlay)
      .catch(() => setOverlay({ regions: [] }));
  }, [runId, side, pageNum, pageExists, useNativeViewer]);

  const box = overlay.content_box;
  const pw = overlay.page_width || 612;
  const ph = overlay.page_height || 792;
  const hasCrop = cropMargins && box && (box.x_max > box.x_min) && (box.y_max > box.y_min);

  let containerStyle = { position: "relative", width: "100%" };
  let stageStyle = { position: "relative", width: `${zoom}%` };

  if (hasCrop) {
    const c_left = box.x_min / pw;
    const c_top = box.y_min / ph;
    const c_width = (box.x_max - box.x_min) / pw;
    const c_height = (box.y_max - box.y_min) / ph;

    containerStyle = {
      position: "relative",
      overflow: "hidden",
      width: "100%",
      paddingTop: `${(c_height / c_width) * zoom}%`
    };

    stageStyle = {
      position: "absolute",
      left: `${-(c_left / c_width) * zoom}%`,
      top: `${-(c_top / c_width) * zoom}%`,
      width: `${(1.0 / c_width) * zoom}%`,
    };
  }

  return (
    <div className="doc-viewer-shell">
      <div style={{ marginBottom: 7, display: "flex", justifyContent: "space-between", gap: 10, alignItems: "flex-end", flexWrap: "wrap" }}>
        <div>
          <div style={{ fontSize: 13, color: "var(--text-secondary)", fontWeight: 600 }}>{label}</div>
          <div style={{ fontSize: 14, color: "var(--text-primary)", fontWeight: 600 }}>
            {docName} - {pageExists ? `page ${pageNum}` : "no page"}
            {format && <span style={{ color: "var(--text-secondary)", fontSize: 11, marginLeft: 6 }}>{String(format).toUpperCase()}</span>}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <button
            type="button"
            onClick={() => setPageNum(Math.max(1, pageNum - 1))}
            disabled={pageNum <= 1}
            style={smallNavButtonStyle(pageNum <= 1)}
            title={`Previous ${label}`}
          >
            Prev
          </button>
          <span style={{ color: "var(--text-secondary)", fontSize: 12, minWidth: 46, textAlign: "center" }}>
            {pageNum}/{totalPages || 1}
          </span>
          <button
            type="button"
            onClick={() => setPageNum(Math.min(totalPages || 1, pageNum + 1))}
            disabled={pageNum >= (totalPages || 1)}
            style={smallNavButtonStyle(pageNum >= (totalPages || 1))}
            title={`Next ${label}`}
          >
            Next
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className={`doc-frame dl-scrollbar ${useNativeViewer ? "native" : ""}`}
        style={{ overflow: "auto", maxHeight: "75vh", position: "relative" }}
      >
        {!pageExists ? (
          <EmptyPage pageNum={pageNum} />
        ) : useNativeViewer ? (
          <NativePageView page={nativePage} side={side} />
        ) : (
          <div style={containerStyle}>
            <div className="pdf-zoom-stage" style={stageStyle}>
              {imageState === "loading" && (
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-secondary)", background: "var(--surface-raised)", zIndex: 1, fontWeight: 600 }}>
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
                const c = COLORS[String(r.change_type || "").toUpperCase()] || COLORS.MODIFIED;
                const pageWidth = r.page_width || overlay.page_width || 612;
                const pageHeight = r.page_height || overlay.page_height || 792;
                const borderColor = r.border_color || c.border;
                const fillColor = r.color || c.bg;

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
                      background: fillColor,
                      border: `1px solid ${borderColor}`,
                      boxShadow: `inset 0 0 0 1px ${fillColor}`,
                      pointerEvents: "auto",
                    }}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function EmptyPage({ pageNum }) {
  return (
    <div style={{ minHeight: 520, display: "grid", placeItems: "center", color: "var(--text-secondary)", fontWeight: 600 }}>
      No page {pageNum} in this document.
    </div>
  );
}

export function NativePageView({ page, side }) {
  if (!page) {
    return (
      <div style={{ minHeight: 520, display: "grid", placeItems: "center", color: "var(--text-secondary)", fontWeight: 600 }}>
        Loading structured page
      </div>
    );
  }

  const items = page.items || [];
  const viewerType = page.viewer_type || (page.format === "spreadsheet" ? "spreadsheet" : "document");

  if (!items.length) {
    return (
      <div style={{ minHeight: 520, display: "grid", placeItems: "center", color: "var(--text-secondary)", fontWeight: 600 }}>
        No structured content on this page.
      </div>
    );
  }

  return (
    <div className={`native-page ${viewerType}`} dir="auto">
      {items.map((item) => (
        <NativeItem key={item.id} item={item} viewerType={viewerType} side={side || page.side} />
      ))}
    </div>
  );
}

export function NativeItem({ item, viewerType, side }) {
  const highlight = nativeHighlightStyle(item.highlight);

  if (item.type === "table" && !item.payload?.layout_table && !nativeTableLooksLikeLayoutText(item, viewerType)) {
    return <NativeTable item={item} viewerType={viewerType} />;
  }

  const displayItem = item.type === "table"
    ? { ...item, text: nativeTablePlainText(item), payload: { ...(item.payload || {}), layout_table: true } }
    : item;

  const isHeading = item.type === "section" || item.type === "heading";

  return (
    <div
      className="native-block"
      dir="auto"
      style={{
        ...highlight,
        marginBottom: isHeading ? 10 : 8,
        padding: isHeading ? "7px 9px" : "6px 8px",
        borderRadius: 6,
        fontSize: isHeading ? 14 : 13,
        fontWeight: isHeading ? 650 : 400,
        lineHeight: 1.45,
      }}
      title={item.change_type}
    >
      <NativeTokenText item={displayItem} side={side} />
    </div>
  );
}

export function NativeTokenText({ item, side }) {
  const tokens = item.token_diff || [];
  const hasTokenDiff = item.highlight === "modified" && Array.isArray(tokens) && tokens.some((t) => t.op && t.op !== "equal");

  if (!hasTokenDiff) {
    return <span dir="auto">{item.text || item.payload?.text || item.payload?.layout_text || item.path || "-"}</span>;
  }

  return (
    <span dir="auto">
      {tokens.map((token, idx) => {
        const op = token.op;
        if (op === "delete" && side !== "base") return null;
        if (op === "insert" && side === "base") return null;
        const text =
          op === "equal"
            ? token.text_a
            : side === "base"
              ? token.text_a
              : token.text_b;

        if (!text) return null;

        let cls = "";
        if (op === "delete") cls = "native-token-delete";
        if (op === "insert") cls = "native-token-insert";
        if (op === "replace") cls = side === "base" ? "native-token-replace-base" : "native-token-replace-target";

        return (
          <React.Fragment key={idx}>
            {idx > 0 ? " " : ""}
            <span className={`native-token ${cls}`} dir="auto">{text}</span>
          </React.Fragment>
        );
      })}
    </span>
  );
}

export function NativeTable({ item, viewerType }) {
  const header = visibleNativeHeader(item);
  const rows = item.rows || [];
  const title = item.payload?.table_title || item.text || "Table";
  const isSpreadsheet = viewerType === "spreadsheet";

  return (
    <div className="native-block" dir="auto" style={{ ...nativeHighlightStyle(item.highlight), marginBottom: 14, padding: 10, borderRadius: 7 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "baseline", flexWrap: "wrap", marginBottom: 7 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>{title}</div>
        <div style={{ fontSize: 11, color: "var(--text-secondary)" }}>{rows.length} row{rows.length === 1 ? "" : "s"}</div>
      </div>
      <div className="native-table-wrap dl-scrollbar">
        <table className={`native-table ${isSpreadsheet ? "spreadsheet" : ""}`} style={{ fontSize: isSpreadsheet ? 12 : 12 }}>
          <thead>
            <tr style={{ background: "var(--surface-sunken)", color: "var(--text-primary)" }}>
              {header.map((col, idx) => {
                const lower = String(col || "").toLowerCase();
                const isVertical = idx > 0 && (
                  lower.includes("pcv") ||
                  lower.includes("pcb") ||
                  lower.includes("model") ||
                  lower.includes("spec") ||
                  String(col || "").length <= 4 ||
                  (header.length >= 6 && String(col || "").length <= 12)
                );
                return (
                  <th
                    key={col}
                    dir="auto"
                    className={isVertical ? "vertical-th" : ""}
                    style={isVertical ? { ...smallTh, verticalAlign: "bottom" } : smallTh}
                  >
                    {isVertical ? <span className="vertical-th-text">{col}</span> : col}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const rowStyle = nativeHighlightStyle(row.highlight, true);
              return (
                <tr key={row.id} title={row.change_type} style={{ background: rowStyle.background }}>
                  {header.map((col) => (
                    <td key={col} dir="auto" style={{ ...smallTd, borderLeft: rowStyle.borderLeft }}>
                      {displayCell(visibleNativeValues(row.values)?.[col])}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Helpers specific to Native viewer elements
export function visibleNativeHeader(item) {
  const header = Array.isArray(item?.header) ? item.header : [];
  return header.map((col) => String(col || "").trim()).filter((col) => col && !isInternalColumn(col));
}

export function visibleNativeValues(values) {
  if (!values || typeof values !== "object") return {};
  return Object.fromEntries(
    Object.entries(values)
      .map(([key, value]) => [String(key || "").trim(), value])
      .filter(([key]) => key && !isInternalColumn(key))
  );
}

export function nativeTablePlainText(item) {
  const rows = Array.isArray(item?.rows) ? item.rows : [];
  const lines = rows.map((row) => {
    const values = visibleNativeValues(row.values);
    const text = Object.values(values).map((value) => displayCell(value)).filter((value) => value && value !== "-").join(" / ");
    return text || row.text || "";
  }).filter(Boolean);

  if (lines.length) return lines.join("\n");
  return item?.text || visibleNativeHeader(item).join(" / ") || "Document text";
}

export function nativeTableLooksLikeLayoutText(item, viewerType) {
  if (item?.payload?.source_format === "docx") return false;
  if (viewerType !== "document") return false;

  const originalHeader = Array.isArray(item?.header) ? item.header : [];
  const header = visibleNativeHeader(item);
  const rows = Array.isArray(item?.rows) ? item.rows : [];
  const internalHeaderPresent = originalHeader.some((col) => isInternalColumn(col));
  const cells = rows.flatMap((row) => Object.values(visibleNativeValues(row.values || {})).map((value) => String(value || "").trim()).filter(Boolean));

  if (internalHeaderPresent && header.length <= 2) return true;
  if (!rows.length || !cells.length) return false;

  const longCells = cells.filter((text) => text.length > 70 || text.split(/\s+/).length >= 10).length;
  const longCellRatio = longCells / Math.max(1, cells.length);
  const mixedScriptCells = cells.filter((text) => /[\u0600-\u06ff]/.test(text) && /[A-Za-z]/.test(text)).length;
  const mixedScriptRatio = mixedScriptCells / Math.max(1, cells.length);
  const structuredHeaders = header.filter((col) => /feature|description|item|name|order|code|part|model|price|amount|status|date|term|rent|fee/i.test(col));
  const structuredRatio = structuredHeaders.length / Math.max(1, header.length);

  if (mixedScriptRatio >= 0.2 && structuredRatio < 0.35) return true;
  if (rows.length <= 6 && longCellRatio >= 0.45 && structuredRatio < 0.35) return true;
  return false;
}
