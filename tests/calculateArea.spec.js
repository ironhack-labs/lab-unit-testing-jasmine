describe("Iteration 3 | Getting Started", () => {
    describe("Function calculateArea", () => {
      it("should be defined", () => {
        expect(calculateArea).toBeDefined();
      });
  
      it("should take two arguments", () => {
        expect(calculateArea.length).toBe(2);
      });
  
      it("should return a number representing the area of a rectangle", () => {
        expect(calculateArea(6, 2)).toEqual(12);
        expect(calculateArea(3, 3)).toEqual(9);
        expect(calculateArea(2, 3)).toEqual(6);
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect(calculateArea(1)).toEqual(undefined);
        expect(calculateArea()).toEqual(undefined);
        expect(calculateArea(undefined, 1)).toEqual(undefined);
      });
       it("should return undefined if any of the arguments is not a number", () => {
        expect(calculateArea(1,"3")).toBeUndefined();
        expect(calculateArea("2",3)).toBeUndefined();
        expect(calculateArea("1","3")).toBeUndefined();
      });
    });
  });