import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";
import type { IGraphQLConfig } from "graphql-config";

loadEnvConfig(import.meta.dirname);

const config: IGraphQLConfig = {
  documents: "src/operations/**/*.gql",
  schema: [
    {
      [process.env.GRAPHQL_API_URL as string]: {
        headers: {
          Accept: "application/json"
        }
      }
    }
  ],

  extensions: {
    codegen: {
      overwrite: true,
      ignoreNoDocuments: true,

      generates: {
        "src/generated/graphql.ts": {
          plugins: [
            "typescript",
            "typescript-operations",
            "typed-document-node"
          ],
          config: {
            useTypeImports: true,
            defaultScalarType: "unknown"
          }
        }
      }
    } satisfies CodegenConfig
  }
};

export default config;
