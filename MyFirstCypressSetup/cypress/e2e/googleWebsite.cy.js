/// <reference types="Cypress" />
require('@cypress/xpath');

describe('Check the title of the webpage', () => {
  it('title checking for Google website', () => {
    // it will launcht he url of the application
    // it can start with www or http/https
    cy.visit('https://www.google.com')
    cy.log("the url of the page opened : " , cy.url())
    cy.log("the title of the page opened : " , cy.title())
    // cy.visit('https://www.bing.com')
    cy.get("div.SDkEP>div.iblpc+div>textarea[jsname='yZiJbe']").clear()
    // cy.get("div.SDkEP>div.iblpc+div>textarea[jsname='yZiJbe']").type("javascript")
    cy.xpath("/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/textarea").type("javascript")
    
    cy.get("input[name='btnK'][data-ved$='UDCAk']").click({timeout:5000})
    // browser based commands
    // cy.go('back')
    // cy.go('forward')

  })
})