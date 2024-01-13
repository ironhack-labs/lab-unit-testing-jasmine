// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 4", () => {
    describe("Function - printFullName", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(printFullName).toBeDefined();
        });

        it("should take one argument of type object", () => {
            expect(printFullName.length).toBe(1);
        });

        it("should return a string with the first name and the last name separated by a space", () => {
            const name = {firstName: "Jessica", lastName: "Jones"}
            expect(printFullName(name)).toEqual("Jessica Jones");
        });

        it("should return undefined if any of the arguments is not an object", () => {
            expect(printFullName("string")).toEqual(undefined);
            expect(printFullName(true)).toEqual(undefined);
            expect(printFullName(2)).toEqual(undefined);
        });

        it("should return undefined if the firstName or lastName properties are not provided", () => {
            expect(printFullName({firstName: "Jessica"})).toEqual(undefined);
            expect(printFullName({lastName: "Jones"})).toEqual(undefined);
        });

        it("should return undefined if the firstName or lastName properties are not strings", () => {
            expect(printFullName({firstName: 1, lastName: "Jones"})).toEqual(undefined);
            expect(printFullName({firstName: "Jessica", lastName: 1})).toEqual(undefined);
        });

    })    
})