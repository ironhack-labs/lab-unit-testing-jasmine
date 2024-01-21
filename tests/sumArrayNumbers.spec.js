// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 5", () => {
    describe("Function - sumArrayNumbers", () => {
        it("should be defined", () => {
            expect(sumArrayNumbers).toBeDefined();
          });

         it("should take one argument", () => {
            expect(sumArrayNumbers.length).toBe(1);
          });

        it("should return undefined if the argument is not an array", () => {
            expect(sumArrayNumbers(56)).toEqual(undefined);
            expect(sumArrayNumbers("Can")).toEqual(undefined);
            expect(sumArrayNumbers({})).toEqual(undefined);
            expect(sumArrayNumbers(true)).toEqual(undefined);
        });

        it("should return 0 if the argument is an empty array", () => {
            expect(sumArrayNumbers([])).toEqual(0);
            
        });

        it("should return the sum of all numbers in the array", () => {
            expect(sumArrayNumbers([1, 2, 3])).toEqual(6);
            expect(sumArrayNumbers([20, 10])).toEqual(30);
            expect(sumArrayNumbers([1, 1, 1])).toEqual(3);
            expect(sumArrayNumbers([45, 55])).toEqual(100);
        });

    })    
})

