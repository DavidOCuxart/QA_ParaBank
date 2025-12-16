import APIFactory from "../../Api/APIFactory";
import PageFactory from "../../Pages/PageFactory";

describe("Update user profile information", function(){
    beforeEach(function(){
        cy.fixture("example.json").then(function(data){
            this.data = data;
            this.user = this.data.user;
            this.account = this.user.accountInf;

            this.loginAPI = APIFactory.getAPI("login");
            //this.loginPage = PageFactory.getPage("login")
            this.pageNavigation = PageFactory.getPage("navigation");
            
            //this.loginPage.logIn(this.user.userName, this.user.password, data.loggedUrl);
            this.loginAPI.logIn(this.user.userName, this.user.password, this.data.logInUrl ,this.data.loggedUrl);
        })
    })

    it("Update First Name", function(){
        const contactInfoPage = this.pageNavigation.contactInfo();
        contactInfoPage.changeFirstName(this.account[0]);
        contactInfoPage.clickButtonChange();
    })

    it("Update Last Name", function(){
        const contactInfoPage = this.pageNavigation.contactInfo();
        contactInfoPage.changeLastName(this.account[1]);
        contactInfoPage.clickButtonChange();
    })

    it("Update Address", function(){
        const contactInfoPage = this.pageNavigation.contactInfo();
        contactInfoPage.changeAddress(this.account[2]);
        contactInfoPage.clickButtonChange();
    })

    it("Update City", function(){
        const contactInfoPage = this.pageNavigation.contactInfo();
        contactInfoPage.changeCity(this.account[3]);
        contactInfoPage.clickButtonChange();
    })

    it("Update State", function(){
        const contactInfoPage = this.pageNavigation.contactInfo();
        contactInfoPage.changeState(this.account[4]);
        contactInfoPage.clickButtonChange();
    })

    it("Update Zip Code", function(){
        const contactInfoPage = this.pageNavigation.contactInfo();
        contactInfoPage.changeZipCode(this.account[5]);
        contactInfoPage.clickButtonChange();
    })

    it("Update Phone Number", function(){
        const contactInfoPage = this.pageNavigation.contactInfo();
        contactInfoPage.changePhoneNumber(this.account[6]);
        contactInfoPage.clickButtonChange();
    })

    it("Verify Account Information", function(){
        const contactInfoPage = this.pageNavigation.contactInfo();
        contactInfoPage.verifyInformation(this.account);
    })
})