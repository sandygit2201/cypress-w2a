import { BasePage } from "../basePage";

class CustomerHomePage extends BasePage{

    verifyCurrencyType(currencyType:string){

        //strong[@class='ng-binding' and text()='Dollar']
        let currencyXpath = '//strong[@class="ng-binding" and text()="'+currencyType+'"]'
        cy.xpath(currencyXpath).should('be.visible');

    }
    
    depositAmount(amount:string){

        cy.xpath('//button[@ng-class="btnClass2"]').click();
        cy.xpath('//input[@type="number"]').type(amount);
        cy.xpath('//button[@type="submit" and text()="Deposit"]').click();
        cy.contains('Deposit Successful').should('be.visible');
        cy.contains('Balance : '+amount).should('be.visible');

    }

    withdrawAmount(amount:string){
        cy.contains('Withdrawl').click();
        cy.xpath('//input[@ng-model="amount"]').type(amount);
        cy.xpath('//button[@type="submit" and text()=\'Withdraw\']').click();
        cy.contains('Transaction successful').should('be.visible')
    }
    

}

export default new CustomerHomePage();