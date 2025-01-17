// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
          });
      
          it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
          });
      
          it("should return the sum of the two numbers", () => {
            expect(calculateArea(1, 2)).toEqual(2);
            expect(calculateArea(50, 4)).toEqual(200);
            expect(calculateArea(20, 3)).toEqual(60);
          });
      
          it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
          });
    
          it("should return undefined if any of the two arguments is not a number", () => {
            expect(calculateArea(!Number,Number)).toEqual(undefined);
            expect(calculateArea(!Number,!Number)).toEqual(undefined);
            expect(calculateArea(!Number,!Number)).toEqual(undefined);
    
          });

    })

});
