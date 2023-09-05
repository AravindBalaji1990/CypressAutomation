const cucumber = require('cypress-cucumber-preprocessor').default 
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Inline Reporter',
    embeddedScreenshots: true, 
    inlineAssets: true, //Adds the asserts inline
  },
  e2e: {
    specPattern: "cypress/e2e/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});