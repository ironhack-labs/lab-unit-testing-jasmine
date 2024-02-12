// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined.", () => {
            expect(divide).toBeDefined();            
        });

        it(" should take two numbers as arguments.", () => {
            expect(add.length).toBe(2)
        });

        it("should return the division of the two numbers.", () => {
            expect(divide(4,2)).toBe(2)
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect (divide(1,"2")).toEqual(undefined);
            expect (divide("3", 4)).toEqual(undefined);
            expect ( divide("100", "47")) .toEqual(undefined);
        });
    })    
})
