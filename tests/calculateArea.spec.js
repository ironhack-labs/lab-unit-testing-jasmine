// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        
        it("The function should be defined.", () => {
            expect(calculateArea).toBeDefined();
        });

        it("The function should take two numbers as arguments.", () =>{
            expect(divide.length).toBe(2);
        });

        ///

        it("The function should return a number representing the area of a rectangle (the product of the two arguments).",() =>{
            expect(calculateArea(3, 3)).toEqual(9);
        });

        ///

        it("The function should return undefined if any of the arguments is not provided",() =>{
            expect(calculateArea()).toEqual(undefined);
        });







    })    
})



