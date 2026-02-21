// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
            expect(calculateArea("one", 2)).toEqual(undefined);
            expect(calculateArea(1, "two")).toEqual(undefined);
            expect(calculateArea("one", "two")).toEqual(undefined);
        });

        it("should return a number representing the area of the rectangle (the product of the two arguments)", () => {
            expect(calculateArea(1, 2)).toEqual(2);
            expect(calculateArea(2, 2)).toEqual(4);
            expect(calculateArea(10, 10)).toEqual(100);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        })

    })    
})