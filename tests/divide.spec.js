// UNCOMMENT THE CODE BELOW TO START


describe("Function divide", () => {
    it("should be defined", ()=> {
      expect(divide).toBeDefined();
    });

    it("should take two arguments", ()=> {
      expect(divide.length).toBe(2);
    });

    it("should return undefined if any of the argument is not provided", () =>{
      expect( divide(1)).toEqual(undefined);
      expect( divide()).toEqual(undefined);
      expect( divide(undefined, 1) ).toEqual(undefined);
    })
  })