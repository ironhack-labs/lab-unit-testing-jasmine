// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
  describe("Function - calculateArea", () => {

    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should take two numbers as arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("should return a number representing the area of a number, the product of the two arguments", () => {
      expect(calculateArea(5, 8)).toEqual(40);
      expect(calculateArea(12, 24)).toEqual(288);
      expect(calculateArea(15, 40)).toEqual(600);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(9)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 3)).toEqual(undefined);
    })

  })
})

