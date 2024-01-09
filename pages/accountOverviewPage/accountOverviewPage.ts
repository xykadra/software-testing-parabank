// accountOverviewPage.ts
import { Page } from "playwright";

class AccountOverviewPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickOnAccountLink() {
    await this.page.click('#accountTable > tbody > tr:nth-child(1) > td:nth-child(1) > a');
    await this.page.waitForLoadState('networkidle');
  }


  async clickOnActivityPeriodDropdown() {
    await this.page.selectOption('#month', { index: 1 }); // Assuming index 0 corresponds to January
  }

 
  async clickOnTypeDropdown() {
    await this.page.selectOption('#transactionType', 'Debit'); // Replace 'Debit' with the actual option text
  }


  async clickGoButton() {
    await this.page.click('#rightPanel > div > div:nth-child(2) > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > input');
    await this.page.waitForLoadState('networkidle');
  }

}

export default AccountOverviewPage;
