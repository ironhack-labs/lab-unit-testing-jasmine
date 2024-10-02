
describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        it("should be defined", () => {
            expect (divide).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect (divide.length).toBe(2);
        });
        
        it("should return the division of the two numbers", () => {
            expect (divide(2,2)).toEqual(1);
            expect (divide(12,4)).toEqual(3);
            expect (divide(3,6)).toEqual(0.5);
            expect (divide(-12,6)).toEqual(-2);
            expect (divide(-12,-2)).toEqual(6);
            expect (divide(10,-10)).toEqual(-1);
        });
        
        it("should return `undefined` if any of the arguments is not provided", () => {
            expect (divide(5)).toBe(undefined);
            expect (divide()).toBe(undefined);
            expect (divide(undefined, 4)).toBe(undefined);
        });
        
        it("should return `undefined` if any of the arguments is not a number", () => {
            expect (divide(3, "1")).toBe(undefined);
            expect (divide("10", 2)).toBe(undefined);
            expect (divide(NaN, true)).toBe(undefined);
            expect (divide([3, 5, 26, 0], {number: 3, number2: 2})).toBe(undefined);
            expect (divide("Batman", 0)).toBe(undefined);
        });

        it("should return `can't divide by 0` if the second argument is 0", () => {
            expect (divide(20, 0)).toBe("can't divide by 0");
            expect (divide(0, 0)).toBe("can't divide by 0");
            expect (divide(-10, 0)).toBe("can't divide by 0");
            expect (divide(45, -0)).toBe("can't divide by 0");
        });
    })    
})
