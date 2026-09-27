Feature: Logout functionality 

    @Regression_Electronicpro @Regression_Logout
    Scenario: Verify logout
    Given user launch browser with url
    When user click on signin link and enter login credentails then click on login button
    When user click on logout link
    Then user should navigate to home page "Discover the Future of Electronics"