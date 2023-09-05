/// <reference types="Cypress" />

describe('demo for hooks concept', function() 
{
    bef
    beforeEach(function() {
        cy.log('this is from before each')
     })

     before(function() {
        cy.log('this is from before ')
     })

     it('this this it 1', function() {
        cy.log('thisis from it 1')
        })

        it('this this it 2', function() {
            cy.log('thisis from it 2')
            })

     after(function() {
        cy.log('this is from after')
     })
     this.afterEach(function() {
        cy.log('this is from after each')
     })

})
