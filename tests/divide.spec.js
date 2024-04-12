// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

The function should be defined.
The function should take two numbers as arguments.
The function should return the division of the two numbers.
The function should return undefined if any of the arguments is not provided

*/

describe("Iteration 2", () => {
  describe("Function divide", () => {
    it("should be defined", () => {
      expect(divide).toBeDefined();
    })
    it("should take two numbers as an argument", () => {
      expect(divide.length).toBe(2);
    })
    it("should return the divsion of the two numbers", () => {
      expect(divide(6,2)).toBe(3);
      expect(divide(10,5)).toBe(2);
      expect(divide(100,2)).toBe(50);
    })
    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(6)).toBe(undefined);
      expect(divide()).toBe(undefined);
      expect(divide(undefined, 6)).toBe(undefined);
    })
  })
});
  