describe("Iteration 5", () => {
  describe("Function - sumArrayNumbers", () => {
    it("should be defined", () => {
      expect(sumArrayNumbers).toBeDefined();
    });

    it("should take one argument", () => {
      expect(sumArrayNumbers.length).toBe(1);
    });

    it("should return the sum of numbers in the array", () => {
      expect(sumArrayNumbers([1, 2])).toEqual(3);
      expect(sumArrayNumbers([1, 2, 3])).toEqual(6);
    });

    it("should return zero if the argument array is empty", () => {
      expect(sumArrayNumbers([])).toEqual(0);
    });

    it("should return undefined if any of the arguments is not an array", () => {
      expect(printFullName(1)).toEqual(undefined);
      expect(printFullName({})).toEqual(undefined);
      expect(printFullName("notAnArray")).toEqual(undefined);
    });
  });
});
