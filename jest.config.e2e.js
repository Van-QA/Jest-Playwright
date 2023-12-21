module.exports = {
  preset: "jest-playwright-preset",
  testEnvironment: "./CustomEnvironment.js",
  runner: './runner.js',
  testPathIgnorePatterns: ['/node_modules/', 'lib'],
  testMatch: ['**/e2e/**/*.test.{ts,js}'],
  setupFilesAfterEnv: ['./lib/extends.js'],
  verbose: true,
}
