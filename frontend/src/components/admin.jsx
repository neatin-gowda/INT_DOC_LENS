import React, { useEffect, useState } from "react";
import { API } from "../config.js";
import { friendlyFetchError, readResponseError, SoftLoading, EmptyState, ErrorBox } from "./common.jsx";

const roleOptions = [
  ["platform_admin", "Platform Admin"],
  ["business_unit_admin", "Business Unit Admin"],
  ["reviewer", "Reviewer"],
  ["submitter", "Submitter"],
  ["viewer", "Viewer"],
];

const emptyForm = {
  supplier: "",
  family_name: "",
  domain: "generic",
  description: "",
  use_case_type: "comparison",
  expected_formats: ["pdf", "docx"],
  sample_plan: "",
  onboarding_notes: "",
  learning_mode: "ai_assisted_bootstrap",
  allowed_roles: [],
};

const formatOptions = [
  ["pdf", "PDF"],
  ["docx", "Word"],
  ["xlsx", "Excel"],
  ["csv", "CSV/TSV"],
  ["image", "Scanned image"],
];

const learningModes = [
  ["deterministic_first", "Deterministic first"],
  ["ai_assisted_bootstrap", "AI-assisted bootstrap"],
  ["manual_profile", "Manual profile"],
];

const emptyVariationPair = () => ({ id: crypto.randomUUID(), baseline: null, revised: null });

