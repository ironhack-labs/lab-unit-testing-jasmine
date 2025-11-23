// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should take 2 arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should divide the 2 arguments", () => {
            expect(divide(10, 2)).toEqual(5);
            expect(divide(45, 5)).toEqual(9);
        });

        it("should return undefined if any arguments are missing", () => {
            expect(divide(3)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
        });

        it("should return undefined if any of the arguments is not a number", () => {
            expect(divide('a', true)).toEqual(undefined);
            expect(divide([], {})).toEqual(undefined);
            expect(divide(13, '6')).toEqual(undefined);
        });

        it("should return error if first argument is smaller than second argument", () => {
            expect(divide(25, 100)).toEqual(undefined)
        })

    })    
})

