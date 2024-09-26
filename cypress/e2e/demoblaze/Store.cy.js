import { addPhoneToCart } from "./Store.actions"
import { validateInfoInCart } from "./Store.QUESTIONS"
import { buttonAddCart, filterPhoneCategory, linkCard, titleElements } from "./Store.ui"



describe('template spec', () => {

  beforeEach(()=>{
    cy.visit('https://demoblaze.com')
  })

  context('Carrito de Compras',()=>{

  const dataProducts= require ('../../fixtures/productos.json')
  
  dataProducts.forEach((product)=>{
    it('Product:' + product.nameProduct,() => {
      addPhoneToCart(product.nameProduct)
      validateInfoInCart(product.nameProduct,product.priceProduct)
  
    })
  })

  
})
})

