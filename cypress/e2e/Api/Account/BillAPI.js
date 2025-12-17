class BillAPI{
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
}

export default BillAPI;