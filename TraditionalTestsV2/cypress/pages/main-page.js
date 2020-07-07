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

export function productGridFiltersButton() {
    return cy.get(".clearfix .open_filters");
}

export function shoppingCartButton() {
    return cy.get(".top_tools li:nth-child(1)");
}

export function wishlistButton() {
    return cy.get(".top_tools li:nth-child(2)");
}

export function profileButton() {
    return cy.get(".top_tools li:nth-child(3)");
}

export function gridLayoutButton() {
    return cy.get(".ti-view-grid");
}

export function listLayoutButton() {
    return cy.get(".ti-view-list");
}

export function gridItems() {
    return cy.get(".grid_item");
}

export function gridItemNames() {
    return gridItems().find("h3");
}

export function addToCompareButton(gridItemElement) {
    return gridItemElement.find(".ti-control-shuffle");
}

export function addToFavouritesButton(gridItemElement) {
    return gridItemElement.find(".ti-heart");
}

export function addToCartButton(gridItemElement) {
    return gridItemElement.find(".ti-shopping-cart");
}

export function searchInput() {
    return cy.get(".custom-search-input");
}

export function shoppingCartCounter() {
    return cy.get(".cart_bt strong");
}

export function quickLinksSection() {
    return cy.get("footer h3").first();
}