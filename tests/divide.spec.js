describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined();
          });
        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });
        it("should take two numbers as arguments", () => {
            expect(divide("1", 2)).toEqual(undefined);
            expect(divide(3, "4")).toEqual(undefined);
            expect(divide("100", "47")).toEqual(undefined);
        });
        it("should return the division of the two numbers", () => {
            expect(divide(4, 2)).toEqual(2);
            expect(divide(9, 3)).toEqual(3);
            expect(divide(10, 2)).toEqual(5);
        });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(4)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 2)).toEqual(undefined);
            expect(divide(10, undefined)).toEqual(undefined);
        });
    });  
});