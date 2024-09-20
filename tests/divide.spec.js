// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
    describe("Function - divide", () => {
      it("should be defined", () => {
        expect(divide).toBeDefined();
      });
  
      it("should take two arguments", () => {
        expect(divide.length).toBe(2);
      });
  
      it("should return the div of the two numbers", () => {
        expect(divide(1, 2)).toEqual(0.5);
        expect(divide(4, 2)).toEqual(2);
        expect(divide(100, 50)).toEqual(2);
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect(divide(1)).toEqual(undefined);
        expect(divide()).toEqual(undefined);
        expect(divide(undefined, 1)).toEqual(undefined);
      });

      it('should return undefined is any of the arguments is not a number', () => {
        expect(divide(1)).toBeUndefined();
        expect(divide('a')).toBeUndefined();
        expect(divide(null)).toBeUndefined();
        expect(divide(undefined)).toBeUndefined();
        expect(divide()).toBeUndefined();

      })
        
    });
  });
  