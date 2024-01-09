// homePage.ts
import { Page } from "playwright";

class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async isHomePageLoaded() {

    await this.page.waitForSelector('#rightPanel > div > div > h1');
  }

  async clickOnLogout(){
    await this.page.click('#leftPanel > ul > li:nth-child(8) > a');
  }

  async getWelcomeMessage() {

    return this.page.textContent('#rightPanel > div > div > h1');
  }

  async navigateToOpenNewAccount() {
    await this.page.click('#leftPanel > ul > li:nth-child(1) > a');
  }

  async navigateToTrasverFundsPage() {
    await this.page.click('#leftPanel > ul > li:nth-child(3) > a');
  }

  async navigateToBillPayPage() {
    await this.page.click('#leftPanel > ul > li:nth-child(4) > a');
  }

  async navigateToRequestLoanPage(){
    await this.page.click('#leftPanel > ul > li:nth-child(7) > a');
  }


  async navigateToAccountOverview(){
    await this.page.click('#leftPanel > ul > li:nth-child(2) > a');
  }


  async navigateToUpdateAccountInfo(){
    await this.page.click('#leftPanel > ul > li:nth-child(6) > a');
  }

}

export default HomePage;
