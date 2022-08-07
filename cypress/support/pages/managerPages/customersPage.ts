import 'cypress-xpath'
class CustomersPage{

    deleteAllCustomers():void{
        cy.xpath('//button[.="Delete"]').each(($el)=>{
            $el.click();
    
        })
    }

    searchCustomer(customerName:string):void{
        let txtSearchCustomerXpath = '//input[@type="text" and @placeholder="Search Customer"]
        cy.xpath(txtSearchCustomerXpath).type(customerName);
    }

}

export default new CustomersPage();