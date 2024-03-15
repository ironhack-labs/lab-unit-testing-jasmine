// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("The function should be defined", () => {
            expect(divide).toBeDefined();
        });
        it("The function should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });
        it("The function should return the division of the two numbers", () => {
            expect(divide(8, 4)).toEqual(2);
            expect(divide(12, 3)).toEqual(4);
            expect(divide(100, 2)).toEqual(50);
        });
        it("The function should return undefined if any of the two arguments is not provided", () => {
            expect(divide(undefined, 3)).toEqual(undefined);
            expect(divide(4, undefined)).toEqual(undefined);
            expect(divide(undefined,undefined)).toEqual(undefined);
        });
        it("The function should return undefined if any of the two arguments are not numbers", () => {
            expect(divide(1, "5")).toEqual(undefined);
            expect(divide("11", 3)).toEqual(undefined);
            expect(divide("TWO", "pizzas")).toEqual(undefined);
        })

    })    
})
