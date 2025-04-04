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
        expect(add(1,"2")).toEqual(undefined);
        expect(add("93",4)).toEqual(undefined);
        expect(add( 100,"47")).toEqual(undefined);
      });
      
      it('should return undefined if any argument is not a number', () => {
        expect(add(9, 'y')).toBeUndefined();
        expect(add('h', 8)).toBeUndefined();
        expect(add(null, 3)).toBeUndefined();
        expect(add(1, undefined)).toBeUndefined();
    });
    function add(num1, num2) {
      if (typeof num1!== 'number' || typeof num2 !== 'number') {
          return undefined;
      }
      let result = num1 + num2;
      return result;
  }
  
}); 
  });
