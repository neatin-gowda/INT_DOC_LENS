import React, { useRef, useState } from "react";
import { FILE_ACCEPT } from "../config.js";

export function UploadPanel({ onUpload, busy, onBack }) {
  return (
    <form onSubmit={onUpload} className="doc-workflow-card">
      <div className="workflow-card-head">
        <div>
          <div className="workflow-kicker">DocuLens Compare</div>
          <h2>Compare two documents</h2>
        </div>
        <button type="button" onClick={onBack} disabled={busy} className="ghost-action">
          Back
        </button>
      </div>

      <div className="upload-grid compare">
        <FileInput label="Baseline document" helper="Approved or reference file" name="base" disabled={busy} />
        <FileInput label="Revised document" helper="Latest or proposed file" name="target" disabled={busy} />

        <div className="workflow-action-rail">
          <div className="process-status-card">Semantic review</div>
          <button disabled={busy} className="primary-action full">
            {busy ? "Processing" : "Compare documents"}
          </button>
          <div className="workflow-note">
            Side-by-side preview, evidence query, tables, and report output.
          </div>
        </div>
      </div>
    </form>
  );
}

export function ExtractUploadPanel({ onUpload, busy, onBack }) {
  return (
    <form onSubmit={onUpload} className="doc-workflow-card">
      <div className="workflow-card-head">
        <div>
          <div className="workflow-kicker">DocuLens Extract</div>
          <h2>Extract documents</h2>
        </div>
        <button type="button" onClick={onBack} disabled={busy} className="ghost-action">
          Back
        </button>
      </div>

      <div className="upload-grid extract">
        <FileInput
          label="Document or image"
          helper="PDF, image, Word, Excel, xlsb, CSV, or TSV"
          name="document"
          disabled={busy}
          multiple
        />

        <div className="workflow-action-rail">
          <div className="process-status-card">Extraction run</div>
          <button disabled={busy} className="primary-action full">
            {busy ? "Extracting" : "Extract content"}
          </button>
          <div className="workflow-note">
            Text, tables, OCR, structured JSON, and document query.
          </div>
        </div>
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
      className={`file-lane${disabled ? " disabled" : ""}`}
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

      <div className="file-lane-head">
        <div>
          <div className="file-lane-title">{label}</div>
          <div className="file-lane-helper">{helper}</div>
        </div>
        <span className="file-lane-pill">Files</span>
      </div>

      <div className={`file-lane-value${fileName ? " selected" : ""}`}>
        {fileName || "Select a file"}
      </div>
    </div>
  );
}
