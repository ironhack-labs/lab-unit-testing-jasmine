
describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();  
        });
        it("should have two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });
        it("should return a number as the area of the rectangle", () => {
            expect(calculateArea(2, 3)).toEqual(6);
            expect(calculateArea(5, 10)).toEqual(50);
            expect(calculateArea(100, 60)).toEqual(6000);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(2, undefined)).toEqual(undefined);
            expect(calculateArea(undefined, 10)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
        });
    })    
})

/*The function should be defined.
The function should take two numbers as arguments.
The function should return a number representing the area of a rectangle (the product of the two arguments).
In case any of the arguments is not provided, the function should return undefined.*/