// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("The function should be defined", () => {
            expect(divide).toBeDefined();
        });
        it("The function should take two numbers as arguments",()=>{
            expect(divide.length).toBe(2);
        })
        it("The function return a number representing the area of a rectangle (the product of the two arguments)", () => {
            expect(divide(4, 2)).toBe(2);
        });
        it("The function return undefined if any of the arguments is not provided",()=>{
            expect(divide(4, '4')).toBeUndefined();
            expect(divide('4', 4)).toBeUndefined();
            expect(divide('4', '4')).toBeUndefined();
        })
    })    
})

