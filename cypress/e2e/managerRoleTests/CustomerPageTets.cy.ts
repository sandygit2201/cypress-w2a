import landingPage from "../../support/pages/landingPage"
import customersPage from "../../support/pages/managerPages/customersPage";
import managerHomePage from '../../support/pages/managerPages/managerHomePage'

describe('Tests for the customers page',()=>{

    before('invoke app and login as manager',()=>{
        landingPage.invokeApp();
        landingPage.loginAsManager();

    })

    it('Delete all existing customers',()=>{

        managerHomePage.navigateToCustomersPage();
        customersPage.deleteAllCustomers();

    })
// search for a customer with name Neville and delete that customer
    it('Search and delete a customer',()=>{

        customersPage.searchCustomer('Neville');
        cy.contains('Delete').click();
    })

    //test 1
    // write a single test to verify customer details
    //search for a customer with name Ron
    //Verify first name to be Ron
    //verify last name to be Weasly
    // post code to be E55555
    

    //test2 
    // search for customer with name Ron 
    // Verify that number of account he is holding is 3 accounts 



})