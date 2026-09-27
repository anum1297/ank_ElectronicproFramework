import { Then } from "@cucumber/cucumber";
import type { Initializer } from "../../../../main/com/electronicpro/driver/initializer";
import { customerProfile } from "../../../../main/com/electronicpro/helpers/testdata";

//============Payment Page Steps========================

Then('now user should navigate to Payment Methods', async function (this: Initializer) {
  await this.paymentPage_object.clickPaymentMethodLink();
});

Then('user should enter Payment details and save it', async function (this: Initializer) {
  await this.paymentPage_object.enterPaymentDetails(customerProfile.cardNumber);
  await this.paymentPage_object.clickSaveButton();
});