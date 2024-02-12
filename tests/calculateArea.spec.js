// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("should return the rectangle area by multiplying the two numbers", ()=> {
            expect(calculateArea(1, 2)).toBe(2);
            expect(calculateArea(3, 4)).toBe(12);
            expect(calculateArea(6, 6)).toBe(36);
        })    

        it("should return undefined if any of the arguments is not provided", ()=> {
            expect(calculateArea(1)).toEqual(undefined)
            expect(calculateArea()).toEqual(undefined)
            expect(calculateArea(undefined, 1)).toEqual(undefined)
        });
    })
})

