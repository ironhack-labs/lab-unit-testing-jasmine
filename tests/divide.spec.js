// UNCOMMENT THE CODE BELOW TO START

describe("Function divide", () => {

    it("should be defined", () => {
      expect(divide).toBeDefined();
    });
  
    it("should take two arguments", () => {
      expect(divide.length).toBe(2);
    });
  
    it("should return the division of the two numbers", () => {
      expect(divide(4, 2)).toEqual(2);
      expect(divide(9, 3)).toEqual(3);
      expect(divide(100, 20)).toEqual(5);
    });

    it("should return undefined if any of the arguments is not provided", () => {
        expect(divide(9)).toEqual(undefined);
        expect(divide()).toEqual(undefined);
        expect(divide(undefined, 20)).toEqual(undefined);
      });
    
    });


   