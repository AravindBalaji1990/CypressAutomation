class homePage{
    elements = {
loginbtn :() =>cy.get("#signin"),
logoffbtn :() => cy.get("#logout")
    }

    // I create a function -> this will click the login button
    // this function will exhibit what action i need to do on the locator
    clickOnSignin(){
        this.elements.loginbtn().click()
    }
}
module.exports = new homePage();