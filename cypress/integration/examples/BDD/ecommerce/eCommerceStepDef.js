import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { SignInPage } from "../../../../support/PageObjects/SignInPage"
import { CartPage } from "../../../../support/PageObjects/CartPage"
import { ConfirmationPage } from "../../../../support/PageObjects/ConfirmationPage"

const signInPage = new SignInPage()
const cartPage = new CartPage()
const confirmationPage = new ConfirmationPage()

Given('I am on Ecommerce Page', () => {
    signInPage.goTo("https://rahulshettyacademy.com/loginpagePractise/")

})

When('I login to the application', function() {
    this.ProductPage = signInPage.login(this.data.username, this.data.password)
    this.ProductPage.pagevalidation();
    this.ProductPage.verifycardLimit();
})

When('I add item to cart and checkout', function () {
    this.ProductPage.selectFirstProduct();
    this.ProductPage.selectProduct(this.data.productName);
    this.ProductPage.goToCart();
})

When('Validate total price limit', function () {
    cartPage.validateSum()

})

Then('Select county submit and verify Thank you', function(){
    cartPage.validateCheckoutButton();
    confirmationPage.submitFormDetails();
    confirmationPage.getAlertMessage();

})




