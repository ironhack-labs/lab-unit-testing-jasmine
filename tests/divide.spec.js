// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();

        });
        it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);


        });
        it(" should return the division of the two numbers", () => {
            expect( divide(4,2) ).toEqual(2);
            expect( divide(9,2) ).toEqual(5);
            expect( divide(13,2) ).toEqual(7);

        });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(add(1)).toEqual(undefined);
            expect(add()).toEqual(undefined);
            expect(add(undefined, 1)).toEqual(undefined);

        });

        it("should return undefined if any of the arguments is not a number", () => {
            expect(add('1', 3)).toEqual(undefined);
            expect(add(4, '2')).toEqual(undefined);
            expect(add('8', '2')).toEqual(undefined);

        });

    })    
})
