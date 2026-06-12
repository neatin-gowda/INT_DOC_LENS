import React from "react";
import { MODEL_PLACEHOLDERS } from "../../config/models.js";

export function ModelPicker({ value, onChange }) {
  const visibleModels = MODEL_PLACEHOLDERS.filter((model) => !model.hidden);

  return (
    <label className="model-picker">
      <span>Model</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {visibleModels.map((model) => (
          <option key={model.id} value={model.id}>
            {model.label} · {model.tier}{model.endpoint ? "" : " · Not configured"}
          </option>
        ))}
      </select>
    </label>
  );
}
