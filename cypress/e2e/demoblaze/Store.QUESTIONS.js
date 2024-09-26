import { linkCard,titleProductInCart,priceProductInCart } from "./Store.ui"

export const validateInfoInCart = (nameProduct,priceProduct)=>{

    cy.get(linkCard).click()
    cy.get(titleProductInCart).should('contain',nameProduct)
    cy.get(priceProductInCart).should('contain',priceProduct)
    

}