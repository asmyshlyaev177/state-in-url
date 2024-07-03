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
    "complexity": ["error", 12]
  }
};
