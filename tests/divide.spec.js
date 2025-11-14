
describe("Iteration 2", () => {
    describe("Function - divide", () => {
    
        // Each `it` block represents 1 test. You can use the following as a template:
      it("The function should be defined.", () => {
        expect(divide).toBeDefined();
      });
  
      it("The function should take two numbers as arguments", () => {
        expect(divide.length).toBe(2);
      });
  
      it("The function should return the division of the two numbers.", () => {
        expect(divide(15, 3)).toEqual(5);
        expect(divide(10, 5)).toEqual(2);
        expect(divide(100, 2)).toEqual(50);
      });
  
      it("The function should return undefined if any of the arguments is not provided", () => {
        expect(divide(1)).toEqual(undefined);
        expect(divide()).toEqual(undefined);
        expect(divide(undefined, 1)).toEqual(undefined);
      });
    })    
})



