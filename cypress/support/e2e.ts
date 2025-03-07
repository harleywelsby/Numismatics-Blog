import './commands';

// Always default to pipeline URL
export const localUrl = Cypress.env('url') ?? 'http://localhost:4173';

export const Routes = {
  Home: '/',
  Blog: '/blog',
  Collection: '/collection',
  Error: '*',
};

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
