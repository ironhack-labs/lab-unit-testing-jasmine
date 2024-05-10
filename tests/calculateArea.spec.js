
describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        it("The function should be defined.", () => {
            expect(calculateArea).toBeDefined();
        });

        it("The function should take two numbers as arguments.", () => {
            expect(calculateArea.length).toBe(2);
            
        } );

        it("The function should return a number representing the area of a rectangle (the product of the two arguments).", () => {
            expect(calculateArea(2, 2)).toEqual(4);
            expect(calculateArea(4, 2)).toEqual(8);
            expect(calculateArea(1, 3)).toEqual(3);
            expect(calculateArea(10, 300)).toEqual(3000);
        });

        it("The function should return undefined if any of the arguments is not provided.", () => {
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea(1, undefined)).toBeUndefined;
        });

        it("The function should return undefined if any of the arguments is not a number.", () => {
            expect(calculateArea(NaN)).toEqual(undefined);
            expect(calculateArea(10, "aaa")).toBeUndefined();
            expect(calculateArea(10, null)).toBeUndefined();
            expect(calculateArea(10, undefined)).toBeUndefined();
            expect(calculateArea(10, "")).toBeUndefined();
        })

    })    
})