export function AdminWorkspace() {
  const [datasets, setDatasets] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [detail, setDetail] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [guidelines, setGuidelines] = useState("");
  const [roles, setRoles] = useState([]);
  const [columnRules, setColumnRules] = useState("");
  const [profileMeta, setProfileMeta] = useState({
    use_case_type: "comparison",
    expected_formats: ["pdf", "docx"],
    sample_plan: "",
    onboarding_notes: "",
    learning_mode: "ai_assisted_bootstrap",
  });
  const [initialSampleFiles, setInitialSampleFiles] = useState({ baseline: null, revised: null, variationPairs: [] });
  const [useAiAnalysis, setUseAiAnalysis] = useState(true);
  const [aiHealth, setAiHealth] = useState(null);
  const [selectedModel, setSelectedModel] = useState("");
  const [analysisPreview, setAnalysisPreview] = useState(null);
  const [analysisRun, setAnalysisRun] = useState(null);
  const [createRun, setCreateRun] = useState(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [sampleFiles, setSampleFiles] = useState({ baseline: null, revised: null, variations: [] });
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const headers = () => ({
    "Content-Type": "application/json",
    "X-User-Role": window.sessionStorage.getItem("simulated_role") || "platform_admin",
  });

  const loadDatasets = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await apiJson("/admin/datasets", { headers: headers() });
      setDatasets(data.datasets || []);
    } catch (err) {
      setError(friendlyFetchError(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDatasets();
    loadAiHealth();
  }, []);

  useEffect(() => {
    if (busy !== "analyze" && busy !== "create") return undefined;
    const startedAt = Date.now();
    setElapsedSeconds(0);
    const timer = window.setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - startedAt) / 1000));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [busy]);

  const loadAiHealth = async () => {
    try {
      const data = await apiJson("/ai-health");
      setAiHealth(data);
      const chatModel = (data.models || []).find((model) => model.kind === "chat" && model.configured);
      if (chatModel?.id) setSelectedModel(chatModel.id);
    } catch {
      setAiHealth({ ok: false, models: [], message: "AI model status is unavailable." });
    }
  };

  const selectDataset = async (id) => {
    setSelectedId(id);
    setError("");
    setNotice("");
    try {
      const data = await apiJson(`/admin/datasets/${id}`, { headers: headers() });
      setDetail(data);
      setGuidelines(data.prompt_guidelines || "");
      setRoles(data.allowed_roles || []);
      setProfileMeta({
        use_case_type: data.use_case_type || "comparison",
        expected_formats: data.expected_formats || ["pdf", "docx"],
        sample_plan: data.sample_plan || "",
        onboarding_notes: data.onboarding_notes || "",
        learning_mode: data.learning_mode || "deterministic_first",
      });
      setColumnRules(JSON.stringify(data.template_profile?.column_rules || [], null, 2));
      await loadDocuments(id);
    } catch (err) {
      setError(friendlyFetchError(err));
    }
  };

  const loadDocuments = async (id) => {
    try {
      const data = await apiJson(`/admin/datasets/${id}/documents`, { headers: headers() });
      setDocuments(data.documents || []);
    } catch {
      setDocuments([]);
    }
  };

  const createDataset = async (event) => {
    event.preventDefault();
    setBusy("create");
    setError("");
    setNotice("");
    const submittedSamples = sampleStats(initialSampleFiles);
    setCreateRun({
      status: "running",
      stage: "create",
      submitted: submittedSamples,
      startedAt: new Date().toISOString(),
      error: "",
    });
    try {
      const data = await postDatasetJson("/admin/datasets", {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(form),
      });
      let sampleMessage = "";
      let sampleWarning = "";
      if (data.id && hasAnySample(initialSampleFiles)) {
        setCreateRun((prev) => ({ ...(prev || {}), stage: "samples" }));
        try {
          await uploadSamples(data.id, initialSampleFiles, form.onboarding_notes, form.learning_mode === "ai_assisted_bootstrap");
          sampleMessage = " Sample documents learned and model profile bootstrapped.";
        } catch (sampleErr) {
          sampleWarning = ` Sample learning did not finish: ${friendlyFetchError(sampleErr)}`;
        }
      }
      setCreateRun((prev) => ({
        ...(prev || {}),
        status: "success",
        stage: "done",
        datasetId: data.id,
        sampleWarning,
        finishedAt: new Date().toISOString(),
      }));
      setNotice(`Use case created.${sampleMessage || sampleWarning || " You can attach or relearn samples from the saved use case."}`);
      setForm(emptyForm);
      setInitialSampleFiles({ baseline: null, revised: null, variationPairs: [] });
      setAnalysisPreview(null);
      try {
        await loadDatasets();
        if (data.id) await selectDataset(data.id);
      } catch {
        setNotice(`Use case created.${sampleMessage || sampleWarning || ""} Refresh the use case list if it does not appear immediately.`);
      }
    } catch (err) {
      const message = friendlyFetchError(err);
      setError(message);
      setCreateRun((prev) => ({
        ...(prev || {}),
        status: "failed",
        finishedAt: new Date().toISOString(),
        error: message,
      }));
    } finally {
      setBusy("");
    }
  };

  const addLabelToRules = (label) => {
    try {
      const current = parseColumnRules(columnRules);
      if (current.some((r) => r.role === label)) {
        setNotice(`A rule for label '${label}' already exists.`);
        return;
      }
      const updated = [...current, { pattern: `.*${label.toLowerCase().replace(/_/g, ".*")}.*`, role: label }];
      setColumnRules(JSON.stringify(updated, null, 2));
      setNotice(`Added suggested mapping rule for '${label}'. Click 'Save profile settings' to apply.`);
    } catch {
      setError("Column rules JSON is malformed. Please fix it before adding labels.");
    }
  };

  const saveDataset = async () => {
    if (!selectedId) return;
    setBusy("save");
    setError("");
    setNotice("");
    try {
      await apiJson(`/admin/datasets/${selectedId}`, {
        method: "PUT",
        headers: headers(),
        body: JSON.stringify({
          prompt_guidelines: guidelines,
          allowed_roles: roles,
          column_rules: parseColumnRules(columnRules),
          ...profileMeta,
        }),
      });
      setNotice("Use case settings saved.");
      await loadDatasets();
      await selectDataset(selectedId);
    } catch (err) {
      setError(friendlyFetchError(err));
    } finally {
      setBusy("");
    }
  };

  const bootstrapSamples = async (event) => {
    event.preventDefault();
    if (!selectedId || !hasAnySample(sampleFiles)) return;
    setBusy("bootstrap");
    setError("");
    setNotice("");
    try {
      await uploadSamples(selectedId, sampleFiles, profileMeta.onboarding_notes || "", profileMeta.learning_mode === "ai_assisted_bootstrap");
      setNotice("Sample documents learned and model profile updated.");
      setSampleFiles({ baseline: null, revised: null, variations: [] });
      await selectDataset(selectedId);
    } catch (err) {
      setError(friendlyFetchError(err));
    } finally {
      setBusy("");
    }
  };

  const uploadSamples = async (datasetId, files, notes, useLlm) => {
    const formData = new FormData();
    if (files.baseline) formData.append("baseline", files.baseline);
    if (files.revised) formData.append("revised", files.revised);
    flattenVariationFiles(files).forEach((file) => formData.append("variations", file));
    formData.append("notes", notes || "");
    formData.append("use_llm", String(useLlm));
    const resp = await postDatasetSamples(datasetId, formData);
    if (!resp.ok) throw new Error(await readResponseError(resp));
    return resp.json();
  };

  const postDatasetSamples = async (datasetId, formData) => {
    const makeBody = () => {
      const clone = new FormData();
      for (const [key, value] of formData.entries()) clone.append(key, value);
      return clone;
    };
    const request = (path) => fetch(`${API}${path}`, {
      method: "POST",
      headers: { "X-User-Role": window.sessionStorage.getItem("simulated_role") || "platform_admin" },
      body: makeBody(),
    });
    const primary = await request(`/admin/datasets/${datasetId}/samples`);
    if (primary.status !== 404) return primary;
    return request(`/api/admin/datasets/${datasetId}/samples`);
  };

  const analyzeInitialSamples = async () => {
    if (!hasAnySample(initialSampleFiles)) return;
    if (useAiAnalysis && !selectedModel) {
      setError("Select a configured AI model before running AI-assisted sample analysis.");
      return;
    }
    setBusy("analyze");
    setError("");
    setNotice("");
    setAnalysisPreview(null);
    setAnalysisRun({
      status: "running",
      mode: useAiAnalysis ? "ai" : "deterministic",
      model: useAiAnalysis ? selectedModel : "",
      submitted: sampleStats(initialSampleFiles),
      startedAt: new Date().toISOString(),
      error: "",
    });
    try {
      const resp = await postAnalyzeSamples({
        files: initialSampleFiles,
        form,
        useAiAnalysis,
        selectedModel,
      });
      if (!resp.ok) throw new Error(await readResponseError(resp));
      const data = await resp.json();
      const suggested = data.suggested_dataset || {};
      setAnalysisPreview(data);
      setAnalysisRun((prev) => ({
        ...(prev || {}),
        status: "success",
        finishedAt: new Date().toISOString(),
        backendUsage: collectAnalysisUsage(data),
        model: data.selected_model || selectedModel,
      }));
      setForm({
        ...form,
        ...suggested,
        allowed_roles: form.allowed_roles || [],
        learning_mode: useAiAnalysis ? "ai_assisted_bootstrap" : "deterministic_first",
      });
      setNotice(useAiAnalysis ? "Sample analysis complete. Review the suggested use case model before creating it." : "Deterministic sample scan complete. Review the suggested use case model before creating it.");
    } catch (err) {
      const message = friendlyFetchError(err);
      setError(message);
      setAnalysisRun((prev) => ({
        ...(prev || {}),
        status: "failed",
        finishedAt: new Date().toISOString(),
        error: message,
      }));
    } finally {
      setBusy("");
    }
  };

  const deleteDataset = async () => {
    if (!selectedId || !detail) return;
    setBusy("delete");
    setError("");
    setNotice("");
    try {
      await apiJson(`/admin/datasets/${selectedId}`, {
        method: "DELETE",
        headers: headers(),
      });
      setNotice("Use case deleted.");
      setSelectedId("");
      setDetail(null);
      setDocuments([]);
      await loadDatasets();
    } catch (err) {
      setError(friendlyFetchError(err));
    } finally {
      setBusy("");
    }
  };

  const intakeStats = sampleStats(initialSampleFiles);
  const intakeHasSamples = hasAnySample(initialSampleFiles);
  const analysisNeedsModel = useAiAnalysis && !selectedModel;
  const analysisDisabled = !intakeHasSamples || busy === "analyze" || analysisNeedsModel;
  const analysisButtonLabel = busy === "analyze"
    ? "Analyzing samples"
    : useAiAnalysis
      ? "Analyze samples with AI"
      : "Scan samples without AI";
  const analysisReadiness = !intakeHasSamples
    ? "Attach a baseline, revised, or variation sample to start."
    : analysisNeedsModel
      ? "Select an available chat model before AI analysis."
      : useAiAnalysis
        ? "Ready to send selected samples and context to the model."
        : "Ready for deterministic structure scan. No AI tokens will be used.";

  return (
    <section className="admin-studio">
      <div className="admin-intro">
        <div>
          <h2>Use Case Onboarding</h2>
          <p>Create document models from representative samples. Use AI to suggest metadata, then keep governance and access settings with the saved use case.</p>
        </div>
      </div>

      {notice && <div className="admin-notice">{notice}</div>}
      {error && <ErrorBox message={error} />}

      <div className="admin-grid">
        <aside className="admin-panel">
          <div className="admin-panel-head">
            <h3>Use Cases</h3>
            <button type="button" className="ghost-action compact" onClick={loadDatasets}>Refresh</button>
          </div>
          {loading ? (
            <SoftLoading label="Loading use cases" />
          ) : datasets.length === 0 ? (
            <EmptyState label="No use cases onboarded yet." />
          ) : (
            <div className="dataset-list">
              {datasets.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`dataset-item${selectedId === item.id ? " active" : ""}`}
                  onClick={() => selectDataset(item.id)}
                >
                  <strong>{item.supplier}</strong>
                  <span>{item.family_name}</span>
                  <small>{item.use_case_type || "comparison"} · {(item.expected_formats || []).join(", ") || "formats"} · {(item.allowed_roles || []).length || "all"} roles</small>
                </button>
              ))}
            </div>
          )}
        </aside>

        <main className="admin-panel">
          <div className="admin-panel-head">
            <div>
              <h3>Onboard Document Model</h3>
              <p>Start with baseline, revised, or layout samples. The platform learns the structure and suggests the use-case metadata.</p>
            </div>
          </div>
          <form className="admin-form onboarding-flow" onSubmit={createDataset}>
            <section className="admin-review-card">
              <div>
                <h4>Use Case Identity</h4>
                <p>Define the business model before uploading samples. Analysis will use these values as context instead of guessing from file names.</p>
              </div>
              <div className="admin-review-grid">
                <label>
                  Supplier or entity
                  <input value={form.supplier} required onChange={(e) => setForm({ ...form, supplier: e.target.value })} placeholder="Ford, HR, Finance, Legal" />
                </label>
                <label>
                  Use case or family
                  <input value={form.family_name} required onChange={(e) => setForm({ ...form, family_name: e.target.value })} placeholder="Order Guide, Policy, Contract" />
                </label>
                <label>
                  Use case type
                  <select value={form.use_case_type} onChange={(e) => setForm({ ...form, use_case_type: e.target.value })}>
                    <option value="comparison">Comparison</option>
                    <option value="extraction">Extraction</option>
                  </select>
                </label>
                <label>
                  Domain
                  <select value={form.domain} onChange={(e) => setForm({ ...form, domain: e.target.value })}>
                    <option value="generic">Generic</option>
                    <option value="automotive">Automotive</option>
                    <option value="legal">Legal</option>
                    <option value="financial">Financial</option>
                    <option value="hr">HR</option>
                    <option value="engineering">Engineering</option>
                  </select>
                </label>
                <div className="admin-wide-field">
                  <FormatPicker value={form.expected_formats} onChange={(expected_formats) => setForm({ ...form, expected_formats })} />
                </div>
              </div>
            </section>

            <section className="sample-intake-card">
              <div className="sample-intake-head">
                <div>
                  <h4>Training Samples</h4>
                  <p>Attach one baseline and one revised document. Add variation pairs only when you have alternate layouts, suppliers, model years, or document structures.</p>
                </div>
                <label className="ai-toggle">
                  <input type="checkbox" checked={useAiAnalysis} onChange={(e) => setUseAiAnalysis(e.target.checked)} />
                  Analyze with AI model
                </label>
              </div>
              {useAiAnalysis ? (
                <div className="model-select-row">
                  <label>
                    Model deployment
                    <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
                      {availableChatModels(aiHealth).length ? (
                        availableChatModels(aiHealth).map((model) => (
                          <option key={model.id} value={model.id}>{model.label || model.id}</option>
                        ))
                      ) : (
                        <option value="">No configured chat model found</option>
                      )}
                    </select>
                  </label>
                  <button type="button" className="ghost-action compact" onClick={loadAiHealth}>Refresh models</button>
                  <span>{aiHealth?.ok ? "Model connection verified." : aiHealth?.message || "Checking AI model status."}</span>
                </div>
              ) : null}
              <div className="sample-pair-grid">
                <label>
                  Baseline sample
                  <input type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff" onChange={(e) => setInitialSampleFiles({ ...initialSampleFiles, baseline: e.target.files?.[0] || null })} />
                </label>
                <label>
                  Revised sample
                  <input type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff" onChange={(e) => setInitialSampleFiles({ ...initialSampleFiles, revised: e.target.files?.[0] || null })} />
                </label>
              </div>
              <VariationPairsEditor value={initialSampleFiles.variationPairs} onChange={(variationPairs) => setInitialSampleFiles({ ...initialSampleFiles, variationPairs })} />
              <div className="sample-actions analysis-action-row">
                <button
                  type="button"
                  className="analyze-action-button"
                  onClick={analyzeInitialSamples}
                  disabled={analysisDisabled}
                  aria-busy={busy === "analyze"}
                >
                  <span>{analysisButtonLabel}</span>
                  <small>{useAiAnalysis ? selectedModel || "No model selected" : "Deterministic mode"}</small>
                </button>
                <div className="analysis-readiness">
                  <span className={intakeHasSamples ? "ready" : "blocked"}>
                    {intakeHasSamples ? "Samples ready" : "Waiting for samples"}
                  </span>
                  <span>{formatNumber(intakeStats.count)} file(s)</span>
                  <span>{formatBytes(intakeStats.totalBytes)}</span>
                  <span>{useAiAnalysis ? "AI-assisted metadata" : "No AI tokens"}</span>
                  <small>{analysisReadiness}</small>
                </div>
              </div>
              <AnalysisRunPanel run={analysisRun} elapsedSeconds={elapsedSeconds} useAiAnalysis={useAiAnalysis} selectedModel={selectedModel} />
            </section>

            {analysisPreview ? (
              <AnalysisPreviewCard data={analysisPreview} />
            ) : null}

            <section className="admin-review-card">
              <div>
                <h4>Generated Metadata</h4>
                <p>Analysis fills this section with document understanding, extraction focus, accuracy hints, and reviewer notes. You can also maintain it manually.</p>
              </div>
              <div className="admin-review-grid">
                <label>
                  Content description
                  <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Describe the documents, expected fields, tables, identifiers, and business context." />
                </label>
                <label>
                  Onboarding notes
                  <textarea value={form.onboarding_notes} onChange={(e) => setForm({ ...form, onboarding_notes: e.target.value })} placeholder="Known pain points, nested headers, language handling, reviewer expectations, or accuracy targets." />
                </label>
                <label className="admin-wide-field">
                  Sample strategy
                  <textarea value={form.sample_plan} onChange={(e) => setForm({ ...form, sample_plan: e.target.value })} placeholder="How many baseline/revised/variation samples should represent this model?" />
                </label>
              </div>
            </section>

            <button type="submit" className="primary-action" disabled={busy === "create"}>
              {busy === "create" ? "Creating" : "Create use case"}
            </button>
            <CreateRunPanel run={createRun} elapsedSeconds={elapsedSeconds} />
          </form>
        </main>
      </div>

      {detail ? (
        <section className="admin-panel">
          <div className="admin-detail">
            <div className="admin-detail-head">
              <div>
                <h3>{detail.supplier} · {detail.family_name}</h3>
                <p>{detail.description || "No description yet."}</p>
                <span className="admin-model-badge">{profileMeta.use_case_type} model · {(profileMeta.expected_formats || []).join(", ")}</span>
              </div>
              <button type="button" className="danger-action compact" onClick={deleteDataset} disabled={busy === "delete"}>
                {busy === "delete" ? "Deleting" : "Delete"}
              </button>
            </div>

            <div className="admin-config-grid">
              <label>
                Use case type
                <select value={profileMeta.use_case_type} onChange={(e) => setProfileMeta({ ...profileMeta, use_case_type: e.target.value })}>
                  <option value="comparison">Comparison</option>
                  <option value="extraction">Extraction</option>
                </select>
              </label>
              <label>
                Learning mode
                <select value={profileMeta.learning_mode} onChange={(e) => setProfileMeta({ ...profileMeta, learning_mode: e.target.value })}>
                  {learningModes.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
              </label>
              <div className="admin-wide-field">
                <FormatPicker value={profileMeta.expected_formats} onChange={(expected_formats) => setProfileMeta({ ...profileMeta, expected_formats })} />
              </div>
              <label>
                Sample strategy
                <textarea value={profileMeta.sample_plan} onChange={(e) => setProfileMeta({ ...profileMeta, sample_plan: e.target.value })} placeholder="How many samples or variations should represent this model?" />
              </label>
              <label>
                Onboarding notes
                <textarea value={profileMeta.onboarding_notes} onChange={(e) => setProfileMeta({ ...profileMeta, onboarding_notes: e.target.value })} placeholder="Business context, known table layouts, accuracy targets, and reviewer comments." />
              </label>
              <label>
                Prompt and extraction guidelines
                <textarea value={guidelines} onChange={(e) => setGuidelines(e.target.value)} placeholder="Example: prioritize PCB thickness, PCV code changes, nested pricing rows, or legal obligations." />
              </label>
              <label>
                Column rules JSON
                <textarea className="mono" value={columnRules} onChange={(e) => setColumnRules(e.target.value)} />
              </label>
            </div>
            <RolePicker value={roles} onChange={setRoles} />
            <button type="button" className="primary-action" onClick={saveDataset} disabled={busy === "save"}>
              {busy === "save" ? "Saving" : "Save profile settings"}
            </button>

            <form className="seed-form" onSubmit={bootstrapSamples}>
              <div>
                <h4>Sample Document Learning</h4>
                <p>For comparison models, upload a baseline, revised document, and any format/layout variations. The profile stores structure, page range, table signatures, stable keys, and reviewer guidance.</p>
              </div>
              <div className="sample-upload-grid">
                <label>
                  Baseline sample
                  <input type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff" onChange={(e) => setSampleFiles({ ...sampleFiles, baseline: e.target.files?.[0] || null })} />
                </label>
                <label>
                  Revised sample
                  <input type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff" onChange={(e) => setSampleFiles({ ...sampleFiles, revised: e.target.files?.[0] || null })} />
                </label>
                <label>
                  Additional variations
                  <input type="file" multiple accept=".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff" onChange={(e) => setSampleFiles({ ...sampleFiles, variations: Array.from(e.target.files || []) })} />
                </label>
              </div>
              <button type="submit" className="primary-action" disabled={(!sampleFiles.baseline && !sampleFiles.revised && sampleFiles.variations.length === 0) || busy === "bootstrap"}>
                {busy === "bootstrap" ? "Learning" : "Learn from samples"}
              </button>
            </form>

            <div className="admin-profile-grid">
              <ProfileSummary profile={detail.template_profile?.sample_profile} />
              <ProfileCard title="Sample Documents" items={documents} labelKey="label" valueKey="page_count" />
              
              <AIReasoningSummary 
                profile={detail.template_profile?.ai_reasoning_profile} 
                onAddLabel={addLabelToRules} 
              />
              
              <ProfileCard title="Stable Keys" items={detail.template_profile?.stable_key_patterns} labelKey="name" valueKey="regex" />
              <ProfileCard title="Column Rules" items={detail.template_profile?.column_rules} labelKey="role" valueKey="pattern" />
            </div>
          </div>
        </section>
      ) : null}
    </section>
  );
}

