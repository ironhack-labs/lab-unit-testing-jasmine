// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("should return the product of the two numbers", () => {
            expect(calculateArea(2, 4)).toEqual(8);
            expect(calculateArea(7, 9)).toEqual(63);
            expect(calculateArea(100, 47)).toEqual(4700);
        })

        it("should return undefined if any of the arguments is provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        })

    })    
})
