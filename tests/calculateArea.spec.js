// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined()
        });
        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        })
        it("Should return a number representing the area of a rectangle.", () => {
            expect(calculateArea(2, 5)).toBe(10)
            expect(calculateArea(1, 2)).toBe(2)
            expect(calculateArea(4, 3)).toBe(12)
        })
        it("Should return undefined if any of the arguments is not a number",() => {
            expect(calculateArea(1, "2")).toEqual(undefined)
        })

        })
    })
            
          


