import {
  Context,
  ContextPlugin,
  enableContextDevTools,
  enableDebugConsoleLogDrain,
  ManifestV2,
} from '@uniformdev/context';
import { enableGoogleGtagAnalytics } from '@uniformdev/context-gtag';
import { NextCookieTransitionDataStore } from '@uniformdev/context-next';
import { NextPageContext } from 'next';
import getConfig from 'next/config';

import manifest from './manifest.json';

const {
  publicRuntimeConfig: { gaTrackingId },
} = getConfig();

export function createUniformContext(serverContext?: NextPageContext) {
  const plugins: ContextPlugin[] = [enableContextDevTools(), enableDebugConsoleLogDrain('debug')];

  if (gaTrackingId) {
    plugins.push(enableGoogleGtagAnalytics({ emitAll: true }));
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
