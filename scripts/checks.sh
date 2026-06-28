#!/usr/bin/env bash
set -euo pipefail

PYTHONPYCACHEPREFIX="${PYTHONPYCACHEPREFIX:-/tmp/doculens_pycache}" python3 -m compileall -q backend
bash scripts/security-check.sh

if command -v az >/dev/null 2>&1; then
  az bicep build --file infra/main.bicep >/dev/null
else
  echo "checks: az not found; skipping Bicep build"
fi

if [ -d frontend/node_modules ]; then
  npm run build --prefix frontend
else
  echo "checks: frontend/node_modules missing; skipping frontend build"
fi

echo "checks: ok"
