import { localUrl, Routes } from '../support/constants';
import { runOnAllViewports } from '../support/e2e';

describe('Homepage Regression Tests', () => {
  it('Welcome text is visible', () => {
    runOnAllViewports(() => {
      cy.visit(localUrl);
      cy.get('[data-test-id="home-welcome-header"').should('be.visible');
      cy.get('[data-test-id="home-welcome-paragraph"').should('be.visible');
    });
  });

  it('Buttons route correctly', () => {
    runOnAllViewports(() => {
      cy.visit(localUrl);
      cy.get('[data-test-id="home-collection-link"').should('be.visible').click();
      cy.url().should('eq', `${localUrl}${Routes.Collection}`);
    });
  });
});
