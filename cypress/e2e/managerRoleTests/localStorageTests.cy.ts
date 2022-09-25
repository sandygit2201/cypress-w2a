import 'cypress-xpath'

describe('local storage tests',()=>{

    //Local storage is cleared before every tets 
    it('Store data in local storage',()=>{
        localStorage.setItem('User','Harry Potter')
        localStorage.getItem('User')
    })
  
})