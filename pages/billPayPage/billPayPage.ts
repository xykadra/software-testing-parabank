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

    // Function to input payee name
    async inputPayeeName(name: string) {
        await this.page.fill('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(1) > td:nth-child(2) > input', name);
    }

    // Function to input payee address
    async inputAddress(address: string) {
        await this.page.fill('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > input', address);
    }

    // Function to input payee city
    async inputCity(city: string) {
        await this.page.fill('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > input', city);
    }

    // Function to input payee state
    async inputState(state: string) {
        await this.page.fill('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > input', state);
    }

    // Function to input payee zip code
    async inputZipCode(zipCode: string) {
        await this.page.fill('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(5) > td:nth-child(2) > input', zipCode);
    }

    // Function to input payee phone
    async inputPhone(phone: string) {

        await this.page.fill('', phone);
    }

    // Function to input payee account
    async inputAccount(account: string) {
        await this.page.fill('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(8) > td:nth-child(2) > input', account);
    }

    // Function to verify payee account
    async verifyAccount() {
        // Get the value from the account input field
        const accountValue = await this.page.$eval('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(8) > td:nth-child(2) > input', (input) => (input as HTMLInputElement).value);

        // Input the same value in the verification field
        await this.page.fill('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(9) > td:nth-child(2) > input', accountValue);
    }
    // Function to input payment amount
    async inputAmount(amount: string) {
        await this.page.fill('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(11) > td:nth-child(2) > input', amount);
    }

    // Function to select account from dropdown
    async selectAccount() {
        await this.page.selectOption('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(13) > td:nth-child(2) > select', { index: 1 });
    }

    // Function to click "Send Payment" button
    async clickSendPayment() {
        await this.page.click('#rightPanel > div > div:nth-child(1) > form > table > tbody > tr:nth-child(14) > td:nth-child(2) > input');
    }

    // Add more methods for interacting with elements on the Bill Payment page
}

export default BillPayPage;
