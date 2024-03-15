// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        //Each `it` block represents 1 test. You can use the following as a template:
        it("The function should be defined", () => {
            expect(divide).toBeDefined();
        });
        it("The function should take two numbers as arguments.", () => {
            expect(divide.length).toBe(2);
        });
        it("The function should return the division of the two numbers.", () => {
            expect(divide(1, 2)).toEqual(0.5);
            expect(divide(3, 4)).toEqual(0.75);
            expect(divide(100, 50)).toEqual(2);
        });
        it("The function should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);

        });

        it("The function should return undefined if second argument is 0 (zero)", () => {
            expect(divide(1, 0)).toEqual(undefined);
        });


    })    
})
