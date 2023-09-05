/// <reference types="Cypress" />
require('@cypress/xpath');

describe('test scenario', () => {
  it('testcase1 ', () => {
    cy.visit('www.google.com')
    cy.get('#APjFqb').clear()
    cy.get('#APjFqb').type('javascript')
    cy.get('input[data-ved$=UDCAk]').click()
  }),
  it('testcase2', () => {
    cy.visit('www.google.com')
    cy.xpath('//textarea[@name="q" or @title="Search"]').clear()
    cy.xpath('//textarea[@name="q" or @title="Search"]').type('java')
    cy.xpath('//input[@data-ved="0ahUKEwijuP2WsZeAAxXPRPEDHSIsCxwQ4dUDCAk"]').click()
  })
})