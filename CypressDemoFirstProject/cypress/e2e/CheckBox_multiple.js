///<reference types="Cypress"/>
require('@cypress/xpath')

describe('Handling Elements in Webpage', () => {
  it('validate and check for checkbox', () =>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get("#checkBoxOption1").should('be.visible')
    cy.get("#checkBoxOption1").invoke('attr','type').should('eq','checkbox')
    cy.get("#checkbox-example input[type='checkbox']").should('have.length','3')
    cy.get("#checkBoxOption1").should('be.enabled').check()
    // cy.get("#checkBoxOption1").should('be.enabled').uncheck()
    cy.get("#checkBoxOption2").should('be.enabled').check()

    cy.get('#checkbox-example [type=checkbox]').each(($checkbox)=>{
      cy.wrap($checkbox).click();
    });
  })
})