class AccountPage{
    createAccount(accountType){
        cy.get("#type").select(accountType)
        cy.get("#fromAccountId").select("13344")
        cy.get('[value="Open New Account"]').click()
        return cy.get('#newAccountId')
            .should('be.visible')
            .invoke('text')
            .then(text => text.trim());
    }

    accountClick(account){
        cy.get("#accountTable tbody tr td a")
        .contains(account).click();
    }

    createSavingsAccount(){
        return this.createAccount("SAVINGS");
    }

    createCheckingAccount(){
        return this.createAccount("CHECKING");
    }

    checkIfAccountExist(account){
        cy.get("#accountTable tbody tr td")
        .should("contain", account);
    }

}

export default AccountPage;