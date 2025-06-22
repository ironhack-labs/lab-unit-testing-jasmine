describe("Iteration 3 | Calculate Area", () => {
    describe("Function calculateArea", () => {
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        });

        it("should return the rectangle area by multiplying the two number arguments", () => {
            expect(calculateArea(4, 2)).toEqual(8);
            expect(calculateArea(5, 6)).toEqual(30);
            expect(calculateArea(10, 7)).toEqual(70);
        });

        it("should return undefined if any of the arguments is not a number", () => {
            expect(add(1, "1")).toEqual(undefined);
            expect(add("1", 1)).toEqual(undefined);
            expect(add(true, 1)).toEqual(undefined);
            expect(add(1, true)).toEqual(undefined);
    });


    });
});