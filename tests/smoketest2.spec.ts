// const { test, expect } = require('@playwright/test');
// import LoginPage from "../pages/loginPage/loginPage";
// import HomePage from "../pages/homePage/homePage";
// import TransferFundsPage from "../pages/transferFundsPage/transferFundsPage.ts";



// test('Transfer Funds feature testing', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   const homePage = new HomePage(page);
//   const transferFundsPage = new TransferFundsPage(page);


//   // Open the login page with the URL of your site
//   await loginPage.openLoginPage('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');

//   // Perform the login
//   await loginPage.typeUsername('mirza');
//   await loginPage.typePassword('mirza');
//   await loginPage.clickLoginButton();


//   //On the home page navigate to open new account

//   await homePage.navigateToTrasverFundsPage();

//   await transferFundsPage.clickOnAmountField();

//   await page.waitForTimeout(2000);
//   await transferFundsPage.insertMoneyToBeTransferred('200');




//   await transferFundsPage.selectFirstSource();

//   await transferFundsPage.selectSecondSource();

//   await transferFundsPage.clickTransferButton();

//   await page.waitForTimeout(2000);

//   const h1Visible = await page.waitForSelector('#rightPanel > div > div > h1', { visible: true });

//   expect(h1Visible).toBeTruthy();
// });



