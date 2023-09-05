///<reference types="Cypress"/>
require('@cypress/xpath')

describe('Handling Elements in Webpage', () => {
  it('validate and check for checkbox', () =>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('#checkbox-example [type=checkbox]').each(($checkbox)=>{
      cy.wrap($checkbox).click();
    });

    cy.get("#checkbox-example [type=checkbox]").each(($check, index)=>{
      if(index ==1){
        cy.wrap($check).click()
      }
    });

  })
})