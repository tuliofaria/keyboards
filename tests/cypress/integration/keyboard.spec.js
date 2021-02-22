/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  // type with tabs
  it('types "understood" using CSS class names', () => {
    cy.get('.keyU').click()
    cy.get('.keyN').click()
    cy.get('.keyD').click()
    cy.get('.keyE').click()
    cy.get('.keyR').click()
    cy.get('.keyS').click()
    cy.get('.keyT').click()
    cy.get('.keyO').click()
    cy.get('.keyO').click()
    cy.get('.keyD').click()

    expect(cy.get('.display').contains('understood'))
  })

  it('types "understood" using CSS IDs', () => {
    cy.get('#keyU').click()
    cy.get('#keyN').click()
    cy.get('#keyD').click()
    cy.get('#keyE').click()
    cy.get('#keyR').click()
    cy.get('#keyS').click()
    cy.get('#keyT').click()
    cy.get('#keyO').click()
    cy.get('#keyO').click()
    cy.get('#keyD').click()

    expect(cy.get('.display').contains('understood'))
  })

  it('types "U" with focus and enter', () => {
    cy.get('#keyU').first().focus().click()

    expect(cy.get('.display').contains('u'))
  })
})
