import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: ["../**/*.stories.tsx"],
  staticDirs: ["../public"],
  addons: ["@storybook/addon-links", "@storybook/addon-a11y", "@storybook/addon-docs"],

  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  }
};

export default config;
