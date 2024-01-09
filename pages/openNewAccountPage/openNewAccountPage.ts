// newAccountPage.ts
import { Page } from "playwright";

class OpenNewAccountPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async checkTitle() {
        return this.page.textContent('#rightPanel > div > div > h1');
    }


    async submitAccountForm() {
        await this.page.click('#submit-account-button');
    }
    // newAccountPage.ts
    async openAccountTypeDropdown() {
        await this.page.click('#type');
    }

    async openExistingAccountDropDown() {
        await this.page.click('#fromAccountId');
    }

    // newAccountPage.ts
    async isOpenAccountTypeDropdownVisible() {
        // Adjust the selector based on your actual HTML structure representing the open dropdown
        return await this.page.isVisible('#type');
    }

    async hasExistingAccountTwoOptions() {
        const optionsCount = await this.page.$$eval('#fromAccountId > option', options => options.length);

        return optionsCount === 1;
    }


    async hasTwoAccountTypeOptions() {

        const optionsCount = await this.page.$$eval('#type > option', options => options.length);

        return optionsCount === 2;
    }


    // newAccountPage.ts
    async selectFirstOptionInAccountTypeDropdown() {
        // Open the account type dropdown
        await this.openAccountTypeDropdown();

        // Select the first option in the dropdown
        await this.page.selectOption('#type', { index: 0 }); // Assuming the first option is at index 1
    }


    async openExistingAccountDropDownAndClickFirstOption() {
        await this.page.click('#fromAccountId');
        await this.page.selectOption('#fromAccountId', { index: 0 }); // Adjust index as needed
    }


    // newAccountPage.ts
    async selectFirstOptionExistingAccountDropDown() {
        // Open the account type dropdown
        await this.openExistingAccountDropDown();

        // Select the first option in the dropdown
        await this.page.selectOption('#fromAccountId', { index: 0 }); // Assuming the first option is at index 1
    }

    async clickOpenNewAccount() {
        await this.page.click('#rightPanel > div > div > form > div > input');
    }

    

    // Add more methods for interacting with elements on the "Open New Account" page
}

export default OpenNewAccountPage;
