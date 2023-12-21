module.exports = {
  preset: "jest-playwright-preset",
  testEnvironment: "./CustomEnv.js",
  testMatch: ['**/e2e/*.test.js'],
  verbose: true,
}
