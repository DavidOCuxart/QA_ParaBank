class AccountAPI{
    createAccount(customerID, accountType, fundAccount){
        //Array [CHECKING, SAVINGS, LOAN]
        return cy.request({
            method : "POST",
            url : `https://parabank.parasoft.com/parabank/services/bank/createAccount`,
            headers : {"Content-Type" : "application/json", "Accept" : "application/json"},
            body : {
                customerId : customerID,
                newAccountType : accountType,
                fromAccountId : fundAccount
            }
        })
    }

    billPay(accountID, amount){
        //An object and be send to the function so it can replace that body with body : objectName
        return cy.request({
            method : "POST",
            url : `https://parabank.parasoft.com/parabank/services/bank/billpay?accountId=${accountID}&amount=${amount}`,
            headers : {"Content-Type" : "application/json", "Accept" : "application/json"},
            body : {
                "name": "string",
                "address": {
                    "street": "string",
                    "city": "string",
                    "state": "string",
                    "zipCode": "string"
                },
                "phoneNumber": "string",
                "accountNumber": 0
            }
        })
    }

    deposit(accountID, amount){
        return cy.request({
            method : "POST",
            url : "https://parabank.parasoft.com/parabank/services/bank/deposit",
            headers : {"Content-Type" : "application/json", "Accept" : "application/json"},
            body : {
                accountId : accountID,
                amount : amount
            }
        })
    }

    getAccountInformation(accoundID){
        return cy.request({
            method : "GET",
            url : `https://parabank.parasoft.com/parabank/services/bank/accounts/${accoundID}`,
            headers : {
                "Accept" : "application/json"
            }
        }).its("body");
    }

    getAllAccounts(customerID){
        return cy.request({
            method : "GET",
            url : `https://parabank.parasoft.com/parabank/services/bank/customers/${customerID}/accounts`,
            headers : {
                "Accept" : "application/json"
            }
        }).its("body");
    }

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

    withdraw(accountID, amount){
        return cy.request({
            method : "POST",
            url : "https://parabank.parasoft.com/parabank/services/bank/withdraw",
            headers : {"Content-Type" : "application/json"},
            body : {
                accountId : accountID,
                amount : amount
            }
        })
    }
}

export default AccountAPI;