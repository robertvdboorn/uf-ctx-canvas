import '../components';

import type { UniformCompositionNextPage } from '@uniformdev/canvas-next';
import { withUniformGetStaticPaths, withUniformGetStaticProps } from '@uniformdev/canvas-next/route';
import { createUniformApiEnhancer, UniformComposition, UniformSlot } from '@uniformdev/canvas-react';
import Head from 'next/head';

import { useSetViewportQuirk } from '../lib/useSetViewportQuirk';

export const getStaticPaths = withUniformGetStaticPaths();

export const getStaticProps = withUniformGetStaticProps({
  param: 'path',
});

const Page: UniformCompositionNextPage = ({ data }) => {
  const enhance = createUniformApiEnhancer({
    apiUrl: '/api/preview',
  });

  useSetViewportQuirk();

  return (
    <UniformComposition data={data} contextualEditingEnhancer={enhance} behaviorTracking="onLoad">
      <Head>
        <title>{`UniformConf${data?._name ? ` | ${data?._name}` : ''}`}</title>
        <meta name="description" content="UniformConf"></meta>
      </Head>
      <div>
        <UniformSlot name="header" />
        <UniformSlot name="content" />
        <UniformSlot name="footer" />
      </div>
    </UniformComposition>
  );
};

export default Page;
