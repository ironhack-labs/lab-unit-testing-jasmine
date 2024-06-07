// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
    describe("Function - divide", () => {
            it("The function should be defined", () => {
              expect(divide).toBeDefined();
            });

            it("The function should take two numbers as arguments.", () => {
                expect(divide.length).toBe(2);
            });

            it("should return the division of the two numbers", () => {
                expect(divide(30, 2)).toEqual(15);
                expect(divide(1, 5)).toEqual(0.2);
                expect(divide(80, 40)).toEqual(2);
              });

              it("should return undefined if any of the arguments is not provided", () => {
                expect(divide(1)).toEqual(undefined);
                expect(divide()).toEqual(undefined);
                expect(divide(undefined, 1)).toEqual(undefined);
              });

              it("The function should return undefined if any of the two arguments is not a number", () => {
                expect(divide(1, "a")).toEqual(undefined);
                expect(divide("a", 1)).toEqual(undefined);
                expect(divide("a", "a")).toEqual(undefined);
              });
        // Each `it` block represents 1 test. You can use the following as a template:

    })    
})
