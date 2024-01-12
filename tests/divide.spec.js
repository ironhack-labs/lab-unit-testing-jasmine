// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should return the division of the two numbers", () => {
      expect(divide(4, 2)).toEqual(2);
    });

    it("should take two numbers as an argument", () => {
      expect(divide.length).toBe(2);
    });

    it("should return undefined if no arguments are provided", () => {
      expect(divide()).toEqual(undefined);
    });

    it("should return undefined if any of the arguments is not a number", () => {
      expect(divide(1, "a")).toEqual(undefined);
      expect(divide("a", 1)).toEqual(undefined);
      expect(divide("a", "b")).toEqual(undefined);
    });
  });
});
