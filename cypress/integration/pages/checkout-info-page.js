class CheckoutInfoPage {
    
     /**
    * define elements
    */

   firstname()   { return cy.get('[data-test=firstName]') }
   lastname()   { return cy.get('[data-test=lastName]') }
   postalCode()   { return cy.get('[data-test=postalCode]') }
   proceedToCheckoutButton() {return cy.get('.btn_primary')}
}

export default new CheckoutInfoPage()