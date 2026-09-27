import { Page } from '@playwright/test';

export class ShoppingcartPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //locators
    private shopbutton = `//ul[contains(@class,"nav navbar-nav top_menu align-items-center me-4 py-1")]/child::li/following-sibling::li/child::a/child::span[text()='Shop']`;
    private selectproduct = `//span[text()='Anker Power Bank 20,000mAh']`;
    private addtocartbutton = `#add_to_cart`;
    private viewcartbutton = `//a[contains(@class,'o_navlink_trigger_hover btn')]`;
    private checkoutbutton = `//span[text()='Checkout']`;
    private checkoutpage = `//span[text()='Order']`;
    private removeproduct = `//a[@title='Remove from cart']`;
    private removeproductconfirmation = `//h5[contains(text(),'Your cart is empty!')]`;

    //methods
    public async clickShopButton() {
        await this.page.click(this.shopbutton);
    }

    public async clickSelectProduct() {
        await this.page.click(this.selectproduct);
    }   

    public async clickAddToCartButton() {
        await this.page.click(this.addtocartbutton);
    }

    public async clickViewCartButton() {
        await this.page.click(this.viewcartbutton);
    }

    public async clickCheckoutButton() {
        await this.page.click(this.checkoutbutton);
    }

    public async getCheckoutPageText(): Promise<string> {
        const checkoutPageElement = await this.page.waitForSelector(this.checkoutpage);
        const checkoutPageText = await checkoutPageElement.textContent();
        return checkoutPageText ?? '';
    }
    
    public async clickRemoveProduct() {
        await this.page.click(this.removeproduct);
    }  
    
    public async getRemoveProductConfirmationText(): Promise<string> {
        const removeProductConfirmationElement = await this.page.waitForSelector(this.removeproductconfirmation);
        const removeProductConfirmationText = await removeProductConfirmationElement.textContent();
        return removeProductConfirmationText ?? '';
    }
}