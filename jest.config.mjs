/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  testRegex: '(\\.|/)(test)\\.[jt]sx?$',
  preset: 'ts-jest',
  // testEnvironment: 'node',
  testEnvironment: 'jsdom'
};
