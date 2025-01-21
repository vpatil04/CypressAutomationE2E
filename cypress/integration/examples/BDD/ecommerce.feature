Feature: End to End Ecommerce validation


Scenario: Ecommerce product delivery
Given I am on Ecommerce Page
When I login to the application
And I add item to cart and checkout
And Validate total price limit
Then Select county submit and verify Thank you

   