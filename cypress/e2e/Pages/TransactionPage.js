import AccountPage from "../Pages/AccountPage";
class TransactionPage{
    accountPage = new AccountPage();

    transferFunds(origin, destination, amount){
        cy.get("#amount").type(amount);
        cy.get("#fromAccountId").select(origin.toString());
        cy.get("#toAccountId").select(destination.toString());
        cy.get('[value="Transfer"]').click();
    }

    verifyTransReceived(account, date, amount){
        this.accountPage.accountClick(account);
        this.verifyOperation(date, amount, "Funds Transfer Received");

    }

    verifyTransSent(account, date, amount){
        this.accountPage.accountClick(account);
        this.verifyOperation(date, amount, "Funds Transfer Sent");
    }

    verifyOperation(date, amount, text){
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

export default TransactionPage;