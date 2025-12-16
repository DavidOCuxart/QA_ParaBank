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

}

export default LogInAPI;