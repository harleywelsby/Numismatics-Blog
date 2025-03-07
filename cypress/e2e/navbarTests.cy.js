import { localUrl, Routes } from '../support/constants';

describe('Navbar Regression Tests', () => {
  beforeEach(() => {
    cy.visit(localUrl);
  });

  it('Navbar header is visible', () => {
    // Header logo & text visible
    cy.get('[data-test-id="navbar-logo"').should('be.visible');
    cy.get('[data-test-id="navbar-title"').should('be.visible');
  });

  it('Navbar items route correctly', () => {
    cy.get('[data-test-id="navbar-collection-link"').should('be.visible').click();
    cy.url().should('eq', `${localUrl}${Routes.Collection}`);

    cy.get('[data-test-id="navbar-home-link"').should('be.visible').click();
    cy.url().should('eq', `${localUrl}${Routes.Home}`);
  });
});
