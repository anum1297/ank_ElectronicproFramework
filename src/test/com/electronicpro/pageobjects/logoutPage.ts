import { Page } from '@playwright/test';


export class LogoutPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    private accountLink = `//a[contains(@class,'dropdown-toggle btn d-flex align')]`;
    private logoutLink = `//div[contains(@class,'dropdown-menu js_usermenu dropdown')]/child::a[contains(@id,'o_logout')]`;
    private homePageText = `//strong[contains(text(),'Discover the Future of Electronics')]`;

    // Actions
    public async clickAccountLink() {
        await this.page.locator(this.accountLink).click();
    }
    public async clickLogoutLink() {
        await this.page.locator(this.logoutLink).click();
    }

    public async getHomePageText() {
        return await this.page.locator(this.homePageText).innerText();
    }
}