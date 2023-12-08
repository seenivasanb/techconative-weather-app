const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  coveragePathIgnorePatterns: [
    "<rootDir>/lib/",
    "<rootDir>/mocks/",
    "<rootDir>/components/ui/",
  ],
};
module.exports = createJestConfig(customJestConfig);
