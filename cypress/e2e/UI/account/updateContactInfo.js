import APIFactory from "../../Api/APIFactory";
import PageFactory from "../../Pages/PageFactory";

describe("Update user profile information", function(){
    beforeEach(function(){
        cy.fixture("example.json").then(function(data){
            this.data = data;
            const user = this.data.user;
            
            this.loginPage = APIFactory.getAPI("login");
            this.pageNavigation = PageFactory.getPage("navigation");
            this.loginPage.logIn(user.userName, user.password, this.data.logInUrl ,this.data.loggedUrl);
        })
    })

    it.only("Update First Name", function(){
        const contactInfoPage = this.pageNavigation.contactInfo();
        contactInfoPage.changeFirstName("asasa");
    })

    it("Update Last Name", function(){

    })

    it("Update Address", function(){

    })

    it("Update City", function(){

    })

    it("Update State", function(){

    })

    it("Update Zip Code", function(){

    })

    it("Update Phone Number", function(){

    })
})