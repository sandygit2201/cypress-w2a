import landingPage from "../../support/pages/landingPage"
import LandingPage from "../../support/pages/landingPage";

describe('Bank manager Homepage Tests',()=>{

    beforeEach('Invoke Application And Login as Bank Manager',()=>{
        landingPage.invokeApp();
        landingPage.loginAsManager();
    })

    // Add a test to verify Customer button
    it('Verify elements on manager home page',()=>{
        LandingPage.verifyElementWithText('Home');
        LandingPage.verifyElementWithText('Add Customer');
        LandingPage.verifyElementWithText('Open Account');
        LandingPage.verifyElementWithText('Customers');
    })

})