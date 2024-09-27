// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
    describe("Function calculateArea", () => {
        it("The function should be defined.", () => {
            expect(calculateArea).toBeDefined();
        });
        it("The function should take two numbers as arguments.", () => {
            expect(calculateArea.length).toEqual(2);
        });
        it("The function should return the area of a rectangle.", () => {
            expect(calculateArea(5,2)).toEqual(10);
            expect(calculateArea(3, 3)).toEqual(9);
        }) ;
        it("The function should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(undefined)).toEqual(undefined);
        });     
    });
})