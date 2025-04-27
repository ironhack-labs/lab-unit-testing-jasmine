describe("Iteration 1 | Getting Started", () => {
  describe("Function add", () => {
    it("The function should be defined.", () => {
      expect(typeof add).toBe("function");
    });

    it("should take two arguments", () => {
      expect(add.length).toBe(2);
    });

    it("should return the sum of the two numbers", () => {
      expect(add(1, 2)).toEqual(3);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(add()).toEqual(undefined);
    });
  });
});
