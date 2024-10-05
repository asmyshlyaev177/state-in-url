module.exports = {
  root: true,
  extends: ['plugin:maintainable/recommended'],
  plugins: ['maintainable', "react-hooks", 'prettier/recommended'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  // ignores: [
  //   "*.config.*",
  //   "*.env.",
  //   "*.env.*",
  // ],
  rules: {
    'max-len': 'off',
    complexity: ['error', 12],
    'prettier/prettier': [
      'warn',
      {},
      {
        usePrettierrc: false,
        plugins: ["eslint-plugin-prettier-plugin-tailwindcss"]
      },
    ]
  },
  overrides: [
    {
      files: [
        'Form-for-test.tsx',
      ],
      rules: {
        'max-lines-per-function': ['error', 200],
      },
    },
    {
      files: ['packages/example-react-router6/**/*'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
      },
    },
  ],
};
