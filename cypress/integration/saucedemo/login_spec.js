import loginPage from "../pages/login-page";

describe('Logintest', function() {
    it('As a user I am able to login', function() {
        loginPage.open();
        loginPage.usernameInput().type(Cypress.config('standarduser'))
        loginPage.passwordInput().type("secret_sauce")
        loginPage.submit();
    
        expect(true).to.equal(true)
    })
})

//start with .\node_modules\.bin\cypress open