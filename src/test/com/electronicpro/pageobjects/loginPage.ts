import { Page } from "@playwright/test";

export class LoginPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    private accountdropdown = `//a[contains(text(),'Account')]`;
    private signinLink = `//a[text()='Sign In']`;
    private emailInput = `Enter your email`;
    private passwordInput = `Enter your password`;
    private loginButton = `//button[contains(@class,'btn btn-primary')]`;
    private myAccountPageText = `//div/h3[contains(@class,'my-3')]`;
    private accountNameText = `//div[contains(@class,'mt-3 mw-100')]/descendant::div[contains(@class,'d-flex flex-column')]`;
    private accountEmailText = `//div[contains(@class,'mt-3 mw-100')]/descendant::span[contains(@class,'text-break w-100')]`;

    // Actions
    public async clickAccountDropdown() {
        await this.page.locator(this.accountdropdown).click();
    }

    public async clickSigninLink() {
        await this.page.locator(this.signinLink).click();
    }

    public async enterEmail(email: string) {
        await this.page.getByPlaceholder(this.emailInput).fill(email);
    }

    public async enterPassword(password: string) {
        await this.page.getByPlaceholder(this.passwordInput).fill(password);
    }

    public async clickLoginButton() {
        await this.page.locator(this.loginButton).click();
    }

    public async getMyAccountPageText() {
        return await this.page.locator(this.myAccountPageText).innerText();
    }

    public async getAccountName() {
        return await this.page.locator(this.accountNameText).innerText();
    }

    public async getAccountEmail() {
        return await this.page.locator(this.accountEmailText).innerText();
    }  
}