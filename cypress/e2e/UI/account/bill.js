/// <reference types="Cypress" />

import PageFactory from "../../Pages/PageFactory";
import APIFactory from "../../Api/APIFactory";

describe("", function(){
    beforeEach(function(){
        cy.fixture("example.json").then(function(data){
            this.data = data;

            this.logInAPI = APIFactory.getPage("login")
            const accountAPI = APIFactory.getPage("account")
            this.billPage = PageFactory.getPage("bill");
            this.pageNavigation = PageFactory.getPage("navigation");

            const user = this.data.user;
            this.logInAPI.logIn(user.userName, user.password, this.data.logInUrl ,this.data.loggedUrl);

            accountAPI.getAllAccounts(user.id).then((accounts) => {
                this.accountID = accounts[0].id;
            });
        })
    })

    it("Bill Pay", function(){
        this.pageNavigation.billPay();
        this.billPage.paymentInformation(this.data.billPay, this.accountID);
        this.billPage.billPay();

    })

    it("Payment Verification", function(){
        this.pageNavigation.accountsOverview();
        this.billPage.verifyPayment(this.accountID, this.data.billPay);
    })
})