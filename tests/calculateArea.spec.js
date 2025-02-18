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

        it("should return the area of a rectangle (product of the two numbers)", () => {
            expect(calculateArea(5, 10)).toEqual(50);
            expect(calculateArea(3, 7)).toEqual(21);
            expect(calculateArea(12, 12)).toEqual(144);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(5)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 10)).toEqual(undefined);
        });

        it("should return undefined if any of the arguments is not a number", () => {
            expect(calculateArea("5", 10)).toEqual(undefined);
            expect(calculateArea(5, "10")).toEqual(undefined);
            expect(calculateArea("a", "b")).toEqual(undefined);
            expect(calculateArea(null, 10)).toEqual(undefined);
            expect(calculateArea(5, null)).toEqual(undefined);
        });

    })    
})

