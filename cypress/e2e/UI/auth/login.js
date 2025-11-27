import LoginPage from "../../Pages/Loginpage";

describe("", function() {
    beforeEach(function () {
        cy.fixture("example.json").then((data) => {
            this.data = data;
        });
        this.loginPage = new LoginPage();
    });

    it("Log In with UI", function(){
        cy.goToUrl(this.data.url);
        const user = this.data.user;
        this.loginPage.logIn(user.userName, user.password)
        this.loginPage.verifyLogIn(user.name, user.surName)
    })
})