// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
            expect(divide).toBeDefined();
    });
    
    it("should take two arguments", () => {
        expect(add.length).toBe(2);
    });
    
    it("should return the division of the two numbers", () => {
        expect(divide (6, 2)).toBe(3)        
        expect(divide (4, 2)).toBe(2)        
        expect(divide (10, 5)).toBe(2)        
        expect(divide (2, 2)).toBe(1)        
        expect(divide (23, 2)).toBe(11.5)        
    });

    it("should return undefined if any of the arguments is not provided", () =>{
        expect(divide(4)).toBe(undefined)
        expect(divide(2)).toBe(undefined)
        expect(divide()).toBe(undefined)
        expect(divide(0)).toBe(undefined)
    })
  })
})

//The function should be defined.
//The function should take two numbers as arguments.
//The function should return the division of the two numbers.
//The function should return undefined if any of the arguments is not provided