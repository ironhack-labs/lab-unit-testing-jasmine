// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(printFullName).toBeDefined();
        });

        it("should take one argument", () => {
            expect(printFullName.length).toBe(1);
        });

        it("should return a string with the first name and the last name separated by a space", () => {
            expect(printFullName({firstName: "Laia", lastName: "Navalon"})).toEqual("Laia Navalon");
            expect(printFullName({firstName: "Angry", lastName: "Cat"})).toEqual("Angry Cat");
            expect(printFullName({firstName: "Logan", lastName: "Roy"})).toEqual("Logan Roy");
        });

        it("should return undefined if the argument is not an object", () => {
            expect(printFullName()).toEqual(undefined);
            expect(printFullName([])).toEqual(undefined);
            expect(printFullName("hello")).toEqual(undefined);
        });

        it("should return undefined if firstName or lastName properties are not provided", () => {
            expect(printFullName({})).toEqual(undefined);
            expect(printFullName({ firstName: "Laia"})).toEqual(undefined);
            expect(printFullName({ lastName: "Navalon"})).toEqual(undefined);
        });
    })    
})
