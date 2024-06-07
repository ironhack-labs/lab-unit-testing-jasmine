// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
            expect(calculateArea("string", 1)).toEqual(undefined);
            expect(calculateArea(2, "string")).toEqual(undefined);
            expect(calculateArea(null, 1)).toEqual(undefined);
            expect(calculateArea(2, null)).toEqual(undefined);
            expect(calculateArea([], 1)).toEqual(undefined);
            expect(calculateArea(2, [])).toEqual(undefined);
            expect(calculateArea({}, 1)).toEqual(undefined);
            expect(calculateArea(2, {})).toEqual(undefined);
            expect(calculateArea(true, 1)).toEqual(undefined);
            expect(calculateArea(2, false)).toEqual(undefined);
        });

        it("should return the product of the two numbers", () => {
            expect(calculateArea(10, 5)).toEqual(50);
            expect(calculateArea(50, 10)).toEqual(500);
            expect(calculateArea(18, 3)).toEqual(54);
            expect(calculateArea(116, 4)).toEqual(464);
            expect(calculateArea(3, 4)).toEqual(12);
            expect(calculateArea(0.5, 3)).toEqual(1.5);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        });

    })    
})

