targetScope = 'resourceGroup'

@description('Short, lowercase application name used as the resource-name prefix.')
param appName string = 'doculens'

@description('Azure region for all resources.')
param location string = resourceGroup().location

@description('PostgreSQL administrator login.')
param postgresAdminLogin string = 'pgadmin'

@secure()
@description('PostgreSQL administrator password.')
param postgresAdminPassword string

@description('Container image deployed initially. The GitHub workflow updates this after building.')
param containerImage string = 'mcr.microsoft.com/azuredocs/containerapps-helloworld:latest'

@description('DocuLens auth mode. Use demo for MVP, header when fronted by an auth gateway.')
param authMode string = 'demo'

@description('Comma-separated allowed CORS origins. Use your Static Web App URL for production.')
param corsOrigins string = '*'

@description('Optional Azure OpenAI endpoint.')
param azureOpenAIEndpoint string = ''

@secure()
@description('Optional Azure OpenAI API key.')
param azureOpenAIKey string = ''

@description('Optional Azure OpenAI chat deployment name.')
param azureOpenAIDeployment string = ''

@description('Optional Azure OpenAI embedding deployment name.')
param azureOpenAIEmbedDeployment string = ''

@description('Resource tags.')
param tags object = {
  app: appName
  managedBy: 'bicep'
}

module app './modules/doculens-app.bicep' = {
  name: '${appName}-app'
  params: {
    appName: appName
    location: location
    postgresAdminLogin: postgresAdminLogin
    postgresAdminPassword: postgresAdminPassword
    containerImage: containerImage
    authMode: authMode
    corsOrigins: corsOrigins
    azureOpenAIEndpoint: azureOpenAIEndpoint
    azureOpenAIKey: azureOpenAIKey
    azureOpenAIDeployment: azureOpenAIDeployment
    azureOpenAIEmbedDeployment: azureOpenAIEmbedDeployment
    tags: tags
  }
}

output resourceGroup string = resourceGroup().name
output acrName string = app.outputs.acrName
output acrLoginServer string = app.outputs.acrLoginServer
output containerAppName string = app.outputs.containerAppName
output containerAppFqdn string = app.outputs.containerAppFqdn
output postgresServerName string = app.outputs.postgresServerName
output postgresHost string = app.outputs.postgresHost
output staticWebAppName string = app.outputs.staticWebAppName
output staticWebAppDefaultHostname string = app.outputs.staticWebAppDefaultHostname
