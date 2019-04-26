import loginPage from "../pages/login-page";

describe('Search Test', function() {
    it('As a user I am able to search for a product', function() {
        loginPage.open();
        loginPage.usernameInput().type(Cypress.config('standarduser'))
        loginPage.passwordInput().type("secret_sauce")
        loginPage.submit();
    
        expect(true).to.equal(true)
    })
})

//start with .\node_modules\.bin\cypress open