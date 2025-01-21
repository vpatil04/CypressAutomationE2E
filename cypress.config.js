const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config){
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
 }

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  reporter: 'cypress-mochawesome-reporter',  // Set Mochawesome as the reporter
  reporterOptions: {
    reportDir: 'cypress/results',  // Reports will be saved here
    overwrite: true,               // Overwrite any previous reports
    html: true,                    // Generate HTML report
    json: true,                     // Generate JSON report (used internally)
    screenshotOnRunFailure: true,
  },
  screenshotsFolder: 'cypress/screenshots',
  e2e: {
    setupNodeEvents,
      // This initializes the Mochawesome plugin with Cypress
   //   require('cypress-mochawesome-reporter/plugin')(on),
      
    
    specPattern: 'cypress/integration/examples/BDD/*.feature'
  },
});
