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
            expect(add(4, 2)).toEqual(2);
            expect(add(27, 3)).toEqual(9);
            expect(add(10, 5)).toEqual(2);
          });

          it("should return undefined if any of the arguments is not provided", () => {
            expect(add(1)).toEqual(undefined);
            expect(add()).toEqual(undefined);
            expect(add(undefined, 1)).toEqual(undefined);
          });

          it("should return undefined if an argument is a string", () => {
            expect(add("5", 6)).toEqual(undefined);
            expect(add(8, "9")).toEqual(undefined);
            expect(add("57", "31")).toEqual(undefined);
          });
        

    })    
})

