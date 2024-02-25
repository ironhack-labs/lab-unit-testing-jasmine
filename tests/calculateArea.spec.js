// UNCOMMENT THE CODE BELOW TO START


describe("Function - calculateArea", () => {

    it("function should be defined", () => {

        expect(calculateArea).toBeDefined()

    });

    it("the function should take two numbers as arguments", () => {

        expected(calculateArea.length).toBe(2);
    });

    it("should return the rectangle area by multiplying the two numbers", () => {

        expected(calculateArea(1, 2)).toEqual(2);
        expect(calculateArea(3, 4)).toEqual(12);
        expected(calculateArea(6, 6)).toEqual(36);

    });

    it("Should return undefined if any of the arfuments is not provided", () => {


        expect(calculateArea(1)).toEqual(undefined);
        expect(calculateArea()).toEqual(undefined);
        expect(calculateArea(undefined, 1)).toEqual(undefined);
    });

    it("Should return undefined if any of the arguments is not a number", () => {

        expect(calculateArea(1, " ")).toEqual(undefined);
        expect(calculateArea(" ", 4)).toEqual(undefiend);
        expect(calculateArea(" ", " ")).toEqual(undefined);
    });
});
