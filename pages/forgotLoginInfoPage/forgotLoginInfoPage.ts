// registerPage.ts
import { Page } from "playwright";

class ForgotLoginInfo {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async isRegisterPageLoaded() {
        await this.page.waitForSelector('#register-form');
    }

    // Function to input first name
    async inputFirstName(firstName: string) {
        await this.page.fill('#firstName', firstName);
    }

    // Function to input last name
    async inputLastName(lastName: string) {
        await this.page.fill('#lastName', lastName);
    }

    // Function to input address
    async inputAddress(address: string) {
        await this.page.fill('#address\\.street', address);
    }

    // Function to input city
    async inputCity(city: string) {
        await this.page.fill('#address\\.city', city);
    }

    // Function to input state
    async inputState(state: string) {
        await this.page.fill('#address\\.state', state);
    }

    // Function to input zip code
    async inputZipCode(zipCode: string) {
        await this.page.fill('#address\\.zipCode', zipCode);
    }


    // Function to input SSN
    async inputSsn(ssn: string) {
        await this.page.fill('#ssn', ssn);
    }

    // Function to click on the register button
    async clickFindMyLoginInfo() {
        await this.page.click('#lookupForm > table > tbody > tr:nth-child(8) > td:nth-child(2) > input');
        await this.page.waitForLoadState('networkidle');
    }


}

export default ForgotLoginInfo;

