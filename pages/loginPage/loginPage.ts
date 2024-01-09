import { Page } from "playwright";

class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openLoginPage(url: string) {
    await this.page.goto(url);
    await this.page.waitForLoadState("networkidle");
  }

  async typeUsername(username: string) {
    await this.page.fill('#loginPanel > form > div:nth-child(2) > input', username);
  }

  async typePassword(password: string) {
    await this.page.fill('#loginPanel > form > div:nth-child(4) > input', password);
  }

  async clickLoginButton() {
    await this.page.click('#loginPanel > form > div:nth-child(5) > input');
  }

 
}

export default LoginPage;
