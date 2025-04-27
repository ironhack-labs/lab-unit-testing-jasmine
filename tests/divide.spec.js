// UNCOMMENT THE CODE BELOW TO START
describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it("The function should be define", () => {
            expect(divide).toBeDefined();
        });


      it("The function should take two arguments as argument", () => {
        expect(divide.length).toBe(2);
      });
  
      it("The function should return the division of the two numbers", () => {
        expect(divide(4, 2)).toEqual(2);
        expect(divide(10, 2)).toEqual(5);
        expect(divide(100, 10)).toEqual(10);
      });
  
      it("The function should return undefined if any of the arguments is not provided", () => {
        expect(divide(1)).toEqual(undefined);
        expect(divide()).toEqual(undefined);
        expect(divide(undefined, 1)).toEqual(undefined);
      });


    })    
})