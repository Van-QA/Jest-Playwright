const { addAttach } = require('jest-html-reporters/helper')
const path = require('path')
const PlaywrightEnv =
	require('jest-playwright-preset/lib/PlaywrightEnvironment').default

class CustomEnv extends PlaywrightEnv {
	async setup() {
		await super.setup()
		// Your setup
	}

	async teardown() {
		// Your teardown
		await super.teardown()
	}

	async handleTestEvent(event) {
		await super.handleTestEvent(event)
		if (
			this.global.page !== undefined &&
			event.name === 'test_done' &&
			event.test.errors.length > 0
		) {
			const parentName = event.test.parent.name.replace(/\W/g, '-')
			const specName = event.test.name.replace(/\W/g, '-')

			const rootDir = path.resolve(__dirname, '..') // Go up one level to the project root
			const screenshotsDir = path.resolve(rootDir, 'screenshots')

			let filePath = `${screenshotsDir}/${parentName}_${specName}.jpg`
			await this.global.page.screenshot({
				path: filePath,
			})

			await addAttach({
				attach: filePath,
				description: event.test.name,
			})
		}
		await addAttach({
			attach: path.resolve(__dirname, './test.jpg'),
			description: "123",
		})
	}
}

module.exports = CustomEnv
