// function calculateArea() {}

describe("Function calculateArea", () => {
    it("should be defined", () => {
        expect(calculateArea).toBeDefined();
    });

    it("should take two arguments", () => {
        expect(calculateArea).toBeDefined();
    });

    it("should return the rectangle area by multiplying the two numbers", () => {
        expect( calculateArea(1, 2) ).toEqual(2);
        expect( calculateArea(3, 4) ).toEqual(12);
        expect( calculateArea(6, 6) ).toEqual(36);
    });

    it("should return undefined if any of the arguments is not provided", () => {
        expect( calculateArea(1) ).toEqual(undefined);
        expect( calculateArea() ).toEqual(undefined);
        expect( calculateArea(undefined, 1) ).toEqual(undefined);
    });

    // REFACTOR - Additional test
    it("should return undefined if any of the arguments is not a number", () => {
        expect( calculateArea(1, "2") ).toEqual(undefined);
        expect( calculateArea("3", 4) ).toEqual(undefined);
        expect( calculateArea("1", "5") ).toEqual(undefined);
    });
});