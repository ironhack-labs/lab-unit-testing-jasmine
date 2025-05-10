describe("Iteration 2", () => {
    describe("Function - divide", () => {
      
      // Test if the function is defined
      it("should be defined", () => {
        expect(divide).toBeDefined();
      });
  
      // Test if the function takes two arguments
      it("should take two numbers as arguments", () => {
        expect(divide.length).toBe(2);
      });
  
      // Test if the function returns the division of two numbers
      it("should return the division of the two numbers", () => {
        expect(divide(10, 2)).toEqual(5);
        expect(divide(15, 3)).toEqual(5);
        expect(divide(100, 4)).toEqual(25);
        expect(divide(8, 4)).toEqual(2);
      });
  
      // Test if the function returns undefined when arguments are not provided
      it("should return undefined if any of the arguments is not provided", () => {
        expect(divide(10)).toEqual(undefined);
        expect(divide()).toEqual(undefined);
        expect(divide(undefined, 5)).toEqual(undefined);
        expect(divide(10, undefined)).toEqual(undefined);
      });
  
      // Additional test for edge case: division by zero
      it("should return 'Cannot divide by zero' when the second argument is 0", () => {
        expect(divide(10, 0)).toEqual("Cannot divide by zero");
      });
  
      // Additional test for non-number arguments (following pattern from add function)
      it("should return undefined if any of the arguments is not a number", () => {
        expect(divide("10", 2)).toEqual(undefined);
        expect(divide(10, "2")).toEqual(undefined);
        expect(divide({}, 2)).toEqual(undefined);
        expect(divide(10, [])).toEqual(undefined);
      });
    });
  });