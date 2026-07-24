// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("should return the division of the two numbers", () => {
      expect(divide(2, 2)).toEqual(1);
      expect(divide(4, 2)).toEqual(2);
      expect(divide(3, 2)).toEqual(1.5);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(6)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(2, undefined)).toEqual(undefined);
    });

    it("should return undefined if any of the arguments is not a number", () => {
      expect(add("2", 5)).toEqual(undefined);
      expect(add(1, true)).toEqual(undefined);
      expect(add([], "5")).toEqual(undefined);
    });
  });
});