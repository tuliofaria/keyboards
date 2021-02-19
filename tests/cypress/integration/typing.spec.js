/// <reference types="cypress" />

describe('type something', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should type a name', () => {
    cy.get('input[name="name"]').type('tulio')
    cy.get('button[type="submit"]').click()
    expect(cy.get('p').first().contains('Hi tulio!'))
  })
  it('should clear a name', () => {
    cy.get('input[name="name"]').type('tulio')
    cy.get('button[type="submit"]').click()
    expect(cy.get('p').first().contains('Hi tulio!'))
    cy.get('button[type="reset"]').click()
    expect(cy.get('input[name="name"]').should('have.value', ''))
    expect(cy.get('p').should('not.exist'))
  })
})
