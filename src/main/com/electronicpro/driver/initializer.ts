import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import type { Browser, BrowserContext, Page } from '@playwright/test';
import { ShoppingcartPage } from '../../../../test/com/electronicpro/pageobjects/shoppingcartPage';
import { LogoutPage } from '../../../../test/com/electronicpro/pageobjects/logoutPage';
import { LoginPage } from '../../../../test/com/electronicpro/pageobjects/loginPage';
import { SignupPage } from '../../../../test/com/electronicpro/pageobjects/signupPage';
import { AddressPage } from '../../../../test/com/electronicpro/pageobjects/addresspage';
import { PaymentPage } from '../../../../test/com/electronicpro/pageobjects/paymentpage';

export class Initializer extends World {
  // Define any properties or methods you want to use in your step definitions here
  // For example, you can store the browser, page, and context objects as properties of the world
  browser!: Browser;
  page!: Page;
  context!: BrowserContext;

  //POM objects
  signupPage_object!: SignupPage;
  loginPage_object!: LoginPage;
  logoutPage_object!: LogoutPage;
  shoppingcartPage_object!: ShoppingcartPage;
  addressesPage_object!: AddressPage
  paymentPage_object!: PaymentPage;

  constructor(options: IWorldOptions) {
    super(options);
    // Initialize any properties or perform any setup needed for your world
  }
}

setWorldConstructor(Initializer);