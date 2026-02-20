  describe("Iteration 2 | Divide", () => {
    describe("Funtion divide", () => {

      it("should be defined", () => {
        expect(divide).toBeDefined();
      });
      
      it("should take two argumetns", () => {
        expect(divide.length).toBe(2);
      });

      it("should return the division of two numbers", () => {
        expect(divide(8, 2)).toEqual(4)
      });

      it("should return undefined if any of the two arguments is not provided", () => {
        expect(divide(4)).toEqual(undefined)
        expect(divide()).toEqual(undefined)
      });
      

    })
  })
