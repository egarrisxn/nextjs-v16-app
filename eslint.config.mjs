import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";

const eslintConfig = defineConfig([
  // 1. Next.js Core Web Vitals Rules
  ...nextVitals,
  // 2. Next.js TypeScript Rules
  ...nextTs,
  // 3. Custom Rules (Equivalent to your old compat.config rules)
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  // 4. Overriding default ignores of eslint-config-next
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  // 5. Prettier (MUST be last to turn off conflicting formatting rules)
  prettier,
]);

export default eslintConfig;
