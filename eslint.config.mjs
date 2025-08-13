import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // Allow explicit/implicit any usage
      "@typescript-eslint/no-explicit-any": "off",
      // Don’t fail build on apostrophes inside JSX text
      "react/no-unescaped-entities": "off",
      // Keep these as warnings to avoid breaking builds
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ],
      "react-hooks/exhaustive-deps": "warn",
      // Some files intentionally use expressions; don’t fail build
      "@typescript-eslint/no-unused-expressions": "off",
    },
  },
];

export default eslintConfig;
