import { When, Then } from "@cucumber/cucumber";
import type { Initializer } from "../../../../main/com/electronicpro/driver/initializer";
import { generateCustomerProfile, signupData } from "../../../../main/com/electronicpro/helpers/testdata";

//============Signup Page Steps========================

When('user click on signup link', async function (this: Initializer) {
  await this.signupPage_object.clickAccountDropdown();
  await this.signupPage_object.clickSignupLink();
});

When('user should enter signup details', async function (this: Initializer) {
  generateCustomerProfile();

  await this.signupPage_object.enterSignupDetails(
    signupData.fullName,
    signupData.email,
    signupData.password,
    signupData.confirmPassword
  );
});

When('user click on signup button', async function (this: Initializer) {
  await this.signupPage_object.clickSignupButton();
});

When('user click on signup button and my account page is opened', async function (this: Initializer) {
  await this.signupPage_object.clickSignupButton();
});

Then('verify {string} text', async function (this: Initializer, expectedPageTitle: string) {
  const actualPageText = await this.signupPage_object.getMyAccountPageText();

  if (actualPageText !== expectedPageTitle) {
    throw new Error(`Expected page text "${expectedPageTitle}" but got "${actualPageText}"`);
  }
});



