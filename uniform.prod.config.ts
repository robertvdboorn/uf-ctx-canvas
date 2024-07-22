import type { CLIConfiguration } from '@uniformdev/cli';

require('dotenv').config();

const config: CLIConfiguration = {
  serialization: {
    entitiesConfig: {
      component: {},
      composition: {
        mode: 'create',
      },
      redirect: {
        mode: 'createOrUpdate',
      },
    },
    directory: 'uniform-data-prod-ts',
    mode: 'mirror',
  },
};

module.exports = config;
