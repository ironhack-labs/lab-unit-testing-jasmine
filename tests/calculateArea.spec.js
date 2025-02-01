
describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
    
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();    
        });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
          });

        it("should return the product of the two numbers", () => {
            expect(calculateArea(1, 2)).toEqual(2);
            expect(calculateArea(3, 4)).toEqual(12);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(5)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(5,undefined)).toEqual(undefined);
        })    
    })
})