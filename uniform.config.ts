import type { CLIConfiguration } from '@uniformdev/cli';

require('dotenv').config();

const prodConfig: CLIConfiguration = {
  serialization: {
    entitiesConfig: {
      composition: {},
      pattern: {},
      redirect: {},
      component: {},
      category: {},
      quirk: {},
      test: {},
    },
    directory: 'uniform-data-prod-env.json',
  },
};

const devConfig: CLIConfiguration = {
  serialization: {
    entitiesConfig: {
      composition: {
        directory: 'data/canvas/compositions',
        push: {
          //disabled: true,
        },
      },
      componentPattern: {
        directory: 'data/canvas/component-patterns',
      },
      compositionPattern: {
        directory: 'data/canvas/composition-patterns',
      },
      component: {
        directory: 'data/canvas/components',
      },
    },
  },
};

module.exports = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
