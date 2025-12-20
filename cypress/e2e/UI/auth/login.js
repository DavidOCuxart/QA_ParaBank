import PageFactory from "../../Pages/PageFactory";

describe("", function() {
    beforeEach(function () {
        cy.fixture("example.json").then((data) => {
            this.data = data;
            this.loginPage = PageFactory.getPage("login");
        });
        
    });

    it("Log In with UI", function(){
        cy.goToUrl(this.data.url);
        const user = this.data.user;
        this.loginPage.logIn(user.userName, user.password)
        this.loginPage.verifyLogIn(user.accountInf[0], user.accountInf[1])
    })
})