import APIFactory from "../../Api/APIFactory";

describe("Accounts Creation", function() {
    beforeEach(function() {
        cy.fixture("example.json").then(function(data) {
            this.data = data;
            this.user = data.user;
            this.accountAPI = APIFactory.getAPI("account");
            this.loginAPI = APIFactory.getAPI("login");
        });
    })

    it("Create CHECKING account", function() {
        let newAccId;

        this.loginAPI.logIn(this.user.userName, this.user.password, this.data.logInUrl).then((res) => {
            return this.accountAPI.getAllAccounts(this.user.id);
        }).then((accounts) => {
            return this.accountAPI.createAccount(this.user.id, 0, accounts[0].id);
        }).then((res) => {
            expect(res.status).to.eq(200);
            newAccId = res.body.id;
            return this.accountAPI.getAllAccounts(this.user.id);
        }).then((newList) => {
            expect(newList.map(acc => acc.id)).to.include(newAccId);
        });
    });

    it("Create SAVINGS account", function() {
        let newAccId;

        this.loginAPI.logIn(this.user.userName, this.user.password, this.data.logInUrl).then((res) => {
            return this.accountAPI.getAllAccounts(this.user.id);
        }).then((accounts) => {
            const fromAccountId = accounts[0].id;
            return this.accountAPI.createAccount(this.user.id, 1, fromAccountId);
        }).then((res) => {
            expect(res.status).to.eq(200);
            newAccId = res.body.id;
            return this.accountAPI.getAllAccounts(this.user.id);
        }).then((newList) => {
            expect(newList.map(acc => acc.id)).to.include(newAccId);
        });
    });

    it("Create LOAN account", function() {
        let newAccId;

        this.loginAPI.logIn(this.user.userName, this.user.password, this.data.logInUrl).then((res) => {
            return this.accountAPI.getAllAccounts(this.user.id);
        }).then((accounts) => {
            const fromAccountId = accounts[0].id;
            return this.accountAPI.createAccount(this.user.id, 2, fromAccountId);
        }).then((res) => {
            expect(res.status).to.eq(200);
            newAccId = res.body.id;
            return this.accountAPI.getAllAccounts(this.user.id);
        }).then((newList) => {
            expect(newList.map(acc => acc.id)).to.include(newAccId);
        });
    });
});
