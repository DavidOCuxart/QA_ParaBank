import APIFactory from "../../Api/APIFactory";
import PageFactory from "../../Pages/PageFactory";
/// <reference types="Cypress" />

describe("All account actions", () => {
    beforeEach(function(){
        cy.fixture("example.json").then(function(data){
            this.data = data;
            this.loginAPI = APIFactory.getAPI("login");
            this.accountAPI = APIFactory.getAPI("account");
            this.pageNavigation = PageFactory.getPage("navigation");
            const user = this.data.user;
            this.loginAPI.logIn(user.userName, user.password, this.data.logInUrl ,this.data.loggedUrl);
        })

    })

    it.only("Open New Checking Account", function(){
        const accountPage = this.pageNavigation.openNewAccount();
        this.accountAPI.getAllAccounts(this.data.user.id).then((accounts) => {
            accountPage.createCheckingAccount(accounts[0].id).then(function(newAcc){
                this.pageNavigation.accountsOverview();
                accountPage.checkIfAccountExist(newAcc);
            })
        })
        
    })

    it("Open New Savings Account", function(){
        const accountPage = this.pageNavigation.openNewAccount();
        this.accountAPI.getAllAccounts(this.data.user.id).then((accounts) => {
            accountPage.createSavingsAccount(accounts[0].id).then(function(newAcc){
                this.pageNavigation.accountsOverview();
                accountPage.checkIfAccountExist(newAcc);
            })   
        })

    })
})
