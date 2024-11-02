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

        it("should return a number reprsentig the area of the rectangle", () => {
            expect(calculateArea(2,4)).toEqual(8);
            expect(calculateArea(4,6)).toEqual(24);
            expect(calculateArea(12,10)).toEqual(120);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(2)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 2)).toEqual(undefined);
        });
        
        it("should return undefined if any of the arguments is not a number", () => {
            expect(calculateArea("la", 1)).toEqual(undefined);
            expect(calculateArea(1, "la")).toEqual(undefined);
            expect(calculateArea("la", "la")).toEqual(undefined);
        });

    })    
})
