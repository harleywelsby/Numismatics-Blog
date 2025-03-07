// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

const viewports = [
  'iphone-6',
  'iphone-x',
  'samsung-s10',
  'macbook-11',
  'macbook-13',
  'macbook-15',
  'ipad-2',
];

export const runOnAllViewports = (test: () => void) => {
  viewports.forEach((viewport) => {
    // @ts-expect-error ViewportPreset type is inaccessible. This will always match anyway.
    cy.viewport(viewport);
    test();
  });
};
