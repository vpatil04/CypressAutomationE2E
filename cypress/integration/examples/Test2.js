/// <reference types="Cypress" />
describe('My first test suite', function () {
    it('My first test case', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should("be.checked").and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        
       

    })
})