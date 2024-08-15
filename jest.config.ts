import type { Config } from 'jest';

/** @type {import('ts-jest').JestConfigWithTsJest} */
const config: Config ={
  testRegex: '(\\.|/)(test)\\.[jt]sx?$',
  preset: 'ts-jest',
  testEnvironment: './test.env.ts',
};

export default config
