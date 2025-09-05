// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        
        });

        it("should return the division of two numbers", () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(9, 3)).toBe(3);
});
     it("should return undefined if one or both arguments are missing", () => {
    expect(divide()).toBeUndefined();
    expect(divide(5)).toBeUndefined();
    expect(divide(undefined, 3)).toBeUndefined();
});
    it("should handle division by zero", () => {
    expect(divide(10, 0)).toBe(Infinity); // JS allows this
});


    })   
    
})

