// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined();
          });

          it("should take two arguments", () => {
            expect(divide.length).toBe(2);
          });

          it("should return the division of the two numbers", () => {
            expect(divide(1, 2)).toEqual(0.5);
            expect(divide(3, 4)).toEqual(0.75);
            expect(divide(80, 4)).toEqual(20);
          });

          it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
          });
    
          it("Should return undefined if any of the arguments is not a number", () => {
            expect(divide('1', 2)).toEqual(undefined);
            expect(divide({}, 2)).toEqual(undefined);
            expect(divide([], 2)).toEqual(undefined);
            expect(divide(1, '2')).toEqual(undefined);
            expect(divide(1, {})).toEqual(undefined);
            expect(divide("1", "2")).toEqual(undefined);
          });
    
          it("should throw an Error if dividing by zero", () => {
            expect(() => divide(1, 0)).toThrow(new Error('Cannot divide by zero'));
          });
      
    })    
})
