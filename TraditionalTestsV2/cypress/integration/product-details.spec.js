import * as MainPage from "../pages/main-page.js"
import * as ProductPage from "../pages/product-page.js"

// this is required for the txt report generation only
Cypress.env("taskNr", 3);

describe("On the product details page for the first available black shoe", () => {
    before(() => {
        MainPage.navigate();
        MainPage.filterByColour("Black");
        MainPage.openProductPage(1);
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

        it("the product image is visible", function () {
            ProductPage.productImage().verify(["not.have.css", "background-image", "none"], this.test.title);
        });

        it("the correct model number is visible", function () {
            ProductPage.modelNumber().verify(["be.visible"], this.test.title);
            ProductPage.modelNumber().verify(["have.text", "SKU: MTKRY-001"], this.test.title);
            ProductPage.modelNumber().verify(["have.css", "color", "rgb(68, 68, 68)"], this.test.title);
        });

        it(`the default shoe size is "Small"`, function () {
            ProductPage.selectedSize().verify(["have.text", "Small (S)"], this.test.title);
        });

        it("the current price is $33.00", function () {
            ProductPage.currentPrice().verify(["have.text", "$33.00"], this.test.title);
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

        it("the product image is visible", function () {
            ProductPage.productImage().verify(["not.have.css", "background-image", "none"], this.test.title);
        });

        it("the correct model number is visible", function () {
            ProductPage.modelNumber().verify(["be.visible"], this.test.title);
            ProductPage.modelNumber().verify(["have.text", "SKU: MTKRY-001"], this.test.title);
            ProductPage.modelNumber().verify(["have.css", "color", "rgb(68, 68, 68)"], this.test.title);
        });

        it(`the default shoe size is "Small"`, function () {
            ProductPage.selectedSize().verify(["have.text", "Small (S)"], this.test.title);
        });

        it("the current price is $33.00", function () {
            ProductPage.currentPrice().verify(["have.text", "$33.00"], this.test.title);
        });

        it("the header control buttons have correct margins", function () {
            MainPage.shoppingCartButton().then(($els) => {
                cy.window().invoke("getComputedStyle", $els[0]).its("margin-left").verify(["equal", "20px",
                    "The shopping cart button has an invalid margin-left property"], this.test.title);
            });
            MainPage.wishlistButton().then(($els) => {
                cy.window().invoke("getComputedStyle", $els[0]).its("margin-left").verify(["equal", "20px",
                    "The wishlist button has an invalid margin-left property"], this.test.title);
            });
            MainPage.profileButton().then(($els) => {
                cy.window().invoke("getComputedStyle", $els[0]).its("margin-left").verify(["equal", "20px",
                    "The profile button has an invalid margin-left property"], this.test.title);
            });
        });

        it("the review counter has correct margin", function () {
            ProductPage.reviewCounter().then(($els) => {
                cy.window().invoke("getComputedStyle", $els[0]).its("margin-left").verify(["equal", "0px",
                    "The review counter has an invalid margin-left property"], this.test.title);
            });
        });

        it(`the "Add to cart" button has correct margins`, function () {
            ProductPage.addToCartButton().then(($els) => {
                cy.window().invoke("getComputedStyle", $els[0]).its("margin-top").verify(["equal", "0px",
                    `The "Add to cart" button has an invalid margin-top property`], this.test.title);
                cy.window().invoke("getComputedStyle", $els[0]).its("margin-bottom").verify(["equal", "0px",
                    `The "Add to cart" button has an invalid margin-bottom property`], this.test.title);
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

        it("the correct model number is visible", function () {
            ProductPage.modelNumber().verify(["be.visible"], this.test.title);
            ProductPage.modelNumber().verify(["have.text", "SKU: MTKRY-001"], this.test.title);
            ProductPage.modelNumber().verify(["have.css", "color", "rgb(68, 68, 68)"], this.test.title);
        });

        it(`the default shoe size is "Small"`, function () {
            ProductPage.selectedSize().verify(["have.text", "Small (S)"], this.test.title);
        });

        it("the review counter has correct margin", function () {
            ProductPage.reviewCounter().then(($els) => {
                cy.window().invoke("getComputedStyle", $els[0]).its("margin-left").verify(["equal", "0px",
                    "The review counter has an invalid margin-left property"], this.test.title);
            });
        });

        it("the current price is $33.00", function () {
            ProductPage.currentPrice().verify(["have.text", "$33.00"], this.test.title);
        });

        it("the old price is gray and strikethrough", function () {
            ProductPage.oldPrice().verify(["have.css", "color", "rgb(153, 153, 153)", "The old price text is not gray"], this.test.title);
            ProductPage.oldPrice().verify(["have.css", "text-decoration", "line-through solid rgb(153, 153, 153)", "The old price text is not strikethrough"], this.test.title);
        });
    });
});