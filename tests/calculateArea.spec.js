// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
          });
      
    
    
          it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
          });
      
    
    
          it("should return the rectangle by multiplying of the two numbers", () => {
            expect(calculateArea(8, 9)).toEqual(72);
          });
    
    
      
          it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
          });
    
          
          it("should return undefined if any of the arguments is not a number", () => {
            expect( calculateArea(1, "2")).toEqual(undefined);
            expect( calculateArea("8", 5)).toEqual(undefined);
            expect( calculateArea("4", "9")).toEqual(undefined);
          });
    })    
})

