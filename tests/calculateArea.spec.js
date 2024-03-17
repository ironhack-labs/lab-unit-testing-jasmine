// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("Should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("Should take two numbers as an argument", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("Should return a number represents the area of a rectangle", () => {
            expect(calculateArea(6,8)).toEqual(48);
        });

        it("Should return the product of two numbers", () => {
            expect( calculateArea(10,5) ).toEqual(50);
            expect( calculateArea(16,3) ).toEqual(48);
        });

        it("Should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea("",5)).toEqual(undefined);
        });

    })    
})
