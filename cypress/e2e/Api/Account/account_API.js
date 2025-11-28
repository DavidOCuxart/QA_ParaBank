class AccountAPI{


    CreateAccount(customerID, accountType, fundAccount){
        //Array [CHECKING, SAVINGS, LOAN]
        cy.request({
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

    BillPay(accountID, amount){
        //An object and be send to the function so it can replace that body with body : objectName
        cy.request({
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

    Deposit(accountID, amount){
        cy.request({
            method : "POST",
            url : "https://parabank.parasoft.com/parabank/services/bank/deposit",
            headers : {"Content-Type" : "application/json", "Accept" : "application/json"},
            body : {
                accountId : accountID,
                amount : amount
            }
        })
    }

    GetAccoundId(accoundID){
        return cy.request({
            method : "GET",
            url : `https://parabank.parasoft.com/parabank/services/bank/accounts/${accoundID}`,
            headers : {
                "Accept" : "application/json"
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            return response.body;
            //cy.log(JSON.stringify(data));
        })
    }

    GetAllAccounts(customerID){
        return cy.request({
            method : "GET",
            url : `https://parabank.parasoft.com/parabank/services/bank/customers/${customerID}/accounts`,
            headers : {
                "Accept" : "application/json"
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            return response.body;
        })
    }

    GetTransactions(accountID){
        return cy.request({
            method : "GET",
            url : `https://parabank.parasoft.com/parabank/services/bank/accounts/${accountID}/transactions`,
            headers : {
                "Accept" : "application/json"
            }
        }).then((response) => {
            expect(response).to.be.an("array");
            expect(response.status).to.equal(200);
            return response.body;
        })
    }

    GetTransactionByAmount(accoundID, amount){
        return cy.request({
            method : "GET",
            url : `https://parabank.parasoft.com/parabank/services/bank/accounts/${accoundID}/transactions/amount/${amount}`,
            headers : {
                "Accept" : "application/json"
            }
        }).then((response) => {
            expect(response.status).to.be.equal(200);
            return response.body;
        })
    }

    FetchTransMonthType(accountID, month, transactionType){
        expect(transactionType).to.be.oneOf(["CREDIT, DEBIT"])
        expect(month).to.be.oneOf(["January, February, March, April, May, June, July, August, September, October, November, December"])
        return cy.request({
            method : "GET",
            url : `https://parabank.parasoft.com/parabank/services/bank/accounts/${accountID}/transactions/month/${month}/type/${transactionType}`,
            headers : {
                "Accept" : "application/json"
            }
        }).then((response) => {
            expect(response.status).to.be.equal(200);
            return response.body;
        })
    }

    FetchTransDateRange(accountID, fromDate, toDate){
        return cy.request({
            method : "GET",
            url : `https://parabank.parasoft.com/parabank/services/bank/accounts/${accountID}/transactions/fromDate/${fromDate}/toDate/${toDate}`,
            headers : {
                "Accept" : "application/json"
            }
        }).then((response) => {
            return response.body;
        })
    }

    FetchSpecificDateTransactions(accountID, onDate){
        return cy.request({
            method : "GET",
            url : `https://parabank.parasoft.com/parabank/services/bank/accounts/${accountID}/transactions/onDate/${onDate}`,
            headers : {
                "Accept" : "applciation/json"
            }
        }).then((response) => {
            return response.body;
        })
    }

    Transer(sourceAccount, targetAccount, amount){
        cy.request({
            method : "POST",
            url : "https://parabank.parasoft.com/parabank/services/bank/transfer",
            headers : {"Content-Type" : "application/json"},
            body : {
                fromAccountId : sourceAccount,
                toAccountId : targetAccount,
                amount : amount
            }
        }).then((data) => {
            //expect(data).to.have.property("transactionId");
        })
    }

    Withdraw(accountID, amount){
        cy.request({
            method : "POST",
            url : "https://parabank.parasoft.com/parabank/services/bank/withdraw?accountId=12345&amount=500",
            headers : {"Content-Type" : "application/json"},
            body : {
                accountId : accountID,
                amout : amount
            }
        }).then((data) => {
            //Data Validations Website Down now
        })
    }
}

export default AccountAPI;