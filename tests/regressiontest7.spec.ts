// const { test, expect } = require('@playwright/test');
// import LoginPage from "../pages/loginPage/loginPage";
// import HomePage from "../pages/homePage/homePage";
// import RequestLoanPage from "../pages/requestLoanPage/requestLoanPage";



// test('Loan Request', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     const homePage = new HomePage(page);
//     const requestLoanPage = new RequestLoanPage(page);


//     // Open the login page with the URL of your site
//     await loginPage.openLoginPage('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');

//     // Perform the login
//     await loginPage.typeUsername('adna1');
//     await loginPage.typePassword('adna1');
//     await loginPage.clickLoginButton();


//     await homePage.navigateToRequestLoanPage();

//     await requestLoanPage.loanAmountTextField('1000');

//     await requestLoanPage.downPaymentTextField('100');

//     await requestLoanPage.clickOnAccountDropDownAndSelectAccount();

//     await requestLoanPage.clickApplyButton();

//     await page.waitForTimeout(2000);


//     // Wait for the error message to be visible
//     const errorVisible = await page.waitForSelector('#rightPanel > div > div > h1', { visible: true });

//     // Expect the error message to contain 'Error!'
//     const errorMessageText = await page.innerText('#rightPanel > div > div > h1');
//     expect(errorVisible).toBeTruthy();
//     expect(errorMessageText).toContain('Loan Request Processed');

// });


