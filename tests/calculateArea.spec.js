// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should retun two arguments", () => {
            expect(calculateArea).toBe(2);
        });

        it("should any of the arguments is not provided, should return undefined",() => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        });

        it("should the multiplication of two arguments", ()  => {
            expect(calculateArea(10, 7)).toEqual(70);
            expect(calculateArea(3, 8)).toEqual(24);
            expect(calculateArea(5, 6)).toEqual(30);
        } )

    })    
})