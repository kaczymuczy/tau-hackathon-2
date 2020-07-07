/// <reference types="cypress"/>

export function navigate() {
    cy.visit(`/gridHackathon${Cypress.env("appVersion")}.html`);
}

export function filterByColour(colour) {
    cy.get("#sidebar_filters .filter_type:nth-child(2)").contains("label", colour).find("input").click();
    cy.get("#filterBtn").click();
}

export function openProductPage(number) {
    cy.get("#product_grid").find("div").eq(number).click();
}