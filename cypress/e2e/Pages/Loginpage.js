class LoginPage{
    logIn(userName, password){
        cy.get('[name="username"]').type(userName)
        cy.get('[name="password"]').type(password)
        cy.get('[value="Log In"]').click()
    }

    verifyLogIn(name, surName){
        cy.get(".smallText").contains(`${name} ${surName}`)
    }
}

export default LoginPage;