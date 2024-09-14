// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
    describe("Function divide", () => {
      it("should be defined", () => {
        expect(divide).toBeDefined();
      });
  
      it("should take two numbers as arguments", () => {
        expect(divide.length).toBe(2);
      });
  
      it("should return the division of the two numbers", () => {
        expect(divide(10, 2)).toEqual(5);
        expect(divide(7, 2)).toEqual(3.5);
        expect(divide(100, 1)).toEqual(100);
      });
  
      it("should return undefined if any of the parameters is not provided", () => {
        expect(divide(10)).toEqual(undefined);
        expect(divide()).toEqual(undefined);
        expect(divide(undefined, 10)).toEqual(undefined);
      });
    });
  });
  