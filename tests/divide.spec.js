

describe("Iteration 2 | Divide", () => {
    describe("Function div", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });
        it("should take two arguments", () => {

            expect(divide.length).toBe(2);
        });

        it("should return the div of the two numbers", () => {
            expect(divide(1, 2)).toEqual(0.5);
            expect(divide(3, 4)).toEqual(0.75);
            expect(divide(100, 47)).toEqual(2);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });

        it("Should return undefined if any of the two arguments is not a number", () => {

            // Invoke the function with different inputs and check the result

            expect(divide(1, "2")).toEqual(undefined);
            expect(divide("3", 4)).toEqual(undefined);
            expect(divide("100", "47")).toEqual(undefined);
        });


    });
});
