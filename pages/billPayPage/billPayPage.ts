// billPaymentPage.ts
import { Page } from "playwright";

class BillPayPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async isBillPaymentPageLoaded() {
        await this.page.waitForSelector('#bill-payment-form');
    }


    async inputPayeeName(name: string) {
        await this.page.fill('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(1) > td:nth-child(2) > input', name);
    }


    async inputAddress(address: string) {
        await this.page.fill('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > input', address);
    }


    async inputCity(city: string) {
        await this.page.fill('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > input', city);
    }


    async inputState(state: string) {
        await this.page.fill('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > input', state);
    }


    async inputZipCode(zipCode: string) {
        await this.page.fill('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(5) > td:nth-child(2) > input', zipCode);
    }

    //phone number id is dynamic 
    async inputPhone(phone: string) {

        const phoneInput = await this.page.$('[ng-model="payee.phoneNumber"]');
        if (phoneInput) {
            await phoneInput.fill(phone);
        } else {
            console.error('Phone input element not found.');
        }
    }


    async inputAccount(account: string) {
        await this.page.fill('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(8) > td:nth-child(2) > input', account);
    }


    async verifyAccount(account: string) {

        await this.page.fill('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(9) > td:nth-child(2) > input', account);
    }

    async inputAmount(amount: string) {
        await this.page.fill('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(11) > td:nth-child(2) > input', amount);
    }


    async selectAccount() {
        await this.page.selectOption('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(13) > td:nth-child(2) > select', { index: 0 });
    }


    async clickSendPayment() {
        await this.page.click('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(14) > td:nth-child(2) > input');
    }


}

export default BillPayPage;
