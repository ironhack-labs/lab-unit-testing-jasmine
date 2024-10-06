// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("should return the result of divide the two numbers", () => {
      expect(divide(1, 2)).toEqual(0.5);
      expect(divide(4, 4)).toEqual(1);
      expect(divide(100, 5)).toEqual(20);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(1)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 1)).toEqual(undefined);
    });

    it("should return undefined if any of the arguments is not number ", () => {
      expect(divide("1", 2)).toEqual(undefined);
      expect(divide(2, "bon")).toEqual(undefined);
      expect(divide("3", 2)).toEqual(undefined);
    });
  });
});
