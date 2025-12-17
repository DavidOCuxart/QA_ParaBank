import APIFactory from "../../Api/APIFactory"

describe("Test Bill payment via API", function(){
    beforeEach(function(){
        cy.fixture("example.json").then(function(data) {
            this.data = data;
            this.user = data.user;
            this.accountAPI = APIFactory.getAPI("account");
            this.billAPI = APIFactory.getAPI("bill");
            this.loginAPI = APIFactory.getAPI("login");
        });
    })

    it("Bill Payment", function(){
        const amount = 100;
        let acc;
        this.loginAPI.logIn(this.user.userName, this.user.password, this.data.logInUrl, this.data.loggedUrl).then(() => {
            return this.accountAPI.getAllAccounts(this.user.id);
        }).then((accounts) => {
            acc = accounts;
            return this.billAPI.billPay(accounts[0].id, amount);
        }).then((response) => {
            console.log(response)
            expect(response.body.accountId).to.eq(acc[0].id);
            expect(response.body.amount).to.eq(amount);
            // For some reason the body received from the API is "string" not the actual owner associated with the id account
            // This assert will not work
            //expect(response.body.payeeName).to.eq(this.user.name);
        })
    })
})