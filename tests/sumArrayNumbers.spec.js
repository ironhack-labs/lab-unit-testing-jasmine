// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 5", () => {
  describe("Function sumArrayNumbers", () => {
    it("should be defined", () => {
      expect(sumArrayNumbers).toBeDefined();
    });

    it(" should return the sum of all numbers in the array.", function () {
      expect(sumArrayNumbers([1, 2, 3, 4])).toEqual(10);
      expect(sumArrayNumbers([1, 2])).toEqual(3);
      expect(sumArrayNumbers([0, 2, 4])).toEqual(6);
    });
    it("should return undefined if the argument passed is not an Array", () => {
      expect(sumArrayNumbers(" ")).toEqual(undefined);
      expect(sumArrayNumbers(123)).toEqual(undefined);
      expect(sumArrayNumbers(true)).toEqual(undefined);
    });

    it("should return 0 if the argument passed is an empty array", () => {
      expect(sumArrayNumbers([])).toEqual(0);
    });
  });
});
