describe("Iteration 1 | Getting Started", () => {
    describe("Function add", () => {
      it("should be defined", () => {
        expect(add).toBeDefined();
      });
  
      it("should take two arguments", () => {
        expect(add.length).toBe(2);
      });
  
      it("should return the sum of the two numbers", () => {
        expect(add(1, 2)).toEqual(3);
        expect(add(3, 4)).toEqual(7);
        expect(add(100, 47)).toEqual(147);
      });
  
      it("should return undefined if any of the arguments is not provided", () => {
        expect(add(1)).toEqual(undefined);
        expect(add()).toEqual(undefined);
        expect(add(undefined, 1)).toEqual(undefined);
      });

      it("should return undefined if any of the arguments are not a number", () => {
        expect(add("a",2)).toEqual(undefined);
        expect(add(1,"b")).toEqual(undefined);
        expect(add("a","b")).toEqual(undefined);
      })

    });
  });
  

  // 1. 8
  // 2. They describe the test and what the function should do.
  // 3. The "describe" gives the name of the funcion and the first argument of "it" tells us what the function "should" do.
  // 4. The give us the expectations for the test. The input is one argument to be tested.