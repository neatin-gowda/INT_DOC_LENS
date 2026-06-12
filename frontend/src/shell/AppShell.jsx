import React from "react";

export function AltraiWordmark() {
  return (
    <div className="altrai-wordmark" aria-label="Altrai">
      <span>Altr</span><span className="accent">ai</span>
    </div>
  );
}

export function AppShell({ children }) {
  return <>{children}</>;
}
