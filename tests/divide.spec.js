// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
  describe("Function - divide", () => {

    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two numbers as arguments", () => {
      expect(divide.length).toBeDefined(2);
    });

    it("should return the division of two numbers", () => {
      expect(divide(10, 5)).toEqual(2);
      expect(divide(30, 2)).toEqual(15);
      expect(divide(892, 20)).toEqual(44.6);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(1)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 3)).toEqual(undefined);
    });

    it("should return undefined if any of the arguments is not a number", () => {
      expect(divide(5, "9")).toEqual(undefined);
      expect(divide("8", 5)).toEqual(undefined);
      expect(divide("4", "6")).toEqual(undefined);
    })
  })
})

