describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
        });
        it("return a number representing the area of a rectangle", () => {
            expect(calculateArea(2, 4)).toBe(8);
            expect(calculateArea(10, 30)).toBe(300);
            expect(calculateArea(5, 8)).toBe(40);
        });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        });
        it("should return undefined if any of the two arguments is not a number", () => {
            expect(calculateArea("1", 2)).toEqual(undefined);
            expect(calculateArea(4, "2")).toEqual(undefined);
            expect(calculateArea("50", "25")).toEqual(undefined);
            
        });

    })    
})

