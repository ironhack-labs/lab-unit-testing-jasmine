describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("should return the area of the rectangle", () => {
            expect(calculateArea(10, 20)).toEqual(200);
            expect(calculateArea(20, 10)).toEqual(200);
            expect(calculateArea(7, 3)).toEqual(21);
        });

        it("should return undefined if any of the arguments is not provided", () => { 
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        });

        it("should return undefined if any of the arguments is not a positive number", () => { 
            expect(calculateArea(-2, 5)).toEqual(undefined);
            expect(calculateArea(7, -1)).toEqual(undefined);
            expect(calculateArea("a", 1)).toEqual(undefined);
            expect(calculateArea(1, "ba")).toEqual(undefined);
            expect(calculateArea(1, "2")).toEqual(undefined);
            expect(calculateArea(true, 1)).toEqual(undefined);
            expect(calculateArea(2, false)).toEqual(undefined);
            expect(calculateArea(true, false)).toEqual(undefined);
            expect(calculateArea(23, null)).toEqual(undefined);
            expect(calculateArea(undefined, null)).toEqual(undefined);
        });
    });
});
