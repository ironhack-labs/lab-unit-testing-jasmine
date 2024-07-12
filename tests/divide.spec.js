describe("Iteration 2", () => {
  describe("Function - divide", () => {
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("should return the divison of the two numbers", () => {
      expect(divide(1, 2)).toEqual(0.5);
      expect(divde(3, 4)).toEqual(0.75);
      expect(divide(100, 50)).toEqual(2);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(1)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 1)).toEqual(undefined);
    });

    it("should return undefined if any of the two arguments is not a number", () => {
      expect(add(1, "2")).toEqual(undefined);
      expect(add("1", 2)).toEqual(undefined);
      expect(add("2", "4")).toEqual(undefined);
    });
  });
});
