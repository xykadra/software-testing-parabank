// const { test, expect } = require('@playwright/test');
// import LoginPage from "../pages/loginPage/loginPage";
// import HomePage from "../pages/homePage/homePage";

// import AccountOverviewPage from "../pages/accountOverviewPage/accountOverviewPage";



// test('Account Overview Functionality Test', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     const homePage = new HomePage(page);
//     const accountOverviewPage = new AccountOverviewPage(page);


//     // Open the login page with the URL of your site
//     await loginPage.openLoginPage('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');

//     // Perform the login
//     await loginPage.typeUsername('adna1');
//     await loginPage.typePassword('adna1');
//     await loginPage.clickLoginButton();


//     await homePage.navigateToAccountOverview();

//     await accountOverviewPage.clickOnAccountLink();

//     await page.waitForTimeout(2000);

//     await accountOverviewPage.clickOnActivityPeriodDropdown();

//     await accountOverviewPage.clickOnTypeDropdown();

//     await accountOverviewPage.clickGoButton();
//     await page.waitForTimeout(2000);


//     const errorVisible = await page.waitForSelector('#transactionTable > thead > tr > th:nth-child(2)', { visible: true });

   
//     const errorMessageText = await page.innerText('#transactionTable > thead > tr > th:nth-child(2)');
//     expect(errorVisible).toBeTruthy();
//     expect(errorMessageText).toContain('Transaction');

// });


