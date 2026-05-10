// UNCOMMENT THE CODE BELOW TO START
describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        it("should be defined", () => {
            expect(calculateArea).toBeDefined()
        });
        it("should take two numbers as arguments", () => {
            expect(calculateArea(undefined, 1)).toEqual(undefined)
            expect(calculateArea()).toEqual(undefined)
            expect(calculateArea('')).toEqual(undefined)
            expect(calculateArea('', 1)).toEqual(undefined)
            expect(calculateArea(1, '')).toEqual(undefined)
            expect(calculateArea(true)).toEqual(undefined)
            expect(calculateArea(true,1)).toEqual(undefined)
            expect(calculateArea(1,true)).toEqual(undefined)
        });
        it("should return the area of a rectangle", () => {
            expect(calculateArea(3,2)).toEqual(6)
            expect(calculateArea(42,4)).toEqual(168)
        });

    })    
})