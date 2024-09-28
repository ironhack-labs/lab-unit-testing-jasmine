// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
    
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });
        it ("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });
        it ("should return the division of the two numbers", () => {
            expect(divide(10.57, 100)).toEqual(0.1057);
            expect(divide(5292, 98)).toEqual(54);
         });
         it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
          });
          it ("should return undefined if any of the arguments is not a number", () => {
          expect(divide(1,"3")).toEqual(undefined);
          expect(divide("3",3)).toEqual(undefined);
          });
          it ("should return error if divided by 0", () => {
            expect(() =>divide(2,0)).toThrowError("Division by 0 is not allowed!");
    });
         });
        });
         


