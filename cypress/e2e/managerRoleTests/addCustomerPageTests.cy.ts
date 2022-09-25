import {faker} from '@faker-js/faker'
import AddCustomerPage from "../../support/pages/managerPages/addCustomerPage";
import managerHomePage from "../../support/pages/managerPages/managerHomePage";
import customersPage from "../../support/pages/managerPages/customersPage";
import landingPage from "../../support/pages/landingPage";
import openAccountPage from "../../support/pages/managerPages/openAccountPage";

describe('Tests on add customer page', () => {

    beforeEach('Invoke Application And Login as Bank Manager', () => {
        landingPage.invokeApp();
        landingPage.loginAsManager();
    })

    it('Add customer and verify customer added', () => {

        managerHomePage.navigateToAddCustomerPage();
        const FirstName = faker.name.firstName();
        const LastName = faker.name.lastName();
        const PostCode = faker.address.zipCode();
        let customerDetails = {
            firstName: FirstName,
            lastName: LastName,
            postCode: PostCode
        }
        //add customer with details
        AddCustomerPage.addCustomer(customerDetails);
        // navigate to customers page
        managerHomePage.navigateToCustomersPage();
        // search for customer and verify that customer added
        customersPage.searchCustomer(FirstName);

    })

    it.only('Add account to the customer', () => {
        managerHomePage.navigateToOpenAccountPage();
        let accountDetails = {
            userName: 'Harry Potter',
            currency: 'Rupee'
        }
        openAccountPage.addAccountForCustomer(accountDetails);
        //verify message on alert window
        cy.on('window:alert', (str) => {
            expect(str).to.contains(`Account created successfully with account Number`)
        })
    })

})