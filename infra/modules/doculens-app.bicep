targetScope = 'resourceGroup'

param appName string
param location string = resourceGroup().location
param postgresAdminLogin string

@secure()
param postgresAdminPassword string

param containerImage string
param authMode string = 'demo'
param corsOrigins string = '*'
param azureOpenAIEndpoint string = ''

@secure()
param azureOpenAIKey string = ''

param azureOpenAIDeployment string = ''
param azureOpenAIEmbedDeployment string = ''
param tags object = {}

var normalizedAppName = toLower(replace(appName, '-', ''))
var suffix = uniqueString(resourceGroup().id)
var acrName = take('${normalizedAppName}${suffix}', 50)
var logAnalyticsName = take('${appName}-logs-${suffix}', 63)
var managedEnvironmentName = take('${appName}-env-${suffix}', 32)
var containerAppName = take('${appName}-api', 32)
var postgresServerName = take(toLower('${appName}-pg-${suffix}'), 63)
var storageAccountName = take('st${normalizedAppName}${suffix}', 24)
var staticWebAppName = take('${appName}-web-${suffix}', 40)
var databaseName = 'postgres'
var containerSecrets = concat([
  {
    name: 'acr-password'
    value: acr.listCredentials().passwords[0].value
  }
  {
    name: 'pgpassword'
    value: postgresAdminPassword
  }
], empty(azureOpenAIKey) ? [] : [
  {
    name: 'azure-openai-api-key'
    value: azureOpenAIKey
  }
])
var containerEnvVars = concat([
  {
    name: 'PORT'
    value: '8000'
  }
  {
    name: 'DOCULENS_AUTH_MODE'
    value: authMode
  }
  {
    name: 'DOCULENS_CORS_ORIGINS'
    value: corsOrigins
  }
  {
    name: 'PGHOST'
    value: postgres.properties.fullyQualifiedDomainName
  }
  {
    name: 'PGPORT'
    value: '5432'
  }
  {
    name: 'PGDATABASE'
    value: databaseName
  }
  {
    name: 'PGUSER'
    value: postgresAdminLogin
  }
  {
    name: 'PGPASSWORD'
    secretRef: 'pgpassword'
  }
  {
    name: 'AZURE_OPENAI_ENDPOINT'
    value: azureOpenAIEndpoint
  }
  {
    name: 'AZURE_OPENAI_DEPLOYMENT'
    value: azureOpenAIDeployment
  }
  {
    name: 'AZURE_OPENAI_EMBED_DEPLOYMENT'
    value: azureOpenAIEmbedDeployment
  }
  {
    name: 'AZURE_STORAGE_ACCOUNT'
    value: storage.name
  }
], empty(azureOpenAIKey) ? [] : [
  {
    name: 'AZURE_OPENAI_API_KEY'
    secretRef: 'azure-openai-api-key'
  }
])

resource acr 'Microsoft.ContainerRegistry/registries@2023-07-01' = {
  name: acrName
  location: location
  sku: {
    name: 'Basic'
  }
  tags: tags
  properties: {
    adminUserEnabled: true
  }
}

resource logAnalytics 'Microsoft.OperationalInsights/workspaces@2023-09-01' = {
  name: logAnalyticsName
  location: location
  tags: tags
  properties: {
    sku: {
      name: 'PerGB2018'
    }
    retentionInDays: 30
  }
}

resource containerEnv 'Microsoft.App/managedEnvironments@2024-03-01' = {
  name: managedEnvironmentName
  location: location
  tags: tags
  properties: {
    appLogsConfiguration: {
      destination: 'log-analytics'
      logAnalyticsConfiguration: {
        customerId: logAnalytics.properties.customerId
        sharedKey: logAnalytics.listKeys().primarySharedKey
      }
    }
  }
}

resource postgres 'Microsoft.DBforPostgreSQL/flexibleServers@2023-12-01-preview' = {
  name: postgresServerName
  location: location
  tags: tags
  sku: {
    name: 'Standard_B1ms'
    tier: 'Burstable'
  }
  properties: {
    administratorLogin: postgresAdminLogin
    administratorLoginPassword: postgresAdminPassword
    version: '16'
    storage: {
      storageSizeGB: 32
    }
    backup: {
      backupRetentionDays: 7
      geoRedundantBackup: 'Disabled'
    }
    network: {
      publicNetworkAccess: 'Enabled'
    }
    highAvailability: {
      mode: 'Disabled'
    }
  }
}

resource allowAzureServices 'Microsoft.DBforPostgreSQL/flexibleServers/firewallRules@2023-12-01-preview' = {
  parent: postgres
  name: 'AllowAzureServices'
  properties: {
    startIpAddress: '0.0.0.0'
    endIpAddress: '0.0.0.0'
  }
}

resource allowCloudShellAndAdmin 'Microsoft.DBforPostgreSQL/flexibleServers/firewallRules@2023-12-01-preview' = {
  parent: postgres
  name: 'AllowAllForMvpSetup'
  properties: {
    startIpAddress: '0.0.0.0'
    endIpAddress: '255.255.255.255'
  }
}

resource storage 'Microsoft.Storage/storageAccounts@2023-05-01' = {
  name: storageAccountName
  location: location
  tags: tags
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
  properties: {
    allowBlobPublicAccess: false
    minimumTlsVersion: 'TLS1_2'
  }
}

resource staticWebApp 'Microsoft.Web/staticSites@2023-01-01' = {
  name: staticWebAppName
  location: location
  tags: tags
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  properties: {
    allowConfigFileUpdates: true
  }
}

resource containerApp 'Microsoft.App/containerApps@2024-03-01' = {
  name: containerAppName
  location: location
  tags: tags
  identity: {
    type: 'SystemAssigned'
  }
  properties: {
    managedEnvironmentId: containerEnv.id
    configuration: {
      activeRevisionsMode: 'Single'
      ingress: {
        external: true
        targetPort: 8000
        transport: 'auto'
        allowInsecure: false
      }
      registries: [
        {
          server: acr.properties.loginServer
          username: acrName
          passwordSecretRef: 'acr-password'
        }
      ]
      secrets: containerSecrets
    }
    template: {
      containers: [
        {
          name: 'api'
          image: containerImage
          env: containerEnvVars
          resources: {
            cpu: json('1.0')
            memory: '2Gi'
          }
        }
      ]
      scale: {
        minReplicas: 1
        maxReplicas: 5
        rules: [
          {
            name: 'http-concurrency'
            http: {
              metadata: {
                concurrentRequests: '20'
              }
            }
          }
        ]
      }
    }
  }
}

output acrName string = acr.name
output acrLoginServer string = acr.properties.loginServer
output containerAppName string = containerApp.name
output containerAppFqdn string = containerApp.properties.configuration.ingress.fqdn
output postgresServerName string = postgres.name
output postgresHost string = postgres.properties.fullyQualifiedDomainName
output staticWebAppName string = staticWebApp.name
output staticWebAppDefaultHostname string = staticWebApp.properties.defaultHostname
