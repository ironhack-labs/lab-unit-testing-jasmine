describe("Iteration 2", () => {
    describe('Function divide', function() {
    it('should be defined', function() {
        expect(divide).toBeDefined();
    });

    it('should take two arguments', function() {
        expect(divide.length).toBe(2);
    });

    it('should return the division of the two numbers', function() {
        expect(divide(6, 2)).toBe(3);
        expect(divide(10, 5)).toBe(2);
    });

    it('should return undefined if any of the arguments is not provided', function() {
        expect(divide(6)).toBeUndefined();
        expect(divide()).toBeUndefined();
    });

    it('should return undefined if any of the arguments is not a number', function() {
        expect(divide(6, 'a')).toBeUndefined();
        expect(divide('b', 2)).toBeUndefined();
    });
  });
});