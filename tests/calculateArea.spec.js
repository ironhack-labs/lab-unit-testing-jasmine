// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
          });   
          it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
          });    
          it("should return a number representing the area of a rectangle", () => {
            expect(calculateArea(4, 2)).toEqual(8);
          });
          it("In case any of the arguments is not provided, the function should return", () => {
            expect(calculateArea(1)).toEqual(undefined);
          });
    })    
})

