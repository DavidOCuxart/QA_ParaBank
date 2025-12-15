/// <reference types="Cypress" />

import PageNavigation from "../../Pages/PageNavigation";
import AccountAPI from "../../Api/Account/accountAPI";
import LogInAPI from "../../Api/Account/LogInAPI";
import TransactionPage from "../../Pages/TransactionPage";

describe("Transfer Process", function(){
    beforeEach(function(){
        cy.fixture("example.json").then(function(data){
            this.data = data;
            const user = this.data.user;
            
            this.loginPage = new LogInAPI();
            this.transactionPage = new TransactionPage();
            this.pageNavigation = new PageNavigation();
            const accountAPI = new AccountAPI();

            this.loginPage.logIn(user.userName, user.password, this.data.logInUrl ,this.data.loggedUrl);
            accountAPI.getAllAccounts(user.id).then((accounts) => {
                this.account1Id = accounts[0].id;
                this.account2Id = accounts[1].id;
            });
        })

    })

    it("Transaction", function(){
        let amount = 100;
        this.amount = amount;
                             
        this.pageNavigation.transferFunds();
        this.transactionPage.transferFunds(this.account1Id, this.account2Id, amount);
    })

    it("Verify Transaction", function(){

        this.pageNavigation.accountsOverview();
        this.transactionPage.verifyTransSent(this.account1Id, date, this.amount);

        this.pageNavigation.accountsOverview();
        this.transactionPage.verifyTransReceived(this.account2Id, date, this.amount);
    })
})