import APIFactory from "../../Api/APIFactory";
import PageFactory from "../../Pages/PageFactory";
/// <reference types="Cypress" />

describe("All account actions", () => {
    beforeEach(function(){
        cy.fixture("example.json").then(function(data){
            this.data = data;
            this.loginAPI = APIFactory.getAPI("login");
            this.pageNavigation = PageFactory.getPage("navigation");
            const user = this.data.user;
            this.loginAPI.logIn(user.userName, user.password, this.data.logInUrl ,this.data.loggedUrl);
        })

    })

    it("Open New Checking Account", function(){
        const accountPage = this.pageNavigation.openNewAccount();
        accountPage.createCheckingAccount().then(function(newAcc){
            this.pageNavigation.accountsOverview();
            accountPage.checkIfAccountExist(newAcc);
        })
    })

    it("Open New Savings Account", function(){
        const accountPage = this.pageNavigation.openNewAccount();
        accountPage.createSavingsAccount().then(function(newAcc){
            this.pageNavigation.accountsOverview();
            accountPage.checkIfAccountExist(newAcc);
        })   
    })
})
