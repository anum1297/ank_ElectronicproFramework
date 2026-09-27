import { Page } from "@playwright/test";

export class SignupPage {

    private page: Page;

    constructor(p: Page) { 
        this.page = p;
    }

    // Signup locators
    private accountdropdown = `//a[contains(text(),'Account')]`;
    private signuplink = `//a[text()='Sign Up']`;
    private nameInput = `#name`;
    private emailInput = `name@example.com`;
    private passwordInput = `#password`;
    private confirmPasswordInput = `#confirm_password`;
    private signupButton = `//button[contains(@class,"btn btn-primary mb-1")]`;
    private myAccountPageText = `//div/h3[contains(@class,'my-3')]`;  

    // My Account Page locators
    private myAccountlink = `//a[contains(@class,'dropdown-toggle btn d-flex align')]`;
    private myAccountPage = `//div[contains(@class,"dropdown-menu js_usermenu dropdown")]/child::a[@href="/my/home"]`;

    //Error Messages locators
    private signupErrorMessage = `//p[contains(@class,"alert alert-danger")]`;


    // Signup Actions
    public async clickAccountDropdown() {
        await this.page.locator(this.accountdropdown).click();
    }

    public async clickSignupLink() {
        await this.page.locator(this.signuplink).click();
    }   

    public async enterSignupDetails(name: string, email: string, password: string, confirmPassword: string) {
        await this.page.locator(this.nameInput).fill(name);
        await this.page.getByPlaceholder(this.emailInput).fill(email);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.confirmPasswordInput).fill(confirmPassword);
    }

    public async clickSignupButton() {
        const signupButton = this.page.locator(this.signupButton);
        await signupButton.click();
        await signupButton.waitFor({ state: 'visible', timeout: 60000 });
    }

    public async getMyAccountPageText() {
        return await this.page.locator(this.myAccountPageText).innerText();
    }

    // My Account Page Actions
    public async clickMyAccountLink(){
        const myAccountLink = this.page.locator(this.myAccountlink);
        await myAccountLink.click();
        await myAccountLink.waitFor({ state: 'visible', timeout: 60000 });
    }

    public async navigateMyAccountPage(){
        const myAccountPage = this.page.locator(this.myAccountPage);
        await myAccountPage.click();
        await myAccountPage.waitFor({ state: 'visible', timeout: 60000 });
    }

    // Error Messages Actions
    public async getSignupErrorMessage() {
        return await this.page.locator(this.signupErrorMessage).innerText();
    }

}