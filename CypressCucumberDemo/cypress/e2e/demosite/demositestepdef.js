/// <reference types="Cypress" />

import {Given,When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given("User launch the url",()=> {
    cy.visit("https://google.com")
})

Then("User verifies the title", ()=>{
    cy.title().should('contains','Google')
})


// When user input the data "javascript"
When("user input the data {string}", (data)=>{
    cy.get('#APjFqb').clear()
    cy.get('#APjFqb').type(data)
})

//user input the data from table
When("user input the data from table", (table)=>{
    table.hashes().forEach(row => {
        cy.log('the data from feature file : ', row.data)
        cy.get('#APjFqb').clear();
        cy.get('#APjFqb').type(row.data)
    })
})

// And user clicks the search button
And("user clicks the search button",()=>{
    cy.get('[name=btnK][data-ved$=CAk]').should('be.visible')
    cy.get('[name=btnK][data-ved$=CAk]').click()
})

// Then user verify the search result page
Then("user verify the search result page with {string}",(data)=>{
    cy.title().should('contain', data)
    cy.get('div.yuRUbf>a').should('have.lengthOf.at.least',1)
})

//When user input the data from below table <data>
When("user input the data from below table {string}", (data)=>{
    cy.get('#APjFqb').clear();
    cy.get('#APjFqb').type(data)
})