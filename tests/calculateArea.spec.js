describe("Iteration 3 | Calculate Area", () => {
    describe("Function calculateArea", () => {
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });
        it("should return the area of a rectangle (the product of the two numbers)", () => {
            expect(calculateArea(5, 4)).toEqual(20);
            expect(calculateArea(10, 3)).toEqual(30);
            expect(calculateArea(7, 7)).toEqual(49);
        });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(5)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 4)).toEqual(undefined);
        });
        it("should return 0 if either argument is 0", () => {
            expect(calculateArea(0, 10)).toEqual(0);
            expect(calculateArea(5, 0)).toEqual(0);
            expect(calculateArea(0, 0)).toEqual(0);
        });
    });
});