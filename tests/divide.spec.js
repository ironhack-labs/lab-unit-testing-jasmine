// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });
        
        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
         }); 

         it("should return the division of the two numbers", () => {
            expect(divide(4, 2)).toEqual(2);
            expect(divide(27, 3)).toEqual(9);
            expect(divide(10, 5)).toEqual(2);
          });

          it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
          });

          it("should return undefined if an argument is a string", () => {
            expect(divide("5", 6)).toEqual(undefined);
            expect(divide(8, "9")).toEqual(undefined);
            expect(divide("57", "31")).toEqual(undefined);
          });
        

    })    
})

