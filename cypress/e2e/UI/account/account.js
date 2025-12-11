import AccountAPI from "../../Api/Account/account_API";
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

    it("Open New Checking Account", function(){
        this.accountPage.ListNavigation("Open New Account");
        this.accountPage.CreateAccount("CHECKING").then(function(newAcc){
            this.accountPage.ListNavigation("Accounts Overview");
            this.accountPage.CheckIfAccountExist(newAcc);
        })
    })

    it("Open New Savings Account", function(){
        this.accountPage.ListNavigation("Open New Account");
        this.accountPage.CreateAccount("SAVINGS").then(function(newAcc){
            this.accountPage.ListNavigation("Accounts Overview");
            this.accountPage.CheckIfAccountExist(newAcc);
        })   
    })

    it.only("Transfer Funds", function(){
    const accountAPI = new AccountAPI();
    let amount = 100;
    //const accountPage = this.accountPage;
    const date = new Date();
    accountAPI.GetAllAccounts(this.data.user.id).then((accounts) => {
        const account1Id = accounts[0].id;
        const account2Id = accounts[1].id;

        this.accountPage.ListNavigation("Transfer Funds");

        //this.accountPage.TransferFunds(account1Id, account2Id, amount);
        //this.accountPage.VerifyTransReceived(account1Id, date, amount);
        //this.accountPage.VerifyTransSent(account2Id, date, amount);
    
        this.accountPage.ListNavigation("Accounts Overview");
        this.accountPage.AccountClick(account1Id);


    });

    })

    it("Bill Pay", function(){

    })

    it("Update Contact Info", function(){

    })

    it("Request Loan", function(){

    })
})