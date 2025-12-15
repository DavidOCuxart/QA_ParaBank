import PageFactory from "../Pages/PageFactory";
class TransactionPage{
    constructor(){
        this.accountPage = PageFactory.getPage("account");
    }

    transferFunds(origin, destination, amount){
        cy.get("#amount").type(amount);
        cy.get("#fromAccountId").select(origin.toString());
        cy.get("#toAccountId").select(destination.toString());
        cy.get('[value="Transfer"]').click();
    }

    verifyTransReceived(account, amount){
        this.accountPage.accountClick(account);
        this.accountPage.verifyOperation(amount, "Funds Transfer Received");

    }

    verifyTransSent(account, amount){
        this.accountPage.accountClick(account);
        this.accountPage.verifyOperation(amount, "Funds Transfer Sent");
    }
}

export default TransactionPage;