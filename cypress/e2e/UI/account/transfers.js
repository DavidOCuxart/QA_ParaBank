/// <reference types="Cypress" />

import LoginPage from "../../Pages/Loginpage";
import AccountPage from "../../Pages/AccountPage";
import PageNavigation from "../../Pages/PageNavigation";
import AccountAPI from "../../Api/Account/accountAPI";

describe("Transfer Process", function(){
    before(function(){
        cy.fixture("example.json").then(function(data){
            this.data = data;
            const user = this.data.user;
            
            this.loginPage = new LoginPage();
            this.accountPage = new AccountPage();
            this.pageNavigation = new PageNavigation();
            const accountAPI = new AccountAPI();

            this.loginPage.LogIn(user.userName, user.password, this.data.logInUrl ,this.data.loggedUrl);
            accountAPI.getAllAccounts(user.id).then((accounts) => {
                this.account1Id = accounts[0].id;
                this.account2Id = accounts[1].id;
            });
        })

    })

    it.only("Transaction", function(){
        let amount = 100;
        this.amount = amount;

        this.pageNavigation.transferFunds();
        this.accountPage.transferFunds(this.account1Id, this.account2Id, amount);
    })

    it("Verify Transaction", function(){
        const date = new Date();
        this.accountPage.verifyTransReceived(this.account1Id, date, this.amount);
        this.accountPage.verifyTransSent(this.account2Id, date, this.amount);
    })

})