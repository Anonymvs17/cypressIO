class ListingPage {
    
     /**
    * define elements
    */

   usernameInput()   { return cy.get('#user-name') }
   passwordInput()   { return cy.get('#password')}
   submit()     { return cy.get('[type="submit"]').click() }

   /**
    * define or overwrite page methods
    */
}

export default new ListingPage()