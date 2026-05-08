describe("Iteration 3 | Calculate Area", () => {
    describe("Function calculateArea", () => {
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("should return the rectangle area by multiplying the two numbers", () => {
            expect(calculateArea(2, 2)).toEqual(4);
            expect(calculateArea(9, 3)).toEqual(27);
            expect(calculateArea(400, 20)).toEqual(8000);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        });

        it("should return undefined if any of the two arguments is not a number", () => {
            expect(calculateArea("1", "2")).toEqual(undefined);
            expect(calculateArea("1", 2)).toEqual(undefined);
            expect(calculateArea(1, "2")).toEqual(undefined);
        });
    });
});