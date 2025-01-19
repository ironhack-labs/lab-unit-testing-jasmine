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
            expect(calculateArea(2, 2)).toEqual(4);
            expect(calculateArea(5, 3)).toEqual(15);
          });

          it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
          });

    })    
})

