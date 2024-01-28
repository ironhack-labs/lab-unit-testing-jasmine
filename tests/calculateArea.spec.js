// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined()
        });

        it("should take two arguments", () => {
            expect(add.length).toBe(2);
          });

        it("should return a number representing the area of a rectangle (the product of the two arguments)", () => {
            expect(add(1, 2)).toEqual(2);
            expect(add(3, 4)).toEqual(12);
            expect(add(8, 5)).toEqual(40);
          });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(add(1)).toEqual(undefined);
            expect(add()).toEqual(undefined);
            expect(add(undefined, 1)).toEqual(undefined);
          });

        it("should return undefined if an argument is a string", () => {
            expect(add("5", 6)).toEqual(undefined);
            expect(add(8, "9")).toEqual(undefined);
            expect(add("57", "31")).toEqual(undefined);
          });

    })    
})

