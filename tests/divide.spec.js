// UNCOMMENT THE CODE BELOW TO START
describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined();
          });
        it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
          });
        it("should return the division of the two numbers", () => {
            expect(divide(4, 2)).toEqual(2);
            expect(divide(2, 2)).toEqual(1);
            expect(divide(100, 2)).toEqual(50);
          });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(4)).toEqual(undefined);
            expect(divide(undefined , 4)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
          });
        it("should return undefined if any of the two arguments is not a number", () => {
            expect(add("a", 2)).toEqual(undefined);
            expect(add(2, "b")).toEqual(undefined);
            expect(add("a","b")).toEqual(undefined)
          })
    })    
})
