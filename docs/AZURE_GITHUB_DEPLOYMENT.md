# Azure GitHub Deployment

This deployment path creates the Azure infrastructure and deploys both parts of
Altrai from GitHub Actions. The resource group is expected to already exist;
the workflow creates or updates resources inside that resource group.

## What Gets Created

- Azure Container Registry
- Log Analytics workspace
- Azure Container Apps environment
- Backend Azure Container App
- Azure Database for PostgreSQL Flexible Server
- Storage account for future Blob-backed document storage
- Azure Static Web App for the React frontend

## GitHub Secrets

Add these repository secrets before running the workflow:

| Secret | Required | Notes |
|---|---:|---|
| `AZURE_CREDENTIALS` | Yes | JSON credentials for an Azure service principal. |
| `POSTGRES_ADMIN_LOGIN` | Yes | Example: `pgadmin`. |
| `POSTGRES_ADMIN_PASSWORD` | Yes | Strong PostgreSQL admin password. |
| `AZURE_OPENAI_ENDPOINT` | No | Required only for optional AI features. |
| `AZURE_OPENAI_API_KEY` | No | Required only for optional AI features. |
| `AZURE_OPENAI_DEPLOYMENT` | No | Chat deployment name. |
| `AZURE_OPENAI_VISION_DEPLOYMENT` | No | Vision-capable chat deployment for low-confidence page/table extraction. |
| `AZURE_OPENAI_API_VERSION` | No | Optional Azure OpenAI API version override. |
| `AZURE_OPENAI_EMBED_DEPLOYMENT` | No | Embedding deployment name, for example `text-embedding-3-small`. |

Optional repository variables:

| Variable | Default |
|---|---|
| `DOCULENS_AUTH_MODE` | `demo` |
| `DOCULENS_CORS_ORIGINS` | `*` |

## Create Azure Credentials

Run locally or in Azure Cloud Shell:

```bash
SUBSCRIPTION_ID="$(az account show --query id -o tsv)"

az ad sp create-for-rbac \
  --name sp-doculens-github \
  --role Contributor \
  --scopes /subscriptions/$SUBSCRIPTION_ID \
  --sdk-auth
```

Copy the JSON output into the `AZURE_CREDENTIALS` GitHub secret.

## Run The Workflow

In GitHub:

1. Open **Actions**.
2. Select **Azure full deploy**.
3. Click **Run workflow**.
4. Set:
   - `app_name`: `doculens`
   - `resource_group`: `rg-doculens-prod`
   - `location`: `eastus2`
   - `image_tag`: `latest` or the commit SHA
   - `deploy_schema`: `true`

The workflow deploys infra, builds/pushes the backend Docker image, updates the
Container App, applies `sql/schema.sql`, and deploys the frontend with
`VITE_API_BASE` pointing to the new backend URL.

The Bicep deployment is idempotent. If a resource with the generated name
already exists in the resource group, Azure updates it. If it does not exist,
Azure creates it.

## Optional AI Model Setup

The app can run without Azure OpenAI. When you are ready to test AI-assisted
document accuracy, deploy:

- one vision-capable chat deployment for low-confidence table/page extraction
  and set `AZURE_OPENAI_VISION_DEPLOYMENT`;
- one general chat deployment for summaries and future grounded Ask Document
  responses and set `AZURE_OPENAI_DEPLOYMENT`;
- one embedding deployment for retrieval and semantic search and set
  `AZURE_OPENAI_EMBED_DEPLOYMENT`.

Keep the deployment names stable. The backend reads deployment names from
environment variables, so model upgrades should be handled by changing the Azure
deployment behind the same name or updating the secret/variable during a
planned release.

## Manual Infra Deploy

You can also deploy only the infrastructure:

```bash
az deployment group create \
  --name doculens-infra \
  --resource-group rg-doculens-prod \
  --template-file infra/main.bicep \
  --parameters @infra/main.parameters.example.json
```

Use a copied parameter file with real secret values; do not commit passwords or
API keys.

## Production Notes

The Bicep file intentionally keeps the MVP easy to run. Before a stricter
production rollout, tighten:

- PostgreSQL firewall rules.
- `DOCULENS_CORS_ORIGINS` to the Static Web App URL.
- `DOCULENS_AUTH_MODE` to `header` behind Entra ID/App Gateway/API Management.
- Container App CPU/memory/replica settings based on load.
- Blob Storage integration for uploaded files and rendered page images.
