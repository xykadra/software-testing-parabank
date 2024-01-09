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


    async inputFirstName(firstName: string) {
        await this.page.fill('#firstName', firstName);
    }


    async inputLastName(lastName: string) {
        await this.page.fill('#lastName', lastName);
    }


    async inputAddress(address: string) {
        await this.page.fill('#address\\.street', address);
    }


    async inputCity(city: string) {
        await this.page.fill('#address\\.city', city);
    }


    async inputState(state: string) {
        await this.page.fill('#address\\.state', state);
    }

    async inputZipCode(zipCode: string) {
        await this.page.fill('#address\\.zipCode', zipCode);
    }


   
    async inputSsn(ssn: string) {
        await this.page.fill('#ssn', ssn);
    }


    async clickFindMyLoginInfo() {
        await this.page.click('#lookupForm > table > tbody > tr:nth-child(8) > td:nth-child(2) > input');
        await this.page.waitForLoadState('networkidle');
    }


}

export default ForgotLoginInfo;

