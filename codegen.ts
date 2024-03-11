import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    //schema: process.env.NEXT_PUBLIC_GQL_HOST,
    schema: "http://localhost:8080/graphql",
    // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
    documents: ['src/**/*.{ts,tsx}'],
    generates: {
        './__generated__/': {
            preset: 'client',
            plugins: [],
            presetConfig: {
                gqlTagName: 'gql',
            }
        }
    },
    ignoreNoDocuments: true,
};

export default config;