// UNCOMMENT THE CODE BELOW TO START

describe('Iteration 2', () => {
  describe('Function - divide', () => {
    it('should be defined', () => {
      expect(divide).toBeDefined();
    });

    it('should take two arguments', () => {
      expect(divide.length).toBe(2);
    });

    it('should return the first argument divide by the second', () => {
      expect(divide(4, 2)).toEqual(2);
      expect(divide(100, 5)).toEqual(20);
      expect(divide(12, 4)).toEqual(3);
    });

    it('should return undefined if any of the arguments is not provided', () => {
      expect(divide(1)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 1)).toEqual(undefined);
    });
  });
});
