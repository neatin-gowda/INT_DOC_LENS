import React from "react";
import { useTheme } from "../theme/ThemeProvider.jsx";

const themes = [
  ["system", "Auto"],
  ["light", "Light"],
  ["dark", "Dark"],
];

export function UserFooter({ collapsed = false }) {
  const { theme, setTheme } = useTheme();

  return (
    <footer className="user-footer">
      <div className="user-avatar" aria-hidden="true">N</div>
      {!collapsed && (
        <div className="user-meta">
          <strong>Nithin</strong>
          <span>platform_admin</span>
        </div>
      )}
      {!collapsed && (
        <div className="rail-theme-toggle" aria-label="Theme selector">
          {themes.map(([mode, label]) => (
            <button
              key={mode}
              type="button"
              className={theme === mode ? "active" : ""}
              onClick={() => setTheme(mode)}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </footer>
  );
}
