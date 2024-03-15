describe("Iteration 2 | Divide", () => {
  describe("Function - divide", () => {
    it("the function should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("the function should take two numbers as arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("the function should return the divison of the two numbers", () => {
      expect(divide(10, 2)).toEqual(5);
      expect(divide(20, 5)).toEqual(4);
      expect(divide(30, 10)).toEqual(3);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(1)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 1)).toEqual(undefined);
    });
  });
});