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
        it("should return the division of the two numbers", () => {
            expect(divide(5, 2)).toEqual(2.5);
            expect(divide(8, 4)).toEqual(2);
            expect(divide(100, 10)).toEqual(10);
          });
        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });
        it('should return undefined if any of the arguments is not a number', () =>{

            expect(divide(1, '')).toEqual(undefined);
            expect(divide(1, true)).toEqual(undefined);
            expect(divide('3', '3')).toEqual(undefined);
    
        });
        it("should return Infinity if the divisor is 0", () => {
            expect(divide(1, 0)).toBeDefined(Infinity);
            expect(divide(-3, 0)).toBeDefined(Infinity);
            expect(divide(0, 0)).toBeDefined(Infinity);
        });     
        it("should return NaN if both numbers are 0", () => {
            expect(divide(1, 0)).toBeDefined(NaN);
            expect(divide(-3, 0)).toBeDefined(NaN);
            expect(divide(0, 0)).toBeDefined(NaN);
        });      
    })    
})

