#Author: Aniket Ajay Umare
Feature: Signup functionality

@Regression_signup
Scenario: TC001 Verify signup with valid details
    Given user launch browser with url
    When user click on signup link
    And user should enter signup details
    And user click on signup button and my account page is opened
    Then verify "My account" text

@Regression_duplicatesignup 
Scenario: TC002 Verify signup with duplicate valid details
    Given user launch browser with url
    When user click on signup link
    And user enter name as "harrytest2" and email as "harrytest2@gmail.com"
    And user enter password as "Test@1234" and confirm password as "Test@1234"
    And user click on signup button
    Then user should verify signup error message "Another user is already registered using this email address."