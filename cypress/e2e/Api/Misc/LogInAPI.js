class LogInAPI{
    logIn(userName, password, logInUrl, url){
        return cy.request({
            method : "POST",
            url : logInUrl,
            form : true,
            body : {
                username : userName,
                password : password
            }
        }).then(() => {
            cy.goToUrl(url)
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

export default LogInAPI;