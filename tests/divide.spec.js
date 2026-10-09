// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2 | Divide", () => {
  describe("Function divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:

    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two numbers as arguments", () => {
      expect(divide.length).toBe(2);
      expect(typeof divide(4, 2)).toEqual("number");
      expect(divide(1, "string")).toEqual(undefined);
      expect(divide("1", "4")).toEqual(undefined);
      expect(divide(NaN, 1)).toEqual(undefined);
    });

    it("should return the division of the two numbers", () => {
      expect(divide(4, 2)).toEqual(2);
      expect(divide(9, 3)).toEqual(3);
      expect(divide(100, 10)).toEqual(10);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(1)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(1, undefined)).toEqual(undefined);
    });
  });
});
