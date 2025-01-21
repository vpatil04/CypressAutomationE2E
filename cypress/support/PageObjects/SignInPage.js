import { ProductPage } from "./ProductPage"
export class SignInPage{
 
goTo(url){
    cy.visit(url)
}
login(username, password){
   cy.get("#username").type(username)
   cy.get("#password").type(password)
   cy.contains("Sign In").click()

   return new ProductPage()
}
}