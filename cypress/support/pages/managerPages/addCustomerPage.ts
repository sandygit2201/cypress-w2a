import {BasePage} from "../basePage";
import 'cypress-xpath'

class AddCustomerPage extends BasePage {

    addCustomer(customerDetails: any) {

        cy.xpath('//input[@ng-model="fName"]').type(customerDetails.firstName);
        cy.xpath('//input[@ng-model="lName"]').type(customerDetails.lastName);
        cy.xpath('//input[@ng-model="postCd"]').type(customerDetails.postCode);
        cy.xpath('//button[@type="submit" and contains(text(),"Add Customer")]').click();

    }

}

export default  new AddCustomerPage();