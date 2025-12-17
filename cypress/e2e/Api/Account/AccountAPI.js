class AccountAPI{
    createAccount(customerID, accountType, fundAccount){
        return cy.request({
            method : "POST",
            url : `https://parabank.parasoft.com/parabank/services/bank/createAccount?customerId=${customerID}&newAccountType=${accountType}&fromAccountId=${fundAccount}`,
            headers : { "Accept" : "application/json"}
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
}

export default AccountAPI;