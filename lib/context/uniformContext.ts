import {
  Context,
  ContextPlugin,
  enableContextDevTools,
  enableDebugConsoleLogDrain,
  enableUniformInsights,
  ManifestV2,
} from "@uniformdev/context";
import { enableGoogleGtagAnalytics } from "@uniformdev/context-gtag";
import { NextCookieTransitionDataStore } from "@uniformdev/context-next";
import { NextPageContext } from "next";
import getConfig from "next/config";

import manifest from "./manifest.json";

const {
  publicRuntimeConfig: { gaTrackingId, insightsEndpoint, insightsApiKey },
} = getConfig();

export function createUniformContext(serverContext?: NextPageContext) {
  const plugins: ContextPlugin[] = [
    enableContextDevTools(),
    enableDebugConsoleLogDrain("debug"),
  ];

  if (gaTrackingId) {
    plugins.push(enableGoogleGtagAnalytics({ emitAll: true }));
  }

  // adding the insights plugin client-side only
  if (typeof window !== "undefined" && window.document) {
    plugins.push(
      // running against a local endpoint, will use edge middleware to rewrite to the actual endpoint
      enableUniformInsights({
        endpoint: {
          host: insightsEndpoint,
          apiKey: insightsApiKey,
          type: "api",
        },
      })
    );
  }

  const context = new Context({
    defaultConsent: true,
    manifest: manifest as ManifestV2,
    transitionStore: new NextCookieTransitionDataStore({
      serverContext,
    }),
    plugins: plugins,
  });

  return context;
}
