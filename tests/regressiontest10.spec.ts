// const { test, expect } = require('@playwright/test');
// import LoginPage from "../pages/loginPage/loginPage";
// import HomePage from "../pages/homePage/homePage";
// import UpdateContactInfoPage from "../pages/updateContactInfoPage/updateContactInfoPage";


// test('Log out functionality test', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     const homePage = new HomePage(page);


//     // Open the login page with the URL of your site
//     await loginPage.openLoginPage('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');

//     // Perform the login
//     await loginPage.typeUsername('adna1');
//     await loginPage.typePassword('adna1');
//     await loginPage.clickLoginButton();

//     await page.waitForTimeout(2000);


//     await homePage.clickOnLogout();

//     await page.waitForTimeout(2000);


//     const errorVisible = await page.waitForSelector('#leftPanel > h2', { visible: true });


//     const errorMessageText = await page.innerText('#leftPanel > h2');
//     expect(errorVisible).toBeTruthy();
//     expect(errorMessageText).toContain('Customer Login');

// });


