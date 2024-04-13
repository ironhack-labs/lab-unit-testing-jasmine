// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3" | "Multiply", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});
        it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });
    it("should take two arguments", () => {
      expect(calculateArea.length).toBe(2);
    });
    it("should return the multiply of the two numbers", () => {
      expect(calculateArea(6, 2)).toEqual(12);
      expect(calculateArea(80, 4)).toEqual(320);
      expect(calculateArea(100, 50)).toEqual(5000);
    });
    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(1)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 1)).toEqual(undefined);
    });
    it("should return undefined if any of the two arguments is not a number", () => {
      expect(calculateArea(1, "2")).toEqual(undefined);
      expect(calculateArea("3", 4)).toEqual(undefined);
      expect(calculateArea("100", "47")).toEqual(undefined);
    });
  });

    })    


