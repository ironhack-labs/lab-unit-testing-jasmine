// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/

describe("Bonus: Iteration 3", () => {
  describe("Function - calculateArea", () => {
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("should return the area of a rectangle", () => {
      expect(calculateArea(5, 4)).toEqual(20);
      expect(calculateArea(3, 7)).toEqual(21);
      expect(calculateArea(8, 2)).toEqual(16);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(calculateArea(5)).toBeUndefined();
      expect(calculateArea()).toBeUndefined();
      expect(calculateArea(undefined, 4)).toBeUndefined();
    });

    it("should return undefined if any of the arguments is not a number", () => {
      expect(calculateArea(1, "2")).toEqual(undefined);
      expect(calculateArea("3", 4)).toEqual(undefined);
      expect(calculateArea("5", "6")).toEqual(undefined);
    });
  });
});
