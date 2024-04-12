// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("Function should return undefined is any of args is not provided", () => {
            expect(divide(10)).toEqual(undefined);
            expect(divide(undefined,51)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
        });
        
        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
          });
      
          it("Function should return undefined if any of 2 arguments is not a number", () => {
            expect(divide(true, 2)).toEqual(undefined);
            expect(divide(3, "2")).toEqual(undefined);
            expect(divide("100", "47")).toEqual(undefined);
    
          });
          it("should return the division of the two numbers", () => {
            expect(divide(4, 2)).toEqual(2);
            expect(divide(2, 1)).toEqual(2);
            expect(divide(100, 10)).toEqual(10);
          });
    })    
})

