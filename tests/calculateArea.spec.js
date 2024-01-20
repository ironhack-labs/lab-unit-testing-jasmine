// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3 | Calculate Area", () => {
    describe("Function - calculateArea", () => {

        it("Should be defined", () => {
            expect(calculateArea).toBeDefined()
        });

        it("Should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2)
        });

        it("Should return a number representing the area of a rectangle", () => {
            expect(calculateArea(1, 2)).toEqual(2);
            expect(calculateArea(2, 2)).toEqual(4);
            expect(calculateArea(5, 5)).toEqual(25);
        })

        it("should return undefined if any of the arguments is not a number", () => {
            expect(calculateArea(1, "2")).toEqual(undefined);
            expect(calculateArea("2", 1)).toEqual(undefined);
            expect(calculateArea("10", "15")).toEqual(undefined)
        })

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea(undefined, 2)).toEqual(undefined)
        })

    })
})
