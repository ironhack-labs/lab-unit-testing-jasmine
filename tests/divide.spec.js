// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2 | Divide", () => {
    describe("Function - Divide", () => {
        it("should be defined", () => {
            expect(Divide).toBeDefined(); 
        });
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should take two arguments", () => {
        expect(Divide.length).toBe(2);
        });
        it("should return the Quotient of the division two numbers", () => {
            expect(Divide(27, 9)).toEqual(3);
            expect(Divide(8, 4)).toEqual(2);
            expect(Divide(100, 50)).toEqual(2);
          });
          it("should return undefined if any of the arguments is not provided", () => {
            expect(Divide(1)).toEqual(undefined);
            expect(Divide()).toEqual(undefined);
            expect(Divide(undefined,2)).toEqual(undefined);
            expect(Divide(2,undefined)).toEqual(undefined);
          });
    
          it('should return undefined if denominator is 0', () => {
              expect(Divide(3, null)).toBeUndefined();
              expect(Divide(undefined, 0)).toBeUndefined();
              expect(Divide(3, 0)).toBeUndefined();
          });

    })    
})