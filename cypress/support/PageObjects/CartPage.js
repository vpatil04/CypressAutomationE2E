export class CartPage{
validateSum(){
    let sum=0
        cy.get('tr td:nth-child(4) strong')
        .each($el=>{
          const amount= Number($el.text().split(" ")[1].trim())
          sum = sum + amount
        }).then(()=> {
           expect(sum).to.be.lessThan(200000)
        })
}

validateCheckoutButton(){
    cy.contains('button', 'Checkout').click()
}

}