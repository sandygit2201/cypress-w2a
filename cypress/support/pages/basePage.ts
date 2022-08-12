export class BasePage{


    verifyElementWithText(text:string):void{
        cy.contains(text).should('be.visible')
    }

    navigateToHomePage(){

        cy.contains('Home').click()

    }
}