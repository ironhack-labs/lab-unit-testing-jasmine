// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
       
        // The function should be defined.
        // The function should return the division of the two numbers.
        // The function should take two numbers as arguments.
        // The function should return undefined if any of the arguments is not provided

        it("should be defined", () => {
            expect(divide).toBeDefined();
        });
    
        it("should return the division of the two numbers", () => {
            expect(divide(6, 2)).toEqual(3);
            
        });
        
        it("should take two numbers as arguments", () => {
            expect(divide("", null)).toEqual(undefined);
            expect(divide("5", 5)).toEqual(undefined);
            expect(divide(5, "5")).toEqual(undefined);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(5, undefined)).toEqual(undefined);
            expect(divide(undefined, 5)).toEqual(undefined);
        });

        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
          });


    })    
})

