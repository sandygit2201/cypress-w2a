import LandingPage from '../support/pages/landingPage'

describe('Landing page tets', () => {

    //invoke application
    before('Invoke Application', () => {
        LandingPage.invokeApp();
    })

    //verify bank name and buttons on landing page.
    it('verify bank label and buttons on home page', () => {
        LandingPage.verifyBankName();
        LandingPage.verifyElementWithText('Home');
        LandingPage.verifyElementWithText('Customer Login');
        LandingPage.verifyElementWithText('Bank Manager Login');
    })

})