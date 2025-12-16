class AccountPage{
    createAccount(accountType, fromAcc){
        cy.get("#type").select(accountType)
        cy.get("#fromAccountId").select(fromAcc.toString())
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

    createSavingsAccount(acc){
        return this.createAccount("SAVINGS", acc);
    }

    createCheckingAccount(acc){
        return this.createAccount("CHECKING", acc);
    }

    checkIfAccountExist(account){
        cy.get("#accountTable tbody tr td")
        .should("contain", account);
    }

    verifyOperation(amount, text){
        const date = new Date();
        cy.get("#transactionTable tbody tr:last-child").then(element => {
            const tds = element.find("td");
            expect(tds.eq(0)).to.contain.text(`${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`);
            expect(tds.eq(1).find("a")).to.contain.text(text);

            switch(text){
                case "Funds Transfer Sent":
                    expect(tds.eq(2)).to.contain.text(`$${amount}.00`);
                    break;
                case "Funds Transfer Received":
                    expect(tds.eq(3)).to.contain.text(`$${amount}.00`);
                    break;
                case "Payment":
                    break;
            }
        });
    }

}

export default AccountPage;