import AddToCartPage from '../pages/addToCartPage'
import LandingPage from '../pages/landingPage'
import { jestTimeout } from '../config/constants'
import { productCount } from '../common/selectors'
import { addAttach } from 'jest-html-reporters/helper'

// ### 1. Launch the Application
// ### 2. Select the Product
// ### 3. Add to Cart
// ### 4. Verify the message displayed that the product is added to Cart
// ### 5. Check the Product Count of the Cart

describe('Add to Cart', function () {
	beforeAll(async () => {
		jest.setTimeout(jestTimeout)
		await LandingPage.open()
	})

	it('Check the title and url on the Landing Page', async () => {
		await LandingPage.getTitle()
		await LandingPage.getUrl()
		await LandingPage.waitForPageLoad()
	})

	it('click on 20% discount listed Item', async () => {
		await AddToCartPage.printedChiffonDress()
		await AddToCartPage.clickChiffonDress()
	})

	it('Check whether the Shopping Cart is enabled and click item to add to Cart', async () => {
		await AddToCartPage.clickAddToCart()
	})

	it('Verify whether the product added to Cart message is displayed', async () => {
		await AddToCartPage.cartSuccessMessage()
		let isVisible = await AddToCartPage.cartAddedMessage()
		expect(isVisible).toBeTruthy()
	})

	it('Verify the product count from the Cart', async () => {
		let getProductCount = await AddToCartPage.cartCount()
		expect(getProductCount).toEqual(productCount)
	})

	it('Verify the product count from the Cart2', async () => {
		//Example attach with **string**
		const { addAttach } = require('jest-html-reporters/helper')
		const path = require('path')
		const filePath = path.resolve(__dirname, './test.jpg')

		const fs = require('fs')

		function fileExists(filePath) {
			try {
				// Check if the file exists
				fs.accessSync(filePath, fs.constants.F_OK)
				return true
			} catch (err) {
				// File doesn't exist or other error
				return false
			}
		}
		if (fileExists(filePath)) {
			console.log(`Screenshot exists at: ${filePath}`)
		} else {
			console.log(`Screenshot does not exist at: ${filePath}`)
		}

		await addAttach({
			attach: filePath,
			description: 'test google 2',
		})
		// await addAttach({
		// 	attach: filePath,
		// 	description: 'test google 2',
		// })
		// expect(1).toBe(2)
	})
})
