describe("calculateArea", function() {
    it("should be defined", function() {
      expect(calculateArea).toBeDefined();
    });
  
    it("should return the area of a rectangle (product of two numbers)", function() {
      expect(calculateArea(5, 10)).toBe(50);
      expect(calculateArea(7, 3)).toBe(21);
    });
  
    it("should return undefined if any argument is missing", function() {
      expect(calculateArea(5)).toBeUndefined();
      expect(calculateArea()).toBeUndefined();
    });
  });
  