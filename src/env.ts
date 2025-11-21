import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod";

export const env = createEnv({
  server: {
    GRAPHQL_API_URL: z.url(
      "Please define `NEXT_PUBLIC_GRAPHQL_API_URL` in .env"
    )
  },
  experimental__runtimeEnv: true,
  onValidationError(issues) {
    issues.forEach((issue) => {
      console.error(`❌ ${issue.path} => ${issue.message}`);
    });
    process.exit();
  }
});
