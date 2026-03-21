// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        // Each `it` block represents 1 test. You can use the following as a template:
        it("The function should be defined.", () => {
            expect(divide).toBeDefined();
        });
        it("The function should take two arguments.", () => {
            expect(divide.length).toBe(2);
        });
        it("The function should return the quotient of the two numbers.", () => {
        expect(divide(6, 2)).toEqual(3);
        expect(divide(10, 5)).toEqual(2);
        expect(divide(100, 25)).toEqual(4);
        });
        it("The function should return undefined if any of the arguments is not provided.", () => {
        expect(divide(1)).toEqual(undefined);
        expect(divide()).toEqual(undefined);
        expect(divide(undefined, 1)).toEqual(undefined);
        });
        it("The function should return undefined if any of the arguments is not a number.", () => {
        expect(divide("6", 2)).toEqual(undefined);
        expect(divide(6, "2")).toEqual(undefined);
        expect(divide("6", "2")).toEqual(undefined);     

      });    
   });
});