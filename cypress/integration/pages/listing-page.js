class ListingPage {
    
     /**
    * define elements
    */
   headline()   { return cy.get('.product_label') }
   addToCartButtons() {return cy.get('.pricebar > .btn_primary')}
   cartIcon() {return cy.get('.svg-inline--fa')}
}

export default new ListingPage()