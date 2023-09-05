/// <reference types="Cypress" />

describe('Handling mouse hover action', () => {
    it('Handling mouse hover', () => {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      // this element inside the page is not intended to do this action as the mouse hover is handled in css
      cy.get("#mousehover").scrollIntoView()
      cy.get("#mousehover").trigger("mouseover")
  
  })
})