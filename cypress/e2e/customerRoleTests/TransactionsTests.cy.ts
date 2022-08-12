import customerLoginPage from "../../support/pages/customerPages/customerLoginPage";
import landingPage from "../../support/pages/landingPage"

describe('tests related to transactions',()=>{

    beforeEach('invoke app',()=>{
        landingPage.invokeApp();
        landingPage.navigateToCustomerLoginPage()
        
    })

    it('deposit money',()=>{

        customerLoginPage.navigateToHomePage();


    })

})