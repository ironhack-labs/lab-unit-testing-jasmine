// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("Should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("Should take two numbers as an argument", () => {
            expect(divide.length).toBe(2);
        });

        it("Should return the division of two numbers", () => {
            expect( divide(10,5) ).toEqual(2);
            expect( divide(16,3) ).toEqual(5);
        });

        it("Should return undefined if any of the arguments is not provided", () => {
            expect( divide() ).toEqual(undefined);
            expect( divide(10) ).toEqual(undefined);
            expect( divide("",5) ).toEqual(undefined);
        });
    })    
})
