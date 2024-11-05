// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
          });
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("should return the product of the two arguments", () => {
            expect(calculateArea(2, 3)).toEqual(6);
            expect(calculateArea(10, 10)).toEqual(100);
            expect(calculateArea(40, 1)).toEqual(40);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(5)).toEqual(undefined);
            expect(calculateArea(undefined, 5)).toEqual(undefined);
        });

        it("should return undefined if any of the two arguments is not a number", () => {
            expect(calculateArea("hello", true)).toEqual(undefined);
            expect(calculateArea("hello", "hello")).toEqual(undefined);
            expect(calculateArea("4", 4)).toEqual(undefined);
        });

    })    
})