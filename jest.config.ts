import type { Config } from "jest";

/** @type {import('ts-jest').JestConfigWithTsJest} */
const config: Config = {
  testRegex: "(\\.|/)(test)\\.[jt]sx?$",
  preset: "ts-jest",
  testEnvironment: "jsdom",
  // testEnvironment: "./test.env.ts",
  collectCoverage: true,
  coverageReporters: ["json", "html", "lcov"],
  coverageDirectory: "./coverage-reports",
};

export default config;
