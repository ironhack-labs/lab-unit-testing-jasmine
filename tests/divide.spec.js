// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it("shold be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });

      it("should return the division of two numbers", () => {
            expect( divide(1, 2) ).toEqual(0.5);
            expect( divide(3, 4) ).toEqual(0.75);
            expect( divide(100, 50) ).toEqual(2);
        });

        it("should return the result both of the numbers are not provided",() => {
            expect(divide(5,"10") ).toEqual(undefined);
            expect(divide(110,"10") ).toEqual(undefined);
            expect(divide(undefined, 1) ).toEqual(undefined);
        });
        
        it("should return undefined if any of the arguments is not a number", () => {
            expect(divide(5, "2")).toEqual(undefined);
            expect(divide("9", 32)).toEqual(undefined);
            expect(divide("120", "12")).toEqual(undefined);
        });
            
    });
});