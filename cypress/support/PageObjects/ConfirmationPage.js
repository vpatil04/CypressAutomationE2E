export class ConfirmationPage{
submitFormDetails(){
    cy.submitFormDetails()
    // cy.get('#country').type("India")
    // cy.get(".suggestions ul li a ").click()
    // cy.get(".btn-success").click()
}

getAlertMessage(){
    cy.get(".alert-success").should('contain', 'Success')
}

}