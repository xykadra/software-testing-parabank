// const { test, expect } = require('@playwright/test');
// import LoginPage from "../pages/loginPage/loginPage";
// import HomePage from "../pages/homePage/homePage";
// import TransferFundsPage from "../pages/transferFundsPage/transferFundsPage.ts";



// test('Error loging in test', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     const homePage = new HomePage(page);
//     const transferFundsPage = new TransferFundsPage(page);


//     // Open the login page with the URL of your site
//     await loginPage.openLoginPage('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');

//     // Perform the login
//     await loginPage.typeUsername('glow9');
//     await loginPage.typePassword('1235');
//     await loginPage.clickLoginButton();


//     // Wait for the error message to be visible
//     const errorVisible = await page.waitForSelector('#rightPanel > h1', { visible: true });

//     // Expect the error message to contain 'Error!'
//     const errorMessageText = await page.innerText('#rightPanel > h1');
//     expect(errorVisible).toBeTruthy();
//     expect(errorMessageText).toContain('Error!');
// });


// test('User logs in successfully', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     const homePage = new HomePage(page);
//     const transferFundsPage = new TransferFundsPage(page);


//     // Open the login page with the URL of your site
//     await loginPage.openLoginPage('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');

//     // Perform the login
//     await loginPage.typeUsername('glow9');
//     await loginPage.typePassword('1234');
//     await loginPage.clickLoginButton();


//     // Wait for the error message to be visible
//     const errorVisible = await page.waitForSelector('#rightPanel > div > div > h1', { visible: true });

//     // Expect the error message to contain 'Error!'
//     const errorMessageText = await page.innerText('#rightPanel > div > div > h1');
//     expect(errorVisible).toBeTruthy();
//     expect(errorMessageText).toContain('Accounts Overview');
// });



