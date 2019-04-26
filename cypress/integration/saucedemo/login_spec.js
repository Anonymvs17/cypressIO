import loginPage from "../pages/login-page";
import listingPage from "../pages/listing-page";

describe('Logintest', function() {
    it('As a user I am able to login', function() {
        loginPage.open();
        loginPage.usernameInput().type(Cypress.env('standarduser'));
        loginPage.passwordInput().type(Cypress.env('standarduserPw'));
        loginPage.submit();
    
        listingPage.headline().should('have.text', 'Products');
    })
})

//start with .\node_modules\.bin\cypress open