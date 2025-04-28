// UNCOMMENT THE CODE BELOW TO START

describe('Iteration 2', () => {
  describe('Function - divide', () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it('The function should be defined.', () => {
      expect(divide).toBeDefined();
    });

    it('should take two arguments', () => {
      expect(divide.length).toBe(2);
    });

    it('should return the division of the two numbers', () => {
      expect(divide(14, 2)).toEqual(7);
      expect(divide(3, 4)).toEqual(0.75);
      expect(divide(100, 4)).toEqual(25);
    });

    it('should return undefined if any of the arguments is not provided', () => {
      expect(divide(1)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 1)).toEqual(undefined);
    });

    it('should return undefined if any of the arguments is not a number', () => {
      expect(divide(1, '2')).toEqual(undefined);
      expect(divide('5', '9')).toEqual(undefined);
      expect(divide('3', 1)).toEqual(undefined);
    });
  });
});
