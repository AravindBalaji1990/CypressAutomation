import homePage from "../page/homePage";
import signIn from "../page/signIn";

describe('Handling autocomplete', function() {
    it('Should login to inventory page',()=>{
        cy.visit('https://bstackdemo.com/')
        homePage.clickOnSignin();


        
        signIn.clickArrowUsername();
        signIn.verifyUsernameTextbox();
        
        cy.login("fav_user","testingisfun99")
    })
})
