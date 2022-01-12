module.exports = {
  stories: [
    "../components/**/*.stories.@(mdx|js|jsx|ts|tsx)",
    "../pages/**/*.stories.@(mdx|js|jsx|ts|tsx)",
  ],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "storybook-addon-next-router",
    // TODO: This is a temporary workaround since Storybook version 6 does not support PostCSS v8
    // Needs to be checked again and eventually removed with version 7 of Storybook
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
        cssLoaderOptions: {
          modules: {
            auto: true,
          },
        },
      },
    },
  ],
};
