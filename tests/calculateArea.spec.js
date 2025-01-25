// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        it("should take two numbers", () => {
            expect(calculateArea.length).toBe(2);
        });
        it("should return a number as the area of the rectangle", () => {
            expect(typeof calculateArea(10, 5)).toBe(50);
        });
        it("should return undefined if any arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
        });
    })    
})

