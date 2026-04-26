# Azure deployment runbook

This is a step-by-step deploy of the Spec-Diff stack to Azure. It assumes
you have the Azure CLI installed and logged in.

## Resources you'll provision

| Logical name | Azure service | Purpose |
|---|---|---|
| `rg-specdiff-prod` | Resource group | Parent for everything |
| `stspecdiffprod` | Storage account (Blob) | Raw PDFs + rendered page images |
| `pg-specdiff-prod` | Postgres Flexible Server | Structured store + pgvector |
| `acr-specdiff` | Azure Container Registry | Backend image |
| `cae-specdiff` | Container Apps Environment | Compute |
| `ca-specdiff-api` | Container App | FastAPI service |
| `oai-specdiff` | Azure OpenAI | LLM for summary + NL query plans |
| `kv-specdiff` | Key Vault | Connection strings, OpenAI key |

## 0. One-time setup

```bash
RG=rg-specdiff-prod
LOC=eastus
az group create -n $RG -l $LOC

# Storage
az storage account create -n stspecdiffprod -g $RG -l $LOC --sku Standard_LRS --kind StorageV2
az storage container create --account-name stspecdiffprod -n raw-pdfs --auth-mode login
az storage container create --account-name stspecdiffprod -n page-images --auth-mode login

# Postgres flexible
az postgres flexible-server create \
  --name pg-specdiff-prod -g $RG -l $LOC \
  --tier Burstable --sku-name Standard_B2s --version 16 \
  --admin-user pgadmin --admin-password "<strong-pw>" \
  --storage-size 64 --high-availability Disabled --public-access 0.0.0.0
# Enable pgvector
az postgres flexible-server parameter set --name azure.extensions \
  -g $RG -s pg-specdiff-prod --value "vector,pg_trgm,uuid-ossp"

# Apply schema
psql "host=pg-specdiff-prod.postgres.database.azure.com user=pgadmin dbname=postgres sslmode=require" \
  -f sql/schema.sql

# OpenAI
az cognitiveservices account create -n oai-specdiff -g $RG -l eastus \
  --kind OpenAI --sku S0
az cognitiveservices account deployment create -n oai-specdiff -g $RG \
  --deployment-name gpt-4o --model-name gpt-4o --model-version "2024-08-06" \
  --model-format OpenAI --sku-capacity 30 --sku-name "Standard"
az cognitiveservices account deployment create -n oai-specdiff -g $RG \
  --deployment-name embed --model-name text-embedding-3-small --model-version "1" \
  --model-format OpenAI --sku-capacity 50 --sku-name "Standard"

# ACR
az acr create -n acrspecdiff -g $RG --sku Basic --admin-enabled true

# Key Vault
az keyvault create -n kv-specdiff -g $RG -l $LOC
az keyvault secret set --vault-name kv-specdiff -n PG-CONN \
  --value "host=pg-specdiff-prod.postgres.database.azure.com user=pgadmin password=<pw> dbname=postgres sslmode=require"
az keyvault secret set --vault-name kv-specdiff -n OPENAI-KEY \
  --value "$(az cognitiveservices account keys list -n oai-specdiff -g $RG --query key1 -o tsv)"
```

## 1. Backend image

A `Dockerfile` for the FastAPI service:

```dockerfile
FROM python:3.11-slim
RUN apt-get update && apt-get install -y poppler-utils && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY backend/ ./backend/
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
ENV PORT=8000
CMD ["uvicorn", "backend.api:app", "--host", "0.0.0.0", "--port", "8000"]
```

```bash
az acr build -r acrspecdiff -t specdiff-api:latest .
```

## 2. Container Apps

```bash
az containerapp env create -n cae-specdiff -g $RG -l $LOC
az containerapp create \
  -n ca-specdiff-api -g $RG --environment cae-specdiff \
  --image acrspecdiff.azurecr.io/specdiff-api:latest \
  --target-port 8000 --ingress external \
  --secrets pg-conn=keyvaultref:https://kv-specdiff.vault.azure.net/secrets/PG-CONN \
            openai-key=keyvaultref:https://kv-specdiff.vault.azure.net/secrets/OPENAI-KEY \
  --env-vars PG_DSN=secretref:pg-conn \
             AZURE_OPENAI_ENDPOINT=https://oai-specdiff.openai.azure.com \
             AZURE_OPENAI_API_KEY=secretref:openai-key \
             AZURE_OPENAI_DEPLOYMENT=gpt-4o \
             AZURE_OPENAI_EMBED_DEPLOYMENT=embed \
             BLOB_ACCOUNT=stspecdiffprod \
  --min-replicas 1 --max-replicas 5 --cpu 1.0 --memory 2.0Gi
```

For Container Apps to pull the secrets from Key Vault, give its managed
identity the `Key Vault Secrets User` role on `kv-specdiff`.

## 3. Frontend

The simplest production deploy: serve `frontend/app.jsx` (compiled
with Vite) from Azure Static Web Apps:

```bash
# In repo root
npm create vite@latest frontend-build -- --template react
# Copy app.jsx into src/App.jsx, install deps, build
cd frontend-build && npm install && npm run build
# Deploy
az staticwebapp create -n swa-specdiff -g $RG -l $LOC \
  --source ./frontend-build/dist --location-tag <region>
```

Set `API_BASE` at build time to point to the Container App's ingress URL.

## 4. Persisting state (replace in-memory store)

The reference `api.py` keeps run state in `_RUNS`. To make it
multi-replica-safe, swap that dict for a Postgres-backed repository:

- On `/compare`, persist `spec_document`, `doc_block`, `comparison_run`,
  `block_diff`, `page_diff` rows.
- Keep page images in Blob Storage at `page-images/<doc_id>/page_NNNN.png`.
- The `/runs/{id}/...` endpoints become DB-backed reads — same shapes.

## 5. Auth & multi-tenancy

Wrap the API behind Entra ID with `azure-identity` middleware. For multi-tenant
deployments, add `tenant_id` to `document_family` and partition every query by it.

## 6. Cost notes

For 100 doc-pairs/month, ~50 pages each:
- Storage: ~10 GB → $0.20
- Postgres B2s: ~$25
- Container Apps: ~$15 (idle scaled)
- OpenAI (gpt-4o, ~30K tokens per pair): ~$15
- ACR Basic: $5
- Total: ~$60/mo

## 7. Observability

- App Insights on the Container App → request traces.
- Postgres `pg_stat_statements` for slow query analysis.
- Custom metric: `coverage_pct` per ingest — alert if it dips below 95%.
