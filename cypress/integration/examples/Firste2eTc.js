import { SignInPage } from "../../support/PageObjects/SignInPage"
import { CartPage } from "../../support/PageObjects/CartPage"
import { ConfirmationPage } from "../../support/PageObjects/ConfirmationPage"

describe('End to End ecommerce Test', function () {
    before(function () {
        cy.fixture('example').then(function (data) {

            this.data = data
        })
    })
    it('Submit Order', function () {

        const productName = this.data.productName
        const signInPage = new SignInPage()
        const cartPage = new CartPage()
        const confirmationPage = new ConfirmationPage()



        signInPage.goTo("https://rahulshettyacademy.com/loginpagePractise/")
        const ProductPage = signInPage.login(this.data.username, this.data.password)
        ProductPage.pagevalidation();
        ProductPage.verifycardLimit();
        ProductPage.selectFirstProduct();
        ProductPage.selectProduct(productName);
        ProductPage.goToCart();
        cartPage.validateSum()
        cartPage.validateCheckoutButton();
        confirmationPage.submitFormDetails();
        confirmationPage.getAlertMessage();


    })

}

)