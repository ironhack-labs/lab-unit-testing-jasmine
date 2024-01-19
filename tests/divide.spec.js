// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", function() {
            expect(divide).toBeDefined();          
        });

        it("should take two numbers as arguments", function() {
            expect(divide.length).toBe(2);
        });

        it("should return the division of the two numbers", function() {
            expect(divide(6,2)).toEqual(3);
            expect(divide(46,4)).toEqual(11.5);
            expect(divide(100,5)).toEqual(20);
        });

        it("should return undefined if any of the arguments is not provided", function() { 
            expect(divide(5)).toEqual(undefined);
            expect(divide(undefined, 6)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
        });

        it("should return undefined if any of the two arguments is not a number", function() {
            expect(divide(10, "5")).toEqual(undefined);
            expect(divide(8, true)).toEqual(undefined);
            expect(divide("divide", "100")).toEqual(undefined);
        });

    })    
})

