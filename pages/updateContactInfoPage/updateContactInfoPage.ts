// updateContactInfoPage.ts
import { Page } from "playwright";

class UpdateContactInfoPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async clickOnAddressTextField() {
        await this.page.click('#customer\\.address\\.street');
    }

    async updateAddress(newAddress: string) {
        await this.page.fill('#customer\\.address\\.street', newAddress);
    }

    async clickUpdateProfile() {
        await this.page.click('#rightPanel > div > div > form > table > tbody > tr:nth-child(8) > td:nth-child(2) > input');
        await this.page.waitForLoadState('networkidle');
    }

}

export default UpdateContactInfoPage;
