Feature: Account Actions

Scenario: Create a new CHECKING ACCOUNT
Given I am in the LogIn Page
When I log into the application
 | Username  | Password   |   Url |                                           | Id    |
 | john      | demo       |  https://parabank.parasoft.com/parabank/login.htm | 12212 |
And I navigate to the account creation Page
And A CHECKING account is created
Then Verify the account and it's Type