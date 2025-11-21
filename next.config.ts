import type { NextConfig } from "next";
import "./src/env";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    browserDebugInfoInTerminal: true,
    swcPlugins: [
      [
        "@swc-contrib/plugin-graphql-codegen-client-preset",
        { artifactDirectory: "./src/generated", gqlTagName: "gql" }
      ]
    ]
  },
  turbopack: {
    rules: {
      "*.svg": { loaders: ["@svgr/webpack"], as: "*.js" }
    }
  }
};

export default nextConfig;
