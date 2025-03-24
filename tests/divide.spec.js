describe("divide", function() {
    it("should be defined", function() {
      expect(divide).toBeDefined();
    });
  
    it("should return the division of two numbers", function() {
      expect(divide(6, 3)).toBe(2);
      expect(divide(10, 2)).toBe(5);
    });
  
    it("should return undefined if any argument is missing", function() {
      expect(divide(6)).toBeUndefined();
      expect(divide()).toBeUndefined();
    });
  });
  