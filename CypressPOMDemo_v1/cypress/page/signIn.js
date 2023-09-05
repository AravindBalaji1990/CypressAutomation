/// <reference types="Cypress" />

class signin{
    elements = {
        usernametxt :() =>cy.get("#username"),
        passwordtxt :() =>cy.get("#password"),
        arrowusername :() =>cy.get('#username .css-tlfecz-indicatorContainer')
            }


            verifyUsernameTextbox(){
                this.elements.usernametxt().should('be.visible').type('demouser')
                this.elements.usernametxt().type('{TAB}')
            }

            clickArrowUsername(){
                this.elements.arrowusername().should('be.visible')
            }
}
module.exports = new signin();