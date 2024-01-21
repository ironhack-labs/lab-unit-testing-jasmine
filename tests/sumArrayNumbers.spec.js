// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 5", () => {
    describe("Function - sumArrayNumbers", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/

describe("Iteration 5 | sumArrayNumbers", () => {
    describe("Function - sumArrayNumbers", () => {
      it("should be defined", () => {
        expect(sumArrayNumbers).toBeDefined();
      });
  
      it("should take one arguments", () => {
        expect(sumArrayNumbers.length).toBe(1);
      });
  
      it("should return the sum of all numbers in the array", () => {
        expect(sumArrayNumbers([1, 2, 3])).toEqual(6);
        expect(sumArrayNumbers([3, 4, 5])).toEqual(12);
        expect(sumArrayNumbers([100, 47])).toEqual(147);
      });
  
      it("should return undefined if the argument passed is not an array", () => {
        expect(sumArrayNumbers(123)).toEqual(undefined);
        expect(sumArrayNumbers("1")).toEqual(undefined);
        expect(sumArrayNumbers({ })).toEqual(undefined);
      });

      it("should return 0 if the argument passed is an empty array", () => {
        expect(sumArrayNumbers([])).toEqual(0);
      });
  })
})