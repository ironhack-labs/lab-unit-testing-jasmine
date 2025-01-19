describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2)
        });

        it("should return the rectangle area by multiplying the two numbers", () => {
            expect(calculateArea(10, 2)).toEqual(20);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1,)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        });

        
        it("should return undefined if any of the arguments is not a number", () => {
            expect(calculateArea(1, "2")).toEqual(undefined);
        expect(calculateArea("3", 4)).toEqual(undefined);
        expect(calculateArea(5, true)).toEqual(undefined);
        expect(calculateArea(6, null)).toEqual(undefined);
        expect(calculateArea(null, null)).toEqual(undefined);
        });

    })    
})