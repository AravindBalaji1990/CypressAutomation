import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("User opens the webpage",()=>{
    cy.visit("https://www.google.com")
})

Then("User verify the title of the page", ()=>{
    cy.title().should('contains', 'Google')
})