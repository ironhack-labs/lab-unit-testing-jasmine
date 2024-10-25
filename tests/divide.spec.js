// // UNCOMMENT THE CODE BELOW TO START

// /*

describe("Iteration 2", () => {
    describe("Function - divide", () => { 
        
     // Each `it` block represents 1 test. You can use the following as a template:
    it("should be defined", () => {
        expect(divide).toBeDefined();
    });
    
    it('should take two numbers as arguments', () => {
        expect(divide.length).toBe(2);
     //    expect(numOne).toEqual(jasmine.any(Number));
     //    expect(numTwo).toEqual(jasmine.any(Number));
    });

    it('Should return the division of two numbers', () => {
          expect(divide (2, 2)).toEqual(1);
          expect(divide(15,3)).toEqual(5);
          expect(divide(100,10)).toEqual(10);
    });

    it("Should return undefined if one of the arguments is not provided 🚨", () => {
          expect(divide()).toEqual(undefined);
          expect(divide(1)).toEqual(undefined);
          expect(divide(undefined, 1)).toEqual(undefined);
          expect(divide(1, null)).toEqual(undefined);
          });

     it("should return undefined is one of the argument is not a number", () => {
          expect(divide("test", 1)).toEqual(undefined);
          expect(divide(undefined, 1)).toEqual(undefined);
          expect(divide(null, 1)).toEqual(undefined);
     });
     });    
 });




