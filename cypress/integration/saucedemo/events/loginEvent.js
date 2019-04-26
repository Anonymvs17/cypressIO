import loginPage from "../../pages/login-page";
import listingPage from "../../pages/listing-page";

class LoginEvent{
    execute(){
        loginPage.open();
        loginPage.usernameInput().type(Cypress.env('standarduser'));
        loginPage.passwordInput().type(Cypress.env('standarduserPw'));
        loginPage.submit();
    
        listingPage.headline().should('have.text', 'Products');
    }
}

export default new LoginEvent()