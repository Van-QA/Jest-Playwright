module.exports = {
  preset: "jest-playwright-preset",
  testEnvironment: "./CustomEnv.js",
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "./html-test-report",
        filename: "test-report.html",
        expand: true,
      },
    ],
  ],
};
