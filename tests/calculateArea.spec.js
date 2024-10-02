
describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        it("should be defined", () => {
            expect (calculateArea).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect (calculateArea.length).toBe(2);
        });

        it("should return a number representing the area of a rectangle (the product of the two arguments)", () => {
            expect (calculateArea(2, 3)).toBe(6);
            expect (calculateArea(10, 4)).toBe(40);
            expect (calculateArea(0.5, 11)).toBe(5.5);
        });

        it("should return `undefined` if any of the arguments is not provided", () => {
            expect (calculateArea(5)).toBe(undefined);
            expect (calculateArea()).toBe(undefined);
            expect (calculateArea(undefined, 4)).toBe(undefined);
        });

        it("should return `undefined` if any of the arguments is not a number", () => {
            expect (calculateArea(3, "1")).toBe(undefined);
            expect (calculateArea("10", 2)).toBe(undefined);
            expect (calculateArea(NaN, true)).toBe(undefined);
            expect (calculateArea([3, 5, 26, 0], {number: 3, number2: 2})).toBe(undefined);
            expect (calculateArea("Batman", 0)).toBe(undefined);
        });

        it("should return a warning if any of the arguments is a negative number or 0", () => {
            expect (calculateArea(10, -2)).toBe("Yo, you crazy maaan! That rectangle can't exist! How can that be?? o.O");
            expect (calculateArea(-10, 55)).toBe("Yo, you crazy maaan! That rectangle can't exist! How can that be?? o.O");
            expect (calculateArea(-1, -2)).toBe("Yo, you crazy maaan! That rectangle can't exist! How can that be?? o.O");
            expect (calculateArea(0, 25)).toBe("Yo, you crazy maaan! That rectangle can't exist! How can that be?? o.O");
            expect (calculateArea(30, 0)).toBe("Yo, you crazy maaan! That rectangle can't exist! How can that be?? o.O");
            expect (calculateArea(-4, -0)).toBe("Yo, you crazy maaan! That rectangle can't exist! How can that be?? o.O");
            expect (calculateArea(-0, 0)).toBe("Yo, you crazy maaan! That rectangle can't exist! How can that be?? o.O");
        });
    })    
})

