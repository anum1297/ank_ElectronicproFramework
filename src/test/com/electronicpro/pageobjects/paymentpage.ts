
import { Page } from '@playwright/test';

export class PaymentPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //Payments Method locators
    private paymentmethodlink = `//a[@title='Payment methods' or normalize-space()='Payment Methods' or contains(@href,'payment')]`;
    private creditCardNumberInput = `#customer_input`;
    private saveButton = `//button[@name='o_payment_submit_button']`;

    //Payments Method Actions
    public async clickPaymentMethodLink() {
        const paymentLink = this.page.locator(this.paymentmethodlink).first();
        await paymentLink.waitFor({ state: 'visible', timeout: 10000 });
        await paymentLink.click();
        await this.page.waitForLoadState('networkidle');
    }

    public async enterCreditCardNumber(cardNumber: string) {
        const input = this.page.locator(this.creditCardNumberInput);
        await input.waitFor({ state: 'visible', timeout: 10000 });
        await input.fill(cardNumber);
    }

    public async clickSaveButton() {
        const button = this.page.locator(this.saveButton);
        await button.waitFor({ state: 'visible', timeout: 10000 });
        await button.click();
    }

    public async enterPaymentDetails(cardNumber: string) {
        await this.enterCreditCardNumber(cardNumber);
    }

}