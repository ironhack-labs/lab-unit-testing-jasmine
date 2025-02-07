// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("The function should be defined", () => {
            expect(add).toBeDefined();
          });
      
          it("The function should take two arguments", () => {
            expect(add.length).toBe(2);
          });
      
          it("The function should return the product of the two arguments", () => {
            expect(add(2, 4)).toEqual(8);
          });
      
          it("The function should return undefined if any of the arguments is not provided", () => {
            expect(add(1)).toEqual(undefined);
            expect(add()).toEqual(undefined);
            expect(add(undefined, 1)).toEqual(undefined);
          });
    
    
    
          it("The function should return undefined if any of the two arguments is not a number", () =>{
            expect(add(1, "tr")).toEqual(undefined);
            expect(add("asd", 4)).toEqual(undefined);
            expect(add("sad", "tr")).toEqual(undefined);
          });

    })    
})
