describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });
        it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });
        it("should return the area of a rectangle (the product of the two arguments)", () => {
            expect(calculateArea(1, 2)).toEqual(2);
            expect(calculateArea(3, 4)).toEqual(12);
            expect(calculateArea(6, 6)).toEqual(36);
        });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });
        it("should return undefined if any of the arguments is not a number", () => {
        expect (add(1, "2")).toEqual(undefined);
        expect (add("3", 4)).toEqual(undefined);
        expect (add("100", "47")).toEqual(undefined);
      });
    })    
})
