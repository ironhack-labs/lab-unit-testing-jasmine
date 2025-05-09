// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("the function should be defined", () => {
            expect(divide).toBeDefined("function");
        });

        it("The function should take two numbers as arguments.", () => {
            expect(divide.length).toBe(2)
        });

        it("The function should return the division of the two numbers.", () => {
            expect(divide(1, 1)).toEqual(1)
            expect(divide(100, 2)).toEqual(50)
            expect(divide(10, 2)).toEqual(5)
            expect(divide(80, 8)).toEqual(10)
        });

        it("The function should return undefined if any of the arguments is not provided", () => {
            expect(divide()).toEqual(undefined)

        });
        
    })    
})

