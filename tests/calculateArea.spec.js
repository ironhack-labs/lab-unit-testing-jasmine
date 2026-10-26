// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        it("\nshould take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
        });
        it("\nshould return a number representing the area of a rectangle", () => {
            expect(calculateArea(2,3)).toEqual(6);
            expect(calculateArea(10,3)).toEqual(30);
        });
        it("\nshould return undefined if any of the arguments is not provided ", () => {
            expect(calculateArea(2)).toBeUndefined();
            expect(calculateArea(undefined,3)).toBeUndefined();
            expect(calculateArea(3,undefined)).toBeUndefined();

        });
          it("should return undefined if any of the two arguments is string", () => {
            expect(calculateArea("a", 0)).toBeUndefined();
            expect(calculateArea(0, "b")).toBeUndefined();
            expect(calculateArea("a", "b")).toBeUndefined();

        });

    })    
})

/**
In case any of the arguments is not provided, the function should return undefined.
 */