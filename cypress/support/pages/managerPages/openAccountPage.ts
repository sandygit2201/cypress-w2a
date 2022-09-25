import { BasePage } from "../basePage";
import 'cypress-xpath'

class OpenAccountPage extends BasePage{

    addAccountForCustomer(accountDetails:any){
        cy.get('#userSelect').select(accountDetails.userName);
        cy.get('#currency').select(accountDetails.currency);
        cy.xpath('//button[@type="submit" and text()="Process"]').click();
    }

}

export  default  new OpenAccountPage();