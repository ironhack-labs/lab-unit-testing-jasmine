describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        
        it("should take two numbers as arguments", () => {
            expect(calculateArea("notNumber", 1)).toBeUndefined();
            expect(calculateArea(1, "notNumber")).toBeUndefined();
        });

        it("should return a number representing the area of a rectangle (the product of the two arguments)", () => {
            expect(calculateArea(6, 2)).toEqual(12);
            expect(calculateArea(100, 4)).toEqual(400);
            expect(calculateArea(1000, 5)).toEqual(5000);
        });

        it("In case any of the arguments is not provided, the function should return undefined", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        });
    })    
})