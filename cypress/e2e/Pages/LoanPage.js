import PageFactory from "./PageFactory";

class LoanPage{
    completeLoanForm(amount, payment, account){
        cy.get("#amount").type(amount);
        cy.get("#downPayment").type(payment);
        cy.get("#fromAccountId").select(account.toString());
    }

    confirmLoan(){
        cy.get('[value="Apply Now"]').click()
    }

    verifyApproved(loan){
        cy.get("#loanProviderName").should("have.text", loan.provider);
        cy.get("#loanStatus").should("have.text", loan.status);
        cy.get("#loanRequestApproved p").eq(0).should("have.text", loan.message);
        cy.get("#loanRequestDenied").should("not.be.visible")
    }

    getNewAccount() {
        return cy.get("#newAccountId")
            .should("be.visible")
            .invoke("text")
            .then(text => {
                const newAcc = text.trim();
                return newAcc;
            })
    }

    confirmAccountCreated(acc, amount){
        cy.get("#newAccountId").click()
        cy.get("#accountId").should("be.visible").and("have.text", acc);
        cy.get("#accountType").should("have.text", "LOAN");
        cy.get("#balance").should("have.text", `$${amount}.00`)
    }

    verifyDenied(loan){
        cy.get("#loanProviderName").should("have.text", loan.provider);
        cy.get("#loanStatus").should("have.text", loan.status);
        cy.log(loan.message)
        cy.get("#loanRequestDenied p").should("be.visible").should("have.text", loan.message)
        cy.get("#loanRequestApproved p").should("not.be.visible")


    }
}
//
export default LoanPage;