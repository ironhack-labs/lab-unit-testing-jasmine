// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(printFullName).toBeDefined();
        });
        it("The function should take one argument of type object. The object should have two properties: firstName and lastName", () => {
            expect(printFullName.length).toBe(1);
        });
        it("should return a string with the first name and the last name separated by a space", () => {
            expect(printFullName({firstname: "Ali", lastname: "Torbati"})).toEqual("Ali Torbati");
        });
        it("In case the argument passed is not an object, the function should return undefined", () => {
            expect(printFullName(true)).toEqual(undefined);
            expect(printFullName("Torbati")).toEqual(undefined);
            expect(printFullName(1)).toEqual(undefined);
        });
        it("In case the firstName or lastName properties are not provided, the function should return undefined", () => {
            expect(printFullName({firstname: "Ali"})).toEqual(undefined);
            expect(printFullName({lastname: "Torbati"})).toEqual(undefined);
            expect(printFullName({})).toEqual(undefined);
        });
    })    
})

