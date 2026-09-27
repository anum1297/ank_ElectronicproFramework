import { When, Then } from "@cucumber/cucumber";
import type { Initializer } from "../../../../main/com/electronicpro/driver/initializer";

//============Logout Page Steps========================
When('user click on logout link', async function (this: Initializer) {
  await this.logoutPage_object.clickAccountLink();
  await this.logoutPage_object.clickLogoutLink();
});

Then('user should navigate to home page {string}', async function (this: Initializer, expectedHomePageText: string) {
  const actualHomePageText = await this.logoutPage_object.getHomePageText();

  if (actualHomePageText !== expectedHomePageText) {
    throw new Error(`Expected home page text "${expectedHomePageText}" but got "${actualHomePageText}"`);
  }
});