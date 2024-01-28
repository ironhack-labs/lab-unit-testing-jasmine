describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        it("should be define", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect(calculateArea(2,45)).toBeDefined();
        });

        it("should return a number representing the area of a rectangle (the product of the two arguments)", () => {
            expect(calculateArea(4,50)).toEqual(200);
            expect(calculateArea(7,4)).toEqual(28);
        });

        it("should return undefined in case any of the arguments is not provided", () => {
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(1,undefined)).toEqual(undefined);
            expect(calculateArea("2", 10)).toEqual(undefined);
            expect(calculateArea(2, )).toEqual(undefined);
        });

    })    
})

