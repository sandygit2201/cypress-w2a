import 'cypress-xpath'

describe('File read and write',()=>{

    it('Write users details into a file',()=>{

        let username=''
        let fileContent=''
        cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/manager/list')
        cy.xpath("//table[@class='table table-bordered table-striped']/tbody").each(row=>{
    
                cy.writeFile('cypress/fixtures/users.txt',row);
        })
    })
    it.skip('read txt file',()=>{
        // cy.fixture('users/userName.txt').then(userName=>{
        //     cy.log('UserName::'+userName)
        // })
        cy.readFile('cypress/fixtures/users/userName.txt').then(fileContent=>{
            cy.log("FileContent::"+fileContent)
        })
    })
   
})