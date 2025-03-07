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

const mobileViewports = [
  'iphone-x',
  'samsung-s10',
  'macbook-11',
  'macbook-13',
  'macbook-15',
  'ipad-2',
];

const desktopViewports = [
  { width: 1920, height: 1080 },
  { width: 2560, height: 1440 },
  { width: 3840, height: 2160 },
];

export const runOnAllViewports = (test: () => void) => {
  mobileViewports.forEach((viewport) => {
    // @ts-expect-error ViewportPreset type is inaccessible. This will always match anyway.
    cy.viewport(viewport);
    test();
  });

  desktopViewports.forEach((viewport) => {
    cy.viewport(viewport.width, viewport.height);
    test();
  });
};
