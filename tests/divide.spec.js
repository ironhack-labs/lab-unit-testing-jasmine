// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    // The function should be defined.
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });
    // The function should take two numbers as arguments.
    it("should take two arguments", () => {
      expect(divide.length).toBe(2);
    });
    it("should return undefined if any of the arguments is not a number", () => {
      expect(divide("13", 2)).toEqual(undefined);
      expect(divide("4", 5)).toEqual(undefined);
      expect(divide(2, "22")).toEqual(undefined);
      expect(divide(5, "37")).toEqual(undefined);
    });
    // The function should return the division of the two numbers.
    it("should return the division of the two numbers", () => {
      expect(divide(20, 2)).toEqual(10);
      expect(divide(6, 3)).toEqual(2);
      expect(divide(180, 6)).toEqual(30);
      expect(divide(1, 2)).toEqual(0.5);
      expect(divide(3, 4)).toEqual(0.75);
    });
    // The function should return undefined if any of the arguments is not provided
    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(10)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 2)).toEqual(undefined);
      expect(divide(20, undefined)).toEqual(undefined);
    });
  });
});
