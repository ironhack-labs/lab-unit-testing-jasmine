// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("the function should define", () => {
            expect(calculateArea).toBeDefined();
        });

        it("function should take two numbers as arguments." , () =>{
            expect(calculateArea.length).toBe(2);
        }
        );

        it("The function should return a number representing the area of a rectangle" , () =>{
            expect(calculateArea(10,10)).toEqual(50);
        });

        it("any of the arguments is not provided, the function should return undefined" ,() =>{
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined,1)).toEqual(undefined);
        });

    })    
})

