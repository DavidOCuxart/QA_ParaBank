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

    accountClick(account){
        cy.get("#accountTable tbody tr td a")
        .contains(account).click();
    }


    transferFunds(origin, destination, amount){
        cy.get("#amount").type(amount);
        cy.get("#fromAccountId").select(origin.toString());
        cy.get("#toAccountId").select(destination.toString());
        cy.get('[value="Transfer"]').click();
    }

    verifyTransReceived(account, date, amount){
        ListNavigation("Accounts Overview");
        AccountClick(account);
        VerifyOperation(date, amount, "Funds Transfer Received");

    }

    verifyTransSent(account, date, amount){
        ListNavigation("Accounts Overview");
        AccountClick(account);
        VerifyOperation(date, amount, "Funds Transfer Sent");
    }

    VerifyOperation(date, amount, text){
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