// TODO
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://localhost:3000');
    cy.get('[data-test-id="navbar-home-link"').should('be.visible');
  });
});
