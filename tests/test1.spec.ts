
// const { test, expect } = require('@playwright/test');
// import LoginPage from "../pages/loginPage/loginPage";
// import HomePage from "../pages/homePage/homePage";
// import OpenNewAccountPage from "../pages/openNewAccountPage/openNewAccountPage";
// import NewAccountPage from "../pages/openNewAccountPage/openNewAccountPage";


// // test('Navigate to “Open New Account” link', async ({ page }) => {
// //   const loginPage = new LoginPage(page);
// //   const homePage = new HomePage(page);
// //   const openNewAccountPage = new OpenNewAccountPage(page);

// //   // Open the login page with the URL of your site
// //   await loginPage.openLoginPage('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');

// //   // Perform the login
// //   await loginPage.typeUsername('mirza');
// //   await loginPage.typePassword('mirza');
// //   await loginPage.clickLoginButton();


// //   //On the home page navigate to open new account

// //   await homePage.navigateToOpenNewAccount();

// //   const isNewAccountPageOpened = await openNewAccountPage.checkTitle();

// //   expect(isNewAccountPageOpened).toContain('Open New Account');
// // });

// // test('Check if dropdown has two options', async ({ page }) => {
// //   const loginPage = new LoginPage(page);
// //   const homePage = new HomePage(page);
// //   const openNewAccountPage = new OpenNewAccountPage(page);

// //   // Open the login page with the URL of your site
// //   await loginPage.openLoginPage('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');

// //   // Perform the login
// //   await loginPage.typeUsername('mirza');
// //   await loginPage.typePassword('mirza');
// //   await loginPage.clickLoginButton();


// //   //On the home page navigate to open new account

// //   await homePage.navigateToOpenNewAccount();

// //   await openNewAccountPage.openAccountTypeDropdown();

// //   // Check if the dropdown is open
// //   const hawTwoOptions = await openNewAccountPage.hasTwoAccountTypeOptions();
// //   expect(hawTwoOptions).toBe(true);
// // });

// // test('Select first option in "account type" dropdown', async ({ page }) => {
// //   const loginPage = new LoginPage(page);
// //   const homePage = new HomePage(page);
// //   const openNewAccountPage = new OpenNewAccountPage(page);

// //   // Open the login page with the URL of your site
// //   await loginPage.openLoginPage('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');

// //   // Perform the login
// //   await loginPage.typeUsername('mirza');
// //   await loginPage.typePassword('mirza');
// //   await loginPage.clickLoginButton();


// //   //On the home page navigate to open new account

// //   await homePage.navigateToOpenNewAccount();

// //   await openNewAccountPage.selectFirstOptionInAccountTypeDropdown();

// //   const selectedOptionValue = await page.$eval('#type', input => input.value);
// //   expect(selectedOptionValue).toBe('1'); 
// // });


// // test('Click on Existing Account Dropdown', async ({ page }) => {
// //   const loginPage = new LoginPage(page);
// //   const homePage = new HomePage(page);
// //   const openNewAccountPage = new OpenNewAccountPage(page);

// //   // Open the login page with the URL of your site
// //   await loginPage.openLoginPage('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');

// //   // Perform the login
// //   await loginPage.typeUsername('mirza');
// //   await loginPage.typePassword('mirza');
// //   await loginPage.clickLoginButton();


// //   //On the home page navigate to open new account

// //   await homePage.navigateToOpenNewAccount();

// //   await openNewAccountPage.openExistingAccountDropDown();

// //    // Check if the dropdown is open
// //    const hawTwoOptions = await openNewAccountPage.hasExistingAccountTwoOptions();
// //    expect(hawTwoOptions).toBe(true);
// // });

// // test('Select Existing Account Number', async ({ page }) => {
// //   const loginPage = new LoginPage(page);
// //   const homePage = new HomePage(page);
// //   const openNewAccountPage = new OpenNewAccountPage(page);

// //   // Open the login page with the URL of your site
// //   await loginPage.openLoginPage('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');

// //   // Perform the login
// //   await loginPage.typeUsername('mirza');
// //   await loginPage.typePassword('mirza');
// //   await loginPage.clickLoginButton();


// //   //On the home page navigate to open new account

// //   await homePage.navigateToOpenNewAccount();

// //   await openNewAccountPage.openExistingAccountDropDown();

// //   await openNewAccountPage.selectFirstOptionInAccountTypeDropdown();

// //   const selectedOptionValue = await page.$eval('#type', input => input.value);
// //   expect(selectedOptionValue).toBe('1'); 
// // });


// test('Open New Account', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   const homePage = new HomePage(page);
//   const openNewAccountPage = new OpenNewAccountPage(page);

//   // Open the login page with the URL of your site
//   await loginPage.openLoginPage('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');

//   // Perform the login
//   await loginPage.typeUsername('mirza');
//   await loginPage.typePassword('mirza');
//   await loginPage.clickLoginButton();


//   //On the home page navigate to open new account

//   await homePage.navigateToOpenNewAccount();

//   await openNewAccountPage.openAccountTypeDropdown();
//   await openNewAccountPage.selectFirstOptionInAccountTypeDropdown();


//   await page.waitForTimeout(1000);

//   await openNewAccountPage.openExistingAccountDropDown();
//   await openNewAccountPage.selectFirstOptionExistingAccountDropDown();

//   await openNewAccountPage.clickOpenNewAccount();

//   await page.waitForTimeout(2000);
//   const h1Visible = await page.waitForSelector('#rightPanel > div > div > h1', { visible: true });

//   expect(h1Visible).toBeTruthy();
// });



