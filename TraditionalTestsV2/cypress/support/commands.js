// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// this is used for the txt report generation when an assertion is initiated
Cypress.Commands.add("verify", { prevSubject: true }, (elementsTested, shouldArgs, testName) => {
    Cypress.env("testName", testName);
    // if the assertion fails, then we will keep the "Fail" log
    cy.task("writeToReport", {
        filename: `Traditional-${Cypress.env("appVersion")}-TestResults.txt`,
        log: '\nTask: ' + Cypress.env("taskNr") + ', Test Name: ' + Cypress.env("testName")
            + ', Browser: ' + Cypress.browser.displayName + ', Viewport: ' + Cypress.env("viewportWidth") + 'x' + Cypress.env("viewportHeight")
            + ', Device: ' + Cypress.env("device") + ', Status:Fail'
    });
    // if the assertion passes, then we will remove the last log and place a "Pass" instead
    cy.wrap(elementsTested).should(...shouldArgs);
    cy.task("removeLastLog", `Traditional-${Cypress.env("appVersion")}-TestResults.txt`);
    cy.task("writeToReport", {
        filename: `Traditional-${Cypress.env("appVersion")}-TestResults.txt`,
        log: '\nTask: ' + Cypress.env("taskNr") + ', Test Name: ' + Cypress.env("testName")
            + ', Browser: ' + Cypress.browser.displayName + ', Viewport: ' + Cypress.env("viewportWidth") + 'x' + Cypress.env("viewportHeight")
            + ', Device: ' + Cypress.env("device") + ', Status:Pass'
    });
});