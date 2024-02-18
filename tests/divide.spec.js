// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2 | Divide", () => {
    describe("Function - divide", () => {
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
            /*ask Joshua about this one
            expect(divide).toBe(typeof 'number')*/
        });
         
        it("should return the division of the two numbers", () => {
            expect(divide(100, 2)).toEqual(50);
            expect(divide(25, 5)).toEqual(5);
            expect(divide(18, 3)).toEqual(6);
        });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(100)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(3, undefined)).toEqual(undefined);
        });

    })    
})

