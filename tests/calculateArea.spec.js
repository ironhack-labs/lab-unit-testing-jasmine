// UNCOMMENT THE CODE BELOW TO START
describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        it("Should be defined", () => {
            expect(calculateArea).toBeDefined;
        });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("Should return the division of the two numbers", () => {
            expect(calculateArea(2, 6)).toBe(12);
            expect(calculateArea(100, 50)).toBe(5000);
            expect(calculateArea(3.5, 2)).toBe(7);
        });

        it("Should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(12)).toBe(undefined);
            expect(calculateArea()).toBe(undefined);
            expect(calculateArea(undefined, 2)).toBe(undefined);
        });


    })    
})




