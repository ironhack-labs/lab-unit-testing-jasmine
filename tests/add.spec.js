describe("Iteration 1 | Getting Started", () => {
    describe("Function add", () => {
      it("should be defined", () => {
        expect(add).toBeDefined();
      });
  
      it("should take two arguments", () => {
        expect(add.length).toBe(2);
      });
  
      it("should return the sum of the two numbers", () => {
        expect( add(4, 4) ).toEqual(8);
        expect( add(13, 9) ).toEqual(22);
        expect( add(49, 94) ).toEqual(143);
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect( add(4)).toEqual(undefined);
        expect( add()).toEqual(undefined);
        expect( add(4, undefined)).toEqual(undefined);
      });

      it ("should return undefined if any of the two arguments is not a number", () => {
        expect( add(4, "4" )).toEqual(undefined);
        expect( add("4", 4)).toEqual(undefined);
        expect( add("4", "4")).toEqual(undefined);
      });
    })
  })