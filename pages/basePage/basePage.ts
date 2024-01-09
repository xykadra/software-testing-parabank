// basePage.ts
import { Page } from "playwright";

class BasePage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openPage(url: string) {
        await this.page.goto(url);
        await this.page.waitForLoadState('networkidle');
    }

    async clickOnRegisterButton() {
        await this.page.click('#loginPanel > p:nth-child(3) > a');
    }

    async clickOnForgotLoginInfo(){
        await this.page.click('#loginPanel > p:nth-child(2) > a');
    }
}

export default BasePage;
