# Azure GitHub Deployment

The `Azure full deploy` workflow provisions Azure resources, builds the backend
container, updates the Container App, waits for backend health, and deploys the
React frontend to Azure Static Web Apps.

## Required Secrets

| Secret | Notes |
|---|---|
| `AZURE_CREDENTIALS` | Service principal JSON from `az ad sp create-for-rbac --sdk-auth`. |
| `POSTGRES_ADMIN_LOGIN` | Example: `pgadmin`. |
| `POSTGRES_ADMIN_PASSWORD` | Strong PostgreSQL admin password. |

## Optional Secrets

| Secret | Notes |
|---|---|
| `AZURE_OPENAI_ENDPOINT` | Optional Azure OpenAI endpoint. |
| `AZURE_OPENAI_API_KEY` | Optional Azure OpenAI key. |
| `AZURE_OPENAI_DEPLOYMENT` | Optional chat deployment. |
| `AZURE_OPENAI_EMBED_DEPLOYMENT` | Optional embedding deployment. |

## Optional Variables

| Variable | Default |
|---|---|
| `DOCULENS_AUTH_MODE` | `demo` |
| `DOCULENS_CORS_ORIGINS` | Generated Static Web App URL |
| `DOCULENS_MAX_UPLOAD_MB` | `100` |

## Run

In GitHub Actions, run **Azure full deploy** with:

- `app_name`: resource prefix, for example `doculens`
- `resource_group`: existing or pre-created resource group
- `location`: Azure region
- `image_tag`: backend image tag
- optional Postgres client firewall IP range

The backend container applies `sql/schema.sql` on startup through
`DOCULENS_AUTO_INIT_DB=true`, so the workflow does not need direct PostgreSQL
network access.

## Service Principal

```bash
SUBSCRIPTION_ID="$(az account show --query id -o tsv)"

az ad sp create-for-rbac \
  --name sp-doculens-github \
  --role Contributor \
  --scopes /subscriptions/$SUBSCRIPTION_ID \
  --sdk-auth
```

Store the JSON output in `AZURE_CREDENTIALS`.

## Local Alternative

```bash
APP_NAME=doculens RESOURCE_GROUP=rg-doculens-sandbox LOCATION=eastus2 ./scripts/deploy-azure.sh
```
