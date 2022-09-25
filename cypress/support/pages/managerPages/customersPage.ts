import 'cypress-xpath'
import { BasePage } from '../basePage';
class CustomersPage extends BasePage{

    deleteAllCustomers():void{
        cy.xpath('//button[.="Delete"]').each(($el)=>{
            $el.click();
    
        })
    }
    searchCustomer(customerName:string):void{
        let txtSearchCustomerXpath = '//input[@type="text" and @placeholder="Search Customer"]';
        cy.xpath(txtSearchCustomerXpath).type(customerName);
        cy.contains(customerName).should('be.visible');
    }

}

export default new CustomersPage();