describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(add).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect(add.length).toBe(2);
        });

        it("should return the product of the two numbers", () => {
            expect(add(10, 2)).toEqual(20);
            expect(add(5, 1)).toEqual(5);
            expect(add(100, 50)).toEqual(5000);
            expect(add(4, 2)).toEqual(8);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(add(1)).toEqual(undefined);
            expect(add()).toEqual(undefined);
            expect(add(undefined, 1)).toEqual(undefined);
        });

    })    
})
