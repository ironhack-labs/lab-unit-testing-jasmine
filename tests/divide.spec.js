// UNCOMMENT THE CODE BELOW TO START


function divide () {
    describe("divide function", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });
    
        it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });
    
        it("should return the division of the two numbers", () => {
            expect(divide(6, 2)).toEqual(3);
            expect(divide(10, 2)).toEqual(5);
            expect(divide(100, 4)).toEqual(25);
        });
    
        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(10)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 5)).toEqual(undefined);
        });
    
        it("should return Infinity if dividing by zero", () => {
            expect(divide(10, 0)).toEqual(Infinity);
        });
    });
}