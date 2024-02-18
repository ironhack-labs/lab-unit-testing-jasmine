
describe("Iteration 5", () => {
    describe("Function - sumArrayNumbers", () => {
        it("should be defined", () => {
            expect(sumArrayNumbers).toBeDefined;
    });

        it("should take one argument of type array", () => {
            expect(sumArrayNumbers.length).toBe(1);
        });

        it("should return the sum of all numbers in the array", () => {
            expect(sumArrayNumbers([2, 4, 6, 8])).toEqual(20);
            expect(sumArrayNumbers([-3, 4, 5, 6])).toEqual(12);
            expect(sumArrayNumbers([90, 120])).toEqual(210);
        });

        it("should return undefined if the argument passed is not an array", () => {
            expect(sumArrayNumbers(3)).toEqual(undefined);
            expect(sumArrayNumbers("4")).toEqual(undefined);
            expect(sumArrayNumbers({})).toEqual(undefined);
          });
      
          it("should return 0 if the argument passed is an empty array", () => {
            expect(sumArrayNumbers([])).toEqual(0);
          });
    });    
});