function hasAnySample(files) {
  return Boolean(files?.baseline || files?.revised || files?.variations?.length || flattenVariationFiles(files).length);
}

function flattenVariationFiles(files) {
  const direct = Array.isArray(files?.variations) ? files.variations : [];
  const pairs = Array.isArray(files?.variationPairs)
    ? files.variationPairs.flatMap((pair) => [pair.baseline, pair.revised].filter(Boolean))
    : [];
  return [...direct, ...pairs];
}

function allSampleFiles(files) {
  return [files?.baseline, files?.revised, ...flattenVariationFiles(files)].filter(Boolean);
}

function sampleStats(files) {
  const list = allSampleFiles(files);
  const totalBytes = list.reduce((sum, file) => sum + Number(file.size || 0), 0);
  return {
    count: list.length,
    totalBytes,
    totalMb: totalBytes / (1024 * 1024),
    estimatedInputTokens: Math.max(1, Math.ceil(totalBytes / 4)),
    files: list.map((file) => ({ name: file.name, size: file.size || 0 })),
  };
}

function formatBytes(bytes) {
  const value = Number(bytes || 0);
  if (value >= 1024 * 1024) return `${(value / (1024 * 1024)).toFixed(2)} MB`;
  if (value >= 1024) return `${(value / 1024).toFixed(1)} KB`;
  return `${value} B`;
}

