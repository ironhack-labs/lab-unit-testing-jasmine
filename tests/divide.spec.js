// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("Should be define", () => {
            expect(divide).toBeDefined();
        });
        it("Takes 2 argument", () => {
            expect(divide.length).toBe(2);
        });
        it("should return division of two numbers", () => {
            expect(divide(10,5)).toEqual(2);
            expect(divide(5,10)).toEqual(0.5)
            expect(divide(25,100)).toEqual(0.25)
        });
        it("Should return undefiend, if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined,1)).toEqual(undefined);
        });
        it("Should return undefined if any of the argument is not a number", () => {
            expect(divide("1",2)).toEqual(undefined);
            expect(divide(1,"2")).toEqual(undefined);
            expect(divide("1","2")).toEqual(undefined);
        });


    })    
})

