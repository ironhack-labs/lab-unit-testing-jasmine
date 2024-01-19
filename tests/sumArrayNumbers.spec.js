const goodArray1 = [0, 1, 2, 3, 4, 5];

const goodArray2 = [15, 68, 60, 5, 64, 860];

const badArray1 = "toto";

const badArray2 = [1, "toto"];

const badArray3 = [];

describe("Bonus: Iteration 5 | Sum Array Numbers", () => {
    describe("Function - sumArrayNumbers", () => {
      it("should be defined", () => {
        expect(sumArrayNumbers).toBeDefined();
      });
  
      it("should take one argument of type array", () => {
        expect(sumArrayNumbers.length).toBe(1);
      });
  
      it("should return the sum of all numbers in the array", () => {
        expect(sumArrayNumbers(goodArray1)).toEqual(15);
        expect(sumArrayNumbers(goodArray2)).toEqual(1072);
      });
  
      it("should return undefined if any of the arguments is not an array", () => {
        expect(sumArrayNumbers(badArray1)).toEqual(undefined);
      });

      it("the array should contain numbers", () => {
        expect(sumArrayNumbers(badArray2)).toEqual(undefined);
      });

      it("in case the argument passed is an empty array, the function should return 0", () => {
        expect(sumArrayNumbers(badArray3)).toEqual(0);
      });
    });
  });
  