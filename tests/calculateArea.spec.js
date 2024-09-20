// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        it("should be defined", () => {
            expect(calculateArea(1,2)).toBeDefined();
        });

        it("should return undefined when not taking two arguments", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(1,3,5)).toEqual(undefined);
        });

        it("should return a number representing the area of a rectangle (the product of the two arguments", () => {
            expect(calculateArea(5,10)).toBe(50);
            expect(calculateArea(100,10)).toBe(1000);
            expect(calculateArea(1,10)).toBe(10);
        });

        it("should return undefined when arguments are not numbers", () => {
            expect(calculateArea("A",10)).toEqual(undefined);
            expect(calculateArea("A","B")).toEqual(undefined);
            expect(calculateArea(1,"C")).toEqual(undefined);
        });

    })    
})
