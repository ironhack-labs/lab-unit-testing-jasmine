// UNCOMMENT THE CODE BELOW TO START

describe('Iteration 3', () => {
  describe('Function - calculateArea', () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it('The function should be defined.', () => {
      expect(calculateArea).toBeDefined();
    });

    it('should take two arguments', () => {
      expect(calculateArea.length).toBe(2);
    });

    it('should return undefined if any of the arguments is not provided', () => {
      expect(calculateArea(1)).toEqual(undefined);
      expect(calculateArea()).toEqual(undefined);
      expect(calculateArea(undefined, 1)).toEqual(undefined);
    });

    it('should return undefined if any of the arguments is not a number', () => {
      expect(calculateArea(1, '2')).toEqual(undefined);
      expect(calculateArea('5', '9')).toEqual(undefined);
      expect(calculateArea('3', 1)).toEqual(undefined);
    });

    it('The function should return a number representing the area of a rectangle (the product of the two arguments).', () => {
        expect(calculateArea(14, 2)).toEqual(28);
        expect(calculateArea(1, 4)).toEqual(4);
        expect(calculateArea(100, 4)).toEqual(400);
      });
  });
});
