/// <reference types="Cypress" />

describe("", function(){
    beforeEach(function(){
        cy.fixture("example.json").then(function(data){
            this.data = data;
            this.loginPage = new LoginPage();
            this.accountPage = new AccountPage();
            const user = this.data.user;
            this.loginPage.LogIn(user.userName, user.password, this.data.logInUrl ,this.data.loggedUrl);
        })

    })

    it("Bill Pay", function(){

    })
})