import { Page } from "playwright";

class TransferFundsPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickOnAmountField() {
        await this.page.click('#amount');
    }

    async selectFirstSource() {
        // Click on the #fromAccountId dropdown
        await this.page.click('#fromAccountId');

        // Select the first option in the dropdown
        await this.page.selectOption('#fromAccountId', { index: 0 }); // Assuming the first option is at index 1
    }

    async selectSecondSource() {
        // Click on the #toAccountId dropdown
        await this.page.click('#toAccountId');
       
        // Select the second option in the dropdown
        await this.page.selectOption('#toAccountId', { index: 1 }); // Assuming the second option is at index 2
    }

    async clickTransferButton() {
        // Click on the Transfer button
        await this.page.click('#rightPanel > div > div > form > div:nth-child(4) > input');
    }





    async insertMoneyToBeTransferred(amount: string) {
        await this.page.fill('#amount', amount);
    }

    // Add more methods for interacting with elements on the Transfer Funds page
}

export default TransferFundsPage;
