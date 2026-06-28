#!/usr/bin/env bash
set -euo pipefail

APP_NAME="${APP_NAME:-doculens}"
RESOURCE_GROUP="${RESOURCE_GROUP:-rg-${APP_NAME}-sandbox}"
LOCATION="${LOCATION:-eastus2}"
IMAGE_TAG="${IMAGE_TAG:-$(git rev-parse --short HEAD 2>/dev/null || date +%Y%m%d%H%M%S)}"
POSTGRES_ADMIN_LOGIN="${POSTGRES_ADMIN_LOGIN:-pgadmin}"
AUTH_MODE="${DOCULENS_AUTH_MODE:-demo}"
MAX_UPLOAD_MB="${DOCULENS_MAX_UPLOAD_MB:-100}"
CLIENT_IP="${POSTGRES_CLIENT_IP:-}"

for tool in az jq npm npx openssl curl; do
  command -v "$tool" >/dev/null 2>&1 || {
    echo "Missing required tool: $tool" >&2
    exit 1
  }
done

POSTGRES_ADMIN_PASSWORD="${POSTGRES_ADMIN_PASSWORD:-$(openssl rand -base64 32 | tr -d '=+/[:space:]' | cut -c1-24)}"

az account show >/dev/null
az group create --name "$RESOURCE_GROUP" --location "$LOCATION" >/dev/null

DEPLOYMENT_NAME="${APP_NAME}-$(date +%Y%m%d%H%M%S)"
PARAMS=(
  appName="$APP_NAME"
  location="$LOCATION"
  postgresAdminLogin="$POSTGRES_ADMIN_LOGIN"
  postgresAdminPassword="$POSTGRES_ADMIN_PASSWORD"
  authMode="$AUTH_MODE"
  corsOrigins="${DOCULENS_CORS_ORIGINS:-}"
  maxUploadMb="$MAX_UPLOAD_MB"
  azureOpenAIEndpoint="${AZURE_OPENAI_ENDPOINT:-}"
  azureOpenAIKey="${AZURE_OPENAI_API_KEY:-}"
  azureOpenAIDeployment="${AZURE_OPENAI_DEPLOYMENT:-}"
  azureOpenAIEmbedDeployment="${AZURE_OPENAI_EMBED_DEPLOYMENT:-}"
)

if [ -n "$CLIENT_IP" ]; then
  PARAMS+=(postgresFirewallStartIp="$CLIENT_IP" postgresFirewallEndIp="${POSTGRES_CLIENT_END_IP:-$CLIENT_IP}")
fi

az deployment group create \
  --name "$DEPLOYMENT_NAME" \
  --resource-group "$RESOURCE_GROUP" \
  --template-file infra/main.bicep \
  --parameters "${PARAMS[@]}" \
  --query properties.outputs \
  --output json > /tmp/doculens-infra-outputs.json

ACR_NAME="$(jq -r '.acrName.value' /tmp/doculens-infra-outputs.json)"
ACR_LOGIN_SERVER="$(jq -r '.acrLoginServer.value' /tmp/doculens-infra-outputs.json)"
CONTAINER_APP_NAME="$(jq -r '.containerAppName.value' /tmp/doculens-infra-outputs.json)"
CONTAINER_APP_FQDN="$(jq -r '.containerAppFqdn.value' /tmp/doculens-infra-outputs.json)"
STATIC_WEB_APP_NAME="$(jq -r '.staticWebAppName.value' /tmp/doculens-infra-outputs.json)"

IMAGE="$ACR_LOGIN_SERVER/doculens-api:$IMAGE_TAG"
az acr build --registry "$ACR_NAME" --image "doculens-api:$IMAGE_TAG" .
az containerapp update --resource-group "$RESOURCE_GROUP" --name "$CONTAINER_APP_NAME" --image "$IMAGE" >/dev/null

healthy=0
for _ in {1..30}; do
  if curl -fsS "https://$CONTAINER_APP_FQDN/health" >/dev/null; then
    healthy=1
    break
  fi
  sleep 10
done
if [ "$healthy" != "1" ]; then
  echo "Backend did not become healthy: https://$CONTAINER_APP_FQDN/health" >&2
  exit 1
fi

(
  cd frontend
  npm install
  VITE_API_BASE="https://$CONTAINER_APP_FQDN" npm run build
)

SWA_TOKEN="$(az staticwebapp secrets list \
  --resource-group "$RESOURCE_GROUP" \
  --name "$STATIC_WEB_APP_NAME" \
  --query properties.apiKey \
  --output tsv)"

npx --yes @azure/static-web-apps-cli deploy ./frontend/dist \
  --deployment-token "$SWA_TOKEN" \
  --env production

cat <<EOF

DocuLens deployed.
Frontend: https://$(jq -r '.staticWebAppDefaultHostname.value' /tmp/doculens-infra-outputs.json)
Backend:  https://$CONTAINER_APP_FQDN
Resource group: $RESOURCE_GROUP
Postgres admin login: $POSTGRES_ADMIN_LOGIN
Postgres admin password was generated for this run if POSTGRES_ADMIN_PASSWORD was not set.
EOF
