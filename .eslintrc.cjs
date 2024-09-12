module.exports = {
  root: true,
  extends: ["plugin:maintainable/recommended"],
  plugins: ["maintainable"],
    parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  // ignores: [
  //   "*.config.*",
  //   "*.env.",
  //   "*.env.*",
  // ],
  rules: {
    "max-len": "off",
    "complexity": ["error", 12],
  },
  overrides: [
    {
      "files": ["packages/example-nextjs14/src/app/Form-for-test.tsx", "packages/example-nextjs15/src/app/Form-for-test.tsx"],
      "rules": {
        "max-lines-per-function": ["error", 200]
      }
    },
    {
      "files": ["packages/example-react-router6/**/*"],
      "rules": {
        "@typescript-eslint/no-unused-vars": "warn"
      }
    }
  ]

};
