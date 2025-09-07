describe("Iteration 2", () => {
  describe("Function - divide", () => {
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two numbers as arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("should return the division of the two numbers", () => {
      expect(divide(6, 2)).toEqual(3);
      expect(divide(21, 3)).toEqual(7);
      expect(divide(100, 4)).toEqual(25);
    });

    it("should return undefined if either of the arguments is not provded", () => {
      expect(divide(0).toEqual(undefined));
      expect(divide(1).toEqual(undefined));
      expect(divide(undefined)).toEqual(undefined);
    });
  });
});
