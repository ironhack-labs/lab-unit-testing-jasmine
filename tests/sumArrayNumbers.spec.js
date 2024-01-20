// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 5", () => {
    describe("Function - sumArrayNumbers", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(sumArrayNumbers).toBeDefined();
        });

        it("should take one argument of type array", () => {
            expect(sumArrayNumbers.length).toBe(1);
          });

          it("should return the sum of all numbers in the array.", () => {
            expect(sumArrayNumbers([1, 2, 3])).toEqual(6);
            expect(sumArrayNumbers([5, 7, 10])).toEqual(22);
          });

          it("should return undefined if the argument passed is not an array", () => {
            expect(sumArrayNumbers(123)).toEqual(undefined);
            expect(sumArrayNumbers("string")).toEqual(undefined);
            expect(sumArrayNumbers(undefined)).toEqual(undefined);
          });

          it("should return 0 if the argument passed is an empty array.", () => {
            expect(sumArrayNumbers([])).toEqual(0);
          });

    })    
})

