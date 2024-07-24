/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    projectId: process.env.UNIFORM_PROJECT_ID,
    apiKey: process.env.UNIFORM_API_KEY,
    apiHost: process.env.UNIFORM_CLI_BASE_URL || 'https://uniform.app',
    edgeApiHost: process.env.UNIFORM_CLI_BASE_EDGE_URL,
    previewSecret: process.env.UNIFORM_PREVIEW_SECRET,
  },
  publicRuntimeConfig: {
    gaTrackingId: process.env.GA4_ID,
    insightsEndpoint: process.env.UNIFORM_INSIGHTS_ENDPOINT,
    insightsApiKey: process.env.UNIFORM_INSIGHTS_KEY,
    edgeEnabled: false,
  },
};

module.exports = nextConfig;
