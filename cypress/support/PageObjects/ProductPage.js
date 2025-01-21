export class ProductPage{
    pagevalidation(){
          cy.contains("Shop Name").should('be.visible')
          cy.log("Shop name is visible")
    }
    verifycardLimit(){
         cy.get('app-card').should('have.length', 4)
    }
    selectFirstProduct(){
        cy.get('app-card').eq(0).contains('button', 'Add').click()
    }
    selectProduct(productName){
        cy.get('app-card').filter(`:contains("${productName}")`).then($element=>{
            cy.wrap($element).should('have.length', 1)
            cy.wrap($element).contains('button', 'Add').click()
            cy.log("Selected product is added")
        })
    }
    goToCart(){
        cy.contains('a', 'Checkout').click()
    }
}