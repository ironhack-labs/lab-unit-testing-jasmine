// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 2 | Divide", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("shoud be defined", () => {
            expect(divide).toBeDefined();
        });

        it("The function should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("The function should return the division of the two numbers", () => {
            expect(divide(8,2)).toBe(4);
            expect(divide(10,2)).toBe(5);
            expect(divide(20,5)).toBe(4);
        });

        it("The function should return undefined if any of the arguments is not provided", () => {
            expect(divide(1,undefined)).toBe(undefined);
            expect(divide()).toBe(undefined);
            expect(divide(undefined,2)).toBe(undefined);
        })

    })    
})
