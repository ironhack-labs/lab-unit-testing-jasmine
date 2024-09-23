describe("Iteration 1 | Getting Started", () => {
  describe("Function add", () => {
    it("should be defined", () => {
      expect(add).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(add.length).toBe(2);
    });

    it("should return the sum of the two numbers", () => {
      expect(add(1, 2)).toEqual(3);
      expect(add(3, 4)).toEqual(7);
      expect(add(100, 47)).toEqual(147);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(add(1)).toEqual(undefined);
      expect(add()).toBeUndefined();
      expect(add(undefined, 1)).toBeUndefined();
    });

    it("should return an error if arguments passed to the function are not numbers", () => {
      expect(() => add("2", 3)).toThrowError("Both arguments must be numbers");
      expect(() => add(2, "3")).toThrowError("Both arguments must be numbers");
    });
  });
});
