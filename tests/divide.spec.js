// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("Should takes two arguments:",() => {
            expect(divide.length).toBe(2);
        });

        it('Should return the division of two numbers',()=>{
            expect(divide(3,1)).toEqual(3);
            expect(divide(15,3)).toEqual(5);
            expect(divide(21,3)).toEqual(7);
        });

        it("Should return undefined if second argument or first argument is 0",()=>{
            expect(divide(3, 0)).toEqual(undefined);
            expect(divide(0,3)).toEqual(undefined);
        });

        it("should check the arguments are number",()=>{
            expect(divide('3','1')).toEqual(3)
        })

    })    
})

