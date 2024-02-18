describe("Iteration 3 | Calculate Area", () => {
    describe("Function - calculateArea", () => {
        it("should be defined", () => {
          expect(calculateArea).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("should return a number representing the area of a rectangle (the product of the two arguments)", () => {
            expect(calculateArea(3, 4)).toBe(12);
            expect(calculateArea(8, 9)).toBe(72);
            expect(calculateArea(10, 10)).toBe(100);
        });

        it("should return undefined incase any of the arguments is not provided", () => {
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(null, 56)).toEqual(undefined);
            expect(calculateArea(undefined, 67)).toEqual(undefined);
            expect(calculateArea("6", 89)).toEqual(undefined);
            expect(calculateArea("60", "3")).toEqual(undefined);
        });
    });    
});


