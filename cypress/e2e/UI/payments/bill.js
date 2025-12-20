/// <reference types="Cypress" />

import PageFactory from "../../Pages/PageFactory";
import APIFactory from "../../Api/APIFactory";

describe("", function(){
    beforeEach(function(){
        cy.fixture("example.json").then(function(data){
            this.data = data;

            this.logInAPI = APIFactory.getAPI("login")
            const accountAPI = APIFactory.getAPI("account")
            this.pageNavigation = PageFactory.getPage("navigation");

            const user = this.data.user;
            this.logInAPI.logIn(user.userName, user.password, this.data.logInUrl);

            accountAPI.getAllAccounts(user.id).then((accounts) => {
                this.accountID = accounts[0].id;
            });
        })
    })

    it("Bill Pay", function(){
        const billPage = this.pageNavigation.billPay();
        billPage.paymentInformation(this.data.billPay, this.accountID);
        billPage.billPay();

    })

    it("Payment Verification", function(){
        this.pageNavigation.accountsOverview();
        this.billPage = PageFactory.getPage("bill");
        this.billPage.verifyPayment(this.accountID, this.data.billPay);
    })
})