import { Before, After } from "@cucumber/cucumber";
import { chromium, firefox, LaunchOptions } from "@playwright/test";
import { Initializer } from "./initializer";
import { SignupPage } from "../../../../test/com/electronicpro/pageobjects/signupPage";
import { LoginPage } from "../../../../test/com/electronicpro/pageobjects/loginPage";
import { LogoutPage } from "../../../../test/com/electronicpro/pageobjects/logoutPage";
import { ShoppingcartPage } from "../../../../test/com/electronicpro/pageobjects/shoppingcartPage";
import { AddressesPage } from "../../../../test/com/electronicpro/pageobjects/adressespage";
import { PaymentPage } from "../../../../test/com/electronicpro/pageobjects/paymentpage";

Before({ timeout: 60000 }, async function (this: Initializer) {
  // This hook will run before each scenario
  // You can perform any setup or initialization here
  // For example, you can launch the browser and create a new page

  const browserName = "chromium";
  const launchOptions: LaunchOptions = { headless: false, args: ['--start-maximized'] };

  if (browserName === "chromium") {
    this.browser = await chromium.launch(launchOptions);
  } else if (browserName === "firefox") {
    this.browser = await firefox.launch(launchOptions);
  } else {
    throw new Error(`Unsupported browser: ${browserName}`);
  }

  this.context = await this.browser.newContext({ viewport: null });
  this.page = await this.context.newPage();

  await this.page.goto('https://electronicpro.odoo.com/');
  await this.page.waitForTimeout(6000);

  this.signupPage_object = new SignupPage(this.page);
  this.loginPage_object = new LoginPage(this.page);
  this.logoutPage_object = new LogoutPage(this.page);
  this.shoppingcartPage_object = new ShoppingcartPage(this.page);
  this.addressesPage_object = new AddressesPage(this.page);
  this.paymentPage_object = new PaymentPage(this.page);
});

After(async function (this: Initializer) {
  // This drivermanager will run after each scenario
  // You can perform any cleanup or teardown here
  // For example, you can close the page and browser
  if (this.page) {
    await this.page.close();
  }

  if (this.context) {
    await this.context.close();
  }

  if (this.browser) {
    await this.browser.close();
  }
});