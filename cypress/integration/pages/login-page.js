class LoginPage {
    
     /**
    * define elements
    */

   usernameInput()   { return cy.get('#user-name') }
   passwordInput()   { return cy.get('#password')}
   submit()     { return cy.get('[type="submit"]').click() }

   /**
    * define or overwrite page methods
    */
   open () {
    cy.visit(Cypress.config('baseUrl'))   
   }
}

export default new LoginPage()