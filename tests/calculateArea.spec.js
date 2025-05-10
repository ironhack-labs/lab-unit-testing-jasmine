describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
      
      // Test if the function is defined
      it("should be defined", () => {
        expect(calculateArea).toBeDefined();
      });
  
      // Test if the function takes two arguments
      it("should take two arguments", () => {
        expect(calculateArea.length).toBe(2);
      });
  
      // Test if the function returns the area of a rectangle
      it("should return the area of a rectangle (product of two numbers)", () => {
        expect(calculateArea(2, 3)).toEqual(6);
        expect(calculateArea(5, 4)).toEqual(20);
        expect(calculateArea(10, 10)).toEqual(100);
        expect(calculateArea(7, 8)).toEqual(56);
      });
  
      // Test if the function returns undefined when arguments are not provided
      it("should return undefined if any of the arguments is not provided", () => {
        expect(calculateArea(5)).toEqual(undefined);
        expect(calculateArea()).toEqual(undefined);
        expect(calculateArea(undefined, 5)).toEqual(undefined);
        expect(calculateArea(5, undefined)).toEqual(undefined);
      });
  
      // Bonus: Test if the function returns undefined when arguments are not numbers
      it("should return undefined if any of the arguments is not a number", () => {
        expect(calculateArea("5", 4)).toEqual(undefined);
        expect(calculateArea(5, "4")).toEqual(undefined);
        expect(calculateArea({}, 4)).toEqual(undefined);
        expect(calculateArea(5, [])).toEqual(undefined);
      });
    });
  });