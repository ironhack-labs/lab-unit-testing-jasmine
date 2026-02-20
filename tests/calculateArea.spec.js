// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2)
        })

        it("should return a number representing the area of the rectangle", () => {
            expect(calculateArea(5, 4)).toEqual(20);
            expect(calculateArea(10, 6)).toEqual(60);
            expect(calculateArea(120, 40)).toEqual(4800);
        })

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(2)).toEqual(undefined);
            expect(calculateArea(undefined, 6)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
        })

        it("should return undefined if any of the arguments is not a number", () => {
            expect(calculateArea("4", 7)).toEqual(undefined);
            expect(calculateArea(4, "5")).toEqual(undefined);
            expect(calculateArea("9", "4")).toEqual(undefined);
        })
    })    
})