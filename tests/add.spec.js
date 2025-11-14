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

describe("Iteration 2 | Function division", () => {
    
    describe("Function division", () => {
        
        it("should be defined", () => {
            expect(division).toBeDefined();
        });
        
        it("should take two arguments", () => {
            expect(division.length).toBe(2);
        });

        it("should return the division of the two numbers", () => {
            expect(division(10, 2)).toEqual(5);
            expect(division(9, 2)).toEqual(4.5);
            expect(division(100, 50)).toEqual(2); 
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(division(1)).toEqual(undefined);
            expect(division()).toEqual(undefined);
            expect(division(undefined, 1)).toEqual(undefined);
        });

        it("should return undefined if any argument is not a number", () => {
            expect(division(1, "2")).toEqual(undefined); 
            expect(division("3", 4)).toEqual(undefined); 
            expect(division("100", "47")).toEqual(undefined);
        });
        it("should return undefined when dividing by zero", () => {
            expect(division(10, 0)).toEqual(undefined);
        });
    });
});