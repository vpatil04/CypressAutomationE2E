/// <reference types="Cypress" />
describe('My first test suite', function () {
    it('My first test case', function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('input[class="search-keyword"]').type('ca')
        cy.wait(2000);
        cy.get('.brand').then((greenLogo) => {
            cy.log(greenLogo.text())

        })

        //  cy.get('div[class="product"]').should('have.length', 4);
        cy.get('div.products').find('div[class=product]').each(($el, index, $list) => {
            const veggieName = $el.find('h4.product-name').text()
            if (veggieName.includes('Capsicum')) {
                cy.wrap($el).find('button').click();

            }

        })
        cy.get('.cart-icon > img').click();
        cy.get('[type="button"]').contains('PROCEED TO CHECKOUT').click({force:true});
      //  cy.get('[style="text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;"] > :nth-child(14)').click();
        cy.get('button').contains('Place Order').click();
    })
})