function formatNumber(value) {
  return new Intl.NumberFormat().format(Math.round(Number(value || 0)));
}

function availableChatModels(aiHealth) {
  const models = Array.isArray(aiHealth?.models) ? aiHealth.models : [];
  if (models.length) return models.filter((model) => model.kind === "chat");
  if (aiHealth?.deployment) return [{ id: aiHealth.deployment, label: aiHealth.deployment, kind: "chat", configured: aiHealth.configured }];
  return [];
}

function collectAnalysisUsage(data) {
  if (data?.usage) {
    return {
      prompt_tokens: Number(data.usage.prompt_tokens || 0),
      completion_tokens: Number(data.usage.completion_tokens || 0),
      total_tokens: Number(data.usage.total_tokens || 0),
      estimated_prompt_tokens: Number(data.usage.estimated_prompt_tokens || 0),
      prompt_chars: Number(data.usage.prompt_chars || 0),
      calls: Number(data.usage.calls || 0),
    };
  }
  const usageItems = [];
  const aiUsage = data?.analysis?.usage;
  if (aiUsage) usageItems.push(aiUsage);
  if (data?.template_profile?.ai_reasoning_profile?.usage) usageItems.push(data.template_profile.ai_reasoning_profile.usage);
  return usageItems.reduce((acc, item) => ({
    prompt_tokens: acc.prompt_tokens + Number(item.prompt_tokens || 0),
    completion_tokens: acc.completion_tokens + Number(item.completion_tokens || 0),
    total_tokens: acc.total_tokens + Number(item.total_tokens || 0),
    estimated_prompt_tokens: acc.estimated_prompt_tokens + Number(item.estimated_prompt_tokens || 0),
    prompt_chars: acc.prompt_chars + Number(item.prompt_chars || 0),
    calls: acc.calls + Number(item.calls || (item.total_tokens ? 1 : 0)),
  }), { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0, estimated_prompt_tokens: 0, prompt_chars: 0, calls: 0 });
}

