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
    });
  });
  
  /* Iteration 1
Q: How many tests are there for the add function in the add.test.js file?
A: 4

Q:How are the blocks describe and it being used in the tests? What is the purpose of each?
A: Since describe and it blocks are functions, they contain any executable code to implement the test. Variables declared in a describe ara available to any it block inside the suite.

Q:How are the test descriptions phrased? Are there any keywords that stand out?
A: The test descriptions begin with it followed by paranthesis and then a string followed by a coma empty paranthesis a arrow function and curly brackets.
The expect function appears always after the it blocks 

Q:What do the expect functions do, and what input do they take?
A:"expect": Are built with the function which takes a value, called the actual. It is chained with a Matcher function, which takes the expected value. (In this case whatever reside in the ()).
*/ 

describe("Iteration 2 | Testing", () => {
  describe("Function Test", () => { 
    it("should not work", () => {
      expect(5).toBeDefined(1);
    });
  });
});