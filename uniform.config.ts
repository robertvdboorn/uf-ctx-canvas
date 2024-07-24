import { CLIConfiguration, uniformConfig } from '@uniformdev/cli/config';

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

const devConfig: CLIConfiguration = uniformConfig({
  preset: "all",
  overrides: {
    serializationConfig: {
      directory: "./uniform/serialization",
      format: "yaml",
    },
  },
});

module.exports = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
