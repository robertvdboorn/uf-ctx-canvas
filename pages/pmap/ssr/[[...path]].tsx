import '../../../components';

import type { UniformCompositionNextPage } from '@uniformdev/canvas-next';
import { withUniformGetServerSideProps } from '@uniformdev/canvas-next/project-map';
import { UniformComposition, UniformSlot } from '@uniformdev/canvas-react';
export const getServerSideProps = withUniformGetServerSideProps({
  prefix: '/pmap/ssr',
});
const page: UniformCompositionNextPage = (props) => {
  return (
    <UniformComposition data={props.data}>
      <UniformSlot name="header" />
      <UniformSlot name="content" />
      <UniformSlot name="footer" />
    </UniformComposition>
  );
};

export { page as default };
