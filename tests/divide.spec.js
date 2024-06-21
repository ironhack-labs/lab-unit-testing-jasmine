

describe("Iteration 2 | Getting Started", () => {
    describe("Function divide", () => {
      it("should be defined", () => {
        expect(divide).toBeDefined();
      });
  
      it("should take two numbers as arguments", () => {
        expect(divide.length).toBe(2);
      });
  
      it("should return the division of two numbers.", () => {
        expect(divide(4, 2)).toEqual(2);
        expect(divide(10, 2)).toEqual(5);
        expect(divide(100, 25)).toEqual(4);
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect(divide(1)).toEqual(undefined);
        expect(divide()).toEqual(undefined);
        expect(divide(undefined, 1)).toEqual(undefined);
      });
  
    });
  });