function buildAnalyzeSamplesFormData({ files, form, useAiAnalysis, selectedModel }) {
  const formData = new FormData();
  if (files.baseline) formData.append("baseline", files.baseline);
  if (files.revised) formData.append("revised", files.revised);
  flattenVariationFiles(files).forEach((file) => formData.append("variations", file));
  formData.append("supplier", form.supplier || "");
  formData.append("family_name", form.family_name || "");
  formData.append("domain", form.domain || "generic");
  formData.append("use_case_type", form.use_case_type || "comparison");
  formData.append("expected_formats", (form.expected_formats || []).join(","));
  formData.append("notes", form.onboarding_notes || form.sample_plan || "");
  formData.append("use_llm", String(useAiAnalysis));
  formData.append("model_name", useAiAnalysis ? selectedModel : "");
  return formData;
}

async function postAnalyzeSamples(payload) {
  const request = async (path) => fetch(`${API}${path}`, {
    method: "POST",
    headers: { "X-User-Role": window.sessionStorage.getItem("simulated_role") || "platform_admin" },
    body: buildAnalyzeSamplesFormData(payload),
  });

  const primary = await request("/admin/analyze-use-case-samples");
  if (primary.status !== 404) return primary;

  const fallback = await request("/admin/datasets/analyze-samples");
  if (fallback.status !== 404) return fallback;

  throw new Error(
    "Sample analyzer route is missing in the deployed backend revision. This is not a database schema issue. Rebuild and deploy the backend image that includes backend/routers/admin.py with POST /admin/analyze-use-case-samples."
  );
}

