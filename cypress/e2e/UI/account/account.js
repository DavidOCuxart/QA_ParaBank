import AccountPage from "../../Pages/accountPage";
import LoginPage from "../../Pages/Loginpage";
/// <reference types="Cypress" />

describe("All account actions", () => {
    beforeEach(function(){
        cy.fixture("example.json").then(function(data){
            this.data = data;
            this.loginPage = new LoginPage();
            this.accountPage = new AccountPage();
            const user = this.data.user;
            this.loginPage.LogIn(user.userName, user.password, this.data.logInUrl ,this.data.loggedUrl);
        })

    })

    it.only("Open New Checking Account", function(){
        this.accountPage.listNavigation("Open New Account");
        this.accountPage.createAccount("CHECKING").then(function(newAcc){
            this.accountPage.listNavigation("Accounts Overview");
            this.accountPage.checkIfAccountExist(newAcc);
        })
    })

    it("Open New Savings Account", function(){

    })

    it("Transfer Funds", function(){

    })

    it("Bill Pay", function(){

    })

    it("Update Contact Info", function(){

    })

    it("Request Loan", function(){

    })
})