// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("should return a number representing the area of a rectangle (the product of the two arguments)", () => {
            expect(calculateArea(4, 4)).toEqual(16);
            expect(calculateArea(1, 5)).toEqual(5);
            expect(calculateArea(100, 2)).toEqual(200);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        });

        it("should return undefined if any of the two arguments is not a number.", () => {
            expect(add("5", true)).toEqual(undefined);
            expect(add("4", "5")).toEqual(undefined);
            expect(add("4", 5)).toEqual(undefined)
          });

    })    
})
