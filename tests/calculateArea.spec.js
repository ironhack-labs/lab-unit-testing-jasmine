// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
          });

        it("should return a number representing the area of a rectangle (the product of the two arguments).", () => {
            expect(calculateArea(2, 5)).toEqual(10);
            expect(calculateArea(8, 5)).toEqual(40);
          });

        it("should take two numbers as arguments.", () => {
            expect(typeof calculateArea.length === "number" && typeof calculateArea.width === "number");
          });
          
        it("case any of the arguments is not provided, the function should return undefined.", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
          });  
    });
  });
