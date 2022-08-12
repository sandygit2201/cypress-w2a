import { BasePage } from "../basePage";

class ManagerHomePage extends BasePage{

    navigateToCustomersPage():void{
        cy.contains('Customers').click();
    }


}

export default new ManagerHomePage();