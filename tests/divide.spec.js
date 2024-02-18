describe("Iteration 2 | Divide", () => {
    describe("Function divide", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
          });

        it("should return the division of two numbers", () => {
            expect(divide(10, 2)).toBe(5);
            expect(divide(66, 11)).toBe(6);
            expect(divide(120, 6)).toBe(20);   
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide()).toEqual(undefined);
            expect(divide(40, null)).toEqual(undefined);
            expect(divide(2)).toEqual(undefined);
            expect(divide(undefined, 2)).toEqual(undefined);
            expect(divide(1, "2")).toEqual(undefined);
            expect(divide("100", "47")).toEqual(undefined);
            expect(divide(true, false)).toEqual(undefined);
        });
    });   
});

