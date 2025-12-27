import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import PageFactory from "../../../Pages/PageFactory";
import APIFactory from "../../../Api/APIFactory";


Given("I am in the LogIn Page", function(dataTable){
    cy.goToUrl(dataTable.rawTable[1][2]);
})

When("I log into the application", function(dataTable){
    const loginPage = PageFactory.getPage("login");
    loginPage.logIn(dataTable[1][0], dataTable.rawTable[1][1]);
})

When("I navigate to the account creation Page", () => {
    this.pageNavigation = PageFactory.getPage("navigation")
    this.accountPage = this.pageNavigation.openNewAccount();
})

When("A create a CHECKING account", () => {
    const accountAPI = APIFactory.getAPI("account")
    accountAPI.getAllAccounts(dataTable.rawTable[1][3]).then((accounts) => {
        this.accountPage.createCheckingAccount(accounts[0].id).then(function(newAcc){
            this.newAcc = newAcc;
        })
    })
})

Then("I go to Accounts overview and I verify the account and it's type", () => {
    this.pageNavigation.accountsOverview();
    this.accountPage.checkIfAccountExist(newAcc);
})