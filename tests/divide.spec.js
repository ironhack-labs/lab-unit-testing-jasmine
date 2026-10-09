// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2 | Divide", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
        expect(divide(2, 4)).toBeTruthy();
        });

        it("should return the division of the two numbers", () => {
        expect(divide(10, 2)).toEqual(5);
        expect(divide(30, 10)).toEqual(3);
        });

        it("should return undefined if any of the arguments is not provided", () => {
        expect(divide(1)).toEqual(undefined);
        expect(divide()).toEqual(undefined);
        expect(divide(undefined, 1)).toEqual(undefined);
      });




    })    
})

