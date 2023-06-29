// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require("next/jest");

const createJestConfig = nextJest();

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  collectCoverageFrom: ["**/*.{ts}", "!**/*.d.ts", "!**/node_modules/**"],
};

module.exports = createJestConfig(customJestConfig);
