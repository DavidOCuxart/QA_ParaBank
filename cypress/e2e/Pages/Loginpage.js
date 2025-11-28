class LoginPage{
    logIn(userName, password){
        cy.get('[name="username"]').type(userName)
        cy.get('[name="password"]').type(password)
        cy.get('[value="Log In"]').click()
    }

    verifyLogIn(name, surName){
        cy.get(".smallText").contains(`${name} ${surName}`)
    }

    LogIn(userName, password, logInUrl, url){
        cy.request({
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

export default LoginPage;