module.exports = {
  root: true,
  extends: ["plugin:maintainable/recommended"],
  plugins: ["maintainable"],
    parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    "max-len": "off",
    "no-secrets/no-secrets": "off",
    "sonarjs/no-empty-collection": "off",
    "complexity": ["error", 12],
  },
  overrides: [
    {
      "files": ["packages/example-nextjs/src/app/Form-for-test.tsx"],
      "rules": {
        "max-lines-per-function": ["error", 200]
      }
    }
  ]

};
