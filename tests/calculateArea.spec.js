// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);

        });
        it("should return a number representing the are of a rectangle", () => {
            expect(calculateArea(5, 2)).toEqual(10);
            expect(calculateArea(8, 4)).toEqual(32);
            expect(calculateArea(10, 5)).toEqual(50);
          });
          it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
          });

    })    
})

