/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: [".storybook", "components", "data", "lib", "pages", "types"],
  },
};
