// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/
describe(" Iteration 2 ", () => {
    describe("Function - Divide", () => {
        it ("The function should be defined.", () => {
            expect(divide).toBeDefined();
        })
        it ("The funcion should take two numbers as arguments", () => {
            expect(divide.length).toBe(2);
        })
        it ("The function should return the division of the two numbers.", () => {
            expect(divide(4,2)).toBe(2);
            expect(divide(200,25)).toBe(8);
            expect(divide(1,2)).toBe(0.5);
        })
        it ("The function should return undefined if any of the arguments is not provided", () => {
            expect(divide(undefined,2)).toBe(undefined);
            expect(divide()).toBe(undefined);
            expect(divide(1)).toBe(undefined);
        })
    })

})