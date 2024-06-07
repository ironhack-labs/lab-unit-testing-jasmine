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

      it("should return undefined if any of the two arguments is not a number", ()=> {
        expect(add("3", 2)).toEqual(undefined);
        expect(add("4", 1)).toEqual(undefined);
        expect(add(1, "20")).toEqual(undefined);
        expect(add(30, "12")).toEqual(undefined);
      })
    });
  });
  

//How many tests are there for the add function in the add.spec.js file?

//It should have 4 test: "should be defined", "should take two arguments", "should return the sum of the two numbers" and "should return undefined if any of the arguments is not provided".

//How are the blocks describe and it being used in the tests? What is the purpose of each?

// The describe blocks provides you the number of the iteration you are at to and it gives you the name of the function that will be passed. Besides, the it blocks are providing you the conditions required to pass the test.

//How are the test descriptions phrased? Are there any keywords that stand out?

// They have been described precisely and straight. Yes, in fact, TWO ARGUMENTS, DEFINED, RETURN and PROVIDED;

//What do the expect functions do, and what input do they take?

//