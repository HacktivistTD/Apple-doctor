/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildPath: "build/index.js",
  serverModuleFormat: "cjs", // Keep using CommonJS, or change to "esm" to opt-in to ESM
  future: {
    v2_errorBoundary: true, // Opt-in to new error boundary API
    v2_normalizeFormMethod: true, // Opt-in to new formMethod API
    v2_meta: true, // Opt-in to new meta API
    v2_headers: true, // Opt-in to new route headers API
    v2_routeConvention: true, // Opt-in to new file system route convention
    v2_dev: true, // Opt-in to new dev server behavior
  },
};
