class LoanAPI{
    requestLoan(customerID, amount, downPayment, sourceAcc){
        return cy.request({
            method: "POST",
            url : `https://parabank.parasoft.com/parabank/services/bank/requestLoan?customerId=${customerID}&amount=${amount}&downPayment=${downPayment}&fromAccountId=${sourceAcc}`,
            hearders: { "Accept" : "application/json"}
        })
    }
}

export default LoanAPI;