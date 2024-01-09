// const { test, expect } = require('@playwright/test');
// import BasePage from "../pages/basePage/basePage.ts";
// import HomePage from "../pages/homePage/homePage.ts";
// import RegisterPage from "../pages/registerPage/registerPage.ts";




// test('Register Functionality Test - OK Registration', async ({ page }) => {

//     const basePage = new BasePage(page);
//     const registerPage = new RegisterPage(page);
//     const homePage = new HomePage(page);

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

//     await registerPage.inputUsername('glow15');

//     await registerPage.inputPassword('pass123');

//     await registerPage.inputConfirmPassword('pass123');

//     await registerPage.clickRegisterButton();

//     await homePage.clickOnLogout();

//     //Registering again and checking if it is showing error username exists

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

//     await registerPage.inputUsername('glow15');

//     await registerPage.inputPassword('pass123');

//     await registerPage.inputConfirmPassword('pass123');

//     await registerPage.clickRegisterButton();



//     await page.waitForTimeout(2000);

//     const errorVisible = await page.waitForSelector('#customer\.username\.errors', { visible: true });

//     expect(errorVisible).toBeTruthy();
// });




// test('Registering with existing username functionality test', async ({ page }) => {

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

//     await registerPage.inputUsername('glow999');

//     await registerPage.inputPassword('pass123');

//     await registerPage.inputConfirmPassword('pass123');

//     await registerPage.clickRegisterButton();


//     await page.waitForTimeout(1000);


//     const errorVisible = await page.waitForSelector('#rightPanel > h1', { visible: true });
//     const errorMessageText = await page.innerText('#rightPanel > h1');
//     expect(errorVisible).toBeTruthy();
//     expect(errorMessageText).toContain('Welcome glow999');
// });



