/// <reference types="Cypress" />
import APIFactory from "../../Api/APIFactory";

describe("Transfer money from one account to another", function(){
    beforeEach(function() {
        cy.fixture("example.json").then(function(data){
            this.data = data;
            this.transactionAPI = APIFactory.getAPI("transaction");
            this.loginAPI = APIFactory.getAPI("login")
            this.accountAPI = APIFactory.getAPI("account")
        })
    })

    it("Transaction to an account same user", function(){
        const user = this.data.user;
        const amount = this.data.transaction.amount;
        let source;
        let destination;
        let transID;
        this.loginAPI.logIn(user.userName, user.password, this.data.logInUrl).then(() => {
            return this.accountAPI.getAllAccounts(user.id);
        }).then((accounts) =>{
            expect(accounts.length).to.be.greaterThan(1);
            source = accounts[0].id;
            destination = accounts[1].id;
            return this.transactionAPI.transfer(source, destination, amount)
        }).then((response) => {
            expect(response.status).to.be.equal(200);
            return this.transactionAPI.getTransactionsByAmount(source, amount)
        }).then((sourceTrans) => {
            const position = sourceTrans.length-1;
            expect(sourceTrans[position].accountId).to.be.equal(source);
            expect(sourceTrans[position].amount).to.be.equal(amount);
            expect(sourceTrans[position].type).to.be.equal("Debit");
            return this.transactionAPI.getTransactionsByAmount(destination, amount)
        }).then((destinationTrans) => {
            const position = destinationTrans.length-1;
            expect(destinationTrans[position].accountId).to.be.equal(destination);
            expect(destinationTrans[position].amount).to.be.equal(amount);
            expect(destinationTrans[position].type).to.be.equal("Credit");
        })
    })
})