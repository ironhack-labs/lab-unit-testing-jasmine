// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 5", () => {
  describe("Function - sumArrayNumbers", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("Should be defined", () => {
      expect(sumArrayNumbers).toBeDefined();
    });

    it("Should take one argument", () => {
      expect(sumArrayNumbers.length).toBe(1);
    });

    it("Should return the sum of all the numbers in the array", () => {
      expect(sumArrayNumbers([1, 5, 9])).toEqual(15);
      expect(sumArrayNumbers([5, 5, 20])).toEqual(30);
      expect(sumArrayNumbers([3, 9, 4, 2, 1, 2, 5, 4, 10, 5, 4, 1])).toEqual(
        50
      );
    });

    it("Should return undefined if the argument passed is not an array", () => {
      expect(sumArrayNumbers(9)).toEqual(undefined);
      expect(sumArrayNumbers("aqua")).toEqual(undefined);
      expect(sumArrayNumbers({ num1: 1, num2: 5 })).toEqual(undefined);
    });

    it("Should return 0 if the argument passed is an empty array", () => {
      expect(sumArrayNumbers([])).toEqual(0);
    });
  });
});
