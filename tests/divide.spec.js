// UNCOMMENT THE CODE BELOW TO START



//describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it ("Shoud be defined" , () => {
           expect(divide).toBeDefined();
        } )
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("The function should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("The function should return division of theb two numbers", () => {
            expect( divide(1, 2) ).toEqual(0.5);
            expect( divide(3, 4) ).toEqual(0.75);
            expect( divide(100, 50) ).toEqual(2);

        });

        it("The function should return undefined if any of the arguments is not provided", () => {
            expect( divide(1) ).toEqual(undefined);
            expect( divide() ).toEqual(undefined);
            expect( divide(undefined, 1) ).toEqual(undefined);
        });

        it("The function should return undefined if any of the arguments is not a number", () => {
            expect( divide(1, "2") ).toEqual(undefined);
            expect( divide("3", 4) ).toEqual(undefined);
            expect( divide("100", 47) ).toEqual(undefined);
        });
          
    })    


