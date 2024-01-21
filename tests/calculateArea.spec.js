// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
          });
      
          it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
            expect(calculateArea('1', 1)).toBe("Please enter two numbers.");
            expect(calculateArea(1, '1')).toBe("Please enter two numbers.");
            expect(calculateArea('1', '1')).toBe("Please enter two numbers.");
          });
      
          it("should return a number representing the area of a rectangle - the product of the two arguments", () => {
            expect(calculateArea(1, 2)).toEqual("The area of a rectangle 1 units tall and 2 units wide is 2 square units.");
            expect(calculateArea(100, 47)).toEqual("The area of a rectangle 100 units tall and 47 units wide is 4700 square units.");
          });
      
          it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
          });
    })    
})

