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


    async inputPhone(phone: string) {

        await this.page.fill('', phone);
    }


    async inputAccount(account: string) {
        await this.page.fill('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(8) > td:nth-child(2) > input', account);
    }


    async verifyAccount() {
        
        const accountValue = await this.page.$eval('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(8) > td:nth-child(2) > input', (input) => (input as HTMLInputElement).value);

        
        await this.page.fill('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(9) > td:nth-child(2) > input', accountValue);
    }

    async inputAmount(amount: string) {
        await this.page.fill('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(11) > td:nth-child(2) > input', amount);
    }


    async selectAccount() {
        await this.page.selectOption('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(13) > td:nth-child(2) > select', { index: 1 });
    }

   
    async clickSendPayment() {
        await this.page.click('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(14) > td:nth-child(2) > input');
    }

  
}

export default BillPayPage;
