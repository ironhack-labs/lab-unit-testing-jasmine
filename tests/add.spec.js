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

      it("should return undefined if any of the two arguments is not a number", () => {
        expect(add("1", "2")).toEqual(undefined);
        expect(add("1", 2)).toEqual(undefined);
        expect(add(1, "2")).toEqual(undefined);
      });
    });
  });


  // Review the Test

  // 1. How many tests are there for the add function in the add.spec.js file?
  // There are 4 tests for the function add
  
  // 2. How are the blocks describe and it being used in the tests? What is the purpose of each?
  // They got two arguments : a string that describe the purpose of the test and what it's expected
  // and a second argument which is an arrow function.

  // 3. How are the test descriptions phrased? Are there any keywords that stand out?
  // Every descriptions test from the method 'it' starts with 'should' and the expected action that the function tested should perform

  // 4.What do the expect functions do, and what input do they take?
  // The 'it' methods have 'expect' methods that each invoke the method that is tested 'add' and expects specifics behaviors 
  // based on the arguments passing on the function and its results