function AnalysisRunPanel({ run, elapsedSeconds, useAiAnalysis, selectedModel }) {
  if (!run) return null;
  const stats = run.submitted || {};
  const usage = run.backendUsage || {};
  const statusLabel = run.status === "running" ? "Running" : run.status === "success" ? "Completed" : "Failed";
  const activeIndex = run.status === "success" ? 3 : run.status === "failed" ? 1 : Math.min(3, Math.floor(elapsedSeconds / 12));
  const steps = [
    ["prepare", "Preparing upload context"],
    ["extract", "Extracting sample structure"],
    ["model", useAiAnalysis ? `Invoking ${selectedModel || "selected model"}` : "Deterministic profile scan"],
    ["metadata", "Generating metadata suggestions"],
  ];
  return (
    <div className={`analysis-run-panel ${run.status}`}>
      <div className="analysis-run-head">
        <div>
          <strong>{statusLabel}</strong>
          <span>{run.status === "running" ? `${elapsedSeconds}s elapsed` : run.finishedAt ? "Run finished" : "Waiting"}</span>
        </div>
        <small>{run.mode === "ai" ? `AI model: ${run.model || selectedModel || "not selected"}` : "AI disabled"}</small>
      </div>
      <div className="analysis-run-metrics">
        <span>{formatNumber(stats.count)} file(s)</span>
        <span>{formatBytes(stats.totalBytes)}</span>
        <span>Upload-size estimate {formatNumber(stats.estimatedInputTokens)} tokens</span>
        {run.mode === "ai" ? (
          <>
            <span>LLM prompt est. {formatNumber(usage.estimated_prompt_tokens || 0)} tokens</span>
            <span>Prompt {usage.prompt_tokens ? formatNumber(usage.prompt_tokens) : "not reported"}</span>
            <span>Output {usage.completion_tokens ? formatNumber(usage.completion_tokens) : "not reported"}</span>
            <span>Total {usage.total_tokens ? formatNumber(usage.total_tokens) : "not reported"}</span>
            <span>Calls {formatNumber(usage.calls || 0)}</span>
          </>
        ) : (
          <span>No AI tokens used</span>
        )}
      </div>
      <div className="analysis-run-steps">
        {steps.map(([key, label], index) => (
          <span
            key={key}
            className={`${run.status === "success" || index < activeIndex ? "done" : ""} ${run.status === "running" && index === activeIndex ? "active" : ""}`}
          >
            {label}
          </span>
        ))}
      </div>
      {run.error ? <p className="analysis-run-error">{run.error}</p> : null}
    </div>
  );
}

