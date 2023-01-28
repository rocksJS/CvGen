module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "@angular-eslint", "html"],
  rules: {
    "import/no-extraneous-dependencies": 0,
    "no-empty-function": ["error", { allow: ["constructors"] }],
    "@angular-eslint/no-empty-lifecycle-method": "error",
    "import/named": "off",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
};
