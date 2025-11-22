// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {
    
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("should return the product of the two numbers", () => {
      expect(calculateArea(2, 5)).toEqual(10);
      expect(calculateArea(3, 7)).toEqual(21);
      expect(calculateArea(10, 10)).toEqual(100);
    });

    it("should return undefined if any argument is not provided", () => {
      expect(calculateArea(5)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 3)).toEqual(undefined);
    });

    it("should return undefined if any argument is not a number", () => {
      expect(calculateArea("a", 2)).toEqual(undefined);
      expect(calculateArea(3, "x")).toEqual(undefined);
      expect(calculateArea("hello", "world")).toEqual(undefined);
    });

  });    
});

