// const { test, expect } = require('@playwright/test');
// import BasePage from "../pages/basePage/basePage.ts";
// import ForgotLoginInfo from "../pages/forgotLoginInfoPage/forgotLoginInfoPage.ts";



// test('Register Functionality Test - Wrong Confirm Password', async ({ page }) => {

//     const basePage = new BasePage(page);
//     const forgotLoginInfoPage = new ForgotLoginInfo(page);

//     await basePage.openPage('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');

//     await basePage.clickOnForgotLoginInfo();

//     await forgotLoginInfoPage.inputFirstName('Marla');

//     await forgotLoginInfoPage.inputLastName('Singer');

//     await forgotLoginInfoPage.inputAddress('Park avenue 13');

//     await forgotLoginInfoPage.inputCity('LA');

//     await forgotLoginInfoPage.inputState('California');

//     await forgotLoginInfoPage.inputZipCode('3100');

//     await forgotLoginInfoPage.inputSsn('693936');

//     await forgotLoginInfoPage.clickFindMyLoginInfo();


//     await page.waitForTimeout(1000);

//     const errorVisible = await page.waitForSelector('#rightPanel > p', { visible: true });

//     const errorMessageText = await page.innerText('#rightPanel > p');
//     expect(errorVisible).toBeTruthy();
//     expect(errorMessageText).toContain('The customer information provided could not be found');
// });

