  describe("Iteration 2 | Divide", () => {
    describe("Function divide", () => {
      it("should take two arguments", () => {
        expect(divide.length).toBe(2);
      });
  
      it("should return the division of the two numbers", () => {
        expect(divide(2, 2)).toEqual(1);
        expect(divide(6, 5)).toEqual(1.2);
        expect(divide(100, 4)).toEqual(25);
      });
      
      it("should return undefined if any of the arguments is not provided", () => {
        expect(divide(1)).toEqual(undefined);
        expect(divide()).toEqual(undefined);
        expect(divide(undefined, 1)).toEqual(undefined);
      });
    
      it("should return undefined if any of the two arguments is not a number", () =>{
        expect(divide("Hello", 1)).toEqual(undefined);
        expect(divide(1, "Hello")).toEqual(undefined);
        expect(divide(true, 1)).toEqual(undefined);
        expect(divide(1, true)).toEqual(undefined);
        expect(divide(null, 1)).toEqual(undefined);
        expect(divide(1, null)).toEqual(undefined);
        expect(divide({}, [])).toEqual(undefined);
        expect(divide([], {})).toEqual(undefined);
    });
    });
});