// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
    it("should take two arguments", () => {
        expect(add.length).toBe(2);    
    });
    it("should return a number representing the area of a rectangle", () => {
        expect( calculateArea(1, 2) ).toEqual(2);
        expect( calculateArea(3, 4) ).toEqual(12);
        expect( calculateArea(6, 6) ).toEqual(36);
      });
    it("in case any of the arguments is not provided, the function should return undefined",() => {
        expect(calculateArea(1)).toEqual(undefined);
        expect(calculateArea()).toEqual(undefined);
        expect(calculateArea(undefined)).toEqual(undefined);
    });

    }) 
    
    function calculateArea(x, y) {
        if (typeof x !== "number" || typeof y !== "number") {
            return undefined;
        }
        return x * y;
    }
})
