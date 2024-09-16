// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the division of two nummbers", () => {
            expect( divide(1, 2) ).toEqual(0.5);
            expect( divide(3, 4) ).toEqual(0.75);
            expect( divide(100, 50) ).toEqual(2);
        });

        it("should return undefined if any argument is not a number", () => {
            expect( divide(1, "2") ).toEqual(undefined);
            expect( divide("3", 4) ).toEqual(undefined);
            expect( divide("100", "50") ).toEqual(undefined);
        });

    })    
})
