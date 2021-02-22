/// <reference types="cypress" />

describe('Actions', () => {
  beforeEach(() => {
    cy.visit('/with-data-ids')
  })
  // type with tabs
  it('types "understood" using CSS class names', () => {
    cy.get('[data-testid="keyU"]').click()
    cy.get('[data-testid="keyN"]').click()
    cy.get('[data-testid="keyD"]').click()
    cy.get('[data-testid="keyE"]').click()
    cy.get('[data-testid="keyR"]').click()
    cy.get('[data-testid="keyS"]').click()
    cy.get('[data-testid="keyT"]').click()
    cy.get('[data-testid="keyO"]').click()
    cy.get('[data-testid="keyO"]').click()
    cy.get('[data-testid="keyD"]').click()

    expect(cy.get('[data-testid="display"]').contains('understood'))
  })

  it('types "U" with focus and enter', () => {
    cy.get('[data-testid="keyU"]').first().focus().click()

    expect(cy.get('[data-testid="display"]').contains('u'))
  })
})
