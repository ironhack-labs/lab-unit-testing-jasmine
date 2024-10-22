// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/


it("should be defined", () => {
    expect(divide).toBeDefined()
});
it("should take two numbers as arguments", () => {
    expect(divide.length).toBeDefined(2)
});
it("should return the division of the two numbers", () => {
    expect(divide(4, 2)).toEqual(1);
    expect(divide(12, 3)).toEqual(4);
    expect(divide(20, 2)).toEqual(10);
})
it("should return undefined if any of the arguments is not provided", () => {
    expect(divide(1)).toEqual(undefined);
    expect(divide()).toEqual(undefined);
    expect(divide(undefined, 1)).toEqual(undefined);
})