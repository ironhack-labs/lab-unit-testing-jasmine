// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("it sould be defined", () => {
      expect(divide).toBeDefined();
    });

    it("it shoud take two numbers as an agument", () => {
      expect(divide.length).toBe(2);
    });
    it("it should return the division", () => {
      expect(divide(10, 5)).toEqual(2);
      expect(divide(4, 2)).toEqual(2);
    });
    it("should return undefined if any of the arguments is not a number", () => {
      expect(add("", "")).toEqual(undefined);
    });
    it("shoud return undefined if any of the arguments is not provided", () => {
      expect(divide(1)).toEqual(undefined);
      expect(divide(" ", 1)).toEqual(undefined);
    });
  });
});
