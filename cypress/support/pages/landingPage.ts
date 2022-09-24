import { BasePage } from "./basePage";


class LandingPage extends BasePage{

    invokeApp():void{
        cy.visit('/');
        cy.log('Navigated to Bank Login page')
    }
    verifyBankName():void{
        cy.contains('XYZ Bank').should('be.visible');
    }
    loginAsManager():void{
        cy.contains('Bank Manager Login').click();
    }

    navigateToCustomerLoginPage(){
        cy.contains('Customer Login').click();
    }
    
}

export default new LandingPage()
