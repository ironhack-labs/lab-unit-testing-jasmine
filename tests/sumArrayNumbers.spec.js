describe("Iteration 5", () => {
  describe("Function - sumArrayNumbers", () => {
    it("should be defined", () => {
      expect(sumArrayNumbers).toBeDefined();
    });

    it("should take one argument of type array. The array should contain numbers.", () => {
      expect(sumArrayNumbers).toHaveLength(1);
      expect(Array.isArray(sumArrayNumbers([1, 2, 3]))).toBe(true);
    });

    it("should return the sum of all numbers in the array", () => {
      expect(sumArrayNumbers([1, 2, 3])).toEqual(6);
      expect(sumArrayNumbers([1, 1.5, 100])).toEqual(102.5);
      expect(sumArrayNumbers([0, 1])).toEqual(1);
    });

    it("should return undefined if the argument passed is not an array", () => {
      expect(sumArrayNumbers(42)).toBe(undefined);
    });

    it("should return 0 if the argument passed is an empty array", () => {
      expect(sumArrayNumbers([])).toEqual(0);
    });
  });
});

//I GIVE UP//
