describe("Iteration 3 | Calculate Area", () => {
    describe("Function calculateArea", () => {
    it("should be defined", () => {
        expect(calculateArea).toBeDefined();
    });

    it("should take two arguments", () => {
        expect(calculateArea.length).toBe(2);
    });

    it("should return the rectangle area by multiplying the two numbers", () => {
        expect(calculateArea(2, 6)).toEqual(12);
        expect(calculateArea(12, 5)).toEqual(60);
        expect(calculateArea(4, 8)).toEqual(32);
    });

    it("should return undefined if any of the arguments is not provided", () => {
        expect(calculateArea(1)).toEqual(undefined);
        expect(calculateArea()).toEqual(undefined);
        expect(calculateArea(undefined, 1)).toEqual(undefined);
    });

    it("should return undefined if any of the two arguments is not a number", () => {
        expect(calculateArea(1, "string")).toBe(undefined);
        expect(calculateArea("string", 1)).toBe(undefined);
        expect(calculateArea("string", "string")).toBe(undefined);
    });
    });
});