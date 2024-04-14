// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
    describe("Function - divide", () => {

        it("It should be defined.", () => {
            expect(divide).toBeDefined();

        });
        it("It should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("It should return the division of the two numbers", () => {
            expect(divide(10, 2)).toEqual(5);
            expect(divide(20, 2)).toEqual(10);
        });
        it("It should return undefined if any of the arguments is not provided ", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });

    })
})

