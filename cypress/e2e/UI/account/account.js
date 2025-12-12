import LogInAPI from "../../Api/Account/LogInAPI";
import AccountPage from "../../Pages/AccountPage";
import PageNavigation from "../../Pages/PageNavigation";
/// <reference types="Cypress" />

describe("All account actions", () => {
    beforeEach(function(){
        cy.fixture("example.json").then(function(data){
            this.data = data;
            this.loginAPI = new LogInAPI();
            this.accountPage = new AccountPage();
            this.pageNavigation = new PageNavigation();
            const user = this.data.user;
            this.loginAPI.logIn(user.userName, user.password, this.data.logInUrl ,this.data.loggedUrl);
        })

    })

    it("Open New Checking Account", function(){
        this.pageNavigation.openNewAccount();
        this.accountPage.createCheckingAccount().then(function(newAcc){
            this.pageNavigation.accountsOverview();
            this.accountPage.checkIfAccountExist(newAcc);
        })
    })

    it("Open New Savings Account", function(){
        this.pageNavigation.openNewAccount();
        this.accountPage.createSavingsAccount().then(function(newAcc){
            this.pageNavigation.accountsOverview();
            this.accountPage.checkIfAccountExist(newAcc);
        })   
    })

    

    it("Update Contact Info", function(){

    })

    it("Request Loan", function(){

    })
})
