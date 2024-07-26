import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './schema.graphql',
  generates: {
    '__generated__/types.ts': {
      plugins: ['typescript'],
      config: {
        enumsAsTypes: true, // required
        avoidOptionals: true, // required
      },
    },
    './__generated__/fabbrica.ts': {
      plugins: ['@mizdra/graphql-codegen-typescript-fabbrica'],
      config: {
        typesFile: './types', // required
      },
    },
  },
};

export default config;
