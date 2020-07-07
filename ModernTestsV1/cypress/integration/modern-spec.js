/// <reference types="cypress"/>

import * as MainPage from "../pages/main-page.js"

describe("The main page", () => {
    it("adjusts it's elements to the current viewport", function () {
        MainPage.navigate()

        cy.viewport(800, 600);
        cy.eyesOpen({
            appName: "AppliFashion",
            testName: "Task 1",
        });
        cy.eyesCheckWindow("Cross-Device Elements Test");
        cy.eyesClose();
    });
});

describe(`Using the "Filter" option`, () => {
    it(`to find "Black" shoes returns 2 results`, function () {
        MainPage.navigate()
        MainPage.filterByColour("Black")

        cy.viewport(800, 600);
        cy.eyesOpen({
            appName: "AppliFashion",
            testName: "Task 2",
            target: "region",
            selector: "#product_grid"
        });
        cy.eyesCheckWindow("Filter Results Test");
        cy.eyesClose();
    });
});

describe("The product details page ", () => {
    it("looks good and accurate", function () {
        MainPage.navigate()
        MainPage.filterByColour("Black")
        MainPage.openProductPage(1)

        cy.viewport(800, 600);
        cy.eyesOpen({
            appName: "AppliFashion",
            testName: "Task 3",
        });
        cy.eyesCheckWindow("Product Details Test");
        cy.eyesClose();
    });
});