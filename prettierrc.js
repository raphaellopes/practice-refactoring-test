module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:node/recommended",
    "turbo",
    "plugin:prettier/recommended",
  ],
  plugins: [
    "node",
    "simple-import-sort",
    // "import",
    "prettier",
  ],
  rules: {
    "prettier/prettier": "error",
    "block-scoped-var": "error",
    eqeqeq: "error",
    "no-var": "error",
    "prefer-const": "error",
    "eol-last": "error",
    "prefer-arrow-callback": "error",
    "no-trailing-spaces": "error",
    "no-restricted-properties": [
      "error",
      {
        object: "describe",
        property: "only",
      },
      {
        object: "it",
        property: "only",
      },
    ],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^\\u0000"],
          [
            "^react",
            "@fullcalendar/react", // Import this before rest because order matters
            "^@?\\w",
          ],
          ["^(@lib|@hooks|@contexts)(/.*|$)"],
          ["^(@components)(/.*|$)"],
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          ["^.+\\.s?css$"],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
    // "import/first": "error",
    // "import/newline-after-import": "error",
    // "import/no-duplicates": "error",

    /* Temporarily disable some rules to make it easier to merge monorepo PR */
    "node/no-unpublished-import": "warn",
    "node/no-extraneous-import": "warn",
    "node/no-missing-import": "warn",
    "node/no-unsupported-features/es-syntax": "warn",
    "node/no-unsupported-features/node-builtins": "warn",
    "no-process-exit": "warn",
    "no-empty": "warn",
    "no-case-declarations": "warn",
    eqeqeq: "warn",
    "no-duplicate-case": "warn",
    "no-unsafe-optional-chaining": "warn",
    "no-prototype-builtins": "warn",
    "no-fallthrough": "warn",
    "no-useless-escape": "warn",
    "no-empty-pattern": "warn",
    "no-undef": "warn",
    "prefer-arrow-callback": [
      "warn",
      {
        allowNamedFunctions: true,
      },
    ],
  },
  ignorePatterns: ["build/**/*.*"],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: ["plugin:@typescript-eslint/recommended"],
      rules: {
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-warning-comments": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
            ignoreRestSiblings: true,
          },
        ],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/camelcase": "off",
        "node/no-missing-import": "off",
        "node/no-empty-function": "off",
        "node/no-unsupported-features/es-syntax": "off",
        "node/no-missing-require": "off",
        "node/shebang": "off",
        "no-dupe-class-members": "off",
        "require-atomic-updates": "off",

        /* Temporarily disable some rules to make it easier to merge monorepo PR */
        "@typescript-eslint/no-explicit-any": "warn",
      },
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
      },
    },
  ],
};
