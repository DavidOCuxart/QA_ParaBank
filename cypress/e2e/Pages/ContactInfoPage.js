class ContactInfoPage{
    changeFirstName(name){
        cy.get('[name="customer.firstName"]').should("not.have.value", "").clear().type(name);
    }

    changeLastName(lastName){
        cy.get('[name="customer.lastName"]').should("not.have.value", "").clear().type(lastName);
    }

    changeAddress(address){
        cy.get('[name="customer.address.street"]').should("not.have.value", "").clear().type(address);
    }

    changeCity(city){
        cy.get('[name="customer.address.city"]').should("not.have.value", "").clear().type(city);
    }

    changeState(state){
        cy.get('[name="customer.address.state"]').should("not.have.value", "").clear().type(state);
    }

    changeZipCode(zipCode){
        cy.get('[name="customer.address.zipCode"]').should("not.have.value", "").clear().type(zipCode);
    }

    changePhoneNumber(phoneNumber){
        cy.get('[name="customer.phoneNumber"]').should("not.have.value", "").clear().type(phoneNumber);
    }

    clickButtonChange(){
        cy.get('[value="Update Profile"]').click();
    }

    verifyInformation(account){
        cy.get('[name="customer.firstName"]').should("have.value", account[0])
        cy.get('[name="customer.lastName"]').should("have.value", account[1])
        cy.get('[name="customer.address.street"]').should("have.value", account[2])
        cy.get('[name="customer.address.city"]').should("have.value", account[3])
        cy.get('[name="customer.address.state"]').should("have.value", account[4])
        cy.get('[name="customer.address.zipCode"]').should("have.value", account[5])
        cy.get('[name="customer.phoneNumber"]').should("have.value", account[6])

    }
}

export default ContactInfoPage;