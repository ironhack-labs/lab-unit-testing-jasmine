// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
            
        });

        it("should take two arguments", () =>{
            expect(divide.length).toBe(2)
        });

        it("should return the division of the two arguments", () =>{
            expect(divide(4,2)).toBe(2);
            expect(divide(8,2)).toBe(4);
            expect(divide(64,8)).toBe(8);
        });

        it("should return undefined if any of the arguments is not provided",() =>{
            expect(divide()).toBeUndefined();
            expect(divide()).toBeUndefined();
            expect(divide(undefined, 2)).toBeUndefined();
        })
        
        it("should return undefined if any of the arguments is not a number",() =>{
            expect(divide(1,"2")).toBeUndefined();
            expect(divide("1","2")).toBeUndefined();
            expect(divide("1",2)).toBeUndefined();        })

    

    })    
})

