// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("The function should be defined.", () => {
        expect(divide).toBeDefined();
      });
  
      it("The function should take two numbers as arguments.", () => {
        expect(divide.length).toBe(2);
      });
  
      it("The function should return the division of the two numbers.", () => {
        expect(divide(2, 2)).toEqual(1);
        expect(divide(10, 5)).toEqual(2);
        expect(divide(30, 15)).toEqual(2);
      });
  
      it("The function should return undefined if any of the arguments is not provided", () => {
        expect(divide(undefined, 2)).toEqual(undefined);
        expect(divide(3)).toEqual(undefined);
        expect(divide()).toEqual(undefined);
      });
//refactor - add test
      it("The function should return undefined if any of the arguments is object", () => {
        expect(divide({},2)).toEqual(undefined);
        expect(divide(4,{})).toEqual(undefined);
        expect(divide({},{})).toEqual(undefined);
      });

    });
  });

