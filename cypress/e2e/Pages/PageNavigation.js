class PageNavigation{
    accountsOverview(){
        cy.get("#leftPanel ul li").contains("Accounts Overview").click()
    }
    openNewAccount(){
        cy.get("#leftPanel ul li").contains("Open New Account").click()
    }
    transferFunds(){
        cy.get("#leftPanel ul li").contains("Transfer Funds").click()
    }
    billPay(){
        cy.get("#leftPanel ul li").contains("Bill Pay").click()
    }
}

export default PageNavigation;