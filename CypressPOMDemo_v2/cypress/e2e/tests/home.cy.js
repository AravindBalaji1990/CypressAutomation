import home from "../../pages/home"

describe('template spec', () => {
  before(function() {
    // executes prior each test within it block
    home.visit()
    cy.log("BeforeEach hook")
 })
  
  it('passes check for url', () => {
    home.visit()
  })

  it("should search for a product", () => {
    home.visit()
    home.searchInput("iphone")
    home.getSearchButton().click()
  })
})