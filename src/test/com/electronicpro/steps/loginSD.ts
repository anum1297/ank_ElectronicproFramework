import { When, Then } from "@cucumber/cucumber";
import type { Initializer } from "../../../../main/com/electronicpro/driver/initializer";
import { customerProfile } from "../../../../main/com/electronicpro/helpers/testdata";

//============Login Page Steps========================

When('user click on signin link and enter login credentails then click on login button', async function (this: Initializer) {
   await this.loginPage_object.clickAccountDropdown();
   await this.loginPage_object.clickSigninLink();
   await this.loginPage_object.enterEmail(customerProfile.email);
   await this.loginPage_object.enterPassword(customerProfile.password);
   await this.loginPage_object.clickLoginButton();
});

Then('user should verify {string} text with his name and email', async function (this: Initializer, expectedPageTitle: string) {
  
  const actualPageText = await this.loginPage_object.getMyAccountPageText();
  if (actualPageText !== expectedPageTitle) {
    throw new Error(`Expected page text "${expectedPageTitle}" but got "${actualPageText}"`);
  }

  const actualName = await this.loginPage_object.getAccountName();
  if (actualName !== customerProfile.fullName) {
    throw new Error(`Expected page text "${customerProfile.fullName}" but got "${actualName}"`);
  }

  const actualEmail = await this.loginPage_object.getAccountEmail();
    if (actualEmail !== customerProfile.email) {
    throw new Error(`Expected page text "${customerProfile.email}" but got "${actualEmail}"`);
  }

});

