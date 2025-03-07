import { localUrl } from '../support/constants';

// TODO
describe('template spec', () => {
  it('passes', () => {
    cy.visit(localUrl);
    cy.get('[data-test-id="navbar-home-link"').should('be.visible');
  });
});
