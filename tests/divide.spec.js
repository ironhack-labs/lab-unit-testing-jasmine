describe("Function divide", () => {
    describe("Function divide", () => {
      it("should be defined", () => {
        expect(divide).toBeDefined();
      });
  
      it("should take two numbers as arguments", () => {
        expect(divide.length).toBe(2);
      });
  
      it(" should return the division of the two numbers.", () => {
        expect(divide(10, 2)).toEqual(5);
        expect(divide(100, 10)).toEqual(10);
        expect(divide(100, 20)).toEqual(5);
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect(divide(1)).toEqual(undefined);
        expect(divide()).toEqual(undefined);
        expect(divide(undefined, 1)).toEqual(undefined);
      });

        it("should return undefined if any of the two arguments is not a number.", () => {
        expect(divide("STRING",3)).toEqual(undefined);
        expect(divide(6,"STRING")).toEqual(undefined);
        expect(divide("STRING","STRING")).toEqual(undefined);
     })
    });
  });