# Azure Deployment

This repo deploys with Azure Bicep plus one Bash wrapper. It creates:

- Azure Container Registry
- Log Analytics
- Container Apps environment
- Backend Container App
- PostgreSQL Flexible Server with `vector`, `pg_trgm`, and `uuid-ossp`
- Storage account
- Static Web App frontend

The backend initializes `sql/schema.sql` on startup when
`DOCULENS_AUTO_INIT_DB=true`, so there is no separate schema command.

## Fast Sandbox Deploy

Prerequisites:

- Azure CLI logged in with `az login`
- `jq`
- Node.js/npm
- `npx`
- `openssl`

Commands:

```bash
export APP_NAME=doculens
export RESOURCE_GROUP=rg-doculens-sandbox
export LOCATION=eastus2

./scripts/deploy-azure.sh
```

Optional AI settings:

```bash
export AZURE_OPENAI_ENDPOINT="https://<resource>.openai.azure.com"
export AZURE_OPENAI_API_KEY="<key>"
export AZURE_OPENAI_DEPLOYMENT="gpt-4o"
export AZURE_OPENAI_EMBED_DEPLOYMENT="text-embedding-3-small"
```

Optional Postgres client firewall rule:

```bash
export POSTGRES_CLIENT_IP="$(curl -fsS https://api.ipify.org)"
./scripts/deploy-azure.sh
```

## Naming

Set only `APP_NAME`, `RESOURCE_GROUP`, and `LOCATION` for most deployments.
Bicep derives globally unique resource names from the resource group id.

Example:

```bash
APP_NAME=altrai-dev RESOURCE_GROUP=rg-altrai-dev LOCATION=eastus2 ./scripts/deploy-azure.sh
```

## Security Defaults

- ACR admin user is disabled.
- Postgres does not create an allow-all firewall rule.
- CORS defaults to the generated Static Web App hostname.
- User headers are trusted only in demo mode or when
  `DOCULENS_TRUST_USER_HEADERS=true`.
- API tracebacks and internal result paths stay hidden unless
  `DOCULENS_EXPOSE_DIAGNOSTICS=true`.

`DOCULENS_AUTH_MODE=demo` is intended for private sandbox use. For production,
put the backend behind a trusted auth gateway and set:

```bash
export DOCULENS_AUTH_MODE=header
```

## CI/CD

Use `.github/workflows/azure-full-deploy.yml` for GitHub-hosted deployment.
Required secrets:

- `AZURE_CREDENTIALS`
- `POSTGRES_ADMIN_LOGIN`
- `POSTGRES_ADMIN_PASSWORD`

Optional secrets:

- `AZURE_OPENAI_ENDPOINT`
- `AZURE_OPENAI_API_KEY`
- `AZURE_OPENAI_DEPLOYMENT`
- `AZURE_OPENAI_EMBED_DEPLOYMENT`

Quality gates run from `.github/workflows/build.yml`:

- Python syntax compile
- security regression scan
- Bicep build
- frontend build

Local equivalent:

```bash
./scripts/checks.sh
```
