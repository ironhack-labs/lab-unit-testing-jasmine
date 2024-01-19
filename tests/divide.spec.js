// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });
    it("should take two arguments", () => {
      expect(divide.length).toBe(2);
    });
    it("should return the division of two numbers", () => {
        expect(divide(10, 2)).toEqual(5);
        expect(divide(9, 3)).toEqual(3);
        expect(divide(250, 50)).toEqual(5);
    });
    it("should return undefined if any of the arguments is not provided", () => {
        expect(divide(10)).toEqual(undefined);
        expect(divide()).toEqual(undefined);
        expect(divide(undefined, 1)).toEqual(undefined);
        
    });

  });
});

// describe("Iteration 1 | Getting Started", () => {
//     describe("Function add", () => {
//       // if function is defined
//       it("should be defined", () => {
//         expect(add).toBeDefined();
//       });

//       // if it has two passed arguments
//       it("should take two arguments", () => {
//         expect(add.length).toBe(2);
//       });

//       // if it really does the job of adding two numbers
//       it("should return the sum of the two numbers", () => {
//         expect(add(1, 2)).toEqual(3);
//         expect(add(3, 4)).toEqual(7);
//         expect(add(100, 47)).toEqual(147);
//       });
//       // in case one or both arguments are not provided, return undefined
//       it("should return undefined if any of the arguments is not provided", () => {
//         expect(add(1)).toEqual(undefined);
//         expect(add()).toEqual(undefined);
//         expect(add(undefined, 1)).toEqual(undefined);
//       });

//       it("The function should return undefined if any of the two arguments is not a number", () => {

//         expect(add('string')).toEqual(undefined);
//       });
//     });
//   });
