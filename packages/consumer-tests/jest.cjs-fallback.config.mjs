// The no-flag route for Jest: map the package name onto the emitted .cjs build
// instead of letting Jest require() ESM. Runs without --experimental-vm-modules
// on purpose — that is the whole point of the recipe.
export default {
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/tests-cjs/**/*.test.cjs'],
  transform: {},
  moduleNameMapper: {
    '^state-in-url$': '<rootDir>/node_modules/state-in-url/dist/index.cjs',
    '^state-in-url/utils$': '<rootDir>/node_modules/state-in-url/dist/utils.cjs',
    '^state-in-url/(.*)$': '<rootDir>/node_modules/state-in-url/dist/$1/index.cjs',
  },
};
