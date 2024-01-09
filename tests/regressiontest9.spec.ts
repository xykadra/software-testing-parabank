// const { test, expect } = require('@playwright/test');
// import LoginPage from "../pages/loginPage/loginPage";
// import HomePage from "../pages/homePage/homePage";
// import UpdateContactInfoPage from "../pages/updateContactInfoPage/updateContactInfoPage";




// test('Update contact info functionality test', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     const homePage = new HomePage(page);
//     const updateContactInfoPage = new UpdateContactInfoPage(page);


//     // Open the login page with the URL of your site
//     await loginPage.openLoginPage('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');

//     // Perform the login
//     await loginPage.typeUsername('adna1');
//     await loginPage.typePassword('adna1');
//     await loginPage.clickLoginButton();



//     await homePage.navigateToUpdateAccountInfo();
//     await page.waitForTimeout(2000);

//     await updateContactInfoPage.clickOnAddressTextField();

//     await updateContactInfoPage.updateAddress('Staten avenue 9');

//     await updateContactInfoPage.clickUpdateProfile();

//     await page.waitForTimeout(2000);


//     const errorVisible = await page.waitForSelector('#rightPanel > div > div > h1', { visible: true });


//     const errorMessageText = await page.innerText('#rightPanel > div > div > h1');
//     expect(errorVisible).toBeTruthy();
//     expect(errorMessageText).toContain('Profile Updated');

// });


