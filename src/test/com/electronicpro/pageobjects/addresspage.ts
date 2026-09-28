import { Page } from "@playwright/test";

export class AddressPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Addresses locators
    private addresseslink = `//a[@title='Addresses']`;
    private addAddressButton = `(//a[@href="/my/account?redirect=/my/addresses"])[1]`;
    private phoneInput = `#o_phone`;
    private companyNameInput = `#o_company_name`;
    private streetAndNumberInput = `#o_street`;
    private apartmentSuiteEtcInput = `#o_street2`;
    private zipcodeInput = `#o_zip`;
    private cityInput = `#o_city`;
    private countryDropdown = `#o_country_id`;
    private stateOrProvinceDropdown = `#o_state_id`;
    private saveAddressButton = `#save_address`;

    // Addresses Actions
    public async clickOnAddressesLink() {
        await this.page.locator(this.addresseslink).click();
    }

    public async clickOnAddAddressButton(){
        await this.page.locator(this.addAddressButton).click();
    }

    public async enterPhone(phone: string) {
        await this.page.locator(this.phoneInput).fill(phone);
    }

    public async enterCompanyName(companyName: string) {
        await this.page.locator(this.companyNameInput).fill(companyName);
    }

    public async enterStreetAndNumber(streetAndNumber: string) {
        await this.page.locator(this.streetAndNumberInput).fill(streetAndNumber);
    }

    public async enterApartmentSuiteEtc(apartmentSuiteEtc: string) {
        await this.page.locator(this.apartmentSuiteEtcInput).fill(apartmentSuiteEtc);
    }

    public async enterZipCode(zipCode: string) {
        await this.page.locator(this.zipcodeInput).fill(zipCode);

    }

    public async enterCity(city: string) {
        await this.page.locator(this.cityInput).fill(city);
    }

    public async selectCountry(country: string) {
        const countryDropdown = this.page.locator(this.countryDropdown);
        await countryDropdown.waitFor({ state: 'visible', timeout: 10000 });
        await countryDropdown.selectOption({ label: country });
        await this.page.waitForTimeout(1000);
    }

    public async selectStateOrProvince(state: string) {
        const stateDropdown = this.page.locator(this.stateOrProvinceDropdown);
        if (await stateDropdown.count()) {
            await stateDropdown.waitFor({ state: 'visible', timeout: 10000 });
            await stateDropdown.selectOption({ label: state });
        }
    }

    public async clickSaveAddressButton() {
        const saveButton = this.page.locator(this.saveAddressButton);
        await saveButton.waitFor({ state: 'visible', timeout: 60000 });
        await saveButton.click();
    }

    public async enterAddressDetails(
        phone: string,
        companyName: string,
        streetAndNumber: string,
        apartmentSuiteEtc: string,
        zipCode: string,
        city: string,
        country: string,
        state: string,
    ) {
        await this.enterPhone(phone);
        await this.enterCompanyName(companyName);
        await this.enterStreetAndNumber(streetAndNumber);
        await this.enterApartmentSuiteEtc(apartmentSuiteEtc);
        await this.enterZipCode(zipCode);
        await this.enterCity(city);
        await this.selectCountry(country);
        await this.selectStateOrProvince(state);
    }
}



