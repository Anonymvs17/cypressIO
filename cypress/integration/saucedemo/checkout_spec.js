import loginEvent from "../saucedemo/events/loginEvent";
import listingPage from "../pages/listing-page";
import cartPage from "../pages/cart-page";

describe('Checkout test', function() {
    it('Can add a product to cart', function() {
        loginEvent.execute();
        listingPage.addToCartButtons().first().click();
        listingPage.cartIcon().click();
    })
    
    it('Can proceed over the cart page', function() {
        cartPage.headline().should('have.text', 'Your Cart');
        cartPage.proceedToCheckoutButton().click;
    })
})
