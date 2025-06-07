// ルートeslint.config.js
const appAConfig = require("./apps/app-a/eslint.config.js");
const appBConfig = require("./apps/app-b/eslint.config.js");
const package1Config = require("./packages/package-1/eslint.config.js");
const package2Config = require("./packages/package-2/eslint.config.js");

module.exports = [
  ...appAConfig,
  ...appBConfig,
  ...package1Config,
  ...package2Config,
];
