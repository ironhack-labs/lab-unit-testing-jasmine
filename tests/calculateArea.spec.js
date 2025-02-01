 describe("Iteration 3 | Calculate Area", () => {
    describe("Function calculate area", () => {
      it("should be defined", () => {
        expect(add).toBeDefined();
      });
  
      it("should take two arguments", () => {
        expect(calculateArea.length).toBe(2);
      });
  
      it("should return a number representing the area of a rectangle (the product of the two arguments)", () => {
        expect(calculateArea(1, 2)).toEqual(2);
        expect(calculateArea(3, 4)).toEqual(12);
        expect(calculateArea(20, 50)).toEqual(1000);
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect(calculateArea(1)).toEqual(undefined);
        expect(calculateArea()).toEqual(undefined);
        expect(calculateArea(undefined, 1)).toEqual(undefined);
      });   

       it("should return undefined if any of the two arguments is not a number", () =>{
        expect(calculateArea("Hello", 1)).toEqual(undefined);
        expect(calculateArea(1, "Hello")).toEqual(undefined);
        expect(calculateArea(true, 1)).toEqual(undefined);
        expect(calculateArea(1, true)).toEqual(undefined);
        expect(calculateArea(null, 1)).toEqual(undefined);
        expect(calculateArea(1, null)).toEqual(undefined);
        expect(calculateArea({}, [])).toEqual(undefined);
        expect(calculateArea([], {})).toEqual(undefined);
    });
    });
  });