// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should have two arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("should return the division of the 2 number", () => {
      expect(divide(10, 5)).toEqual(2);
      expect(divide(7, 2)).toEqual(3.5);
    });

    it("should return undefined if any of the argument is not provided", () => {
      expect(divide(1, "string")).toEqual(undefined);
      expect(divide("string", 2)).toEqual(undefined);
      expect(divide("string", "string")).toEqual(undefined);
    });
  });
});
