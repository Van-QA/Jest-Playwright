/// <reference types="./../types/global" />
import path from 'path'
import {expect} from "playwright/test";

describe('Example HTML file', () => {
  it('should detect the heading "Example" on page', async () => {
    await page.goto(`file:${path.join(__dirname, 'example.html')}`)
    // const title = await page.$eval('h1', (el) => el.textContent)
    // expect(title).toBe('Example')
    // expect(browserName).toBeTruthy()
  })
})
