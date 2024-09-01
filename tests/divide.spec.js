// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("function should be declared", () => {
            expect(divide).toBeDefined();
        });

        it("should take two arguments", () =>{
            expect(divide.length).tobe(2);
        });

        it("should return the division os two numbers", () =>{
            expect (divide(1,2)).toEqual(0.5);
            expect (divide(50,2)).toEqual(25);
            expect (divide(20,10)).toEqual(2);
        })

        it("should return undefined if any of the arguments not provided", () =>{
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
        })

        

    })    
})

*/