import APIFactory from "../../Api/APIFactory"

describe("API CALL FOR LOANS", ()=> {
    beforeEach(function(){
        cy.fixture("example.json").then(function(data){
            this.data = data;
        })
    })

    it.only("Valid Loan", function(){
        const amount = 333;
        const payment = 100;
        const user = this.data.user;
        const accountAPI = APIFactory.getAPI("account")
        
        let destinationAcc;
        let account;

        const date = new Date();

        APIFactory.getAPI("login")
            .logIn(user.userName, user.password, this.data.logInUrl)
            .then(() => {
                return accountAPI.getAllAccounts(user.id);
            }).then((accounts)=> {
                account = accounts[0].id;
                return APIFactory.getAPI("loan").requestLoan(user.id, amount, payment, account)
            }).then((res) => {

                expect(res.status).to.be.equal(200)
                return APIFactory.getAPI("transaction").getTransactions(account)
            }).then((transactions) => {
                const transaction = transactions[transactions.length - 1];
                destinationAcc = transaction.description.match(/\d+/)[0];
                expect(transaction.accountId).to.be.equal(account)
                expect(transaction.type).to.be.equal("Debit")
                expect(transaction.amount).to.be.equal(payment)
                return accountAPI.getAccountInformation(destinationAcc)
            }).then((newLoanAcc) => {
                console.log(newLoanAcc)
                expect(newLoanAcc.balance).to.be.equal(amount)
                expect(newLoanAcc.customerId).to.be.equal(Number(user.id))
                expect(newLoanAcc.id).to.be.equal(Number(destinationAcc))
                expect(newLoanAcc.type).to.be.equal("LOAN")
            })
    })
})

