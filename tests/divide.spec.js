// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined()

        });
        it("should take two numbers as arguments", ()=>{
            expect(divide.length).toBe(2)
        });
        it("should return the division of the two numbers", ()=>{
            expect(divide(4,2)).toBe(2)
            expect(divide(12.4,2)).toBe(6.2)
            expect(divide(200,5)).toBe(40)

        });
        it("should return undefined if any of the arguments is not provided", ()=>{
            expect(divide(4)).toBe(undefined)
            expect(divide(4, undefined)).toBe(undefined)
            expect(divide()).toBe(undefined)
            expect(divide(null, undefined)).toBe(undefined)
            expect(divide(undefined, 10)).toBe(undefined)

        })

    })    
})

