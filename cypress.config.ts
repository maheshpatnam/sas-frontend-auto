import { defineConfig } from 'cypress';

export default defineConfig({
  chromeWebSecurity: false,
  watchForFileChanges: false,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 80000,
  responseTimeout: 60000,
  numTestsKeptInMemory: 0,
  blockHosts: [
    '*google-analytics.com',
    '*googletagmanager.com',
    '*facebook.com',
    'browser.sentry-cdn.com',
    '*ct.pinterest.com',
    'connect.facebook.net',
    'static.criteo.net'
  ],
  e2e: {
    // supportFile: false,
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.ts')(on, config);
    },
    testIsolation: true,
    baseUrl: 'http://localhost:4000',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    viewportWidth: 1280,
    viewportHeight: 1400
  },
})
