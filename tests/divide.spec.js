describe("Iteration 2 | Divide", () => {
    describe("Function divide", () => {
        it("should be defined", () => {
            expect(add).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect(add.length).toBe(2);
        });

        it("should return the division of the two numbers", () => {
            expect(add(10, 2)).toEqual(5);
            expect(add(5, 1)).toEqual(5);
            expect(add(100, 50)).toEqual(2);
            expect(add(4, 2)).toEqual(2);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(add(1)).toEqual(undefined);
            expect(add()).toEqual(undefined);
            expect(add(undefined, 1)).toEqual(undefined);
        });


    });
});