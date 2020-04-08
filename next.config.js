module.exports = {
  exportTrailingSlash: true,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
};
