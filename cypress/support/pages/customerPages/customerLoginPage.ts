import {BasePage} from '../basePage'

class CustomerLoginPage extends BasePage{
    loginAsUser(userName:string) {
        cy.get('#userSelect').select(userName);
        cy.contains('Login').click();  
        cy.contains(' Welcome '+userName).should('be.visible')

    }
}


export default new CustomerLoginPage();