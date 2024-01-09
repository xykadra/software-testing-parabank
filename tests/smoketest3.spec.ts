
// const { test, expect } = require('@playwright/test');
// import LoginPage from "../pages/loginPage/loginPage";
// import HomePage from "../pages/homePage/homePage";
// import BillPayPage from "../pages/billPayPage/billPayPage";



// test('Transfer Funds feature testing', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     const homePage = new HomePage(page);
//     const billPayPage = new BillPayPage(page);


//     // Open the login page with the URL of your site
//     await loginPage.openLoginPage('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');

//     // Perform the login
//     await loginPage.typeUsername('mirza123');
//     await loginPage.typePassword('mirza123');
//     await loginPage.clickLoginButton();


//     //On the home page navigate to open new account

//     await homePage.navigateToBillPayPage();

//     await page.waitForTimeout(2000);


//     await billPayPage.inputPayeeName('Vito Corleone');

//     await billPayPage.inputAddress('110 Longfellow Avenue');

//     await billPayPage.inputCity('Staten Island');

//     await billPayPage.inputState('New York');

//     await billPayPage.inputZipCode('10311');


//     await billPayPage.inputPhone('4-5620');

//     await billPayPage.inputAccount('13566');

//     await billPayPage.verifyAccount('13566');

//     await billPayPage.inputAmount('90000');


//     await billPayPage.clickSendPayment();


//     await page.waitForTimeout(2000);

//     const h1Visible = await page.waitForSelector('#rightPanel > div > div:nth-child(2) > h1', { visible: true });

//     expect(h1Visible).toBeTruthy();
// });



