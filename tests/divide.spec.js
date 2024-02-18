// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("Should be defined", () => {
            expect(div).toBeDefined();
        });

        it("Should take two arguments", () => {
            expect(div.length).toBe(2);
        });

        it("Should return the division of the two numbers", () => {
            expect(div(4, 2)).toEqual(2);
            expect(div(100, 50)).toEqual(2);
            expect(div(150, 25)).toEqual(6);
        });

        it("Should return undefined if any of the argument isn't provided", () => {
            expect(div(1)).toEqual(undefined);
            expect(div()).toEqual(undefined);
            expect(div(undefined, 3)).toEqual(undefined);
        });
    })    
})