function CreateRunPanel({ run, elapsedSeconds }) {
  if (!run) return null;
  const statusLabel = run.status === "running" ? "Creating use case" : run.status === "success" ? "Use case created" : "Create failed";
  const hasSamples = Number(run.submitted?.count || 0) > 0;
  const steps = [
    ["create", "Saving use case metadata"],
    ["samples", hasSamples ? "Learning attached samples" : "No samples attached"],
    ["done", "Opening saved use case"],
  ];
  const stageIndex = Math.max(0, steps.findIndex(([stage]) => stage === run.stage));
  return (
    <div className={`analysis-run-panel create-run ${run.status}`}>
      <div className="analysis-run-head">
        <div>
          <strong>{statusLabel}</strong>
          <span>{run.status === "running" ? `${elapsedSeconds}s elapsed` : run.finishedAt ? "Run finished" : "Waiting"}</span>
        </div>
        <small>{run.datasetId ? `ID ${String(run.datasetId).slice(0, 8)}` : `${formatNumber(run.submitted?.count || 0)} sample file(s)`}</small>
      </div>
      <div className="analysis-run-steps">
        {steps.map(([stage, label], index) => (
          <span
            key={stage}
            className={`${(!hasSamples && stage === "samples") ? "skipped" : ""} ${index < stageIndex || run.status === "success" ? "done" : ""} ${index === stageIndex && run.status === "running" ? "active" : ""}`}
          >
            {label}
          </span>
        ))}
      </div>
      {run.sampleWarning ? <p className="analysis-run-warning">{run.sampleWarning}</p> : null}
      {run.error ? <p className="analysis-run-error">{run.error}</p> : null}
    </div>
  );
}

