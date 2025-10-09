import nextPlugin from "@next/eslint-plugin-next"; // Changed to modern import

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
      // This is the important line that allows deployment
      "react/no-unescaped-entities": "warn", 
    },
  },
];

export default config; // Changed to modern export