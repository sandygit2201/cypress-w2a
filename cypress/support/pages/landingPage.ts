import BasePage from "./basePage";
class LandingPage{

    invokeApp():void{
        cy.visit('/');
    }
    verifyBankName():void{
        cy.contains('XYZ Bank').should('be.visible');
    }
    loginAsManager():void{
        cy.contains('Bank Manager Login').click();
    }
    
}

export default new LandingPage()
