/// <reference types="Cypress" />

import {Given,When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given("User launches the website",()=> {
    cy.visit("https://bstackdemo.com/")
})

When("User is able to view the page",()=> {
    cy.title().should('contains','StackDemo')
    cy.get('a.Navbar_logo__26S5Y').should('be.visible')
})

And("User is able to check the availability of the device",()=> {
    cy.get('input[value="Apple"]+span').should('be.visible').click()
})


Then("User selects the device",()=> {
    cy.get('div.shelf-item__thumb').first().click()
})