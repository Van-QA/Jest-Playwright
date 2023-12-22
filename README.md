### Playwright with Jest Test Automation Framework

Design Page Objects and run Tests using JavaScript 

### Run application

Clone the repository 
 
```bash
git clone https://github.com/Van-QA/Jest-Playwright
``` 

Install dependencies
 
```bash
Install Node modules: npm i
```

## Globals

- `browserName` <[string]> - name of the current browser (chromium, firefox or webkit)
- `deviceName` <[string]> - name of the current device
- `browser` <[[Browser](https://playwright.dev/docs/api/class-browser/)]> - Playwright browser instance
- `context` <[[Context](https://playwright.dev/docs/api/class-browsercontext/)]> - a new Playwright context instance for each new test file
- `page` <[[Page](https://playwright.dev/docs/api/class-page/)]> - Playwright page instance (since a new context for every test file also creates a new page for it)

All of them are available globally in each Jest test. If you are using ESLint and JavaScript, its recommend to use it in combination with the [eslint-plugin-jest-playwright](https://github.com/playwright-community/eslint-plugin-jest-playwright).


Run test

```bash
npm test
```

Folder Structure
 
    ├── ...
    │
    ├── pages                               # Generic functionality for tests
    │   |
    │   ├── basePage.js                     # Base page testing functionality
    │   ├── landingPage.js                  # Landing page testing functionality
    │   ├── addToCartPage.js                # Add To Cart page testing functionality
    │   ├── productPage.js                  # Product page testing functionality
    │
    ├── tests                               # Test suite
    │    ├── addToCart.test.js              # Automated Test Script     
    │    ├── productNames.test.js           # Automated Test Script
    │    ├── toggleProductColour.test.js    # Automated Test Script
    │
    │
    │── constants.js                           # Confiuguration JavaScript File
    │
    │
    ├── common                       
    │    ├──selectors.js                    # HTML and CSS identifier for elements to test
    │               
    │
    └─── html-test-report   
              ├──test-report.html           #  Test report of for the tests executed


To View HTML Report

```bash
html-test-report :
        |
        ├── test-report.html - Right Click and Reveal in File Explorer (OR) Finder     
```

