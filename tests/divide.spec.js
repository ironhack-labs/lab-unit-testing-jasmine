// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("The function must be declarated", () => {
            expect(divide).toBeDefined();
        });

        it("Should take two arguments", () => {
            expect(divide.length).toBe(2);
        }); 

        it("Should divide two numbers", () => {
            expect(divide (4, 2)).toEqual(2);
            expect(divide (7, 2)).toEqual(3.5);
            
        }); 

        it("should return undefined if any of the arguments is not provided", () => {
            expect( divide(1) ).toEqual(undefined);
            expect( divide() ).toEqual(undefined);
            expect( divide(undefined, 1) ).toEqual(undefined);
          });
});

});