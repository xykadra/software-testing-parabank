// requestLoanPage.ts
import { Page } from "playwright";

class RequestLoanPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async isRequestLoanPageLoaded() {
        await this.page.waitForSelector('#rightPanel > div > div > h1');
    }

    async loanAmountTextField(amount: string) {
        await this.page.fill('#amount', amount);
    }

   
    async downPaymentTextField(amount: string) {
        await this.page.fill('#downPayment', amount);
    }


    async clickOnAccountDropDownAndSelectAccount() {

        const dropdownSelector = '#fromAccountId';

        await this.page.click(dropdownSelector);

        await this.page.selectOption(dropdownSelector, { index: 0 });
    }


    async clickApplyButton() {
        await this.page.click('#rightPanel > div > div > form > table > tbody > tr:nth-child(4) > td:nth-child(2) > input');
    }


}

export default RequestLoanPage;
