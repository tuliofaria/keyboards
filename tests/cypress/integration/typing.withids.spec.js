/// <reference types="cypress" />

describe('type something', () => {
  beforeEach(() => {
    cy.visit('/with-data-ids')
  })
  it('should type a name', () => {
    cy.get('[data-testid="name"]').type('tulio')
    cy.get('[data-testid="say-hi"]').click()
    expect(cy.get('[data-testid="hi-display"]').contains('Hi tulio!'))
  })
  it('should clear a name', () => {
    cy.get('[data-testid="name"]').type('tulio')
    cy.get('[data-testid="say-hi"]').click()
    expect(cy.get('[data-testid="hi-display"]').contains('Hi tulio!'))
    cy.get('[data-testid="reset"]').click()
    expect(cy.get('[data-testid="name"]').should('have.value', ''))
    expect(cy.get('[data-testid="hi-display"]').should('not.exist'))
  })
})
