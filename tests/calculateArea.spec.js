// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined()
        });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
          });

        it("should return a number representing the area of a rectangle (the product of the two arguments)", () => {
            expect(calculateArea(1, 2)).toEqual(2);
            expect(calculateArea(3, 4)).toEqual(12);
            expect(calculateArea(8, 5)).toEqual(40);
          });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
          });

        it("should return undefined if an argument is a string", () => {
            expect(calculateArea("5", 6)).toEqual(undefined);
            expect(calculateArea(8, "9")).toEqual(undefined);
            expect(calculateArea("57", "31")).toEqual(undefined);
          });

    })    
})

