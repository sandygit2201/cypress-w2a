import { BasePage } from "../basePage";

class ManagerHomePage extends BasePage{

    navigateToCustomersPage():void{
        cy.xpath('//button[@ng-class="btnClass3" and contains(text(),"Customers")]').click();
    }

    navigateToAddCustomerPage():void{
        cy.xpath('//button[@ng-class="btnClass1" and contains(text(),"Add Customer")]').click();
    }

    navigateToOpenAccountPage():void{
        cy.xpath('//button[@ng-class="btnClass2" and contains(text(),"Open Account")]').click();
    }


}

export default new ManagerHomePage();