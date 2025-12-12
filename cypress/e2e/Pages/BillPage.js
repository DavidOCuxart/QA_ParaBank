class BillPay{
    PaymentInformation(user, account){
        cy.get('[name="payee.name"]').type(user["payee name"]);
        cy.get('[name="payee.address.street"]').type(user.address);
        cy.get('[name="payee.address.city"]').type(user.city);
        cy.get('[name="payee.address.state"]').type(user.state);
        cy.get('[name="payee.address.zipCode"]').type(user["zip code"]);
        cy.get('[name="payee.phoneNumber"]').type(user.phone);
        cy.get('[name="payee.accountNumber"]').type(user["payee name"]);
        cy.get('[name="verifyAccount"]').type(user.toAccount);
        cy.get('[name="amount"]').type(user.amount);
        cy.get('[name="fromAccountId"]').type(account);
    }
}

export default BillPay;