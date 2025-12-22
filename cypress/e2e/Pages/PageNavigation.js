import PageFactory from "./PageFactory"

class PageNavigation{
    accountsOverview(){
        cy.get("#leftPanel ul li").contains("Accounts Overview").click()
        return PageFactory.getPage("account");
    }

    openNewAccount(){
        cy.get("#leftPanel ul li").contains("Open New Account").click()
        return PageFactory.getPage("account");
    }

    transferFunds(){
        cy.get("#leftPanel ul li").contains("Transfer Funds").click()
        return PageFactory.getPage("transaction");
    }

    billPay(){
        cy.get("#leftPanel ul li").contains("Bill Pay").click()
        return PageFactory.getPage("bill");
    }

    contactInfo(){
        cy.get("#leftPanel ul li").contains("Update Contact Info").click()
        return PageFactory.getPage("contactInfo");
    }

    requestLoan(){
        cy.get("#leftPanel ul li").contains("Request Loan").click()
        return PageFactory.getPage("loan");
    }
}

export default PageNavigation;