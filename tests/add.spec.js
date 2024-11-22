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
      expect(add(1)).toBeUndefined();
      expect(add()).toBeUndefined();
      expect(add(undefined, 1)).toBeUndefined();
    });

    it("should return undefined if any argument is not a number", () => {
      expect(add(2, '3')).toBeUndefined();
      expect(add('a', 3)).toBeUndefined();
      expect(add(true, 3)).toBeUndefined();
    });
  });
});
