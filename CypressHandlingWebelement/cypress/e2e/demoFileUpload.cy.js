/// <reference types="Cypress" />

describe('demo check boxes', () => {
    it('demo cehckbox in a form', () => {
      cy.visit('http://www.techlistic.com/p/selenium-practice-form.html')
      // it scrolls to the specific element in the page
      cy.get("#profession-0").scrollIntoView()
      // clicking the text box
      cy.get("#profession-0").check()
      // static wait itusually waits for the time given
      cy.wait(1000)
      // unclicking the checkbox
      cy.get("#profession-0").uncheck()
  
  }),
  it.only('upload file form', () => {
    cy.visit('http://www.techlistic.com/p/selenium-practice-form.html')
    // cypress function where we are scrollingin to the element inside a page
    cy.get("#photo").scrollIntoView()
    // we upload the file
    cy.get("#photo").selectFile('/Users/aravindbalaji/Documents/CypressDocuments/InteractingWithElementsCypress.docx')
    cy.wait(1000)
    cy.get("#photo").invoke('val').should('contains', 'InteractingWithElementsCypress')
    cy.wait(1000)
    // multiple file upload
    cy.get("#photo").selectFile(['/Users/aravindbalaji/Documents/CypressDocuments/InteractingWithElementsCypress.docx','/Users/aravindbalaji/Documents/CypressDocuments/CypressSyllabus.docx'])
  
  })
  })