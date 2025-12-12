/// <reference types="Cypress" />

import LogInAPI from "../../Api/Account/LogInAPI";
import BillPay from "../../Pages/BillPage";
import PageNavigation from "../../Pages/PageNavigation";

describe("", function(){
    beforeEach(function(){
        cy.fixture("example.json").then(function(data){
            this.data = data;
            this.loginAPI = new LogInAPI();            
            this.pageNavigation = new PageNavigation();
            this.BillPay = new BillPay;

            const user = this.data.user;
            this.loginAPI.logIn(user.userName, user.password, this.data.logInUrl ,this.data.loggedUrl);
            accountAPI.getAllAccounts(user.id).then((accounts) => {
                this.account1Id = accounts[0].id;
                this.account2Id = accounts[1].id;
            });
        })
    })

    it("Bill Pay", function(){
        this.pageNavigation.billPay();
        this.billPay.PaymentInformation(this.data.billPay);
    })
})