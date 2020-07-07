import * as MainPage from "../pages/main-page.js"

// this is required for the txt report generation only
Cypress.env("taskNr", 1);

describe("On the main page", () => {
    before(() => {
        MainPage.navigate();
    });

    context("in 1200x700 resolution", () => {
        before(() => {
            // this is required for the txt report generation only
            cy.fixture("devices").then((devices) => {
                Cypress.env("viewportWidth", devices.laptop.width);
                Cypress.env("viewportHeight", devices.laptop.height);
                Cypress.env("device", devices.laptop.name);
            });
        });

        beforeEach(() => {
            // this is used in beforeEach due to the still valid issue described here: https://github.com/cypress-io/cypress/issues/1534
            cy.fixture("devices").then((devices) => {
                cy.viewport(devices.laptop.width, devices.laptop.height);
            });
        });

        it("the product grid Filters button is hidden", function () {
            MainPage.productGridFiltersButton().verify(["be.hidden"], this.test.title);
            // MainPage.productGridFiltersButton().verify(["be.visible"], this.test.title);
        });
    });

    context("in 768x700 resolution", () => {
        before(() => {
            // this is required for the txt report generation only
            cy.fixture("devices").then((devices) => {
                Cypress.env("viewportWidth", devices.tablet.width);
                Cypress.env("viewportHeight", devices.tablet.height);
                Cypress.env("device", devices.tablet.name);
            });
        });

        beforeEach(() => {
            // this is used in beforeEach due to the still valid issue described here: https://github.com/cypress-io/cypress/issues/1534
            cy.fixture("devices").then((devices) => {
                cy.viewport(devices.tablet.width, devices.tablet.height);
            });
        });

        it("the wishlist button is hidden", function () {
            MainPage.wishlistButton().verify(["be.hidden"], this.test.title);
        });

        it("the product grid layout buttons are hidden", function () {
            MainPage.gridLayoutButton().verify(["be.hidden", "The grid layout button is not hidden"], this.test.title);
            MainPage.listLayoutButton().verify(["be.hidden", "The list layout button is not hidden"], this.test.title);
        });

        it("the grid item buttons are visible", function () {
            MainPage.gridItems().each(($el, index) => {
                MainPage.addToFavouritesButton(cy.wrap($el)).verify(["be.visible", `"Add to favourites" button for product nr ${index} is not visible`], this.test.title);
                MainPage.addToCompareButton(cy.wrap($el)).verify(["be.visible", `"Add to compare" button for product nr ${index} is not visible`], this.test.title);
                MainPage.addToCartButton(cy.wrap($el)).verify(["be.visible", `"Add to cart" button for product nr ${index} is not visible`], this.test.title);
            });
        });
    });

    context("in 500x700 resolution", {
        browser: "chrome"
    }, () => {
        before(() => {
            // this is required for the txt report generation only
            cy.fixture("devices").then((devices) => {
                Cypress.env("viewportWidth", devices.mobile.width);
                Cypress.env("viewportHeight", devices.mobile.height);
                Cypress.env("device", devices.mobile.name);
            });
        });

        beforeEach(() => {
            // this is used in beforeEach due to the still valid issue described here: https://github.com/cypress-io/cypress/issues/1534
            cy.fixture("devices").then((devices) => {
                cy.viewport(devices.mobile.width, devices.mobile.height);
            });
        })

        it("the search input is hidden", function () {
            MainPage.searchInput().verify(["be.hidden"], this.test.title);
        });

        it("the wishlist button is hidden", function () {
            MainPage.wishlistButton().verify(["be.hidden"], this.test.title);
        });

        it("the shopping cart counter is hidden", function () {
            MainPage.shoppingCartCounter().verify(["be.hidden"], this.test.title);
        });

        it("the product grid layout buttons are hidden", function () {
            MainPage.gridLayoutButton().verify(["be.hidden", "The grid layout button is not hidden"], this.test.title);
            MainPage.listLayoutButton().verify(["be.hidden", "The list layout button is not hidden"], this.test.title);
        });

        it("the grid item buttons are visible", function () {
            MainPage.gridItems().each(($el, index) => {
                MainPage.addToFavouritesButton(cy.wrap($el)).verify(["be.visible", `"Add to favourites" button for product nr ${index} is not visible`], this.test.title);
                MainPage.addToCompareButton(cy.wrap($el)).verify(["be.visible", `"Add to compare" button for product nr ${index} is not visible`], this.test.title);
                MainPage.addToCartButton(cy.wrap($el)).verify(["be.visible", `"Add to cart" button for product nr ${index} is not visible`], this.test.title);
            });
        });

        it("the Quick Links section is collapsed", function () {
            MainPage.quickLinksSection().verify(["not.have.class", "opened", "The Quick Links section is not collapsed"], this.test.title);
        });
    });
});