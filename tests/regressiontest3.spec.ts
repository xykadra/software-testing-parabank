// const { test, expect } = require('@playwright/test');
// import BasePage from "../pages/basePage/basePage.ts";
// import RegisterPage from "../pages/registerPage/registerPage.ts";



// test('Register Functionality Test - Wrong Confirm Password', async ({ page }) => {

//     const basePage = new BasePage(page);
//     const registerPage = new RegisterPage(page);

//     await basePage.openPage('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');

//     await basePage.clickOnRegisterButton();

//     await page.waitForTimeout(1000);

//     await registerPage.inputFirstName('Tyler');

//     await registerPage.inputLastName('Durden');

//     await registerPage.inputAddress('Neka adresa 99');

//     await registerPage.inputCity('Staten Island');

//     await registerPage.inputState('New York');

//     await registerPage.inputZipCode('10311');

//     await registerPage.inputPhone('333999');

//     await registerPage.inputSsn('123456');

//     await registerPage.inputUsername('bothtylers2');

//     await registerPage.inputPassword('pass123');

//     await registerPage.inputConfirmPassword('pass987');

//     await registerPage.clickRegisterButton();


//     await page.waitForTimeout(1000);


//     const errorVisible = await page.waitForSelector('#repeatedPassword\\.errors', { visible: true });

//     expect(errorVisible).toBeTruthy();
// });


// // test('Register Functionality Test - Right Confirm Password', async ({ page }) => {

// //     const basePage = new BasePage(page);
// //     const registerPage = new RegisterPage(page);

// //     await basePage.openPage('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');

// //     await basePage.clickOnRegisterButton();

// //     await page.waitForTimeout(1000);

// //     await registerPage.inputFirstName('Tyler');

// //     await registerPage.inputLastName('Durden');

// //     await registerPage.inputAddress('Neka adresa 99');

// //     await registerPage.inputCity('Staten Island');

// //     await registerPage.inputState('New York');

// //     await registerPage.inputZipCode('10311');

// //     await registerPage.inputPhone('333999');

// //     await registerPage.inputSsn('123456');

// //     await registerPage.inputUsername('bothtylers2');

// //     await registerPage.inputPassword('pass123');

// //     await registerPage.inputConfirmPassword('pass123');

// //     await registerPage.clickRegisterButton();


// //     await page.waitForTimeout(1000);

// //     const errorVisible = await page.waitForSelector('#rightPanel > h1', { visible: true });


// //     const errorMessageText = await page.innerText('#rightPanel > h1');
// //     expect(errorVisible).toBeTruthy();
// //     expect(errorMessageText).toContain('Welcome bothtylers');
// // });



