// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("The function should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the division of two numbers", () => {
            expect(divide(10, 2)).toBe(5);
            expect(divide(9, 3)).toBe(3);
        });

        it("should return undefined if any arguments are not provided", () => {
            expect(divide(10)).toBeUndefined();
            expect(divide()).toBeUndefined();
        });

        it("should return undefined if any arguments are not numbers", () => {
            expect(divide(10, "2")).toBeUndefined();
            expect(divide("10", 2)).toBeUndefined();
            expect(divide("10", "2")).toBeUndefined();
        });

        it("should return undefined if any of the two arguments is not a number", () => {
            expect( add(1, "2") ).toEqual(undefined);
            expect( add("1", 2) ).toEqual(undefined);
            expect( add("1", "2") ).toEqual(undefined);
          });
    })    
})
