// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
        });
        it("should return the area of the rectangle by multiplying the two numbers", () => {
            expect(calculateArea(1, 2)).toEqual(2);
            expect(calculateArea(100, 2)).toEqual(200);
            expect(calculateArea(150, 30)).toEqual(4500);
        });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
            expect(calculateArea(1, undefined)).toEqual(undefined);
        });
        it("should return undefined if any of the arguments is not a number", () => {
            expect(calculateArea(1, "2")).toEqual(undefined);
            expect(calculateArea("100", 2)).toEqual(undefined);
            expect(calculateArea("150", "30")).toEqual(undefined);
        });

    })    
})
