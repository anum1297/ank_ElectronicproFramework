Feature: shopping cart functionality

    @Regression_Electronicpro 
    Scenario: Verify shopping cart with logged in user
    Given user launch browser with url
    When user click on signin link and enter login credentails then click on login button
    When user click on shop button
    And user click on select product
    And user click on add to cart button
    And user click on view cart button
    And user click on checkout button
    Then user should navigate to checkout page "Order"

    @Regression_Electronicpro 
    Scenario: Verify shopping cart with anonymous user
    Given user launch browser with url
    When user click on shop button
    And user click on select product
    And user click on add to cart button
    And user click on view cart button
    And user click on checkout button
    Then user should navigate to checkout page "Order"

    @Regression_Electronicpro @Regression_ShoppingCart
    Scenario: Verify remove product from shopping cart with logged in user
    Given user launch browser with url
    When user click on signin link and enter login credentails then click on login button
    When user click on shop button
    And user click on select product
    And user click on add to cart button
    And user click on view cart button
    And user click on checkout button
    Then user should navigate to checkout page "Order"
    When user click on remove product
    Then user should verify remove product confirmation message "Your cart is empty."

    @Regression_Electronicpro 
    Scenario: Verify remove product from shopping cart with anonymous user
    Given user launch browser with url
    When user click on shop button
    And user click on select product
    And user click on add to cart button
    And user click on view cart button
    And user click on checkout button
    Then user should navigate to checkout page "Order"
    When user click on remove product
    Then user should verify remove product confirmation message "Your cart is empty."