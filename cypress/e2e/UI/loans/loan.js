import APIFactory from "../../Api/APIFactory";
import PageFactory from "../../Pages/PageFactory";

describe("Process of requesting loan and verifying", () => {
    beforeEach(function(){
        cy.fixture("example.json").then(function(data){
            this.data = data;
            const user = data.user;

            const loginAPI = APIFactory.getAPI("login");
            loginAPI.logIn(user.userName, user.password,this.data.logInUrl);
        })
    })
    it("Request Loan Success", function(){
        const amount = 150;
        const payment = 15;
        const navigationPage = PageFactory.getPage("navigation");
        const accountAPI = APIFactory.getAPI("account");
        const loanPage = navigationPage.requestLoan();

        accountAPI.getAllAccounts(this.data.user.id).then((accounts) => {
            loanPage.completeLoanForm(amount, payment, accounts[0].id);
            loanPage.confirmLoan();
            loanPage.verifyApproved(this.data.loan.accepted);
            loanPage.getNewAccount().then((newAcc) => {
                expect(newAcc).to.not.be.empty;
                loanPage.confirmAccountCreated(newAcc, amount);
            })
        })
    })

    it("Request Loan Denied", function(){
        const amount = 15000000;
        const payment = 15;
        const navigationPage = PageFactory.getPage("navigation");
        const accountAPI = APIFactory.getAPI("account");
        const loanPage = navigationPage.requestLoan();

        accountAPI.getAllAccounts(this.data.user.id).then((accounts) => {
            loanPage.completeLoanForm(amount, payment, accounts[0].id);
            loanPage.confirmLoan();
            loanPage.verifyDenied(this.data.loan.denied);
        })
    })
})