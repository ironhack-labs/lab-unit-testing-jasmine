// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("function should declared", () => {
            expect (calculateArea).toBeDefined();
        });

        it("should take two arguments", () =>{
            expect(calculateArea.length).toBe(2);

        });

        it("should return the rectangle area", ()=>{
            expect(calculateArea(2,4)).toEqual(8);
            expect(calculateArea(2,6)).toEqual(12);
        })

        it("should return undefined if any of the arguments not provided", ()=>{
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea("2", 4)).toEqual(undefined);
        })

    })    
})
