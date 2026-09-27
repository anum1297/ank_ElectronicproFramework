import { Given } from "@cucumber/cucumber";
import type { Initializer } from "../../../../main/com/electronicpro/driver/initializer";

Given('user launch browser with url', async function (this: Initializer) {
  console.log('Browser has been launched with url');
});
