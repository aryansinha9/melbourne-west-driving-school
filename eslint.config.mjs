const nextPlugin = require("@next/eslint-plugin-next");

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,mts,cts,tsx,mtsx}"],
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "react/no-unescaped-entities": "warn",
    },
  },
];

module.exports = config;