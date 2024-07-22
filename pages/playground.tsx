import '../components';

import { UniformPlayground } from '@uniformdev/canvas-react';

import { BackgroundDecorator } from '@/components/playgroundDecorators/BackgroundDecorator';
import { BreakpointDecorator } from '@/components/playgroundDecorators/BreakpointDecorator';

const PlaygroundPage = () => {
  return <UniformPlayground decorators={[BreakpointDecorator, BackgroundDecorator]} />;
};

export { PlaygroundPage as default };
