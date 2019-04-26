class CartPage {
    
     /**
    * define elements
    */

   headline()   { return cy.get('.subheader') }
   proceedToCheckoutButton() {return cy.get('.btn_action')}
}

export default new CartPage()