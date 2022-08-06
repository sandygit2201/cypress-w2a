import LandingPage from '../support/pages/landingPage'

describe('Landing page tets',()=>{

    it('verify bank label on landing page',()=>{

    LandingPage.invokeApp();
    LandingPage.verifyBankName();
    LandingPage.verifyButtonsOnLandingPage();
   
    })

})