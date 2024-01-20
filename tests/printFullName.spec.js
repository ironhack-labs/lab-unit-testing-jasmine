// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("printFullName should be defined", () => {
            expect(printFullName).toBeDefined()
        });
        it("printFullName should take one argument of type object", ()=>{
            expect(printFullName("Full Name")).toEqual(undefined)
            expect(printFullName(2)).toEqual(undefined)
            expect(printFullName.length).toBe(1)
        });
        it("printFullName should return a string with the *first name* and the *last name* separated by a space", ()=>{
            expect(printFullName({firstName: "Miguel", lastName: "Henriques"})).toEqual("Miguel Henriques")
        })
        it("In case the `firstName` or `lastName` properties are not provided, the function should return `undefined`",()=>{
            expect(printFullName({firstName: "Miguel"})).toEqual(undefined)
            expect(printFullName({lastName: "Henriques"})).toEqual(undefined)
        })

    })    
})

