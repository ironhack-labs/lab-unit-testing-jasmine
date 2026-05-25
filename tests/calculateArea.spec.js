describe("Iteration 3 | Calculate Area", () => {
    describe("Function calculateArea", () => {

        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("should return the area of a rectangle", () => {
            expect(calculateArea(5, 3)).toEqual(15);
            expect(calculateArea(10, 4)).toEqual(40);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(5)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
        });

    });
});