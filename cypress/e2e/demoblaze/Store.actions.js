import { buttonAddCart, filterPhoneCategory, titleElements } from "./Store.ui"


export const addPhoneToCart =(nameProduct) => {
    cy.get(filterPhoneCategory).click()
    cy.get(titleElements).contains(nameProduct).click()
    cy.get(buttonAddCart).click()
}