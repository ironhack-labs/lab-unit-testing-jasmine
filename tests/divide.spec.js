// UNCOMMENT THE CODE BELOW TO START

/*
Here are the requirements for the `divide` function:
- The function should be defined.
- The function should take two numbers as arguments.
- The function should return the division of the two numbers.
- The function should return `undefined` if any of the arguments is not provided
*/

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });
        it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });
        it("should return the division of the two numbers", () => {
            expect(divide(4, 2)).toEqual(2);
            expect(divide(9, 3)).toEqual(3);
            expect(divide(645, 43)).toEqual(15);
        });
        it("should return `undefined` if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide(undefined, 5)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
        });
    })    
})

