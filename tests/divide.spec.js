// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/

describe("Function divide", () => {
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });
    
    it("should take two numbers as a argument", () => {
        expect(divide.length).toBe(2);
    })

    it("should take the division of the two numbers", () => {
        expect(divide(1, 2)).toEqual(0.5);
        expect(divide(3, 4)).toEqual(0.75);
        expect(divide(2, 1)).toEqual(2);
    })

    it("should return undefined if any of the arguments is not provided" , () => {
        expect(divide(1 , "")).toEqual(undefined);
        expect(divide("", 1)).toEqual(undefined);
        expect(divide("" , "")).toEqual(undefined);
    })
});
    