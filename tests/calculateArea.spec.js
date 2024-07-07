describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });
        it("should return a number representing the area of a rectangle (the product of the two arguments)", () => {
            expect(calculateArea(5, 2)).toEqual(10);
            expect(calculateArea(9, 4)).toEqual(36);
            expect(calculateArea(100, 2)).toEqual(200);
        });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        });

        it("should return undefined if any of the arguments is not a number", () => {
            expect(calculateArea(5, "2")).toEqual(undefined);
            expect(calculateArea("9", 4)).toEqual(undefined);
            expect(calculateArea("100", "2")).toEqual(undefined);
        });

    })
})
