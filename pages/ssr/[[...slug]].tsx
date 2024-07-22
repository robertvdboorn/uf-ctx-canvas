import '../../components';

import type { UniformCompositionNextPage } from '@uniformdev/canvas-next';
import { createUniformApiEnhancer, UniformComposition, UniformSlot } from '@uniformdev/canvas-react';
import Head from 'next/head';

export { getServerSideProps } from '@uniformdev/canvas-next/slug';
const Page: UniformCompositionNextPage = ({ data }) => {
  const enhance = createUniformApiEnhancer({
    apiUrl: '/api/preview',
  });

  return (
    <UniformComposition data={data} contextualEditingEnhancer={enhance}>
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
