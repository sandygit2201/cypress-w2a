describe('api  tests',()=>{

    it('sample get request',()=>{

        cy.request('https://reqres.in/api/users/2').then(response=>{
            cy.log(JSON.stringify(response.body.data))
        })

    })

})