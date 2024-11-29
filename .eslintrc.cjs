module.exports = {
  root: true,
  extends: ['plugin:maintainable/recommended'],
  plugins: ['maintainable', "react-hooks", 'prettier/recommended', 'simple-import-sort',],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    "node_modules",
    "packages/example-nextjs14",
    "packages/example-nextjs15",
  ],
  globals: {
    vi: true
  },
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
    ],
    'react/display-name': 'off',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Packages. `react` related packages come first.
          ['^react', '^@?\\w'],
          // Side effect imports.
          ['^\\u0000'],
          // Internal packages.
          ['^(core|features)(/.*|$)'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_[^_].*$|^_$",
        "varsIgnorePattern": "^_[^_].*$|^_$",
        "caughtErrorsIgnorePattern": "^_[^_].*$|^_$"
      }
    ],
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
