// UNCOMMENT THE CODE BELOW TO START
describe("Iteration 5", () => {
    describe("Function - sumArrayNumbers", () => {
       it("should be defined", () => {
            expect(sumArrayNumbers).toBeDefined();
          });
      
          it("should take one argument", () => {
            expect(sumArrayNumbers.length).toBe(1);
          });

          it("should return an array of numbers", () => {
            expect(sumArrayNumbers([])).toEqual([]);
            expect(sumArrayNumbers([1, 4, 9, 7])).toEqual([1, 4, 9, 7]);
          });

          it("should return a sum of all numbers in the array", () => {
            expect(sumArrayNumbers([1, 4, 9, 7])).toEqual(21);
            expect(sumArrayNumbers([1, 4, 6])).toEqual(11);
          });

          it("should return undefined if the argument is not an array", () => {
            expect(sumArrayNumbers(1)).toEqual(undefined);
            expect(sumArrayNumbers()).toEqual(undefined);
            expect(sumArrayNumbers("")).toEqual(undefined);
            expect(sumArrayNumbers({})).toEqual(undefined);
            expect(sumArrayNumbers(true)).toEqual(undefined);
          });

          it("should return 0 if the argument is an empty array", () => {
            expect(sumArrayNumbers([])).toEqual(0);
          });
    })    
})
