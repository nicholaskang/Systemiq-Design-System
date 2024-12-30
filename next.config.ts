const nextConfig = {
  reactStrictMode: true,
  webpack: (config: import("webpack").Configuration) => {
    config.resolve = config.resolve || {};
    config.resolve.extensions = [
      ".ts",
      ".tsx",
      ".js",
      ".jsx",
      ".mts",
      ".mjs",
      ".cts",
      ".cjs",
    ];
    return config;
  },
};

module.exports = nextConfig;
