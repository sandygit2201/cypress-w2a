import LandingPage from '../support/pages/landingPage'
import BasePage from '../support/pages/basePage'

describe('Landing page tets',()=>{

    before('Invoke Application',()=>{
        LandingPage.invokeApp();
    })

    it('verify bank label on landing page',()=>{

    LandingPage.verifyBankName();
   
    })

    it('Verify Home button on Landing Page',()=>{

        BasePage.verifyElementWithText('Home');

    })

    it('Verify Customer Login button on Landing Page',()=>{

        BasePage.verifyElementWithText('Customer Login');

    })

    it('Verify Bank manager Login button on Landing Page',()=>{

        BasePage.verifyElementWithText('Bank Manager Login');

    })


})