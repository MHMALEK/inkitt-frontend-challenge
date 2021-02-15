module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      arrowFunctions: true,
    },
  },
  plugins: ["react", "@typescript-eslint"],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        paths: ["./src"],
      },
    },
  },
  rules: {
    "no-unused-vars": "off",
    "react/prop-types": "off",
    "comma-dangle": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-inner-declarations": "off",
    "class-methods-use-this": "off",
    "import/prefer-default-export": "off",
    '@typescript-eslint/no-unused-vars': 0,
  },
};
