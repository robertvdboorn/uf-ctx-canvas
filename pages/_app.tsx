import '../styles/style.css';

import { UniformAppProps } from '@uniformdev/context-next';
import { UniformContext } from '@uniformdev/context-react';

import { createUniformContext } from '../lib/context/uniformContext';

const clientContext = createUniformContext();

export default function UniformConfApp({ Component, pageProps, serverUniformContext }: UniformAppProps) {
  return (
    <UniformContext context={serverUniformContext ?? clientContext}>
      <Component {...pageProps} />
    </UniformContext>
  );
}
