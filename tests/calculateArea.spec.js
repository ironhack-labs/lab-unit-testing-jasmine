describe("Function calculateArea", () => {
    describe("Function divide", () => {
      it("should be defined", () => {
        expect(calculateArea).toBeDefined();
      });
  
      it("should take two  arguments", () => {
        expect(calculateArea.length).toBe(2);
      });
  
      it(" should return a number representing the area of a rectangle", () => {
        expect(calculateArea(10, 2)).toEqual(20);
        expect(calculateArea(6, 2)).toEqual(12);
        expect(calculateArea(100, 2)).toEqual(200);
      });
  
      it("In case any of the arguments is not provided, the function should return undefined", () => {
        expect(calculateArea(1)).toEqual(undefined);
        expect(calculateArea()).toEqual(undefined);
        expect(calculateArea(undefined, 1)).toEqual(undefined);
      });

        it("should return undefined if any of the two arguments is not a number.", () => {
        expect(calculateArea("STRING",5)).toEqual(undefined);
        expect(calculateArea(1,"STRING")).toEqual(undefined);
        expect(calculateArea("STRING","STRING")).toEqual(undefined);
     })
    });
  });
  