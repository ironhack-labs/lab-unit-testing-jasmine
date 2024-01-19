// UNCOMMENT THE CODE BELOW TO START

describe("Iteration 4", () => {
    describe("Function - printFullName", () => {

        // Each `it` block represents 1 test. You can use the following as a template:
        it("should be defined", () => {
            expect(printFullName).toBeDefined();
        });

        // Each `it` block represents 1 test. You can use the following as a template:
        it("should take 1 argument which is an object", () => {
            expect(printFullName.length).toBe(1);
            expect(printFullName(300)).toEqual(undefined);
            expect(printFullName("lol")).toEqual(undefined);
        });

        // Each `it` block represents 1 test. You can use the following as a template:
        it("should return a string with the first name and the last name separated by a space", () => {
            expect(printFullName({firstName: `Alastair`, lastName: `Longmuir`})).toEqual(`Alastair Longmuir`);
            expect(printFullName({firstName: `Max`, lastName: `Mustermann`})).toEqual(`Max Mustermann`);
        });

        

        // Each `it` block represents 1 test. You can use the following as a template:
        it("should return undefined if argument is not provided", () => {
            expect(printFullName()).toEqual(undefined);
        });

        // Each `it` block represents 1 test. You can use the following as a template:
        it("should return undefined in case the firstName or lastName properties are not provided", () => {
            expect(printFullName({something: `a`, else: `b`})).toEqual(undefined);
        });

    })
})