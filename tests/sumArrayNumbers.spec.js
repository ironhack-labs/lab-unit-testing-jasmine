// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 5", () => {
  describe("Function - sumArrayNumbers", () => {
    it("should be defined", () => {
      expect(sumArrayNumbers).toBeDefined();
    });

    it("should take one argument of type array", () => {
      expect(sumArrayNumbers.length).toBe(1);
      expect(Array.isArray(sumArrayNumbers([]))).toBeTruthy;
    });

    it("should return the sum of all numbers in the array", () => {
      expect(sumArrayNumbers([1, 2, 3])).toBe(6);
      expect(sumArrayNumbers([10, 20, 30])).toBe(60);
      expect(sumArrayNumbers([-1, 0, 1])).toBe(0);
    });

    it("should return undefined if the argument passed is not an array", () => {
      expect(sumArrayNumbers("not an array")).toBeUndefined();
      expect(sumArrayNumbers(123)).toBeUndefined();
      expect(sumArrayNumbers({})).toBeUndefined();
    });

    it("should return 0 if the argument passed is an empty array", () => {
      expect(sumArrayNumbers([])).toBe(0);
    });
  });
});
