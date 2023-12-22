module.exports = {
	preset: 'jest-playwright-preset',
	testEnvironment: './config/customEnv.js',
	verbose: true,
	testMatch: ['**/e2e/*.test.js'],
	reporters: [
		'default',
		[
			'jest-html-reporters',
			{
				publicPath: './report',
				filename: 'test-report.html',
				expand: true,
				pageTitle: 'Jest PlayWright',
				includeFailureMsg: true,
				includeScreenshots: true,
				includeConsoleLog: true,
				screenshots: {
					path: 'screenshots',
				},
			},
		],
	],
}
