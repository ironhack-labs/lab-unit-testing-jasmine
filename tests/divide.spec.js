describe("Iteration 2", () => {
  describe("Function - divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two numbers as arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("should return the division of the two numbers", () => {
      expect(divide(10, 2)).toEqual(5);
      expect(divide(12, 3)).toEqual(4);
      expect(divide(4, 2)).toEqual(2);
    });

    it("should return if undefined if any of the argument is not provided", () => {
      expect(divide(4)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 3)).toEqual(undefined);
    });

    it("should return undefined if any of the arguments is not a number", () => {
      expect(divide(3, "9")).toEqual(undefined);
      expect(divide("Hello", 4)).toEqual(undefined);
      expect(divide("45", 0)).toEqual(undefined);
    });

    it("should return that a division by 0 is not possible if the second argument is 0", () => {
      expect(divide(6, 0)).toBe("Can't divide by zero");
    });
  });
});
