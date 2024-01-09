// accountOverviewPage.ts
import { Page } from "playwright";

class AccountOverviewPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // ... existing functions ...

  // Function to click on an account link in the account table
  async clickOnAccountLink() {
    await this.page.click('#accountTable > tbody > tr:nth-child(1) > td:nth-child(1) > a');
    await this.page.waitForLoadState('networkidle');
  }


  async clickOnActivityPeriodDropdown() {
    await this.page.selectOption('#month', { index: 1 }); // Assuming index 0 corresponds to January
  }

  // Function to click on the type dropdown and select an option
  async clickOnTypeDropdown() {
    await this.page.selectOption('#transactionType', 'Debit'); // Replace 'Debit' with the actual option text
  }

  // Function to click on the "Go" button
  async clickGoButton() {
    await this.page.click('#rightPanel > div > div:nth-child(2) > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > input');
    await this.page.waitForLoadState('networkidle');
  }

}

export default AccountOverviewPage;
