
describe("Iteration 2", () => 
    describe("Function - divide", () => {
        it("should be defined", () => {
expect(divide).toBeDefined()})

it ("should take tow arguments", ()=>{
    expect(divide.length).toBe (2)
})


it("should return the divison of tow numbers",()=> {
   
    expect( divide(8, 4)).toEqual(2) 
})

it("should return undefind",()=>{
   expect(divide()).toEqual(undefined)
  

})
    })


) 
