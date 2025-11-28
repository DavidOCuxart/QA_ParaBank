class AccountPage{
    listNavigation(option){
        cy.get("#leftPanel ul li").contains(option).click()
    }

    createAccount(){
        cy.get("#type").select("CHECKING")
        cy.get("#fromAccountId").select("13344")
        cy.get('[value="Open New Account"]').click()
        return cy.get('#newAccountId')
            .should('be.visible')
            .invoke('text')
            .then(text => text.trim());
    }

    checkIfAccountExist(account){
        cy.get("#accountTable tbody tr td")
        .should("be.visible")
        .contains(account)
    }
}

export default AccountPage;