// UNCOMMENT THE CODE BELOW TO START
describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined();
          });
      

        // Each `it` block represents 1 test. You can use the following as a template:
        it("Should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("Should return the division of two numbers", () => {
            expect(divide(8, 2)).toEqual(4);
            expect(divide(20, 5)).toEqual(4);
            expect(divide(4, 1)).toEqual(4);
        });

        it("Should return undefined if any of the arguments is not provided", () => {
            expect(divide()).toEqual(undefined);
            expect(divide(4)).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });

        it("should return undefined if any of the two arguments is not a number", () => {
            expect(divide("hello", true)).toEqual(undefined);
            expect(divide("hello", 4)).toEqual(undefined);
            expect(divide(5, "green")).toEqual(undefined);
          });

    })    
})