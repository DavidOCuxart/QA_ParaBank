class TransactionsAPI{
    getTransactions(accountID){
        return cy.request({
            method : "GET",
            url : `https://parabank.parasoft.com/parabank/services/bank/accounts/${accountID}/transactions`,
            headers : {
                "Accept" : "application/json"
            }
        }).its("body");
    }

    getTransactionsByAmount(accoundID, amount){
        return cy.request({
            method : "GET",
            url : `https://parabank.parasoft.com/parabank/services/bank/accounts/${accoundID}/transactions/amount/${amount}`,
            headers : {
                "Accept" : "application/json"
            }
        }).its("body");
    }

    getTransactionsByMonthAndType(accountID, month, transactionType){
        //expect(transactionType).to.be.oneOf(["CREDIT", "DEBIT"])
        //expect(month).to.be.oneOf(["January, February, March, April, May, June, July, August, September, October, November, December"])
        return cy.request({
            method : "GET",
            url : `https://parabank.parasoft.com/parabank/services/bank/accounts/${accountID}/transactions/month/${month}/type/${transactionType}`,
            headers : {
                "Accept" : "application/json"
            }
        }).its("body");
    }

    getTransactionsByDateRange(accountID, fromDate, toDate){
        return cy.request({
            method : "GET",
            url : `https://parabank.parasoft.com/parabank/services/bank/accounts/${accountID}/transactions/fromDate/${fromDate}/toDate/${toDate}`,
            headers : {
                "Accept" : "application/json"
            }
        }).its("body");
    }

    getTransactionsOnDate(accountID, onDate){
        return cy.request({
            method : "GET",
            url : `https://parabank.parasoft.com/parabank/services/bank/accounts/${accountID}/transactions/onDate/${onDate}`,
            headers : {
                "Accept" : "application/json"
            }
        }).its("body");
    }

    transfer(sourceAccount, targetAccount, amount){
        return cy.request({
            method : "POST",
            url : "https://parabank.parasoft.com/parabank/services/bank/transfer",
            headers : {"Content-Type" : "application/json"},
            body : {
                fromAccountId : sourceAccount,
                toAccountId : targetAccount,
                amount : amount
            }
        })
    }
}

export default TransactionsAPI;