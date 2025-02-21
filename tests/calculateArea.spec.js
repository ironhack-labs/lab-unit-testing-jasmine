// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("should return the rectangle area by multiplying the two numbers", () => {
            expect( calculateArea(4, 2) ).toEqual(8);
            expect( calculateArea(1, 9) ).toEqual(9);
            expect( calculateArea(10, 2) ).toEqual(20);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(4) ).toEqual(undefined);
            expect(calculateArea() ).toEqual(undefined);
            expect(calculateArea(undefined, 4) ).toEqual(undefined);
         });  
    })
})