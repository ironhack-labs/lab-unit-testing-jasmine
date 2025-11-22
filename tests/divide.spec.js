// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
  describe("Function - divide", () => {
    
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("should return the division of the two numbers", () => {
      expect(divide(10, 2)).toEqual(5);
      expect(divide(20, 4)).toEqual(5);
      expect(divide(9, 3)).toEqual(3);
    });

    it("should return undefined if any argument is not provided", () => {
      expect(divide()).toEqual(undefined);
      expect(divide(10)).toEqual(undefined);
      expect(divide(undefined, 2)).toEqual(undefined);
    });

    // EXTRA EDGE CASE (refactor phase)
    it("should return undefined if any argument is not a number", () => {
      expect(divide("a", 2)).toEqual(undefined);
      expect(divide(10, "x")).toEqual(undefined);
      expect(divide("hello", "test")).toEqual(undefined);
    });
  });
});
