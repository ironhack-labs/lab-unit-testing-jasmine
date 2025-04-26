// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
          });
    
          it("should return the rectangle area by multiplying  the two numbers", () => {
            expect(divide(2, 2)).toEqual(1);
            expect(divide(6, 3)).toEqual(2);
            expect(divide(8, 2)).toEqual(4);
          });
    
          it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
          });
    
          it ("The function should return undefined if any  the  arguments is not a number", () =>{
            expect(divide("hoello", 2)).toEqual(undefined);
            expect(divide(3, "ohhh")).toEqual(undefined);
    
        });    
    });
});

