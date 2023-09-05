/// <reference types="Cypress" />

import {Given,When, Then, And} from "cypress-cucumber-preprocessor/steps";


Given("User open the browser and enters the url",()=> {
    cy.visit("https://google.com/")
})

When("user validates the url",()=> {
    cy.title().should('contains','Google')
    // cy.get('a.img[alt="Google"]').should('be.visible')
})

When("the user enters data in the text box", (table)=>{
    table.hashes().forEach(row => {
        cy.log('the data from feature file : ', row.data)
        cy.get('#APjFqb').clear();
        cy.get('#APjFqb').type(row.data)
        cy.wait(5000)
    })
})

When("user input the data from below table {string}", (data)=>{
    cy.get('#APjFqb').clear();
    cy.get('#APjFqb').type(data)
})

Then("user verify the search result page with {string}",(data)=>{
    // cy.title().should('contain', data)
    cy.get('#slim_appbar #result-stats').invoke('text').should('contain', data)
})

And("user clicks the search button",()=>{
    cy.get('[name=btnK][data-ved$=CAk]').should('be.visible')
    cy.get('[name=btnK][data-ved$=CAk]').click()
})