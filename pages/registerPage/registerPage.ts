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

    // Function to input first name
    async inputFirstName(firstName: string) {
        await this.page.fill('#customer\\.firstName', firstName);
    }

    // Function to input last name
    async inputLastName(lastName: string) {
        await this.page.fill('#customer\\.lastName', lastName);
    }

    // Function to input address
    async inputAddress(address: string) {
        await this.page.fill('#customer\\.address\\.street', address);
    }

    // Function to input city
    async inputCity(city: string) {
        await this.page.fill('#customer\\.address\\.city', city);
    }

    // Function to input state
    async inputState(state: string) {
        await this.page.fill('#customer\\.address\\.state', state);
    }

    // Function to input zip code
    async inputZipCode(zipCode: string) {
        await this.page.fill('#customer\\.address\\.zipCode', zipCode);
    }

    // Function to input phone number
    async inputPhone(phone: string) {
        await this.page.fill('#customer\\.phoneNumber', phone);
    }

    // Function to input SSN
    async inputSsn(ssn: string) {
        await this.page.fill('#customer\\.ssn', ssn);
    }

    // Function to input username
    async inputUsername(username: string) {
        await this.page.fill('#customer\\.username', username);
    }

    // Function to input password
    async inputPassword(password: string) {
        await this.page.fill('#customer\\.password', password);
    }

    // Function to input confirm password
    async inputConfirmPassword(confirmPassword: string) {
        await this.page.fill('#repeatedPassword', confirmPassword);
    }

    // Function to click on the register button
    async clickRegisterButton() {
        await this.page.click('#customerForm > table > tbody > tr:nth-child(13) > td:nth-child(2) > input');
        await this.page.waitForLoadState('networkidle');
    }

    // Assuming this is inside a function in your page class
    async checkForErrors() {
        // Wait for the element with a class containing '.errors' to be present
        const errorsElement = await this.page.waitForSelector('*:not(html):not(body) [class*=.errors]', { state: 'attached' });

        // Check if the element is present
        if (errorsElement) {
            console.log('Errors found on the page');
            // You can perform additional actions or assertions here if needed
        } else {
            console.log('No errors found on the page');
        }
    }

    // Add more methods as needed...
}

export default RegisterPage;
