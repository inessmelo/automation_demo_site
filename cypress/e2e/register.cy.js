
/// <reference types="Cypress" />

describe('CT da tela Register', () => {

  beforeEach(() => {
        cy.visit(url)
    })
  
  it('CT01 - Validar campos obrigatorios', () => {
    cy.get('#submitbtn').should('be.visible').click()
    cy.contains('Preencha').shoould('be.visible')
  })


})