import { localUrl, Routes } from '../support/constants';
import { runOnAllViewports } from '../support/e2e';

describe('Collection Regression Tests', () => {
  it('List items are visible and modal functions correctly', () => {
    runOnAllViewports(() => {
      cy.visit(`${localUrl}${Routes.Collection}`);

      // Gets the Coin Card with Id = 1. This should always exist.
      cy.get('[data-test-id="coin-card-1"').should('be.visible').click();
      cy.get('[data-test-id="coin-card-1-modal-content"').should('be.visible');
      cy.get('[data-test-id="coin-card-1-modal-close"').should('be.visible').click();
      cy.get('[data-test-id="coin-card-1-modal-content"').should('not.exist');
    });
  });
});
