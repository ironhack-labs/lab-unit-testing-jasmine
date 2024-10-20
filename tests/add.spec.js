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
      expect(add()).toEqual(undefined);
      expect(add(undefined, 1)).toEqual(undefined);
    });
    // Additional test
    it("should return undefined if either of the arguments is not a number", function () {
      expect(add(2, "three")).toBeUndefined();
      expect(add("two", 3)).toBeUndefined();
      expect(add("two", "three")).toBeUndefined();
    });
    // Second Additional test
    describe("Divide Function", function () {
      it("should be defined", function () {
        expect(divide).toBeDefined();
      });

      it("should return the division of two numbers", function () {
        expect(divide(6, 2)).toBe(3);
        expect(divide(9, 3)).toBe(3);
      });

      it("should return undefined if any argument is not a number", function () {
        expect(divide(6, "two")).toBeUndefined();
        expect(divide("six", 2)).toBeUndefined();
      });

      it("should return undefined if arguments are not provided", function () {
        expect(divide(6)).toBeUndefined();
        expect(divide()).toBeUndefined();
      });
    });
  });
});
