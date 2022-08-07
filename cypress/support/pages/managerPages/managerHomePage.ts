class ManagerHomePage{

    navigateToCustomersPage():void{
        cy.contains('Customers').click();
    }


}

export default new ManagerHomePage();