describe("Iteration 5", () => {
  describe("Function - sumArrayNumbers", () => {
    it("should be defined", () => {
      expect(sumArrayNumbers).toBeDefined();
    });
    it("should take one argument of type array. The array should contain numbers.", () => {
      expect(sumArrayNumbers.length).toBe(1);
      expect(sumArrayNumbers([1]));
      expect(sumArrayNumbers([1, 2, 3]));
      expect(sumArrayNumbers([100, 200, 400]));
    });
    it("should return the sum of all numbers in the array", () => {
      expect(sumArrayNumbers([1, 2, 3])).toEqual(6);
      expect(sumArrayNumbers([10, 20, 30])).toEqual(60);
      expect(sumArrayNumbers([-5, -10, -20])).toEqual(-35);
    });
    it("In case the argument passed is not an array, the function should return undefined", () => {
      expect(sumArrayNumbers("1")).toBeUndefined();
      expect(sumArrayNumbers(1)).toBeUndefined();
      expect(sumArrayNumbers({})).toEqual(undefined);
    });
    it("should return 0 if the argument passed is an empty array", () => {
      expect(sumArrayNumbers([])).toEqual(0);
    });
  });
});
