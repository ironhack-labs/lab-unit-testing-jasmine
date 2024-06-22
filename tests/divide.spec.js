// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined()
        });

        it("The function should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
            expect(divide(1, 2)).toEqual("number")
        });
        it("should return the division of two numbers", () => {
            expect(divide(10, 5)).toBe(2);
            expect(divide(5, 5)).toBe(1);
            expect(divide(0, 5)).toBe(0);
            expect(divide(-5, 2)).toBe(-2.5);
            expect(divide(-10, -5)).toBe(2);
        });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(add(1)).toEqual(undefined);
            expect(add()).toEqual(undefined);
            expect(add(undefined, 1)).toEqual(undefined);

    })
    })});


