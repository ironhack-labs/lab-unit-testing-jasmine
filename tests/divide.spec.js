// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(divide.length).toBe(2);
    });

    it("should return the division of the two numbers", () => {
      expect(divide(10, 2)).toEqual(5);
      expect(divide(20, 4)).toEqual(5);
      expect(divide(15, 3)).toEqual(5);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(10)).toBeUndefined();
      expect(divide()).toBeUndefined();
      expect(divide(undefined, 5)).toBeUndefined();
    });

    it("should return undefined if any of the arguments is not a number", () => {
      expect(divide(1, "2")).toEqual(undefined);
      expect(divide("3", 4)).toEqual(undefined);
      expect(divide("5", "6")).toEqual(undefined);
    });
  });
});
