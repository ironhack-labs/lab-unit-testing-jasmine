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
       //my code here....

       it("The function should return undefined if any of the two arguments is not a number.", ()=>{
        expect(add(1, "2")).toEqual(undefined);
        expect(add("3", 4)).toEqual(undefined);
         expect(add("100","47")).toEqual(undefined);
       });
    });
  });
  
 // 1: 8 tasks

  /* 2: describe: is used for group related tests to clear that's a block of code that runs together to see if the final results meet the expected output
   it : defines a singel test case and each of (it) inside a describe is a singel test case 

  3: they are made to show what we should expect as result of our code keywords : expect/toEqual and toBe

  4:expect() ... ToBe() : checks if our code output result = expected output result 
  */