// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2 | Divide", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
        expect(divide).toBeDefined();
        });
    
        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
          });
    
          it("should return the division of the two numbers", () => {
            expect(divide(10, 2)).toEqual(Math.ceil(5));
            expect(divide(1345, 3)).toEqual(Math.ceil(449));
            expect(divide(524, 8)).toEqual(Math.ceil(66));
          });
    
          it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
            
          });
    // For Refactor-
    it("should return undefined if any of the arguments is not a number", () => {
        expect(divide( "5" , 1)).toEqual(undefined);
        expect(divide( 6 , "a")).toEqual(undefined);
      });

    });   
});

