// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });
        it("should take two  arguments",function(){
            expect(divide.length).toBe(2);
        });
        it("should return the division of the two numbers",function(){
            expect(divide(4, 2)).toEqual(2);
            expect(divide(1,2)).toEqual(0.5);
            expect(divide(500,100)).toEqual(5);
        });
        it("should return undefined if no arguments provided",function(){
            expect(divide(5)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 100)).toEqual(undefined);
        });
        it("should return undefined if any of the arguments is not a number",function(){
            expect(divide(1,"2")).toEqual(undefined);
            expect(divide("2",1)).toEqual(undefined);
            expect(divide("50","10")).toEqual(undefined);
        });


    })    
})

