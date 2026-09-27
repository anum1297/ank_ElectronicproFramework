Feature: Address functionality

@Regression_Electronicpro @Regression_address
Scenario: Verify address with valid details
    Given user launch browser with url
    When user click on signin link and enter login credentails then click on login button
    And user should navigate to addresses
    And user should enter address details and save it