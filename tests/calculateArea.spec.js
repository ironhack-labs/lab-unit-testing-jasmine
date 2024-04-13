// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
        });
        it("should return a number representing the area of a rectangle", () => {
            expect(calculateArea(10,20)).toEqual(200);
            expect(calculateArea(5,4)).toEqual(20);
        });
        it("if any of the arguments is not provided, should return undefined", () => {
            expect(calculateArea(10)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
        });
        it("if any of the arguments is not a number, should return undefined", () => {
            expect(calculateArea('10',5)).toEqual(undefined);
            expect(calculateArea('56','12')).toEqual(undefined);
        });

    })    
})

