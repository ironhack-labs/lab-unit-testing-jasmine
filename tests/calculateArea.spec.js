// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
         // Each `it` block represents 1 test. You can use the following as a template:
        it('should be defined', () => {
            expect(calculateArea).toBeDefined();
          });
        
          it('should take two arguments', () => {
            expect(calculateArea.length).toBe(2);
          });
        
          it('should return the area of a rectangle', () => {
            expect(calculateArea(3, 4)).toEqual(12);
            expect(calculateArea(5, 6)).toEqual(30);
          });
        
          it('should return undefined if any of the arguments is not provided', () => {
            expect(calculateArea(5)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
          });

    })    
})
