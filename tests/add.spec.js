describe("Iteration 1 | Getting Started", () => {
  describe("Function add", () => {
    // if function is defined
    it("should be defined", () => {
      expect(add).toBeDefined();
    });

    // if it has two passed arguments
    it("should take two arguments", () => {
      expect(add.length).toBe(2);
    });

    // if it really does the job of adding two numbers
    it("should return the sum of the two numbers", () => {
      expect(add(1, 2)).toEqual(3);
      expect(add(3, 4)).toEqual(7);
      expect(add(100, 47)).toEqual(147);
    });
    // in case one or both arguments are not provided, return undefined
    it("should return undefined if any of the arguments is not provided", () => {
      expect(add(1)).toEqual(undefined);
      expect(add()).toEqual(undefined);
      expect(add(undefined, 1)).toEqual(undefined);
    });

    it("The function should return undefined if any of the two arguments is not a number", () => {
      
      expect(add('string')).toEqual(undefined);
    });
  });
});
