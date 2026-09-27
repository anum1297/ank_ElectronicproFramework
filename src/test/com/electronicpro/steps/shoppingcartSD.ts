import { When, Then } from "@cucumber/cucumber";
import type { Initializer } from "../../../../main/com/electronicpro/driver/initializer";

//===============Shopping Cart Page Steps========================
When('user click on shop button', async function (this: Initializer) {
  await this.shoppingcartPage_object.clickShopButton();
});

When('user click on select product', async function (this: Initializer) {
  await this.shoppingcartPage_object.clickSelectProduct();
});

When('user click on add to cart button', async function (this: Initializer) {
  await this.shoppingcartPage_object.clickAddToCartButton();
});

When('user click on view cart button', async function (this: Initializer) {
  await this.shoppingcartPage_object.clickViewCartButton();
});

When('user click on checkout button', async function (this: Initializer) {
  await this.shoppingcartPage_object.clickCheckoutButton();
});

Then('user should navigate to checkout page {string}', async function (this: Initializer, expectedCheckoutPageText: string) {
  const actualCheckoutPageText = await this.shoppingcartPage_object.getCheckoutPageText();

  if (actualCheckoutPageText !== expectedCheckoutPageText) {
    throw new Error(`Expected checkout page text "${expectedCheckoutPageText}" but got "${actualCheckoutPageText}"`);
  }
});

When('user click on remove product', async function (this: Initializer) {
  await this.shoppingcartPage_object.clickRemoveProduct();
});

Then('user should verify remove product confirmation message {string}', async function (this: Initializer, expectedRemoveProductConfirmationText: string) {
  const actualRemoveProductConfirmationText = await this.shoppingcartPage_object.getRemoveProductConfirmationText();

  if (actualRemoveProductConfirmationText !== expectedRemoveProductConfirmationText) {
    throw new Error(`Expected remove product confirmation text "${expectedRemoveProductConfirmationText}" but got "${actualRemoveProductConfirmationText}"`);
  }
});
