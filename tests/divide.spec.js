


describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });



        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });



        it("should return the divition of two numbers", () => {
            expect(divide(100, 20)).toEqual(5);
        })



        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        })



         
      it("should return undefined if any of the arguments is not a number", () => {
        expect( divide(1, "2")).toEqual(undefined);
        expect( divide("8", 5)).toEqual(undefined);
        expect( divide("4", "9")).toEqual(undefined);
      });




    })    
})

