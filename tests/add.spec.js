describe("Iteration 1 | Getting Started", () => {
    describe("Function add", () => {
      it("should be defined", () => {
        expect(add).toBeDefined();
      });
  
      it("should take two arguments", () => {
        expect(add.length).toBe(2);
      });
  
      it("should return the sum of the two numbers", () => {
        expect(add(1, 2)).toEqual(3);
        expect(add(3, 4)).toEqual(7);
        expect(add(100, 47)).toEqual(147);
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect(add(1)).toEqual(undefined);
        expect(add()).toEqual(undefined);
        expect(add(undefined, 1)).toEqual(undefined);
      });
      
      it("should return undefined if any of the two arguments is not a number", () => {
      expect(add(1, "string")).toBe(undefined);
      expect(add("string", 1)).toBe(undefined);
      expect(add("string")).toBe(undefined);
      });

    });
  });
  
 /* describe ("function centsToDecimals", () => { 
it("should convert value from cents to floating point number with 2 decimals", () => {
expect(centsToDecimals(105)).toBe(1.05);
expect(centsToDecimals(23)).toBe(0.23);
});

  }); */