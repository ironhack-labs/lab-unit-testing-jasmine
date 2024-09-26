// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });
    it("should take two numbers as arguments", () => {
      expect(calculateArea.length).toBe(2);
      expect(calculateArea).toBe("numbers");
    });
    it("should return a number representing the area of a rectangle", () => {
      expect(calculateArea(2, 3)).toBe(6);
      expect(calculateArea(3, 5)).toBe(15);
      expect(calculateArea(6, 0)).toBe(undefined);
    });
  });
  it("should return undefined if any of the arguments is not provided", () => {
    expect(calculateArea(1)).toEqual(undefined);
    expect(calculateArea()).toEqual(undefined);
    expect(calculateArea(undefined, 1)).toEqual(undefined);
  });
});
