describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
    
        }); 
        
        it("should return the division of the two numbers", () => {
            expect(divide(6, 3)).toBe(2);
            expect(divide(10, 2)).toBe(5);
            expect(divide(-10, 2)).toBe(-5);
            expect(divide(0, 1)).toBe(0);        
        }); 

        it("should return `undefined` if any of the arguments is not provided or the divisor is 0", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined); 
            expect(divide(1,0)).toEqual(undefined);  
        });         
    })    
})