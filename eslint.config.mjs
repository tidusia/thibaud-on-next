import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import { includeIgnoreFile } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import storybook from "eslint-plugin-storybook";
import jest from "eslint-plugin-jest";
import jestDom from "eslint-plugin-jest-dom";
import prettier from "eslint-config-prettier/flat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

const eslintConfig = defineConfig([
  includeIgnoreFile(gitignorePath),
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    ignores: ["!.storybook"],
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  pluginJs.configs.recommended,
  ...storybook.configs["flat/recommended"],
  ...storybook.configs["flat/csf"],
  ...storybook.configs["flat/csf-strict"],
  ...storybook.configs["flat/addon-interactions"],
  { ...jestDom.configs["flat/recommended"] },
  {
    files: ["**/*.test.{js,ts,jsx,tsx}", "**/*.spec.{js,ts,jsx,tsx}"],
    ...jest.configs["flat/recommended"],
  },
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/**/*.{js,ts,jsx,tsx}"],
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
    },
  },
  {
    rules: {
      "no-console": "warn",
      "react/no-unescaped-entities": "off",
      "storybook/no-title-property-in-meta": "off",
      "@typescript-eslint/no-require-imports": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
]);

export default eslintConfig;
