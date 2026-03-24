describe("Function divide", () => {

    it("should be defined", () => {
        expect(divide).toBeDefined();
    });

    it("should take to arguments", () => {
        expect(divide.length).toBe(2);
    });

    it("sould return the division of two numbers", () => {
        expect(divide(1, 2) ).toEqual(0.5);
        expect(divide(3, 4) ).toEqual(0.75);
        expect(divide(100, 50) ).toEqual(2);
    });

    it("sloud retunr undefined if any of the arguments is not provided", () => {
        expect(divide(1) ).toEqual(undefined);
        expect(divide() ).toEqual(undefined);
        expect(divide(undefined, 1) ).toEqual(undefined);
    });

    it("should return undefined if any argument is not a number", () => {
        expect(divide("a", "b")).toBeUndefined();
        expect(divide(2, "b")).toBeUndefined();
        expect(divide("a", 3)).toBeUndefined();
    });
});