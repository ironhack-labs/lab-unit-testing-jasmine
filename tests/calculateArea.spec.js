// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("The function should be defined", () => {
            expect(calculateArea).toBeDefined();
        });
        it("The function should take two numbers as arguments",()=>{
            expect(calculateArea.length).toBe(2);
        })
        it("The function return the division of two numbers", () => {
            expect(calculateArea(4, 2)).toBe(8);
        });
        it("The function return undefined if any of the arguments is not provided",()=>{
            expect(calculateArea(4, '4')).toBeUndefined();
            expect(calculateArea('4', 4)).toBeUndefined();
            expect(calculateArea('4', '4')).toBeUndefined();
        })

    })    
})

