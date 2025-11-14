// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        
        it("The function should be defined.", () => {
        expect(calculateArea).toBeDefined();
      });
  
      it("The function should take two numbers as arguments", () => {
        expect(calculateArea.length).toBe(2);
      });
  
      it("The function should return a number representing the area of a rectangle (the product of the two arguments)", () => {
        expect(calculateArea(3, 5)).toEqual(15);
        expect(calculateArea(10, 5)).toEqual(50);
        expect(calculateArea(100, 2)).toEqual(200);
      });
  
      it("The function should return undefined if any of the arguments is not provided", () => {
        expect(calculateArea(1)).toEqual(undefined);
        expect(calculateArea()).toEqual(undefined);
        expect(calculateArea(undefined, 1)).toEqual(undefined);
      });
      it("should return undefined if one of the arguments is not a number", () => {
        expect(add("number", 1)).toBe(undefined);
        expect(add(1,"number")).toBe(undefined);
      })
      
    })    
})

