// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2 | Divide", () => {
  describe("Function - divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two numbers as arguments", () => {
      expect(divide.length).toBe(2);
    });
    it("should return the division of two numbers", () => {
      expect(divide(6, 3).toEqual(2));
      expect(divide(20, 4).toEqual(5));
    });
    it("should return undefined if any of the arguments is not a number", () => {
      expect(divide("147", 1)).toEqual(undefined);
      expect(divide(3, "25")).toEqual(undefined);
      expect(divide("34", "678")).toEqual(undefined);
      expect(divide(true, 3)).toEqual(undefined);
    });
    it("should return undefined if any of the arguments are not provided", () => {
      expect(divide(1)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
    });
  });
});
