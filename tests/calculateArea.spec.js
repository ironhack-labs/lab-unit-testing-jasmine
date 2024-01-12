
describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
          });
      
          it("should take two numbers as arguments", () => {
            expect(calculateArea.length).toBe(2);
            expect(typeof calculateArea(1, 1)).toBe('number');
          });
      
          it("should return the product of the two numbers", () => {
            expect(calculateArea(4, 2)).toEqual(8);
            expect(calculateArea(10, 5)).toEqual(50);
            expect(calculateArea(100, 2)).toEqual(200);
          });
      
          it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
          });
        });
      });