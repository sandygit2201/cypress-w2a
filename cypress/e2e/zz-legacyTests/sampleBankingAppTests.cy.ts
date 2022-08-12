import 'cypress-xpath'
import {faker} from '@faker-js/faker'

describe('cypress tests on sample banking application on w2a website',()=>{
    it('Create and verity customer account',()=>{
        //invoke application
        cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/login');
        //login as manager
        cy.contains('Bank Manager Login').click();
        //select customers tab
        cy.contains('Customers').click();
        //delete all existing customers 
        cy.xpath('//button[.="Delete"]').each(($el)=>{
            $el.click()
        })
        // navigate to Add Customer tab
        cy.contains('Add Customer').click();

        // create dummy customer data
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const zipCode = faker.address.zipCode();

        //Fill customer data in the form 
        cy.xpath('//input[@ng-model="fName"]').type(firstName);
        cy.xpath('//input[@ng-model="lName"]').type(lastName)
        cy.xpath('//input[@ng-model="postCd"]').type(zipCode)
        cy.xpath('//button[text()="Add Customer"]').click()

        const customerFullName = firstName+ " " +lastName;
        //Generate customer account number with Currency as Rupee
        cy.contains('Open Account').click();
        cy.get('#userSelect').select(customerFullName);
        cy.get('#currency').select('Rupee')
        cy.xpath('//button[text()="Process"]').click();

        //Generate customer account number with Currency as Dollar
        cy.contains('Open Account').click();
        cy.get('#userSelect').select(customerFullName);
        cy.get('#currency').select('Dollar')
        cy.xpath('//button[text()="Process"]').click();

        //Generate customer account number with Currency as Pound
        cy.contains('Open Account').click();
        cy.get('#userSelect').select(customerFullName);
        cy.get('#currency').select('Pound')
        cy.xpath('//button[text()="Process"]').click();

        // Get customer details and save it. 
        //select customers tab
        cy.contains('Customers').click();
        //Get customer First name 
        cy.xpath('//table[@class="table table-bordered table-striped"]/tbody/tr[1]/td[1]').then($el=>{
            cy.wrap($el.text()).as('firstNameDisplayed')
        })
        //Get customer last Name 
        cy.xpath('//table[@class="table table-bordered table-striped"]/tbody/tr[1]/td[2]').then($el=>{
            cy.wrap($el.text()).as('lastNameDisplayed')
        })

         //Get customer PostCode 
         cy.xpath('//table[@class="table table-bordered table-striped"]/tbody/tr[1]/td[3]').then($el=>{
            cy.wrap($el.text()).as('postCodeDisplayed')
        })

         //Get customer Account Numbers
         cy.xpath('//table[@class="table table-bordered table-striped"]/tbody/tr[1]/td[4]').then($el=>{
            cy.wrap($el.text()).as('accountsDisplayed');
            cy.log("dfadsf");
        })

        cy.get('@accountsDisplayed').then($accounts=>{
            let accountsList = $accounts.toString().split(' ')
            cy.log("First Account Number::"+accountsList[0]);
            cy.log("second Account Number::"+accountsList[1]);
            cy.log("Third Account Number::"+accountsList[2]);
        })

    })

    // Write Code for Customer Login 

    //click on Home 

    // Click on customer login

    // select user from dropdown and click on login button 

    // Deposit 500 

    // withdraw 200 

    // verify balance is 300
     

})