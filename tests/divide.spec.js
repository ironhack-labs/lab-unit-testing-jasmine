


describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
          });
          it("should take two numbers arguments", () => {
            expect(divide.length).toBe(2);
          });
          it("should return the division of the two numbers", () => {
            expect(divide(4, 2)).toBe(2);
            expect(divide(6, 3)).toBe(2);
            expect(divide(100, 20)).toBe(5);
          });
          it("should return undefined if any of the arguments is not provided", () =>{
            expect(divide({})).toBeUndefined();
          expect(divide([])).toBeUndefined();
          expect(divide(null)).toBeUndefined();
            })

    })    
})

