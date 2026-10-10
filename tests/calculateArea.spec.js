// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
        expect(calculateArea).toBeDefined();
      });
      it("should take two arguments", () => {
        expect(calculateArea.length).toBe(2);
      });
      it("The function should return a number representing the area of a rectangle (the product of the two arguments).", () => {
        expect(calculateArea(2, 2)).toEqual(4);
        expect(calculateArea(2, 3)).toEqual(6);
        expect(calculateArea(5, 4)).toEqual(20);
        });
    it("In case any of the arguments is not provided, the function should return undefined", () => {
        expect(calculateArea(2)).toEqual(undefined);
        expect(calculateArea(undefined,3)).toEqual(undefined);
        expect(calculateArea("4", 5)).toEqual(undefined);
        });
        
    })    
})

