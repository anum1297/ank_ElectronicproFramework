import { Then } from "@cucumber/cucumber";
import type { Initializer } from "../../../../main/com/electronicpro/driver/initializer";
import { customerProfile } from "../../../../main/com/electronicpro/helpers/testdata";

//============Address Page Steps========================

Then('user should navigate to addresses', async function (this: Initializer) {
  await this.addressesPage_object.clickOnAddressesLink();
  await this.addressesPage_object.clickOnAddAddressButton();
});

Then('user should enter address details and save it', async function (this: Initializer) {
  await this.addressesPage_object.enterAddressDetails(
    customerProfile.phone,
    customerProfile.companyName,
    customerProfile.streetAndNumber,
    customerProfile.apartment,
    customerProfile.zipCode,
    customerProfile.city,
    customerProfile.country,
    customerProfile.state,
  );
  await this.addressesPage_object.clickSaveAddressButton();
});

