#!/usr/bin/env bash
set -euo pipefail

fail() {
  echo "security-check: $*" >&2
  exit 1
}

grep -R "AllowAllForMvpSetup" infra >/dev/null && fail "Postgres allow-all firewall rule is not allowed."
grep -R "255.255.255.255" infra >/dev/null && fail "Postgres allow-all firewall range is not allowed."
grep -R "adminUserEnabled: true" infra >/dev/null && fail "ACR admin user must stay disabled."
grep -R 'corsOrigins string = '\''\*' infra >/dev/null && fail "CORS must not default to wildcard."

grep -R '"traceback": r.get("traceback"),' backend/routers >/dev/null && fail "Tracebacks must be behind DOCULENS_EXPOSE_DIAGNOSTICS."
grep -R '"result_ref": record.get("result_ref") or {},' backend >/dev/null && fail "result_ref must not be public by default."

python3 - <<'PY'
import json
from pathlib import Path

params = json.loads(Path("infra/main.parameters.example.json").read_text())
cors = params["parameters"]["corsOrigins"]["value"]
if cors == "*":
    raise SystemExit("security-check: example parameters must not use wildcard CORS")
PY

echo "security-check: ok"
