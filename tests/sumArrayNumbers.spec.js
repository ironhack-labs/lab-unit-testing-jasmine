// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 5", () => {
  describe("Function - sumArrayNumbers", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(sumArrayNumbers).toBeDefined();
    });
    it("should take one argument", () => {
      expect(sumArrayNumbers.length).toBe(1);
    });
    it("should return sum of all numbers in the array", () => {
      expect(sumArrayNumbers([1, 2, 3])).toEqual(6);
      expect(sumArrayNumbers([4, 5, 6])).toEqual(15);
      expect(sumArrayNumbers([50, 10])).toEqual(60);
    });
    it("should return undefined if passed argument is not an array", () => {
      expect(sumArrayNumbers(123)).toEqual(undefined);
      expect(sumArrayNumbers("5")).toEqual(undefined);
      expect(sumArrayNumbers({})).toEqual(undefined);
    });
    it("should return 0 if passed array is empty", () => {
      expect(sumArrayNumbers([])).toEqual(0);
    });
  });
});
