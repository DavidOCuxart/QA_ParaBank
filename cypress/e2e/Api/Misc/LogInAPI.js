class LogInAPI{
    logIn(userName, password, logInUrl){
        return cy.request({
            method : "POST",
            url : logInUrl,
            form : true,
            body : {
                username : userName,
                password : password
            }
        }).then((res) => {
            const newUrl = res.redirects[0].split(";")[0].replace("302: ", "");
            cy.goToUrl(newUrl);
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