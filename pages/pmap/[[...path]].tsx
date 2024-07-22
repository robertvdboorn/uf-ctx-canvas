import '../../components';

import { RouteClient } from '@uniformdev/canvas';
import type { UniformCompositionNextPage } from '@uniformdev/canvas-next';
import { withUniformGetStaticPaths, withUniformGetStaticProps } from '@uniformdev/canvas-next/route';
import { UniformComposition, UniformSlot } from '@uniformdev/canvas-react';
import { ProjectMapClient } from '@uniformdev/project-map';

import { useSetViewportQuirk } from '../../lib/useSetViewportQuirk';

export const getStaticPaths = withUniformGetStaticPaths({
  prefix: '/pmap',
  projectMapId: process.env.UNIFORM_PROJECT_MAP_ID,
  client: process.env.UNIFORM_PROJECT_WITH_PJM_ID
    ? new ProjectMapClient({
        apiKey: process.env.UNIFORM_API_KEY,
        projectId: process.env.UNIFORM_PROJECT_WITH_PJM_ID,
        apiHost: process.env.UNIFORM_CLI_BASE_URL,
      })
    : undefined,
});

export const getStaticProps = withUniformGetStaticProps({
  param: 'path',
  client: process.env.UNIFORM_PROJECT_WITH_PJM_ID
    ? new RouteClient({
        apiKey: process.env.UNIFORM_API_KEY,
        projectId: process.env.UNIFORM_PROJECT_WITH_PJM_ID,
        edgeApiHost: process.env.UNIFORM_CLI_BASE_EDGE_URL,
      })
    : undefined,
});

const Page: UniformCompositionNextPage = ({ data }) => {
  useSetViewportQuirk();

  return (
    <UniformComposition data={data} contextualEditingDefaultPlaceholder={({ id }) => `${id} goes here`}>
      <UniformSlot name="header" />
      <UniformSlot name="content" />
      <UniformSlot name="footer" />
    </UniformComposition>
  );
};

export { Page as default };
