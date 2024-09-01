// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3 | Calculate Area", () => {
    describe("Function - calculateArea", () => {
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("should return the division of the two numbers.", () => {
            expect(calculateArea(4,2)).toEqual(8);
            expect(calculateArea(200,4)).toEqual(800);
            expect(calculateArea(2,4)).toEqual(8);
        });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        });
    })    
})
