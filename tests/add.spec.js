describe("Iteration 1 | Getting Started", () => {
    describe("Function add", () => {
      it("The function should be defined", () => {
        expect(add).toBeDefined();
      });
  
      it("The function should take two arguments", () => {
        expect(add.length).toBe(2);
      });
  
      it("The function should return the sum of the two numbers", () => {
        expect(add(1, 2)).toEqual(3);
      });
  
      it("The function should return undefined if any of the arguments is not provided", () => {
        expect(add(1)).toEqual(undefined);
        expect(add()).toEqual(undefined);
        expect(add(undefined, 1)).toEqual(undefined);
      });



      it("The function should return undefined if any of the two arguments is not a number", () =>{
        expect(add(1, "tr")).toEqual(undefined);
        expect(add("asd", 4)).toEqual(undefined);
        expect(add("sad", "tr")).toEqual(undefined);
      });
    });
  });
  
  