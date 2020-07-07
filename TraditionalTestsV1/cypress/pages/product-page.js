export function productImage() {
    return cy.get("#shoe_img");
}

export function modelNumber() {
    return cy.get(".prod_info small");
}

export function selectedSize() {
    return cy.get(".custom-select-form .current");
}

export function currentPrice() {
    return cy.get("#new_price");
}

export function oldPrice() {
    return cy.get("#old_price");
}

export function reviewCounter() {
    return cy.get(".rating em");
}

export function addToCartButton() {
    return cy.get(".btn_add_to_cart");
}