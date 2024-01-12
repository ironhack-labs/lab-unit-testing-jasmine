// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("should return the rectangle area by multiplying the two numbers", () => {
            expect( calculateArea(1, 2) ).toEqual(2);
            expect( calculateArea(100, 4) ).toEqual(400);
            expect( calculateArea(25, 4) ).toEqual(100);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect ( calculateArea(1) ).toEqual(undefined);
            expect ( calculateArea() ).toEqual(undefined);
            expect ( calculateArea(undefined, 1) ).toEqual(undefined);
        });

        it("should return undefined if any of the arguments is not a number", () => {
            expect( calculateArea(100, "4") ).toEqual(undefined);
            expect( calculateArea(5, "8") ).toEqual(undefined);
            expect( calculateArea("2", "4") ).toEqual(undefined);
        });
    });  
});
