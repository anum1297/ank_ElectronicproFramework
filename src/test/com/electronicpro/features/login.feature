#Author: Aniket Ajay Umare
Feature: Login functionality

@Regression_login
Scenario: TC003 Verify login with valid details
    Given user launch browser with url
    When user click on signin link and enter login credentails then click on login button
    Then user should verify "My account" text with his name and email
