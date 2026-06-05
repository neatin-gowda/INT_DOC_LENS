import React, { useRef, useState } from "react";
import { FILE_ACCEPT } from "../config.js";
import { primaryButtonStyle, secondaryButtonStyle } from "../styles.js";

export function UploadPanel({ onUpload, busy, onBack }) {
  return (
    <form onSubmit={onUpload}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center", marginBottom: 14 }}>
        <div>
          <div style={{ fontWeight: 650 }}>Compare two documents</div>
          <div style={{ color: "#667085", fontSize: 13, marginTop: 3 }}>Keep the existing side-by-side visual review, table workspace, Ask Agent, and reports.</div>
        </div>
        <button type="button" onClick={onBack} disabled={busy} style={secondaryButtonStyle(busy ? { opacity: 0.65, cursor: "default" } : {})}>
          Back to workspaces
        </button>
      </div>

      <div
        className="upload-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(260px, 1fr) minmax(260px, 1fr) 210px",
          gap: 16,
          alignItems: "stretch",
        }}
      >
        <FileInput label="Baseline document" helper="Previous, approved, or reference file" name="base" disabled={busy} />
        <FileInput label="Revised document" helper="Latest, proposed, or updated file" name="target" disabled={busy} />

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div
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
            Classical first pass
          </div>

          <button disabled={busy} style={primaryButtonStyle(busy, { height: 44 })}>
            {busy ? "Processing" : "Compare documents"}
          </button>

          <div style={{ color: "#667085", fontSize: 12, lineHeight: 1.35 }}>
            First pass runs without AI by default. Use advanced AI only after review feedback.
          </div>
        </div>
      </div>

      <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 10 }}>
        <Capability label="Semantic review" detail="Finds meaningful content changes, not layout-only differences." />
        <Capability label="Visual evidence" detail="Renders uploaded files as PDFs for side-by-side review." />
        <Capability label="Business report" detail="Creates a downloadable PDF report with citations and review items." />
      </div>
    </form>
  );
}

export function ExtractUploadPanel({ onUpload, busy, onBack }) {
  return (
    <form onSubmit={onUpload}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center", marginBottom: 14 }}>
        <div>
          <div style={{ fontWeight: 650 }}>Extract documents</div>
          <div style={{ color: "#667085", fontSize: 13, marginTop: 3 }}>Upload one or more files and review extracted text, tables, OCR content, and structured JSON output.</div>
        </div>
        <button type="button" onClick={onBack} disabled={busy} style={secondaryButtonStyle(busy ? { opacity: 0.65, cursor: "default" } : {})}>
          Back to workspaces
        </button>
      </div>

      <div
        className="upload-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(280px, 1fr) 230px",
          gap: 16,
          alignItems: "stretch",
        }}
      >
        <FileInput
          label="Document or image"
          helper="PDF, image, Word, Excel, xlsb, CSV, or TSV. Multiple files can be extracted together."
          name="document"
          disabled={busy}
          multiple
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div
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
            Classical extraction
          </div>

          <button disabled={busy} style={primaryButtonStyle(busy, { height: 44 })}>
            {busy ? "Extracting" : "Extract content"}
          </button>

          <div style={{ color: "#667085", fontSize: 12, lineHeight: 1.35 }}>
            Extraction runs deterministically first. Advanced AI can be added after review feedback.
          </div>
        </div>
      </div>

      <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 10 }}>
        <Capability label="Text and structure" detail="Extracts headings, paragraphs, lists, key-values, and page-level content." />
        <Capability label="Tables" detail="Detects tables, headers, rows, cells, sample values, and table quality signals." />
        <Capability label="Images and OCR" detail="Uses OCR fallback for scanned pages and image-based content." />
      </div>
    </form>
  );
}

export function FileInput({ label, helper, name, disabled, multiple = false }) {
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
        accept={FILE_ACCEPT}
        multiple={multiple}
        required
        disabled={disabled}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => {
          const files = Array.from(e.target.files || []);
          setFileName(files.length > 1 ? `${files.length} files selected` : files[0]?.name || "");
        }}
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
          PDF IMG DOC XLS CSV
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
        {fileName || "Select a file"}
      </div>
    </div>
  );
}

export function Capability({ label, detail }) {
  return (
    <div style={{ background: "#fbfaf6", border: "1px solid #e0d8ca", borderRadius: 8, padding: 11 }}>
      <div style={{ fontSize: 13, fontWeight: 650, color: "#344054" }}>{label}</div>
      <div style={{ marginTop: 4, fontSize: 12, color: "#667085", lineHeight: 1.35 }}>{detail}</div>
    </div>
  );
}
