// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {

        it("should be defined", () => {
            expect(calculateArea).toBeDefined()
        });
        it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toBeDefined(2)

        }); it("should return a number representing the area of a rectangle (the product of the two arguments)", () => {
            expect(calculateArea(2, 4)).toEqual(8);
            expect(calculateArea(4, 6)).toEqual(24);
            expect(calculateArea(7, 9)).toEqual(63);

        });
        it("should return undefined in case any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        });
        it("should return undefined if any of the two arguments is not a number", () => {
            expect(calculateArea("1", 2)).toEqual(undefined);
            expect(calculateArea(3, "4")).toEqual(undefined);
            expect(calculateArea("5", "6")).toEqual(undefined);
        })
    })
})

