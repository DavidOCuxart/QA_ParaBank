class AccountPage{
    ListNavigation(option){
        cy.get("#leftPanel ul li").contains(option).click()
    }

    CreateAccount(){
        cy.get("#type").select("CHECKING")
        cy.get("#fromAccountId").select("13344")
        cy.get('[value="Open New Account"]').click()
        return cy.get('#newAccountId')
            .should('be.visible')
            .invoke('text')
            .then(text => text.trim());
    }

    CheckIfAccountExist(account){
        cy.get("#accountTable tbody tr td")
        .should("contain", account);
    }

    AccountClick(account){
        cy.get("#accountTable tbody tr td a")
        .contains(account).click();
    }


    TransferFunds(origin, destination, amount){
        cy.get("#amount").type(amount);
        cy.get("#fromAccountId").select(origin.toString());
        cy.get("#toAccountId").select(destination.toString());
        cy.get('[value="Transfer"]').click();
    }

    VerifyTransReceived(account, date, amount){
        ListNavigation("Accounts Overview");
        AccountClick(account);
        VerifyOperation(date, amount, "Funds Transfer Received");

    }

    VerifyTransSent(account, date, amount){
        ListNavigation("Accounts Overview");
        AccountClick(account);
        VerifyOperation(date, amount, "Funds Transfer Sent");
    }

    VerifyOperation(date, amount, text){
        cy.get("#transactionTable tbody tr:last-child").then(element => {
            const tds = element.find("td");
            expect(tds.eq(0)).to.contain.text(`${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`);
            expect(tds.eq(1).find("a")).to.contain.text("Funds Transfer Sent");
            if(text == "Funds Transfer Sent"){
                expect(tds.eq(2)).to.contain.text(`$${amount}.00`);
            }else{
                expect(tds.eq(3)).to.contain.text(`$${amount}.00`);

            }
        });
    }
}

export default AccountPage;