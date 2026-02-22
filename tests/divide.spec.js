describe("Iteration 2", () => {
    describe("Function divide", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the division of the two numbers", () => {
            expect(divide(1,2)).toEqual(0.5);
            expect(divide(27,3)).toEqual(9);
            expect(divide(100,2)).toEqual(50);
        });

        it("should return undefined if any of the arguments is not provided0", () => {
            expect(divide()).toEqual(undefined);
            expect(divide(15)).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });

        // extra test 

        it("should return undefined if any of the arguments is not a number", () => {
        expect(divide("1", 2)).toEqual(undefined);
        expect(divide(1, "2")).toEqual(undefined);
        expect(divide("1", "2")).toEqual(undefined);
        expect(divide(true, 2)).toEqual(undefined);
        expect(divide(1, false)).toEqual(undefined);
      });
    })    
})

