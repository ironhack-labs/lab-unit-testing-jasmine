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
      
          it("should return the area of the two numbers", () => {
            expect(calculateArea(6, 2)).toEqual(12);
            expect(calculateArea(21, 3)).toEqual(63);
            expect(calculateArea(100, 50)).toEqual(5000);
            expect(calculateArea(0, 50)).toEqual(0);
            expect(calculateArea(50, 0)).toEqual(0);
          });
      
          it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
          });
    
          it("should return undefined if any of the arguments is not a number", () => {
            expect(calculateArea("3",3)).toEqual(undefined);
            expect(calculateArea(3,"3")).toEqual(undefined);
            expect(calculateArea("-5", "7")).toEqual(undefined);
          });
        });

 
})

