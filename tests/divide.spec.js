// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 2", () => {

    describe("Function - divide", () => {
        
        it("The function should be defined.", () => {
            expect(divide).toBeDefined();
        });

        it("The function should take two numbers as arguments.", () =>{
            expect(divide.length).toBe(2);
        });

        it("The function should return the division of the two numbers.",() =>{
            expect(divide(3, 3) ).toEqual(1);
        });

        it("The function should return undefined if any of the arguments is not provided",() =>{
            expect(divide()).toEqual(undefined);
        });

    });  

});
