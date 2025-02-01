// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defind", () => {
      expect(calculateArea).toBeDefined();
    });
    it("should take two arguments", () => {
      expect(calculateArea.length).toBe(2);
    });
    it("should return the rectangle by multiplying the two numbers", () => {
      expect(calculateArea(3, 3)).toEqual(9);
      expect(calculateArea(10, 5)).toEqual(50);
      expect(calculateArea(100, 10)).toEqual(1000);
    });
    it("should return underfind if any of the argumets is not a provided", () => {
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(1)).toEqual(undefined);
      expect(calculateArea(undefined, 1)).toEqual(undefined);
    });
  });
});
