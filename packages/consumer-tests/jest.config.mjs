// No transform: every test file here is plain JS, so Jest runs the same bytes
// Vitest does. .mjs needs --experimental-vm-modules (see check-consumers.mjs).
export default {
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/tests/**/*.test.?(m|c)js'],
  setupFiles: ['<rootDir>/jest.setup.cjs'],
  transform: {},
};
