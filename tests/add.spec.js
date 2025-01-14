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

      describe("add", function() {
        it("should add two numbers correctly", function() {
          expect(add(1, 2)).toBe( 3);
        });
      
        it("should return undefined if either argument is not a number", function() {
          expect(add(1, "2")).toBeUndefined(); // "2" is not a number
          expect(add("1", 2)).toBeUndefined(); // "1" is not a number
          expect(add("a", "b")).toBeUndefined(); // both are not numbers
        });
      });
    });
  });
  