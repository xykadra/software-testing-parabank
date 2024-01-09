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
        await this.page.click('#fromAccountId'); 
        await this.page.selectOption('#fromAccountId', { index: 0 }); // Assuming the first option is at index 1
    }

    async selectSecondSource() {
        await this.page.click('#toAccountId');
       
        await this.page.selectOption('#toAccountId', { index: 1 }); // Assuming the second option is at index 2
    }

    async clickTransferButton() {

        await this.page.click('#rightPanel > div > div > form > div:nth-child(4) > input');
    }

    async insertMoneyToBeTransferred(amount: string) {
        await this.page.fill('#amount', amount);
    }

    // Add more methods for interacting with elements on the Transfer Funds page
}

export default TransferFundsPage;
