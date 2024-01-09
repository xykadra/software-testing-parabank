// registerPage.ts
import { Page } from "playwright";

class RegisterPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async isRegisterPageLoaded() {
        await this.page.waitForSelector('#register-form');
    }


    async inputFirstName(firstName: string) {
        await this.page.fill('#customer\\.firstName', firstName);
    }


    async inputLastName(lastName: string) {
        await this.page.fill('#customer\\.lastName', lastName);
    }

 
    async inputAddress(address: string) {
        await this.page.fill('#customer\\.address\\.street', address);
    }

    async inputCity(city: string) {
        await this.page.fill('#customer\\.address\\.city', city);
    }


    async inputState(state: string) {
        await this.page.fill('#customer\\.address\\.state', state);
    }


    async inputZipCode(zipCode: string) {
        await this.page.fill('#customer\\.address\\.zipCode', zipCode);
    }


    async inputPhone(phone: string) {
        await this.page.fill('#customer\\.phoneNumber', phone);
    }

   
    async inputSsn(ssn: string) {
        await this.page.fill('#customer\\.ssn', ssn);
    }

    
    async inputUsername(username: string) {
        await this.page.fill('#customer\\.username', username);
    }


    async inputPassword(password: string) {
        await this.page.fill('#customer\\.password', password);
    }

 
    async inputConfirmPassword(confirmPassword: string) {
        await this.page.fill('#repeatedPassword', confirmPassword);
    }

 
    async clickRegisterButton() {
        await this.page.click('#customerForm > table > tbody > tr:nth-child(13) > td:nth-child(2) > input');
        await this.page.waitForLoadState('networkidle');
    }

 

    
}

export default RegisterPage;
