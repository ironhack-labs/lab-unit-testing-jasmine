// UNCOMMENT THE CODE BELOW TO START
describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
    
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
          });
        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });
        it("should return a number representing the area of a rectangle", () => {
            expect(calculateArea(4, 2)).toEqual(8);
            expect(calculateArea(9, 3)).toEqual(27);
            expect(calculateArea(10, 2)).toEqual(20);
        });
        it("should return undefined if any of the arguments is not a number", () => {
            expect(calculateArea(1,"3")).toEqual(undefined);
            expect(calculateArea("1", 3)).toEqual(undefined);
            expect(calculateArea("1","3")).toEqual(undefined);
        });

    })    
})
