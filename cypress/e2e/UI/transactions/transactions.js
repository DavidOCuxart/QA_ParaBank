/// <reference types="Cypress" />
import PageFactory from "../../Pages/PageFactory";
import APIFactory from "../../Api/APIFactory";

describe("Transfer Process", function(){
    beforeEach(function(){
        cy.fixture("example.json").then(function(data){
            this.data = data;
            const user = this.data.user;
            
            this.loginPage = APIFactory.getAPI("login");
            this.pageNavigation = PageFactory.getPage("navigation");
            const accountAPI = APIFactory.getAPI("account");

            this.loginPage.logIn(user.userName, user.password, this.data.logInUrl);
            accountAPI.getAllAccounts(user.id).then((accounts) => {
                this.account1Id = accounts[0].id;
                this.account2Id = accounts[1].id;
            });
        })
    })

    it("Transaction", function(){
        let amount = 100;
        this.amount = amount;
                             
        const transactionPage = this.pageNavigation.transferFunds();
        transactionPage.transferFunds(this.account1Id, this.account2Id, amount);
    })

    it("Verify Transaction", function(){
        this.pageNavigation.accountsOverview();
        const transactionPage = PageFactory.getPage("transaction")
        transactionPage.verifyTransSent(this.account1Id, this.amount);

        this.pageNavigation.accountsOverview();
        transactionPage.verifyTransReceived(this.account2Id, this.amount);
    })
})