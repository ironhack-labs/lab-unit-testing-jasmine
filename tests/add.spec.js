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
        expect(add(1, "2")).toEqual(undefined); 
        expect(add("1", 2)).toEqual(undefined); 
        expect(add(true, 2)).toEqual(undefined); 
        expect(add(1, {})).toEqual(undefined); 
        expect(add(1, [])).toEqual(undefined); 
      });
    });
  });
   
  
 // **Review the Tests**

 //  1. How many tests are there for the `add` function in the `add.spec.js` file?
 //there are four tests: 1. if `add` is defined | if `add` takes two arguments | if returns the sum of the two numbers | if returns undefined if any of the arguments are not provided 
  
  
 // 2. How are the blocks `describe` and `it` being used in the tests? What is the purpose of each?
 // in "describe" we have the tests related to the Iteration in question. the "it" blocks describes specifics functionalities that are expected from the function add. 
  
  
 // 3. How are the test descriptions phrased? Are there any keywords that stand out?
 // using should, to be defined and to equal, they are descriptive, describing what the function should do in specifics conditions. 
  
  
 // 4. What do the `expect` functions do, and what input do they take?
 // they check if the final outcome matches the expected outcome.

 