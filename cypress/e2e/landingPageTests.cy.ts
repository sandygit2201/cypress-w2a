import LandingPage from '../support/pages/landingPage'

describe('Landing page tets',()=>{

    before('Invoke Application',()=>{
        LandingPage.invokeApp();
    })

    it('verify bank label on landing page',()=>{

    LandingPage.verifyBankName();
   
    })

    it('Verify Home button on Landing Page',()=>{

        LandingPage.verifyElementWithText('Home');

    })

    it('Verify Customer Login button on Landing Page',()=>{

        LandingPage.verifyElementWithText('Customer Login');

    })

    it('Verify Bank manager Login button on Landing Page',()=>{

        LandingPage.verifyElementWithText('Bank Manager Login');

    })


})