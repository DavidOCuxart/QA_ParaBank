Feature: Account Actions

Scenario: Create a new CHECKING ACCOUNT
Given I am in the LogIn Page
When I log into the application
 | Username  | Password   |
 | john      | demo       |
And I navigate to the account creation Page
And A CHECKING account is created
Then Verify the account and it's Type