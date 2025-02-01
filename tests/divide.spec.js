// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defind", () => {
      expect(divide).toBeDefined();
    });
    it("should take two arguments", () => {
      expect(divide.length).toBe(2);
    });
    it("should return the division of the two numbers", () => {
      expect(divide(10, 5)).toEqual(2);
      expect(divide(30, 5)).toEqual(6);
      expect(divide(114, 3)).toEqual(38);
    });
    it("should return underfind if any of the argumets is not a provided", () => {
      expect(divide(undefined, 1)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(1)).toEqual(undefined);
    });
  });
});
