describe("Iteration 1 | Getting Started", () => {
    describe("Function calculateArea", () => {
      it("should be defined", () => {
        expect(calculateArea).toBeDefined();
      });
  
      it("should take two arguments", () => {
        expect(calculateArea.length).toBe(2);
      });
  
      it("should return the rectangle area by multiplying the two numbers", () => {
        expect(add(1, 2)).toEqual(3);
        expect(add(3, 4)).toEqual(7);
        expect(add(100, 47)).toEqual(147);
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect(add(1)).toEqual(undefined);
        expect(add()).toEqual(undefined);
        expect(add(undefined, 1)).toEqual(undefined);
      });
      it("should return undefined if any of the arguments is not a number", () => {
       expect( calculateArea(1, "2") ).toEqual(undefined);
       expect(calculateArea("3", 4) ).toEqual(undefined);
       expect(calculateArea("1", 5) ).toEqual(undefined);

      })
    });
  });
  