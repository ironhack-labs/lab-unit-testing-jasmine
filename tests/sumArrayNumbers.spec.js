// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 5", () => {
  describe("Function - sumArrayNumbers", () => {
    it("should be defined", () => {
      expect(sumArrayNumbers).toBeDefined();
    });

    it("should take one argument of type array", () => {
      expect(sumArrayNumbers.length).toBe(1);
    });

    it("should return the sum of all numbers in the array", () => {
      expect(sumArrayNumbers([1, 2, 3])).toEqual(6);
      expect(sumArrayNumbers([3, 4])).toEqual(7);
      expect(sumArrayNumbers([100, 47, 20])).toEqual(167);
    });

    it("should return 0 if the argument passed is an empty array", () => {
      expect(sumArrayNumbers([])).toEqual(0);
    });
    it("should return undefined if the argument passed is not an array", () => {
      expect(sumArrayNumbers("b")).toEqual(undefined);
      expect(sumArrayNumbers(12)).toEqual(undefined);
      expect(sumArrayNumbers({})).toEqual(undefined);
    });
  });
});
