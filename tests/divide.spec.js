// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
          });
      
          it("should take two arguments", () => {
            expect(divide.length).toBe(2);
          });
      
          it("should return the division of the two numbers", () => {
            expect(divide(10, 2)).toEqual(5);
            expect(divide(9, 3)).toEqual(3);
            expect(divide(100, 5)).toEqual(20);
          });
      
        
    })    
})

