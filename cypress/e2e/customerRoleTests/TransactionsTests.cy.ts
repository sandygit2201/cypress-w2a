import landingPage from "../../support/pages/landingPage"
import 'cypress-xpath'
import customerLoginPage from "../../support/pages/customerPages/customerLoginPage";
import customerHomePage from "../../support/pages/customerPages/customerHomePage";

describe('tests related to transactions',()=>{
    beforeEach('Invoke customer home page',()=>{
       landingPage.invokeApp();
       landingPage.navigateToCustomerLoginPage();
    })
    it('Login as user and verify elements in Home page',()=>{
        customerLoginPage.loginAsUser('Harry Potter')
        customerHomePage.verifyCurrencyType('Dollar')

    })
    it('Login as customer, Deposit and verify balance',()=>{

        customerLoginPage.loginAsUser('Harry Potter')
        customerHomePage.depositAmount('1000');
        
    })
    it('Customer deposit using fixture files',()=>{

        cy.fixture('deposit').then(jsonData=>{
            customerLoginPage.loginAsUser(jsonData.userName)
            customerHomePage.depositAmount(jsonData.depositAmount);
        })
        
    })

})