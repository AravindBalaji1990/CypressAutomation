///<reference types="Cypress"/>
require('@cypress/xpath')

describe('Handling Elements in Webpage', () => {
  it('Check for the radio buttons', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get("input[value='radio1']").should('be.visible')
    cy.get("input[value='radio1']").invoke('attr','type').should('eq','radio')
    cy.get("input[name='radioButton']").should('have.length','3')
    cy.get("input[value='radio1']").should('be.enabled').click()

  }),
  it('validate and check for checkbox', () =>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get("#checkBoxOption1").should('be.visible')
    cy.get("#checkBoxOption1").invoke('attr','type').should('eq','checkbox')
    cy.get("#checkbox-example input[type='checkbox']").should('have.length','3')
    cy.get("#checkBoxOption1").should('be.enabled').check()
    // cy.get("#checkBoxOption1").should('be.enabled').uncheck()
    cy.get("#checkBoxOption2").should('be.enabled').check()
  }),
  it('validate and select from dropdown', () =>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    // below item we used the index
    cy.get("select#dropdown-class-example").select(1).invoke("val").should('eq','option1')
    // below item we use the text 
    cy.get("select#dropdown-class-example").select("Option2").invoke("val").should('eq','option2')
    // below item we use value only when value attribute is available
    cy.get("select#dropdown-class-example").select("option3").invoke("val").should('eq','option3')
    // did not get the demo - to select multiple option from dropdown
    // cy.get("select#dropdown-class-example").select(["Option1","Option2"])
  })
})