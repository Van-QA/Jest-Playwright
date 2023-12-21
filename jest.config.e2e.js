module.exports = {
  preset: "jest-playwright-preset",
  testEnvironment: "./CustomEnv.js",
  runner: './runner.js',
  testPathIgnorePatterns: ['/node_modules/', 'lib'],
  // testMatch: ['**/tests/*.test.{ts,js}'],
  setupFilesAfterEnv: ['./lib/extends.js'],
  verbose: true,
}
