describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined()
        });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("should return the product of the two numbers", () => {
            expect(calculateArea(5, 4)).toEqual(20);
            expect(calculateArea(10, 10)).toEqual(100);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(3)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 7)).toEqual(undefined);
        });

        it("should return undefined if any of the arguments is not a number", () => {
            expect(calculateArea(1, "a")).toEqual(undefined);
            expect(calculateArea("a", 9)).toEqual(undefined);
            expect(calculateArea("a", "b")).toEqual(undefined);
        });

    })    
})


