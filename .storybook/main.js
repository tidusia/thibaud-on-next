const path = require("path");

module.exports = {
  stories: [
    "../components/**/*.stories.@(mdx|js|jsx|ts|tsx)",
    "../pages/**/*.stories.@(mdx|js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  presets: [path.resolve(__dirname, "./next-preset.js")],
};
