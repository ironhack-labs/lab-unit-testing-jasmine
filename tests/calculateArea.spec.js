// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3 | Calculate Area", () => {
    describe("Function calculateArea", () => {
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
        })
        it("if any of the arguments is not provided, function should return undefined", () => {
            expect(calculateArea(5)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 3)).toEqual(undefined);
        })
        it("should return a number representing the area of a rectangle", () => {
            expect(calculateArea(5, 3)).toEqual(15);
            expect(calculateArea(1, 2)).toEqual(2);
        })
    })    
})

