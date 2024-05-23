
describe("Iteration 3", () => {

    describe("Function - calculateArea", () => {

        it("the function calculateArea should be defined", () => {
            expect(calculateArea).toBeDefined()
        })
        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2)
        });
        it("should return a number representing the area of a rectangle", () => {
            expect(calculateArea(4, 6)).toEqual(24)
            expect(calculateArea(5, 5)).toEqual(25)
            expect(calculateArea(4, 10)).toEqual(40)
        });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        });
        it("should return undefined if any of the arguments is not a number", () => {
            expect(calculateArea(1234, "1")).toBeUndefined();
            expect(calculateArea("1234", 1)).toBeUndefined();
            expect(calculateArea(null, 1)).toBeUndefined();
            expect(calculateArea(1234, undefined)).toBeUndefined();
        });
    })
})