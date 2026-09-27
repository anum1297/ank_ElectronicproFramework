Feature: Payment functionality

@Regression_Electronicpro @Regression_payment
Scenario: Verify payment with valid details
    Given user launch browser with url
    When user click on signin link and enter login credentails then click on login button
    And now user should navigate to Payment Methods
    And user should enter Payment details and save it