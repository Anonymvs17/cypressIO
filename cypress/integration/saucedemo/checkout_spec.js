import loginEvent from "../saucedemo/events/loginEvent";
import listingPage from "../pages/listing-page";
import cartPage from "../pages/cart-page";
import checkoutInfoPage from "../pages/checkout-info-page";
import checkoutOverviewPage from "../pages/checkout-overview-page";
import checkoutThankyouPage from "../pages/checkout-thankyou-page";

describe('Checkout test', function() {
    it('Can add a product to cart', function() {
        loginEvent.execute();
        listingPage.addToCartButtons().first().click();
        listingPage.cartIcon().click();
    })
    
    it('Can proceed over the cart page', function() {
        cartPage.headline().should('have.text', 'Your Cart');
        cartPage.proceedToCheckoutButton().click();
    })

    it('Can proceed over the checkout information page', function() {
        checkoutInfoPage.firstname().type('Test firstname');
        checkoutInfoPage.lastname().type('Test lastname');
        checkoutInfoPage.postalCode().type('4600');
        checkoutInfoPage.proceedToCheckoutButton().click();
    })

    it('Can proceed over checkout overview page', function() {
        checkoutOverviewPage.proceedToCheckoutButton().click();
    })

    it('Checkout thank you page visible', function() {
       checkoutThankyouPage.headline().should('have.text', 'THANK YOU FOR YOUR ORDER');
    })
})
