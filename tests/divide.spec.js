describe("Iteration 2", () => {
  describe("Function - divide", () => {
    it("The function should be defined.", () => {
      expect(divide).toBeDefined();
    });

    it("The function should take two numbers as arguments.", () => {
      expect(divide.length).toBe(2);
    });

    it("The function should return the division of the two numbers.", () => {
      expect(divide(1, 2)).toBe(0.5);
      expect(divide(10, 2)).toBe(5);
    });

    it("The function should return undefined if any of the arguments is not provided", () => {
      expect(divide(1)).toBe(undefined);
      expect(divide(undefined, 1)).toBe(undefined);
      expect(divide()).toBe(undefined);
    });

    it("The function should return undefined if any of the arguments is not a number", () => {
      expect(divide(1, "2")).toBe(undefined);
      expect(divide("3", "4")).toBe(undefined);
      expect(divide("3", 1)).toBe(undefined);
    });
  });
});