function VariationPairsEditor({ value, onChange }) {
  const pairs = Array.isArray(value) ? value : [];
  const updatePair = (id, patch) => {
    onChange(pairs.map((pair) => (pair.id === id ? { ...pair, ...patch } : pair)));
  };
  const removePair = (id) => {
    onChange(pairs.filter((pair) => pair.id !== id));
  };
  return (
    <div className="variation-pairs">
      <div className="variation-pairs-head">
        <div>
          <h5>Variation pairs</h5>
          <p>Add only when another baseline/revised pair represents a different layout or document family variation.</p>
        </div>
        <button
          type="button"
          className="icon-action"
          onClick={() => onChange([...pairs, emptyVariationPair()])}
          disabled={pairs.length >= 5}
          title="Add variation pair"
        >
          +
        </button>
      </div>
      {pairs.length ? (
        <div className="variation-pair-list">
          {pairs.map((pair, index) => (
            <div className="variation-pair-row" key={pair.id}>
              <strong>Variation {index + 1}</strong>
              <label>
                Baseline
                <input type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff" onChange={(e) => updatePair(pair.id, { baseline: e.target.files?.[0] || null })} />
              </label>
              <label>
                Revised
                <input type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff" onChange={(e) => updatePair(pair.id, { revised: e.target.files?.[0] || null })} />
              </label>
              <button type="button" className="ghost-action compact" onClick={() => removePair(pair.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <span className="variation-empty">No variation pairs added.</span>
      )}
    </div>
  );
}

function AnalysisPreviewCard({ data }) {
  const suggested = data?.suggested_dataset || {};
  const analysis = data?.analysis || {};
  const confidence = analysis.confidence_score !== undefined ? Math.round(Number(analysis.confidence_score || 0) * 100) : null;
  const reasons = Array.isArray(analysis.complexity_reasons) ? analysis.complexity_reasons : [];
  const tips = Array.isArray(analysis.enhancement_tips) ? analysis.enhancement_tips : [];
  return (
    <section className="analysis-card">
      <div className="analysis-card-head">
        <div>
          <h4>Sample Analysis</h4>
          <p>{data?.used_ai ? "GPT-4o assisted the metadata suggestions." : "Deterministic scan generated metadata suggestions."}</p>
        </div>
        <span>{String(analysis.complexity_rating || "standard")} complexity</span>
      </div>
      <div className="analysis-grid">
        <p>
          <strong>{suggested.supplier || "Supplier pending"}</strong>
          <small>{suggested.family_name || "Use case pending"}</small>
        </p>
        <p>
          <strong>{suggested.use_case_type || "comparison"}</strong>
          <small>{(suggested.expected_formats || []).join(", ") || "formats pending"}</small>
        </p>
        <p>
          <strong>{suggested.domain || "generic"}</strong>
          <small>{confidence !== null ? `${confidence}% estimated parser confidence` : "confidence pending"}</small>
        </p>
      </div>
      {(reasons.length || tips.length) ? (
        <div className="analysis-notes">
          {reasons.slice(0, 3).map((item, index) => <span key={`reason-${index}`}>{item}</span>)}
          {tips.slice(0, 3).map((item, index) => <span key={`tip-${index}`}>{item}</span>)}
        </div>
      ) : null}
    </section>
  );
}

function RolePicker({ value, onChange }) {
  const toggle = (role) => {
    onChange(value.includes(role) ? value.filter((item) => item !== role) : [...value, role]);
  };
  return (
    <fieldset className="role-picker">
      <legend>Allowed roles</legend>
      {roleOptions.map(([role, label]) => (
        <label key={role}>
          <input type="checkbox" checked={value.includes(role)} onChange={() => toggle(role)} />
          {label}
        </label>
      ))}
    </fieldset>
  );
}

function FormatPicker({ value, onChange }) {
  const selected = Array.isArray(value) ? value : [];
  const toggle = (format) => {
    onChange(selected.includes(format) ? selected.filter((item) => item !== format) : [...selected, format]);
  };
  return (
    <fieldset className="format-picker">
      <legend>Expected formats</legend>
      {formatOptions.map(([format, label]) => (
        <label key={format}>
          <input type="checkbox" checked={selected.includes(format)} onChange={() => toggle(format)} />
          {label}
        </label>
      ))}
    </fieldset>
  );
}

function ProfileSummary({ profile }) {
  const data = profile && typeof profile === "object" ? profile : {};
  return (
    <div className="profile-card">
      <h4>Model Samples</h4>
      <p>
        <strong>{String(data.sample_count || 0)} samples</strong>
        <small>{(data.roles_present || []).join(", ") || "No roles learned yet"}</small>
      </p>
      <p>
        <strong>{String(data.average_pages || 0)} avg pages</strong>
        <small>{String(data.min_pages || 0)} min · {String(data.max_pages || 0)} max</small>
      </p>
      {data.last_bootstrap_notes ? (
        <p>
          <strong>Latest notes</strong>
          <small>{String(data.last_bootstrap_notes)}</small>
        </p>
      ) : null}
    </div>
  );
}

function ProfileCard({ title, items, labelKey, valueKey }) {
  const list = Array.isArray(items) ? items : [];
  return (
    <div className="profile-card">
      <h4>{title}</h4>
      {list.length === 0 ? (
        <span>No entries yet.</span>
      ) : (
        list.slice(0, 8).map((item, index) => (
          <p key={index}>
            <strong>{String(item?.[labelKey] ?? "Item")}</strong>
            <small>{String(item?.[valueKey] ?? "")}</small>
          </p>
        ))
      )}
    </div>
  );
}

function AIReasoningSummary({ profile, onAddLabel }) {
  const data = profile && typeof profile === "object" ? profile : {};
  const rating = String(data.complexity_rating || "low").toUpperCase();
  const conf = data.confidence_score !== undefined ? Math.round(data.confidence_score * 100) : null;
  const reasons = Array.isArray(data.complexity_reasons) ? data.complexity_reasons : [];
  const tips = Array.isArray(data.enhancement_tips) ? data.enhancement_tips : [];
  const labels = Array.isArray(data.suggested_data_labels) ? data.suggested_data_labels : [];

  const badgeColor = rating === "HIGH" ? "#9f2525" : rating === "MEDIUM" ? "#c45510" : "#1f7e41";
  const badgeBg = rating === "HIGH" ? "#fff7f7" : rating === "MEDIUM" ? "#fffbf7" : "#f7fff9";
  const badgeBorder = rating === "HIGH" ? "#f1c6c6" : rating === "MEDIUM" ? "#f7d6c1" : "#c1f1d1";

  return (
    <div className="profile-card" style={{ gridColumn: "span 2" }}>
      <h4 style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>AI Onboarding Analysis</span>
        <span style={{
          fontSize: 11,
          fontWeight: 700,
          color: badgeColor,
          background: badgeBg,
          border: `1px solid ${badgeBorder}`,
          padding: "2px 8px",
          borderRadius: 99
        }}>
          {rating} COMPLEXITY
        </span>
      </h4>
      
      {conf !== null && (
        <p style={{ marginTop: 8 }}>
          <strong>Parser Confidence Rating: {conf}%</strong>
          <small>Estimated baseline accuracy without AI assistance</small>
        </p>
      )}

      {reasons.length > 0 && (
        <p style={{ marginTop: 10 }}>
          <strong>Structural Complexity Indicators</strong>
          <small style={{ display: "block", marginTop: 4 }}>
            {reasons.map((r, i) => <span key={i} style={{ display: "block", color: "var(--text-primary)" }}>• {r}</span>)}
          </small>
        </p>
      )}

      {tips.length > 0 && (
        <p style={{ marginTop: 10 }}>
          <strong>Extraction Optimization Recommendations</strong>
          <small style={{ display: "block", marginTop: 4 }}>
            {tips.map((t, i) => <span key={i} style={{ display: "block", color: "var(--text-primary)" }}>• {t}</span>)}
          </small>
        </p>
      )}

      {labels.length > 0 && (
        <p style={{ marginTop: 12 }}>
          <strong>Suggested Data Labels (Click to map)</strong>
          <span style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 6 }}>
            {labels.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => onAddLabel(l)}
                style={{
                  background: "var(--surface-sunken)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                  borderRadius: "4px",
                  padding: "2px 8px",
                  fontSize: 12,
                  fontWeight: 650,
                  cursor: "pointer"
                }}
                title="Click to automatically create a mapping rule for this label"
              >
                Add {l}
              </button>
            ))}
          </span>
        </p>
      )}
    </div>
  );
}

async function apiJson(path, options = {}) {
  const resp = await fetch(`${API}${path}`, options);
  if (resp.status === 404 && path.startsWith("/admin/")) {
    const fallback = await fetch(`${API}/api${path}`, options);
    if (!fallback.ok) throw new Error(await readResponseError(fallback));
    return fallback.json();
  }
  if (!resp.ok) throw new Error(await readResponseError(resp));
  return resp.json();
}

async function postDatasetJson(path, options = {}) {
  const primary = await fetch(`${API}${path}`, options);
  if (primary.status !== 404) {
    if (!primary.ok) throw new Error(await readResponseError(primary));
    return primary.json();
  }
  const fallback = await fetch(`${API}/api${path}`, options);
  if (!fallback.ok) throw new Error(await readResponseError(fallback));
  return fallback.json();
}

function parseColumnRules(text) {
  const trimmed = text.trim();
  if (!trimmed) return [];
  const parsed = JSON.parse(trimmed);
  if (!Array.isArray(parsed)) throw new Error("Column rules must be a JSON array.");
  return parsed;
}
