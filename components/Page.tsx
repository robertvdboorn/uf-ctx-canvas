import { type ComponentProps, registerUniformComponent, UniformSlot } from '@uniformdev/canvas-react';
import Head from 'next/head';

type PageProps = ComponentProps;
const Page = ({ component }: PageProps) => {
  const title = '_name' in component ? component._name : '';

  return (
    <>
      <Head>
        <title>{`UniformConf${title ? ` | ${title}` : ''}`}</title>
        <meta name="description" content="UniformConf"></meta>
      </Head>
      <div>
        <UniformSlot name="header" />
        <UniformSlot name="content" />
        <UniformSlot name="footer" />
      </div>
    </>
  );
};

registerUniformComponent({
  type: 'page',
  component: Page,
});
export default Page;
