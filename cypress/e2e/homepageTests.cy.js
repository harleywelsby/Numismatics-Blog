import { localUrl, Routes, runOnAllViewports } from '../support/e2e';

describe('Homepage Regression Tests', () => {
  it.skip('Welcome text is visible', () => {
    runOnAllViewports(() => {
      cy.visit(localUrl);
      cy.get('[data-test-id="home-welcome-header"').should('be.visible');
      cy.get('[data-test-id="home-welcome-paragraph"').should('be.visible');
    });
  });

  it.skip('Buttons route correctly', () => {
    runOnAllViewports(() => {
      cy.visit(localUrl);
      cy.get('[data-test-id="home-collection-link"').should('be.visible').click();
      cy.url().should('eq', `${localUrl}${Routes.Collection}`);
    });
  });
});
